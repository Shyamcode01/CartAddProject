


// category card 
let CategoryCard=[
    {
        id:1,
        image:'photo/cloth/m-shirt (2).jpg',
        name:"Man",
        link:'Male.html',

    },
    {
        id:2,
        image:'photo/cloth/girl.jpg',
        name:"Female",
        link:'Female.html',

    },
        {
        id:3,
        image:"photo/stor.jpg",
        name:'Store',
        link:'store.html',
        },

];
let CategoryItem=document.getElementsByClassName('category-box')[0];
 
try{
    let CategoryFunction=()=>{
        CategoryCard.map(ele=>{
            let{image,name,link}=ele;

            CategoryItem.innerHTML+=`
            <div class="Category-card"data-aos="zoom-in-up" data-aos-duration="2000">
                <img src="${image}" alt="photo">
                <p class="title-view">&leftarrow; ${name} &RightArrow;</p>
                <div class="btn-star">
                    <span class="star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
    
                    </span>
                    <button class="btn1 More"><a href="${link}">View More</a></button>
                </div>

               

            </div>
            `
        })
    }
    CategoryFunction();
}catch(error){
    console.warn('Category card is error ');
}









// card product item 
let Card=[
    {
        id:1,
        product:'T-Shirt (Man)',
        paragraf:'a lightweight, usually knitted, .',
        category:'T1',
        prise:250,
        image:'photo/cloth/t-shirt (1).jpg'
    },
    {
        id:2,
        product:'T-Shirt (Man)',
        paragraf:'a lightweight, usually knitted, pullover  rt or outer garment.',
        category:'T2',
        prise:250,
        image:'photo/cloth/t-shirt (2).jpg'
    },
    {
        id:3,
        product:'T-Shirt (Man)',
        paragraf:'a lightweight, usually knitt undershirt or outer garment.',
        category:'T3',
        prise:280,
        image:'photo/cloth/t-shirt (3).jpg'
    },
    {
        id:4,
        product:'T-Shirt (Man)',
        paragraf:'a lightweight, usually knitted, pullover shirt, c  as an undershirt or outer garment.',
        category:'T4',
        prise:290,
        image:'photo/cloth/t-shirt (4).jpg'
    },
    {
        id:5,
        product:'T-Shirt (Man)',
        paragraf:'a lightweight, usually knitted, pullover shi rn as an undershirt or outer garment.',
        category:'T5',
        prise:250,
        image:'photo/cloth/t-shirt (5).jpg'
    },
    {
        id:6,
        product:'T-Shirt (Man)',
        paragraf:'a lightweight, usually knitted, pullover shirt, close s an undershirt or outer garment.',
        category:'T6',
        prise:350,
        image:'photo/cloth/t-shirt (6).jpg'
    },
    {
        id:7,
        product:'T-Shirt (Girl)',
        paragraf:'a lightweight, usually knitted, pullover shirt, close s an undershirt or outer garment.',
        category:'T7',
        prise:450,
        image:'photo/cloth/g-tshirt (1).jpg'
    },
    {
        id:8,
        product:'kurti (Girl)',
        paragraf:'a lightweight, usually knitted, pullover shirt, close s an undershirt or outer garment.',
        category:'T8',
        prise:650,
        image:'photo/cloth/g-tshirt (2).jpg'
    },
    {
        id:9,
        product:'Shirt (Man)',
        paragraf:'a lightweight, usually knitted, pullover shirt, close s an undershirt or outer garment.',
        category:'T9',
        prise:550,
        image:'photo/cloth/m-shirt (1).jpg'
    },
    {
        id:10,
        product:'Shirt (Man)',
        paragraf:'a lightweight, usually knitted, pullover shirt, close s an undershirt or outer garment.',
        category:'T10',
        prise:580,
        image:'photo/cloth/m-shirt (2).jpg'
    },
    {
        id:11,
        product:'Shirt (Man)',
        paragraf:'a lightweight, usually knitted, pullover shirt, close s an undershirt or outer garment.',
        category:'T11',
        prise:650,
        image:'photo/cloth/m-shirt (3).jpg'
    },
    {
        id:12,
        product:'Shoes (Man)',
        paragraf:'a lightweight, usually knitted, pullover shirt, close s an undershirt or outer garment.',
        category:'T12',
        prise:350,
        image:'photo/cloth/shoes (1).jpg'
    },
    {
        id:13,
        product:'Shoes (Man) snaker',
        paragraf:'a lightweight, usually knitted, pullover shirt, close s an undershirt or outer garment.',
        category:'T13',
        prise:250,
        image:'photo/cloth/shoes (2).jpg'
    },
    {
        id:14,
        product:'Shoes (Man) snaker',
        paragraf:'a lightweight, usually knitted, pullover shirt, close s an undershirt or outer garment.',
        category:'T14',
        prise:480,
        image:'photo/cloth/shoes (4).jpg'
    },
    {
        id:15,
        product:'Hand watch',
        paragraf:'a lightweight, usually knitted, pullover shirt, close s an undershirt or outer garment.',
        category:'T15',
        prise:180,
        image:'photo/cloth/watch (1).jpg'
    },
    {
        id:17,
        product:'Hand watch',
        paragraf:'a lightweight, usually knitted, pullover shirt, close s an undershirt or outer garment.',
        category:'T17',
        prise:280,
        image:'photo/cloth/watch (2).jpg'
    },
    {
        id:18,
        product:'Hand watch',
        paragraf:'a lightweight, usually knitted, pullover shirt, close s an undershirt or outer garment.',
        category:'T18',
        prise:220,
        image:'photo/cloth/watch (3).jpg'
    },

]

 

