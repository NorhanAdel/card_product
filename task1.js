
 




let left_btn=document.getElementById('left');
let right_btn =document.getElementById('right');
let right_item=document.getElementById('right-item');
let left_item=document.getElementById('left_item')
right_btn.addEventListener('click',function(){
    right_item.classList.toggle('right')
})

left_btn.addEventListener('click',function(){
    left_item.classList.toggle('left')
})
 var buy_btn=document.querySelectorAll('.content .buy');
 var card_product=document.querySelector('.card_product')
 var heading=document.querySelectorAll('.content h1');
 var total =0;
 name='';
 buy_btn.forEach(function(item){
item.onclick=function(){
    name=item.getAttribute('name');
    card_product.innerHTML+=`<p>${name}</p>`;
 
    total += +(item.getAttribute('price'));
         
     
}
 
 })
 

let cart_item=document.querySelector('.cart-item-container');
let cart=document.querySelector('#cart');
let total_price= document.querySelector('#price')
cart.onclick=()=>{
    total_price.innerHTML=total;
    console.log(total)
  card_product.classList.toggle('dis')
    search_form.classList.remove('active');
  
}
let search_form=document.querySelector('.search');
let search=document.querySelector('#search-btn');
search.onclick=()=>{
    search_form.classList.toggle('active');
     
    card_product.classList.remove('dis')
}


