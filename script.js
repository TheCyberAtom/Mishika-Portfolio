const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show', entry.isIntersecting)
    })
},{
    threshold: 0.1,
})

const hiddenCards = document.querySelectorAll('.hidden');
hiddenCards.forEach(card => {
    observer.observe(card);
})


const menuBar = document.querySelector('.menu-bar');
const bar = document.querySelector('.bar');
const menu = document.querySelector('.navigation');
const navList = document.querySelectorAll('.navigation li');
const themeParent = document.querySelector('.theme-parent');
const theme = document.querySelector('.theme');


menuBar.addEventListener('click', ()=>{
    setTimeout(()=> {
        bar.classList.toggle('clicked');
        menu.classList.toggle('navigation-active');
    },100)
})

function removeActiveNav(){
    navList.forEach(nav => nav.classList.remove('active'));
}

navList.forEach(nav => nav.addEventListener('click', ()=>{
    removeActiveNav();
    nav.classList.add('active');
    setTimeout(function(){
        bar.classList.toggle('clicked');
        menu.classList.toggle('navigation-active');
    },500);
}))

theme.addEventListener('click', () => {
    theme.classList.toggle('active');
});

const themeColor = document.querySelectorAll('.color li');
themeColor.forEach(color => {
    color.addEventListener('click', ()=>{
        if(color.id === 'yellow'){
            document.documentElement.style.setProperty('--primary-color', '#FFB400');
        } 
        if(color.id === 'pink'){
            document.documentElement.style.setProperty('--primary-color', '#ff2ffc');
        } 
        if(color.id === 'green'){
            document.documentElement.style.setProperty('--primary-color', '#00ff95');
        } 
        if(color.id === 'skyblue'){
            document.documentElement.style.setProperty('--primary-color', '#00fffb');
        }
    })
})
