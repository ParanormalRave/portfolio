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