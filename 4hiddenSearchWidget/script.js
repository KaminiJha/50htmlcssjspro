const btn=document.querySelector('.btn');
const search=document.querySelector('.hidden-search')
const input=document.getElementById('input')
btn.addEventListener('click',()=>{
    search.classList.toggle('active')
    input.focus();
})