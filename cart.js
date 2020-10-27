let remover = document.querySelector(".fa-trash-alt");
// let tak= document.querySelector(".take-away")

// for(var i=0 ; i < remover.length ; i++){
// var removebtn = remover[i]
remover.addEventListener('click',(event)=> {
    console.log(remover)
    event.target.parentNode.parentNode.remove();
})
