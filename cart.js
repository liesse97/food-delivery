const remover = document.querySelectorAll(".fa-trash-alt");


for(var i=0 ; i < remover.length ; i++){
     let removebtn = remover[i]
removebtn.addEventListener('click',(event)=> {
    event.target.parentNode.parentNode.remove();
    updateSum()
})
}

function updateSum(){
const cartcontain= document.getElementsByClassName('rowtotal')[0];
const cartRow= cartcontain.getElementsByClassName('row');
let total=1;

for(var i= 0;i < cartRow.length;i++){
let cartRows=cartRow[i]
let prices=cartRows.getElementsByClassName('price')[0];
let quantity=cartRows.getElementsByClassName('cartQuant')[0];
let kronor= prices.innerText;
let quanti= quantity.value
total= total + (kronor * quanti);
}
document.querySelectorAll('.totalprice')[0].innerText= total;
}

//

let quantity=cartRows.getElementsByClassName('cartQuant');
for(var i=0; i<quantity.length;i++){
    let input=quantity[i]
    input.addeventListener('change,quatintychange')

}
