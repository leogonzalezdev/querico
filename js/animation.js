/*
   ? Change color of the navbar when scrolling the page 
   * Using ternary operator 
*/
window.addEventListener('scroll',() => {
    const scrolled = window.scrollY;
    var navbar = document.getElementById('header');
    (scrolled >= 450) ? navbar.style.background = "#1c1c1c" : navbar.style.background = "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)";
});

/*
const openModal = document.querySelector('#openModal');
openModal.addEventListener('click', ()=>{
  const openModal = document.querySelector('.container-modal');
  modal.style.transform = "translateY(-200%)";
});


const closeModal = document.querySelector('close');
closeModal.addEventListener('click', ()=>{
  const modal = document.querySelector('.container-modal');
  modal.style.transform = "translateY(-200%)";
});*/
/*
 ? Transitions 
*/
window.sr = ScrollReveal();
  sr.reveal('.header', {
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
  });

  sr.reveal('.home', {
    duration: 1000,
    origin: 'bottom',
    distance: '-50px'
  });
  sr.reveal('#home-title',{
    duration:2000,
    origin:'left',
    distance: '-200px'
  });
  sr.reveal('#home-welcome',{
    duration:2000,
    origin:'left',
    distance: '-200px'
  });
  sr.reveal('#btn-home',{
    duration:2000,
    origin:'left',
    distance: '-200px'
  });

  sr.reveal('.card', {
    duration: 1000,
    origin: 'top',
    distance: '-100px'
  });
  sr.reveal('#promos-title', {
    duration: 2000,
    origin: 'bottom',
    distance: '-100px'
  });
  sr.reveal('#products', {
    duration: 2000,
    origin: 'top',
    distance: '-100px'
  });
  sr.reveal('.items', {
    duration: 2000,
    origin: 'top',
    distance: '-100px'
  });
/*
 ? Responsive Menú
*/
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () =>{
  const navbar = document.getElementById('navbar');
  if(!menuOpen){
    menuBtn.classList.add('open');
    menuOpen = true;
    navbar.style.visibility = "visible";
    navbar.style.opacity = "1";
    navbar.style.position = "static";
  }else{
    menuBtn.classList.remove('open');
    menuOpen = false;
    navbar.style.visibility = "hidden";
    navbar.style.opacity = "0";
    navbar.style.position = "absolute";
  }
});



