let products = document.querySelectorAll('.ProductCat:nth-child(odd)')
for(let i = 0 ; i< products.length ; i++){
    if(i % 2 != 0){
        console.log(products[i]);
        products[i].classList.add('odd')
        
    }
}
let titles = document.querySelectorAll('.ProductCat .TitleBox p')
let cats = document.querySelectorAll('.ProductCat')
let i =1
for(let i =0;i<cats.length;i++){
    titles[i].innerHTML = `0${i+1}`;
}
