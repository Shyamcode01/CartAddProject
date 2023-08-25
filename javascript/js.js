 
// show menu bar 

let humber=document.querySelector('.humber');
let closeHumber=document.querySelector('.close-menu');
let menu=document.querySelector('.menu');

humber.addEventListener('click',()=>{
    menu.classList.add('menu-left');
})
closeHumber.addEventListener('click',()=>{
    menu.classList.remove('menu-left');
})

 

// card add 

let CartIcon=document.querySelector('.cart-add');
let cartClose=document.querySelector('.cart-close');
let CartSlide=document.querySelector('.container-cart')

CartIcon.addEventListener('click',()=>{
    CartSlide.classList.add('cart-right');
})
cartClose.addEventListener('click',()=>{
    CartSlide.classList.remove('cart-right');
})
 


// cart set 

// let CartShowQuntity=document.querySelector('.cart-quin');
// let ItemQuntityValue=document.querySelectorAll('.cart input');
// let AmountItem=document.querySelectorAll('.prise-cart');
// let TotalPrice=document.querySelector('.amount');



// ==================================================add card  coding here ==================================
 
 
let RemoveBtncart=document.getElementsByClassName('remove-cart');

let RemoveBtn=(ele)=>{
    let buttonClick=ele.target;
        let c=buttonClick.parentElement.remove();
        UpdateCart();
}
 for(let i=0;i<RemoveBtncart.length; i++){
    let ButtonCart=RemoveBtncart[i].addEventListener('click',RemoveBtn);    
};

let UpdateCart=()=>{
    let CartRow=document.getElementsByClassName('cart');
    let total=0;
    for(let i=0;i<CartRow.length;i++){
        let cart=CartRow[i];
        let priceELement=cart.getElementsByClassName('prise-cart')[0];
        let quentityElement=cart.getElementsByClassName('item-value')[0];
        let price=parseFloat(priceELement.innerText.replace('₹',' '))
        let quntity=quentityElement.value;
        total=total+ (price*quntity);
        let d=document.getElementsByClassName('cart-quin')[0].innerText=CartRow.length;
        // console.log(total) 
        
    }
    let c=document.getElementsByClassName('amount')[0].innerText="₹ " +total;
     
 }
 
//  UpdateCart();

 let QuntityChange=(e)=>{
let Change = e.target;
 if(isNaN(Change.value) || Change.value<=0){
    Change.value=1;
 }
 UpdateCart();
 
 }
 

     let c=document.getElementsByClassName('item-value');
     for(let i=0;i<c.length; i++){
         let inputClick=c[i].addEventListener('change',QuntityChange);
        }
    
  
 


//  card 
let AddToCard=(e)=>{
    let but=e.target.parentElement.parentElement;
    let ImageSrc=but.querySelectorAll('img')[0].src;
    let ProductTitle=but.getElementsByClassName('name')[0].innerText;
    let price=but.getElementsByClassName('priese')[0].innerText;

 AddItemCard(ImageSrc,ProductTitle,price);
 UpdateCart();
}
let Add=document.querySelectorAll('.add-card');
 Add.forEach(e=>{

      e.addEventListener('click',AddToCard);
 })


 let AddItemCard=(ImageSrc,ProductTitle,price)=>{
    let cardRow=document.createElement('div');
    let c=cardRow.classList.add('cart');
    let cards=document.getElementsByClassName('carts')[0];
    // let mainTitle=document.getElementsByClassName('product-cart');
    // for(let i=0; i <mainTitle.length;i++){
    //     if(mainTitle[i].innerText==ProductTitle){
    //         console.log('join')
    //         return;
    //     }
    //     else{

    //     }
    // }
    cardRow.innerHTML=`
    
    <img src="${ImageSrc}" alt="image">
    <span class="product-cart">${ProductTitle}</span>
    <input type="number"class="item-value"value="1">
    <span class="prise-cart">${price}</span>
    <i class="fa-solid fa-trash remove-cart"></i>
 
    `

    
    let d=cards.append(cardRow);
    
 cardRow.getElementsByClassName('remove-cart')[0].addEventListener('click',RemoveBtn);
 cardRow.getElementsByClassName('item-value')[0].addEventListener('change',QuntityChange);

 }


 
// slider container 

let slide=document.querySelectorAll('.slide');
 
let index=0;
let SlideShow=()=>{
    for(let i=0;i<slide.length;i++){
        slide[i].style.display="none";
    }
    index++;
    if(index>slide.length){index=1}

    slide[index-1].style.display="block";
    
    setTimeout(SlideShow,3000);
}

SlideShow();

 