const sounds=["applause","boo","gasp"];
const mainBox=document.querySelector('.main-box');
sounds.forEach(sound=>{
    const ele=document.createElement("div");
    ele.classList.add("box");
    ele.innerText=sound;
    ele.addEventListener("click",()=>{
        stopAllSong();
        document.getElementById(sound).play();
    })
    mainBox.appendChild(ele)

})
function stopAllSong()
{
    sounds.forEach(sound=>{
        document.getElementById(sound).pause();
    })
}
