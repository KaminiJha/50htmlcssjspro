const btns=document.querySelectorAll('.toggle-btn');
console.log(btns);

btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        btn.parentNode.classList.toggle('active');
    })
})