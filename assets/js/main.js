
/*=============== DARK LIGHT THEME =============== 
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

body.classList.add('light-mode');

toggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.replace('light-mode', 'dark-mode');
        toggleButton.textContent = 'Light';
    } else {
        body.classList.replace('dark-mode', 'light-mode');
        toggleButton.textContent = 'Dark';
    }
});

*/


let toggleoff = document.querySelector("toggleoff");
let toggleon = document.querySelector("toggleon");
let herolarge = document.querySelector("#htx");
let herosub = document.querySelector("#htxtwo");

let mode = localStorage.getItem("mode");

function updateMode(mode) {
    if (mode == 'darkmode') {
        localStorage.setItem('mode', 'darkmode');
        toggleoff.style.display = 'none';
        toggleon.style.display = 'block';
        document.body.classList.add("darkmode")
    }
}

/*=============== ADD SHADOW HEADER ===============*/

const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)