const menu2 = document.querySelector(".hamb-menu");
const navbar= document.querySelector(".menu");

const green= document.querySelector(".svg3");
const yellow= document.querySelector(".sopp2");
const svgh= document.querySelector("svg")


menu2.addEventListener("click",() => {
    navbar.classList.toggle("change");

});


//     document.querySelector("#bt").onclick= function(){
//     window.location.href="soppa.html";

// };


//cart remove
let remover = document.querySelector(".remove")
console.log(remover);
for(var i=0 ; i<remover.length ; i++){
var removebtn = remover[i];
removebtn.addEventListener('click',function(event){
    event.target.parentElement.parentElement.remove()
})
}