const scups=document.querySelectorAll('.small-cup');

const liter=document.querySelector('.liters');

const percentage=document.querySelector('.percentage');

const remained=document.querySelector('.remained');

updateBigCup();

scups.forEach((cup,idx)=>{
cup.addEventListener('click',()=>highlightCup(idx))
})

function highlightCup(idx)
{
    // for(var i=0;i<=idx;i++)
    // {
    //     scups[i].classList.add('full');
    // }
    if(scups[idx].classList.contains('full') && !scups[idx].nextElementSibling.classList
    .contains('full'))
    {
        idx=idx-1;
    }

    scups.forEach((cup,idx2)=>{
        if(idx2<=idx)
        {
            cup.classList.add('full')
        }
        else{
            cup.classList.remove('full');
        }
    })

    updateBigCup()
}

function updateBigCup()
{
    const fullSmallCups=document.querySelectorAll('.full');
    const length=fullSmallCups.length;
    const fillLen=Math.floor((length*100)/8);
    const remLen=100-fillLen;
    percentage.innerText=`${fillLen}%`;
    percentage.style.height=`${fillLen}%`;
    liter.innerText=`${remLen}%`;
    remained.style.height=`${remLen}%`;
}