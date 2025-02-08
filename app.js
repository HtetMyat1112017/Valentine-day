let textChange=document.getElementById("textid");
let img=document.querySelector("img");
let span=document.querySelector("span");
let btnNo=document.getElementById("btn-no");
let rect=textChange.getBoundingClientRect();
let btnRects=btnNo.getBoundingClientRect();
document.getElementById("btn-yes").addEventListener('click', function click(){
    textChange.style.display="none";
    img.style.display="block"

    if(true){
        span.innerHTML=""
    }
});

btnNo.addEventListener('mouseover',()=>{
   const i =Math.floor(Math.random() * (rect.width - btnRects.width)) + 1;

   const j =Math.floor(Math.random() * (rect.height - btnRects.height)) + 1;
   
   btnNo.style.left=i+'px';
   btnNo.style.top=j+'px';
   btnNo.style.right=i-'px';
   btnNo.style.bottom=j-'px';

   if(true){
        span.innerHTML="Bae Stop Doing This"
   }

});

