let products = document.querySelectorAll('.ProductCat:nth-child(odd)')
for(let i = 0 ; i< products.length ; i++){
    if(i % 2 != 0){
        console.log(products[i]);
        products[i].classList.add('odd')
        
    }
}