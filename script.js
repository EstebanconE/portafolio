console.log("JS conectado");

// =========================
// SCROLL SUAVE
// =========================
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }

    // Cerrar menú mobile al hacer click
    const menu = document.querySelector('.nav-left');
    menu.classList.remove('active');
  });
});

// =========================
// MODAL DE CURSOS
// =========================
function openModal(src) {
  const modal = document.getElementById("modal");
  const img = document.getElementById("modal-img");

  modal.style.display = "flex";
  img.src = src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// =========================
// MENÚ HAMBURGUESA
// =========================
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-left');

if (toggle) {
  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
}

// =========================
// GALERÍA DE PROYECTOS
// =========================
let galleryImages = [];
let currentImage = 0;

function openProjectGallery(images) {
  galleryImages = images;
  currentImage = 0;

  const modal = document.getElementById("projectGallery");
  const img = document.getElementById("galleryImage");

  modal.style.display = "flex";
  img.src = galleryImages[currentImage];
}

function closeProjectGallery() {
  document.getElementById("projectGallery").style.display = "none";
}

function changeImage(direction) {
  currentImage += direction;

  if (currentImage < 0) {
    currentImage = galleryImages.length - 1;
  }

  if (currentImage >= galleryImages.length) {
    currentImage = 0;
  }

  document.getElementById("galleryImage").src =
    galleryImages[currentImage];
}

// =========================
// CERRAR MODALES AL HACER CLICK AFUERA
// =========================
window.addEventListener("click", function (event) {
  const modalCursos = document.getElementById("modal");
  const modalGaleria = document.getElementById("projectGallery");

  if (event.target === modalCursos) {
    closeModal();
  }

  if (event.target === modalGaleria) {
    closeProjectGallery();
  }
});

// =========================
// NAVEGACIÓN CON TECLADO
// =========================
document.addEventListener("keydown", function (event) {
  const modalGaleria = document.getElementById("projectGallery");

  if (modalGaleria.style.display === "flex") {
    if (event.key === "ArrowRight") {
      changeImage(1);
    }

    if (event.key === "ArrowLeft") {
      changeImage(-1);
    }

    if (event.key === "Escape") {
      closeProjectGallery();
    }
  }

  const modalCursos = document.getElementById("modal");

  if (modalCursos.style.display === "flex") {
    if (event.key === "Escape") {
      closeModal();
    }
  }
});