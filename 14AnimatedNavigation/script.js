const btn=document.querySelector('.toggle-btn');
const nav=document.getElementById('nav');

btn.addEventListener('click',()=>{
    nav.classList.toggle('active')
})