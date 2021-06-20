const labels=document.querySelectorAll('.form-control label');
labels.forEach(label=>{
    label.innerHTML=label.innerText.split('').map((ele,idx)=>`<span style="transition-delay:${idx*50}ms">${ele}</span>`).join('');
})
