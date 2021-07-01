const canvas=document.getElementById('canvas')
const ctx = canvas.getContext('2d');
let x
let y
const color='black'
const size=10
const idPressed=false;

canvas.addEventListener('mousedown',(e)=>{
    isPressed=true;
    x=e.offsetX;
    y=e.offsetY;

})

canvas.addEventListener('mouseup',(e)=>{
    isPressed=false;
    x=undefined;
    y=undefined;
})

canvas.addEventListener('mousemove',(e)=>{
    if(isPressed===true)
    {
        const x2=e.offsetX;
        const y2=e.offsetY;
        drawCircle(x2,y2);
        drawLine(x,y,x2,y2)
        x=x2;
        y=y2;
    }
})


function drawRectangele(x2,y2)
{

    ctx.fillRect(x, y, x2, y2);
}

function drawCircle()
{
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2); 
    ctx.fillStyle=color;
    ctx.fill()
}
function drawLine(x1,y1,x2,y2)
{
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle=color;
    ctx.lineWidth=size*2;
    ctx.stroke();
}

