const textArea=document.getElementById('choices');
const tags=document.querySelector('.tags');

textArea.focus();

textArea.addEventListener('keyup',(e)=>{
    createTags(e.target.value);
    if(e.key === 'Enter')
    {
        setTimeout(()=>{
            e.target.value=''
        },10)
        randomPicker();

    }
})

function createTags(input)
{
    const choices=input.split(',').filter(el=>el.trim()!=='').map(el=>el.trim());
    tags.innerHTML='';

    choices.forEach(ch=>{
        const el=document.createElement('span');
        el.classList.add('tag');
        el.innerText=ch;
        
        tags.appendChild(el);
    })
}


function randomPicker()
{
    const times=20;
    const interval=setInterval(()=>{
        const randomTag=pickRandomTag()
        randomTag.classList.add('active')
        setTimeout(()=>{
            randomTag.classList.remove('active');
        },100)
    },100);
    setTimeout(()=>{
        clearInterval(interval);
        setTimeout(()=>{
            const randomTag=pickRandomTag();
            randomTag.classList.add('active');
        },100)
    },times*100);
}

function pickRandomTag()
{
    const tags=document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random()*tags.length)];
}