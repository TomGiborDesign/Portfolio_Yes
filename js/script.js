

// SET CURRENT YEAR
// SET CURRENT YEAR
const yearEl = document.querySelector('.footer-year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;


//MOBILE NAV
//MOBILE NAV
const navbarToggler = document.querySelector(".btn-mobile-nav");
const navbarMenu = document.querySelector(".upper-bar");

navbarToggler.addEventListener("click", navbarTogglerClick);

function navbarTogglerClick() {
  navbarMenu.classList.toggle("nav-open");
}

const contactToggler = document.querySelector(".contact-toggle");
const workToggler = document.querySelector(".work-toggle");


contactToggler.addEventListener("click", contactTogglerClick);

function contactTogglerClick() {
  navbarMenu.classList.toggle("nav-open");
}


workToggler.addEventListener("click", workTogglerClick);

function workTogglerClick() {
  navbarMenu.classList.toggle("nav-open");
}



//CHAPTER INDEX
//CHAPTER INDEX
// const addActiveClass = (entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         console.log(entry.target.id);
//         let currentChapter = document.querySelector('.chapter-index a[href='#${entry.target.id}']')
//         currentChapter.classList.add("active");
//       }
//     });
// };

// const options = {
//   threshold: 0.8,
// };

// const observer = new IntersectionObserver(addActiveClass, options);
// const sections = document.querySelectorAll("section");

// sections.forEach((section) => {
//   observer.observe(section);
// });



///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
