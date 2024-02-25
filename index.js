(function()
{
  if( window.localStorage )
  {
    if( !localStorage.getItem('firstLoad') )
    {
      localStorage['firstLoad'] = true;
      window.location.reload();
    }  
    else
      localStorage.removeItem('firstLoad');
  }
})();

// ---------------------------------------------------------
let shop=document.getElementById('shop');

let shopItemData=[
    {
        id:"B1",
        name:"Brownie",
        price:200,
        desc:"Hungry! Order Now!!",
        img:"./img/br-img-1.jpg",
    },
    {
        id:"B2",
        name:"Brownie",
        price:200,
        desc:"Hungry! Order Now!!",
        img:"./img/br-img-2.jpg",
    },
    {
        id:"B3",
        name:"Brownie",
        price:200,
        desc:"Hungry! Order Now!!",
        img:"./img/br-img-3.jpg",
    },
    {
        id:"B4",
        name:"Brownie",
        price:200,
        desc:"Hungry! Order Now!!",
        img:"./img/br-img-2.jpg",
    }
];

let cart=[]

let generateShop=()=>{
    return (shop.innerHTML= shopItemData.map((x)=>{
        let{id,name,price,desc,img}=x;
        return `
    <div class="item">
          <img src="${img}" width="200px" alt="">
          <div class="details">
            <h3>${name}</h3>
            <p>${desc}</p>
          <div class="price-quantity">
            <h3>Rs.${price}</h3>
          </div>
          </div>
        </div>
    `
    }).join(""));
};

generateShop();


