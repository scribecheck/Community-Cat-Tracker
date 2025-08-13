// Dark Mode Toggle
let toggleoff = document.querySelector("#toggleoff");
let toggleon = document.querySelector("#toggleon");
let mode = localStorage.getItem("mode");

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

/*=============== ADD SHADOW HEADER ===============*/

const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)


/*=============== SWIPER ===============*/

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

