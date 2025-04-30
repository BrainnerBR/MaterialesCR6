// Abrir lightbox al hacer clic en cualquier imagen de la galería
document.querySelectorAll('.carousel-track img, .left-image img, .content-wrapper img').forEach(img => {
    img.addEventListener('click', () => {
      openLightbox(img.src);
    });
  });
  
  function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
  
    lightboxImage.src = src;
    lightbox.style.display = 'flex';
  
    // Activar animación en el siguiente frame
    setTimeout(() => {
      lightbox.classList.add('show');
    }, 10);
  }
  
  function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('show');
  
    // Esperar a que termine la transición antes de ocultar
    setTimeout(() => {
      lightbox.style.display = 'none';
      document.getElementById('lightbox-image').src = '';
    }, 300);
  }
  
  // Detectar clic fuera de la imagen para cerrar
  document.getElementById('lightbox').addEventListener('click', function (event) {
    if (event.target === this) {
      closeLightbox();
    }
  });

  function scrollCarousel(direction) {
    const track = document.getElementById("carouselTrack");
    const scrollAmount = 400;
    track.scrollBy({
      left: scrollAmount * direction,
      behavior: "smooth"
    });
  }
  