// fetch data 
// fetch('https://fakestoreapi.com/products')
// .then(res => res.json())
//  .then((data)=>{
//      let product=data;
       
//          getFunction(product);
//          getPreview(product);
       
//  })

 

let cardbox=document.querySelector('.cards');
Card.map(item=>{
     let {id,product,category,prise,image}=item;
     cardbox.innerHTML+=`
     <div class="card" data-name="${category}"data-aos="fade-up" data-aos-duration="2000">
     <img src="${image}" alt="">
     <span class="name">${product}</span>

     <div class="star-prise">
         <span class="star">
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-solid fa-star"></i>
             <i class="fa-regular fa-star"></i>
         </span>
         <span class="priese">&#8377; ${prise}</span>
     </div>
     <div class="add-buy">
         <i class="fa-solid fa-cart-plus add-card"></i>
         <button class="view-more">View More</button>
     </div>
 </div>

     `
})



 

// card product preview item 

 

// let getFunction=(product)=>{
//      product.map(ele=>{
//         let{category,image,price,description}=ele;
        
//         cardbox.innerHTML+=`
//         <div class="card" data-name="${ele.title}"data-aos="fade-up" data-aos-duration="2000">
//              <img src="${ele.image}" alt="">
//              <span class="name">${ele.category}</span>
        
//              <div class="star-prise">
//                  <span class="star">
//                  <i class="fa-solid fa-star"></i>
//                      <i class="fa-solid fa-star"></i>
//                      <i class="fa-solid fa-star"></i>
//                      <i class="fa-regular fa-star"></i>
//                  </span>
//                  <span class="priese">&#8377; ${ele.price}</span>
//               </div>
//           <div class="add-buy">
//                  <i class="fa-solid fa-cart-plus add-card"></i>
//              <button class="view-more">View More</button>
//              </div>
//           </div>
        
//         `
//      })
// }
 
 

let PreviewProduct=[
    {
        id:1,
        product:'T-Shirt (Man)',
        paragraf:'a lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
        category:'T1',
        prise:250,
        image:'photo/cloth/t-shirt (1).jpg'
    },
    {
        id:2,
        product:'T-Shirt (Man)',
        paragraf:'a lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
        category:'T2',
        prise:250,
        image:'photo/cloth/t-shirt (2).jpg'
    },
    {
        id:3,
        product:'T-Shirt (Man)',
        paragraf:'a lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
        category:'T3',
        prise:280,
        image:'photo/cloth/t-shirt (3).jpg'
    },
    {
        id:4,
        product:'T-Shirt (Man)',
        paragraf:'a lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
        category:'T4',
        prise:290,
        image:'photo/cloth/t-shirt (4).jpg'
    },
    {
        id:5,
        product:'T-Shirt (Man)',
        paragraf:'a lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
        category:'T5',
        prise:250,
        image:'photo/cloth/t-shirt (5).jpg'
    },
    {
        id:6,
        product:'T-Shirt (Man)',
        paragraf:'a lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.',
        category:'T6',
        prise:350,
        image:'photo/cloth/t-shirt (6).jpg'
    },
    {
        id:7,
        product:'T-Shirt (Girl)',
        paragraf:'a lightweight, usually knitted, pullover shirt, close s an undershirt or outer garment.',
        category:'T7',
        prise:450,
        image:'photo/cloth/g-tshirt (1).jpg'
    },
    {
        id:8,
        product:'kurti (Girl)',
        paragraf:'a lightweight, usually knitted, pullover shirt, close s an undershirt or outer garment.',
        category:'T8',
        prise:650,
        image:'photo/cloth/g-tshirt (2).jpg'
    },
    {
        id:9,
        product:'Shirt (Man)',
        paragraf:'a lightweight, usually knitted, pullover shirt, close s an undershirt or outer garment.',
        category:'T9',
        prise:550,
        image:'photo/cloth/m-shirt (1).jpg'
    },
    {
        id:10,
        product:'Shirt (Man)',
        paragraf:'a lightweight, usually knitted, pullover shirt, close s an undershirt or outer garment.',
        category:'T10',
        prise:580,
        image:'photo/cloth/m-shirt (2).jpg'
    },
    {
        id:11,
        product:'Shirt (Man)',
        paragraf:'a lightweight, usually knitted, pullover shirt, close s an undershirt or outer garment.',
        category:'T11',
        prise:650,
        image:'photo/cloth/m-shirt (3).jpg'
    },
    {
        id:12,
        product:'Shoes (Man)',
        paragraf:'a lightweight, usually knitted, pullover shirt, close s an undershirt or outer garment.',
        category:'T12',
        prise:350,
        image:'photo/cloth/shoes (1).jpg'
    },
    {
        id:13,
        product:'Shoes (Man) snaker',
        paragraf:'a lightweight, usually knitted, pullover shirt, close s an undershirt or outer garment.',
        category:'T13',
        prise:250,
        image:'photo/cloth/shoes (2).jpg'
    },
    {
        id:14,
        product:'Shoes (Man) snaker',
        paragraf:'a lightweight, usually knitted, pullover shirt, close s an undershirt or outer garment.',
        category:'T14',
        prise:480,
        image:'photo/cloth/shoes (4).jpg'
    },
    {
        id:15,
        product:'Hand watch',
        paragraf:'A wristwatch is designed to be worn around the wrist, attached by a watch strap or other type of bracelet, including metal bands, leather straps, or any other kind of bracelet. A pocket watch is designed for a person to carry in a pocket, often attached to a chain.',
        category:'T15',
        prise:180,
        image:'photo/cloth/watch (1).jpg'
    },
    {
        id:17,
        product:'Hand watch',
        paragraf:'A wristwatch is designed to be worn around the wrist, attached by a watch strap or other type of bracelet, including metal bands, leather straps, or any other kind of bracelet. A pocket watch is designed for a person to carry in a pocket, often attached to a chain.',
        category:'T17',
        prise:280,
        image:'photo/cloth/watch (2).jpg'
    },
    {
        id:18,
        product:'Hand watch',
        paragraf:'A wristwatch is designed to be worn around the wrist, attached by a watch strap or other type of bracelet, including metal bands, leather straps, or any other kind of bracelet. A pocket watch is designed for a person to carry in a pocket, often attached to a chain.',
        category:'T18',
        prise:220,
        image:'photo/cloth/watch (3).jpg'
    },

]


