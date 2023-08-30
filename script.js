const productView=document.querySelector('.product-view');
const cartDisplay=document.querySelector('.card');
const addCart=document.querySelector('.cart-item');
const cartMsg=document.querySelector('.cart-msg');
let productQuantity=document.querySelector('.quantity');
let count=1;
productQuantity.textContent=count;
const cartBtn=document.querySelector('.cart-btn');

const cartDisplayLap=document.querySelector('#card');
const addCartDisplay=document.querySelector('#cart-item');
const cartMsgLg=document.querySelector('#cart-msg');

const notifyBadge=document.querySelector('#notify-badge');


console.log(window.innerWidth);
function product1(){
    productView.style.backgroundImage="url('images/image-product-1.jpg')";
}
function product2(){
    productView.style.backgroundImage="url('images/image-product-2.jpg')";
}
function product3(){
    productView.style.backgroundImage="url('images/image-product-3.jpg')";
}
function product4(){
    productView.style.backgroundImage="url('images/image-product-4.jpg')";
}

// card display
function displayCart(){
   
    cartDisplay.style.display="block";
    cartDisplayLap.style.display="block";
    cartDisplayLap.classList.add("d-md-block");
    cartDisplayLap.classList.add("d-none");

}
function closeCart(){
    cartDisplay.style.display="none";
    // cartDisplayLap.style.display="none";
    cartDisplayLap.classList.remove("d-md-block");
    notifyBadge.style.display="none";
}

function addToCart(){
   addCart.style.display="block";
   addCartDisplay.style.display="block";
   cartMsg.textContent="";
   cartMsgLg.textContent="";
   cartBtn.textContent="Added";
   cartBtn.style.opacity="0.7";
//    cartBtn.setAttribute("disable","disabled");
   let cartCount=document.querySelector('.count');
   cartCount.textContent=productQuantity.textContent;
   document.querySelector('#count').textContent=productQuantity.textContent;
   let totalPrice= eval("125" + "*" +`${cartCount.textContent}`);
   document.querySelector('.cart-price').textContent="$"+totalPrice+".00";
   document.querySelector('#cart-price').textContent="$"+totalPrice+".00";
   notifyBadge.style.display="block";
   notifyBadge.textContent=productQuantity.textContent;
}
function deleteCartItem(){
   addCart.style.display="none";
   addCartDisplay.style.display="none";
   addCartDisplay.classList.remove("d-md-block");
   cartMsg.textContent="your cart is empty";
   cartMsgLg.textContent="your cart is empty";
   cartBtn.textContent="Add To Cart";
   cartBtn.style.opacity="1";
   notifyBadge.style.display="none";
}



function decNoOfItem(){
  if(count>0){ 
    count--;
    productQuantity.textContent=count;
  }
}
function incNoOfItem(){
    count++;
    productQuantity.textContent=count;
}
