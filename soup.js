const green= document.querySelectorAll(".svg2");
const greenhid=document.querySelectorAll(".hid");
const affirmation=document.querySelector(".svg4");

const merInfo= document.querySelector('.fa-angle-down');
const merInfohide= document.querySelectorAll('.hide');
const merInfohide2= document.querySelectorAll('.hide2');

const minInfo= document.querySelector('.fa-angle-up');



if (green) {
    for(var i = 0 ;i < green.length; i++){
        for(var i = 0 ; i<greenhid.length;i++ ){
        let greenMore = green[i];
        let greenhide= greenhid[i];
        console.log(green[i])
    greenMore.addEventListener("click",() => {
   
    greenhide.style.display = 'block';
    });
}}}

if(affirmation){
    affirmation.addEventListener('click',()=>{
        window.location.href='./cart.html';
    })
}

// if (merInfo) {
//     for(var i = 0 ;i < merInfo.length ; i++){
//         for(var i = 0 ; i< merInfohide ;i++ ){
//             for(var i = 0 ; i< merInfohide2 ;i++ ){

//         let moreInfo = merInfo [i];
//          let merInfohidden = merInfohide [i];
//           let merInfohidden2 = merInfohid2 [i];
//         console.log(green[i])

// moreInfo.addEventListener("click",()=>{
//     merInfohidden.style.display='block';
//     merInfohidden2.style.display='none';
// });
// }
// }}}

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