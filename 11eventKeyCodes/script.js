const main=document.querySelector('.main')

const event_key=document.querySelector('.event-key');

const event_key_code=document.querySelector('.event-key-code');

const event_code=document.querySelector('.event-code');

const btn=document.getElementById('keyBtn');

window.addEventListener('keydown',(e)=>{
    btn.style.display='none';
    main.style.display='block';
    event_code.innerHTML=e.code;
    event_key_code.innerHTML=e.keyCode;
    event_key.innerHTML=e.key;
})