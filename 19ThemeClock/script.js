const container=document.querySelector('.container')
const btn=document.querySelector('.modeSwitchBtn');

const hour=document.querySelector('.hour');
const minute=document.querySelector('.minute');
const second=document.querySelector('.second');

const timeNum=document.querySelector('.time-num');


const day=document.querySelector('.day');
const month=document.querySelector('.month');
const date=document.querySelector('.date');

const days=['Mon','Tues','Wed','Thurs','Fri','Sat','Sun']
const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

//btn eventListener
btn.addEventListener('click',()=>{
container.classList.toggle('night')
if(container.classList.contains('night'))
{
    btn.innerHTML='Day Mode';
}
else{
    btn.innerHTML='Night Mode';
}
})
//setDateDay
function setDateDayTime()
{
const today=new Date();
const tdate=today.getDate();
const tday=days[today.getDay()-1];
const tmonth=months[today.getMonth()];
const thour=today.getHours();
const tmin=today.getMinutes();
const tseconds=today.getSeconds();
const hr=thour>=13?thour%12:thour;
    day.innerText=tday;
    month.innerText=tmonth;
    date.innerText=tdate;
    const timePeriod=(thour>=12)?'P.M.':'A.M.'
    timeNum.innerHTML=`${hr} : ${tmin}    ${timePeriod}`;

   
    const hdeg=(360*hr)/12;
    const mdeg=(360*tmin)/60;
    const sdeg=(360*tseconds)/60;
    hour.style.transform=` translate(-50%,-100%) rotate(${hdeg}deg)`
    minute.style.transform=` translate(-50%,-100%) rotate(${mdeg}deg)`
    second.style.transform=` translate(-50%,-100%) rotate(${sdeg}deg)`
    
}


setDateDayTime()

setInterval(()=>{
    // window.location.reload()
    setDateDayTime()
}  
,1)




