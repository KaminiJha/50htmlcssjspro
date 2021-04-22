const loadingText =document.querySelector('.loading-number');
const main=document.querySelector('.main');

let loading=0

let int =setInterval(blurLoading,30);

function  blurLoading()
{loading++;
    bluramt=(100-loading);
    
    main.style.filter=`blur(${bluramt}px)`;
    
    if (loading>99){
        clearInterval(int)
    }
    loadingText.innerText=`${loading}%`
    loadingText.style.opacity=(100-loading)/100;

    
}