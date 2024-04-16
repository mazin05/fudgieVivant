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
        price:'***',
        desc:"½Kg, 1kg",
        img:"./brownie/brwnie.jpg",
    },
    {
        id:"B2",
        name:"Ultimate Choco",
        price:'***',
        desc:"½Kg, 1kg",
        img:"./brownie/ultimate.jpg",
    },
    {
        id:"B3",
        name:"Nutella",
        price:'***',
        desc:"½Kg, 1kg",
        img:"./brownie/nutella.jpg",
    },
    {
        id:"B4",
        name:"Peanut Butter (Stock Out)",
        price:'***',
        desc:"½Kg, 1kg",
        img:"./brownie/peanut.jpg",
    },
    {
        id:"B5",
        name:"Nuts",
        price:'***',
        desc:"On Process",
        img:"./brownie/nuts.jpg",
    },
    {
        id:"B6",
        name:"HazelNut",
        price:'***',
        desc:"Hungry! Order Now!!",
        img:"./brownie/hazelnut.jpg",
    },
    {
        id:"B7",
        name:"Coffee (Stock Out)",
        price:'***',
        desc:"Hungry! Order Now!!",
        img:"./brownie/coffee.jpg",
    },
    {
        id:"B8",
        name:"Brownie Bites",
        price:'***',
        desc:"Hungry! Order Now!!",
        img:"./brownie/bites.jpg",
    },
   
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
            <p>Available in Pieces, ½ Kg, 1kg (Prices Below)</p>       
          </div>
        </div>
    `
    }).join(""));
};

generateShop();


