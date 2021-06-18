var left=document.querySelector('.container1');
var right=document.querySelector('.container2');

left.addEventListener('mouseenter',()=>left.classList.add('hover-left'));
left.addEventListener('mouseleave',()=>left.classList.remove('hover-left'));
right.addEventListener('mouseenter',()=>right.classList.add('hover-right'));
right.addEventListener('mouseleave',()=>right.classList.remove('hover-right'));
