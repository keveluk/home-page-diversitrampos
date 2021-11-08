const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu");

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}
hamburger.addEventListener("click", mobileMenu);

const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");
const partnerList = document.querySelector(".partner-list");
let slideCount =0;

function slideLeft() {    
    if(slideCount>=-600){
        slideCount+=-240;
        let move = slideCount.toString()+'px';
        partnerList.style.transform=`translateX(${move})`;
     }else{
         slideCount = 0 ;
         partnerList.style.transform=`translateX(0)`;
     }
    
}
function slideRight() {
   if(slideCount<=600){
        slideCount+=240;
        let move = slideCount.toString()+'px';
        partnerList.style.transform=`translateX(${move})`;
     }else{
         slideCount = 0 ;
         partnerList.style.transform=`translateX(0)`;
     }
}
leftArrow.addEventListener("click", slideLeft);
rightArrow.addEventListener("click", slideRight);