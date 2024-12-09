
let heroBackGround=document.querySelector(".hero");

setInterval(function(){

    heroBackGround.style.backgroundImage="url(./Images/bg-light.jpg)"

    setTimeout(function(){
        heroBackGround.style.backgroundImage="url(./Images/bg.jpg)"
    },1000);

},2200);