const boxes=document.querySelectorAll('.box')

window.addEventListener('scroll',scrollBox);

scrollBox()

function scrollBox()
{
    const bottomHeight=(window.innerHeight/5)*4;
    boxes.forEach((box)=>{
        const boxTopHeight=box.getBoundingClientRect().top;
        if (boxTopHeight>bottomHeight)
        {
            box.classList.remove('show')
        }
        else{
            box.classList.add('show')
        }
    })
}