const btn=document.querySelector('#btn');

btn.addEventListener('click',
function (e){
    //position of click
    const x=e.clientX;
    const y=e.clientY;
    //posiotion of top and left of target i.e. btn
    const btnTop=e.target.offsetTop;
    const btnLeft=e.target.offsetLeft;
   //poisition of click inside btn
    const insideX=x-btnLeft;
    const insideY=y-btnTop;
  
    const circle=document.createElement('span');
    circle.classList.add('circle');
    circle.style.top=insideY+'px';
    circle.style.left=insideX+'px';

    this.appendChild(circle);
    setTimeout(()=>{
        circle.remove()
    },500);

}

)