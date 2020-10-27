const menu2 = document.querySelector(".hamb-menu");
const navbar= document.querySelector(".menu");

const green= document.querySelector(".svg2");

const merInfo= document.querySelector('.fa-angle-down');
const minInfo= document.querySelector('.fa-angle-up');







menu2.addEventListener("click",() => {
    navbar.classList.toggle("change");

});

if (green) {
    green.addEventListener("click",() => {
    // setTimeout(()=> {
    //    document.querySelector('.hid').style.display = 'block';}, 500)   
    document.querySelector('.hid').style.display = 'block';
    });
}
if (merInfo) {
merInfo.addEventListener("click",()=>{
    document.querySelector('.hide2').style.display='block';
    document.querySelector('.hide').style.display='none';
});
}
if (minInfo) {
minInfo.addEventListener("click",()=>{
    document.querySelector('.hide').style.display='block';
    document.querySelector('.hide2').style.display='none';

});
}
// console.log(remover)
// for(var i=0 ; i < remover.length ; i++){
// var removebtn = remover[i]

// remover.addEventListener("click",()=>{
//     console.log('event');
//     event.target.parentNode.remove()
// });

