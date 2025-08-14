// Dark Mode Toggle
let toggleoff = document.querySelector("#toggleoff");
let toggleon = document.querySelector("#toggleon");
let mode = localStorage.getItem("mode");
let toggleButton = document.getElementById('theme-btn'); 

function updateMode(mode) {
  if (mode === 'darkmode') {
    localStorage.setItem('mode', 'darkmode');
    toggleoff.style.display = 'none';
    toggleon.style.display = 'block';
    document.body.classList.add("darkmode");
    document.body.classList.remove('lightmode');
    console.log('dark mode');
  } else {
    localStorage.setItem('mode', 'lightmode');
    toggleoff.style.display = 'block';
    toggleon.style.display = 'none';
    document.body.classList.remove("darkmode");
    document.body.classList.add('lightmode');
    console.log('light mode');
  }
}

toggleon.addEventListener('click', function () {
  updateMode('lightmode');
});

toggleoff.addEventListener('click', function () {
  updateMode('darkmode');
});

if (mode === 'darkmode') {
    updateMode('darkmode');
    
} else if (mode === 'lightmode'){
    updateMode('lightmode');

} else {
    updateMode('lightmode');
}

// =============== ADD SHADOW HEADER ===============

const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)


// =============== SWIPER ===============

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',
  spaceBetween: 16,
  grabCursor: true,


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 3550,
    disableOnInteraction: true,
  },

  breakpoints: {
    1220: {
      spaceBetween: 32,
    }
  }

});

// =============== SCROLL-TO ===============

const section = document.getElementById('section');
const scrollOffset = 25; // Adjust this value to match the height of your fixed header

function scrollAndOffset() {
  const offsetPosition = section.offsetTop - scrollOffset;
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth' // Add a smooth scroll effect for a better user experience
  });
}

// Call the scrollAndOffset function when the anchor link is clicked
document.getElementById('news').addEventListener('click', scrollAndOffset);
document.getElementById('cats').addEventListener('click', scrollAndOffset);
document.getElementById('faq').addEventListener('click', scrollAndOffset);
document.getElementById('resources').addEventListener('click', scrollAndOffset);

