const product=[
{
id: 0,
image: './images/chair4.png',
title: 'Comfort Classic Chair', 
price: ₱7,000.00
},
{
id: 1,  
image: './images/p2.png',
title: 'Modern Lounge Chair ',
price: ₱6,000.00
},
{
id: 2,  
image: './images/chair3.png',
title: ' Comfort Classic Chair v2',
price:  ₱7,000.00
},
{
id: 3,  
image: './images/p4.png',
title: 'Leather Accent Chair',
price: ₱9,800.00
},
{
id: 4,  
image: './images/chair5.png',
title: 'Minimalist Gray Chair ',
price: ₱6,850.00 
},
{
id: 5,  
image: './images/chair2.png',
title: 'Standard Office Chair ',
price: ₱7,000.00 
},
]

const categories = [...new Set(product.map((item)=> {return item}))]

document.getElementById('searchBar').addEventListener('keyup', (e)=>{
	const searchData = e.target.value.toLowerCase(); 
	const filterData = categories.filter((item) => {
		return(
			item.title.toLocaleLowerCase().includes (searchData)
			)
		}) 
		displayItem(filterData)
});

const displayItem = (items) => {
	document.getElementById('root').innerHTML=items.map((item)=>{
		var {image, title, price} = item;
		return(
			<div class='box'>
				<div class='img-box'
					<img class= 'images' src=${image}></img>
				</div>
				<div class = 'bottom'>
					<p>${title}</p>
					<h2>$ ${price}.00</h2>
					<button> Add to cart </button>
				</div>

			)
	}).join('') 
};
displayItem(categories);