const togglemode = document.querySelector('.togglemode');
const body = document.body;
const links = document.querySelectorAll('.link');
const iconcontaner = document.querySelector('.iconcontainer');
const sun = document.querySelector('#sun');
const moon = document.querySelector('#moon');
const logoname = document.querySelector('.logoname');
const view = document.querySelector('.view');


togglemode.addEventListener('click', ()=>{
    body.classList.toggle('darkmode');
    links.forEach(link =>{
        link.style.color === 'white'? link.style.color = '#0d1b2aef': link.style.color = 'white';
    })
    iconcontaner.classList.toggle('sun');
    moon.classList.toggle('display');
    togglemode.classList.toggle('togglemodedark')
    sun.style.display === 'none'? sun.style.display = 'block': sun.style.display = 'none';
    sun.style.display === 'hidden'? sun.style.visibility = 'visible': sun.style.visibility = 'hidden';
})

logoname.addEventListener('click', ()=>{
    location.reload();
})