const clickx= document.getElementById('pencet');

clickx.addEventListener('click', function(){
  clickx.classList.toggle('Diam');
});

const navToggler = document.getElementById("backnav")

const hamburger = document.getElementById("menu")
console.log(hamburger)

console.log(navToggler)

hamburger.addEventListener('click', function(){
    navToggler.classList.toggle('navback');
  });

