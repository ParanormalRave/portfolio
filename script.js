const gotop = document.querySelector('#top');
const togglemode = document.querySelector('.togglemode');
const body = document.body;
const links = document.querySelectorAll('.link');
const iconcontaner = document.querySelector('.iconcontainer');
const sun = document.querySelector('#sun');
const moon = document.querySelector('#moon');
const logoname = document.querySelector('.logoname');
const view = document.querySelector('.view');
const navcontents = document.querySelector('.navsmallcontents');
const navsmall = document.querySelector('.nav-small');
const exit = document.querySelector('.fa-xmark');
const bars = document.querySelector('.fa-bars');
const image = document.querySelector(".image");
const circlehtml = document.querySelector('.html');
const statscontainer = document.querySelector('.statscontainer');


window.addEventListener('DOMContentLoaded', ()=>{
    image.classList.add("slidin");
    document.querySelectorAll('.aboutdet').forEach((about, t)=>{
        setTimeout(() => about.classList.add('animation') ,t*150);
    })
});


togglemode.addEventListener('click', ()=>{
    body.classList.toggle('darkmode');
    links.forEach(link =>{
        link.classList.toggle('lighttext')
    })
    iconcontaner.classList.toggle('black');
    moon.classList.toggle('display');
    togglemode.classList.toggle('togglemodedark')
    sun.classList.toggle('sun');
})

navsmall.addEventListener('click', ()=>{
    navcontents.classList.toggle('show');  
    exit.classList.toggle('showdisplay'); 
    bars.classList.toggle('display')

})


window.addEventListener("scroll", () => {
    if(window.scrollY > 100){
        gotop.classList.add('showtop');
    }else{
        gotop.classList.remove('showtop');
    }
});

logoname.addEventListener('click', ()=>{
    location.reload();
})
const numberhtml = document.querySelector('#numberhtml span');
let counter = 0;

statscontainer.addEventListener('click', ()=>{
    setInterval(()=>{
        if(counter == 85){
            clearInterval
            numberhtml.innerHTML = 85;
        }else{
            counter++;
            numberhtml.innerHTML = counter;   
        }
    }, 25)

    circlehtml.classList.toggle("skillanimate");
})

let counterC = 0;
const statscontainerc = document.querySelector('.statscontainerc');
const circlecss = document.querySelector('.css');
statscontainerc.addEventListener('click', ()=>{
    setInterval(()=>{
        if(counterC == 90){
            clearInterval
        }else{
            counterC++;
            document.querySelector("#numbercss").innerHTML = counterC + "%";   
        }
    }, 27)

    circlecss.classList.toggle("canimate");
})

let counterB = 0;
const statscontainerB = document.querySelector('.statscontainerB');
const circleboot = document.querySelector('.boot');
statscontainerB.addEventListener('click', ()=>{
    setInterval(()=>{
        if(counterB == 70){
            clearInterval
        }else{
            counterB++;
            document.querySelector("#numberboot").innerHTML = counterB + "%";   
        }
    }, 20)

    circleboot.classList.toggle("banimate");
})


let counterJ = 0;
const statscontainerJ = document.querySelector('.statscontainerJ');
const circlejs = document.querySelector('.js');
statscontainerJ.addEventListener('click', ()=>{
    setInterval(()=>{
        if(counterJ == 75){
            clearInterval
        }else{
            counterJ++;
            document.querySelector("#numberjs").innerHTML = counterJ + "%";   
        }
    }, 20)

    circlejs.classList.toggle("janimate");
})