let PreviewBox=document.querySelector('.preview-container');

// let getPreview=(procuct)=>{
//      procuct.map(pre=>{
       

//         PreviewBox.innerHTML+=`
//         <div class="preview"data-target="${pre.title}">
//     <div class="preview-img" >
//     <img src="${pre.image}" alt="">
//     </div>
//     <div class="text-preview">
//     <h4 class="product-title name">${pre.category}</h4>
//     <span class="prise priese">&#8377; ${pre.price}</span>
//     <br>
//     <span> Size</span> <select>
//     <option>--Select Size--</option>
//     <option>M</option>
//     <option>L</option>
//     <option>X</option>
//     <option>XL</option>
//     <option>XXL</option>
//     </select>
//     <p class="paragraf">${pre.description}</p>
//     <span class="star">
//     <i class="fa-solid fa-star"></i>
//     <i class="fa-solid fa-star"></i>
//     <i class="fa-solid fa-star"></i>
//     <i class="fa-regular fa-star"></i>
//     </span>
//     <br>
//     <button class=" btn1 Buy">Buy Now</button>
//     <button  class="btn1 add-card">Add Card</button>
    
//     </div>
//     </div>
//         `
         
//      })

// }
 
 

PreviewProduct.map(item=>{
    let{product,paragraf,category,prise,image}=item;
    PreviewBox.innerHTML+=`
    <div class="preview"data-target="${category}">
    <div class="preview-img" >
    <img src="${image}" alt="">
    </div>
    <div class="text-preview">
    <h4 class="product-title name">${product}</h4>
    <span class="prise priese">&#8377; ${prise}</span>
    <br>
    <span> Size</span> <select>
    <option>--Select Size--</option>
    <option>M</option>
    <option>L</option>
    <option>X</option>
    <option>XL</option>
    <option>XXL</option>
    </select>
    <p class="paragraf">${paragraf}</p>
    <span class="star">
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-regular fa-star"></i>
    </span>
    <br>
    <button class=" btn1 Buy">Buy Now</button>
    <button  class="btn1 add-card">Add Card</button>
    
    </div>
    </div>
    `
    
})

let previewCard=PreviewBox.querySelectorAll('.preview');
 
let pageClose=document.querySelector('.off-page');
// console.log(previewCard)

let d=document.querySelectorAll('.cards .card').forEach(item=>{
   item.onclick=()=>{
    PreviewBox.style.display="flex"
    let name=item.getAttribute('data-name');
    
    
    previewCard.forEach(data=>{
        let target=data.getAttribute('data-target');
        console.log(target)
          
       if(name==target){
        data.classList.add('active-product');
       }
     })
   }
})

 pageClose.onclick=()=>{
    previewCard.forEach(off=>{
        off.classList.remove('active-product');
        PreviewBox.style.display="none"
        

    })
    
 }



 
 