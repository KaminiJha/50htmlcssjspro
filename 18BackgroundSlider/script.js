const slides=document.querySelectorAll('.slide');
const body=document.body;
var currIdx=0;
const len=slides.length;
const leftArw=document.querySelector('.left-arrow');
const rightArw=document.querySelector('.right-arrow');

leftArw.addEventListener('click',()=>{
    if(currIdx==0)
    {
        currIdx=len-1;
    }
    else{
        currIdx=currIdx-1;
    }
    changeSlide(currIdx);
})

rightArw.addEventListener('click',()=>{
    if(currIdx==3)
    {
        currIdx=0;
    }
    else{
        currIdx=currIdx+1;
    }
    changeSlide(currIdx)
})

function changeSlide(idx)
{
    slides.forEach((el)=>{
        el.classList.remove('active');
    })
    slides[idx].classList.add('active');
    setBodyBg()
}
function setBodyBg()
{
    body.style.backgroundImage=slides[currIdx].style.backgroundImage;
}