const svg = `<svg width="258" height="163" viewBox="0 0 258 163" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.036332 -1.52588e-05C-0.27493 0.415314 1.50736 4.12688 1.81863 4.82568C35.5031 80.2305 105.281 158.918 166.097 162.861C183.391 163.981 199.999 158.529 212.803 139.767C198.634 140.965 184.634 138.825 171 134.04C137.123 122.15 105.502 93.9264 79.1395 59.9783C65.4696 42.3764 51.7101 22.421 41.3958 -1.52588e-05H21H0.036332Z" fill="#1B3C73"/>
<path d="M73.3748 -3.8147e-05C77.5022 9.09758 82.8405 17.4502 88.0723 25.0712C110.786 58.1193 140.757 88.4513 170.369 104.174C185.847 112.395 213.374 122.231 228.733 111.98C235.589 107.398 242.04 93.9164 245.208 83.731C224.691 91.2728 202.774 82.2214 183.95 69.3397C160.029 52.9771 139.371 27.5302 120.495 -3.8147e-05H73.379H73.3748Z" fill="#D71313"/>
<path d="M258 25.0514C254.516 32.1647 252.086 37.4189 245.839 38.2232C230.396 40.2141 209.166 16.6855 198.945 -2.28882e-05H153.962C153.774 1.15366 154.269 1.31847 154.597 1.98431C161.935 16.7976 181.037 36.3048 191.164 44.3674C206.514 56.5832 247.374 81.3512 256.499 46.1407C256.857 44.7563 258 39.6537 258 38.5726V25.058V25.0514Z" fill="#1B3C73"/>
</svg>
`;

document.querySelector('.logo').innerHTML = svg;
document.querySelector('.logo-footer').innerHTML = svg;



document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }

  const dropdownBtn = document.querySelector(".dropdown .dropbtn");
  if (dropdownBtn) {
    dropdownBtn.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentElement.classList.toggle("active");
    });
  }
});

//scroll to top
document.querySelector(".logo").addEventListener("click", function (e) {
    e.preventDefault(); // Evita que recargue la página
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
  


// Parallax hero

const hero = document.querySelector('.hero-container');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroHeight = hero.offsetHeight;

    if(scrollY <= heroHeight) {
        const background = document.querySelector('.imgBackground img');
        background.style.transform = `translateY(${scrollY * 0.3}px)`;

        
    }
});

//efecto fade reveal

const scrollElements = document.querySelectorAll(".scroll-reveal");

const elementInView = (el, offset = 130) => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight - offset);
};

const displayScrollElement = (element) => {
    element.classList.add("active");
};
const hideScrollElement = (element) => {
    element.classList.remove("active");
  };
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 130)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    });
  };
  
  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });
  
  // Llamar una vez al cargar
  handleScrollAnimation();

//leer mas 
document.querySelector('.read-more-btn').addEventListener('click', function() {
  const paragraph = this.previousElementSibling;
  paragraph.classList.toggle('expanded');
  this.textContent = paragraph.classList.contains('expanded') ? 'Leer menos' : 'Leer más';
});


