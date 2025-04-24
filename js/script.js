const svg = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
 stroke="none">
<path d="M1013 3996 c-649 -73 -724 -83 -741 -101 -30 -31 -276 -689 -268
-718 3 -15 179 -184 457 -438 l450 -414 -228 -5 c-125 -3 -236 -9 -245 -13
-19 -10 -31 -39 -223 -519 -179 -448 -184 -428 105 -428 l168 0 17 -49 c63
-191 272 -306 465 -257 77 20 138 54 191 107 l39 39 39 -39 c208 -208 565
-126 656 150 l17 49 767 0 768 0 22 -59 c48 -131 154 -222 296 -251 189 -39
389 77 450 261 l17 49 408 0 c279 0 417 4 433 11 14 6 30 22 36 36 15 33 15
433 0 466 -18 39 -50 47 -184 47 l-125 0 0 370 0 369 -252 380 c-152 227 -262
384 -276 390 -33 16 -1072 15 -1105 0 -14 -6 -30 -22 -36 -36 -7 -16 -11 -142
-11 -387 l0 -362 -60 -12 c-88 -16 -163 -54 -219 -110 -103 -103 -121 -173
-121 -464 l0 -218 -80 0 -80 0 0 195 0 194 162 446 c154 426 161 447 147 474
-14 28 -1048 911 -1083 924 -23 9 53 16 -773 -77z m627 -91 c0 -3 -124 -347
-276 -765 l-277 -760 -36 32 c-20 17 -161 146 -313 286 l-277 254 14 37 c8 20
80 211 159 425 80 213 147 391 150 393 3 3 193 27 423 53 230 26 421 48 426
49 4 0 7 -1 7 -4z m615 -427 c248 -209 449 -386 447 -392 -2 -6 -64 -181 -140
-388 l-136 -378 -597 0 -596 0 280 770 c154 424 282 770 286 770 3 0 209 -172
456 -382z m-1655 303 c0 -10 -257 -702 -263 -707 -7 -7 -157 138 -157 151 0
11 196 534 203 541 3 3 153 21 190 23 15 0 27 -3 27 -8z m3820 -831 l220 -330
0 -550 0 -550 -204 0 -204 0 -17 49 c-61 184 -261 300 -450 261 -142 -29 -248
-120 -296 -251 l-22 -59 -83 0 -84 0 0 880 0 880 460 0 460 0 220 -330z
m-1300 -790 l0 -320 -120 0 -120 0 0 218 c0 119 5 233 10 252 24 87 123 168
208 170 l22 0 0 -320z m-1120 -320 l0 -320 -44 0 c-44 0 -44 0 -61 49 -63 191
-272 306 -465 257 -77 -20 -138 -54 -191 -107 l-39 -39 -39 39 c-208 208 -565
126 -656 -150 l-17 -49 -104 0 c-57 0 -104 2 -104 5 0 3 57 147 126 320 l126
315 734 0 734 0 0 -320z m400 160 l0 -160 -120 0 -120 0 0 160 0 160 120 0
120 0 0 -160z m2560 -360 l0 -120 -80 0 -80 0 0 120 0 120 80 0 80 0 0 -120z
m-4010 30 c148 -41 217 -232 131 -361 -146 -217 -476 -85 -437 175 21 136 167
225 306 186z m640 0 c148 -41 217 -232 131 -361 -146 -217 -476 -85 -437 175
21 136 167 225 306 186z m1530 -70 l0 -80 -480 0 -480 0 0 80 0 80 480 0 480
0 0 -80z m790 70 c148 -41 217 -232 131 -361 -146 -217 -476 -85 -437 175 21
136 167 225 306 186z"/>
<path d="M3484 3108 c-41 -19 -44 -44 -44 -388 0 -348 2 -369 47 -389 34 -15
832 -15 866 0 39 18 47 50 47 192 0 108 -3 137 -18 159 -42 68 -329 417 -350
427 -30 14 -519 14 -548 -1z m618 -321 l138 -172 0 -67 0 -68 -320 0 -320 0 0
240 0 240 183 0 182 0 137 -173z"/>
<path d="M843 1508 c-55 -27 -50 -114 8 -138 89 -37 151 99 63 139 -30 13 -42
13 -71 -1z"/>
<path d="M1483 1508 c-55 -27 -50 -114 8 -138 89 -37 151 99 63 139 -30 13
-42 13 -71 -1z"/>
<path d="M3803 1508 c-55 -27 -50 -114 8 -138 89 -37 151 99 63 139 -30 13
-42 13 -71 -1z"/>
</g>
</svg>`;

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

