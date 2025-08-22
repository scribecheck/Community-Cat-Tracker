
// =============== Dark Mode Toggle ===============
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



// =============== SWIPER ===============

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: 'auto',
  spaceBetween: 32,
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
      spaceBetween: 15,
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



// =============== Language Button ===============

// Function to fetch language data
async function fetchLanguageData(lang) {
  const response = await fetch(`assets/json/${lang}.json`);
  return response.json();
}

// Function to set the language preference
function setLanguagePreference(lang) {
  localStorage.setItem("language", lang);
  location.reload();
}

// Function to update content based on selected language
function updateContent(langData) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (element.tagName === "INPUT" && key === "placeholder_text") {
      // If the element is an input with placeholder_text attribute, set placeholder
      element.placeholder = langData[key];
    } else {
      // For other elements, set text content
      //element.textContent = langData[key];
      element.innerHTML = langData[key];
    }
  });
}

// Function to change language
async function changeLanguage(lang) {
    await setLanguagePreference(lang);
    
    const langData = await fetchLanguageData(lang);
    updateContent(langData);
  
    toggleJapaneseStylesheet(lang); // Toggle Japanese stylesheet
}

// Function to toggle Japanese stylesheet based on language selection
function toggleJapaneseStylesheet(lang) {
  const head = document.querySelector("head");
  const link = document.querySelector("#styles-link");

  if (link) {
    head.removeChild(link); // Remove the old stylesheet link
  } else if (lang === "ja") {
    const newLink = document.createElement("link");
    newLink.id = "styles-link";
    newLink.rel = "stylesheet";
    newLink.href = "./assets/css/styles-ja.css"; // Path to Japanese stylesheet
    head.appendChild(newLink);
  }
}



// Call updateContent() on page load
window.addEventListener("DOMContentLoaded", async () => {
  const userPreferredLanguage = localStorage.getItem("language") || "en";
  const langData = await fetchLanguageData(userPreferredLanguage);
  updateContent(langData);
  toggleJapaneseStylesheet(userPreferredLanguage);
});



