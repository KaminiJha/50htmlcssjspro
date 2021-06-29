const counters=document.querySelectorAll('.counter');

counters.forEach(counter=>{
    // counter.innerText='0';
    const updateCounter=()=>{
        const updateTarget=+counter.getAttribute('data-target');
        //+ chnages string to number
        const c=+counter.innerText;
        const inc=updateTarget/300;
        
        if(c<updateTarget)
        {
            counter.innerText=`${Math.ceil( c + inc)}`;
            setTimeout(updateCounter,1
                );
        }
        else{
            counter.innerText=updateTarget;
        }
    }
     updateCounter()
})
