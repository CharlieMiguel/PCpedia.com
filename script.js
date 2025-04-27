// Menú móvil
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('open');
    
    // Asegurarnos de que también se maneje la propiedad display
    if (mobileMenu.classList.contains('open')) {
        mobileMenu.style.display = 'block';
    } else {
        mobileMenu.style.display = 'none';
    }
});

// Modo oscuro
document.querySelectorAll('.dark-mode-toggle').forEach(button => {
    button.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode') ? 'enabled' : 'disabled');
    });
});

// Cargar preferencia de modo oscuro
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

// Navegación entre secciones
document.querySelectorAll('.nav-item, .mobile-menu a').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('data-section');
        
        // Ocultar todas las secciones
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Mostrar sección seleccionada
        document.getElementById(sectionId).classList.add('active');
        
        // Actualizar menú activo
        document.querySelectorAll('.nav-item').forEach(navItem => {
            navItem.classList.remove('active');
        });
        if (this.classList.contains('nav-item')) {
            this.classList.add('active');
        }
        
        // Cerrar menú móvil - Usamos classList en lugar de style.display
        if (window.innerWidth <= 768) {
            document.querySelector('.mobile-menu').classList.remove('open');
            document.querySelector('.mobile-menu').style.display = 'none';
        }
        
        // Scroll al inicio
        window.scrollTo(0, 0);
    });
});

// Cerrar menú al hacer clic fuera (solo móvil)
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768 && 
        !e.target.closest('.navbar-mobile') && 
        !e.target.closest('.mobile-menu')) {
        document.querySelector('.mobile-menu').classList.remove('open');
        document.querySelector('.mobile-menu').style.display = 'none';
    }
});

// Función de búsqueda
document.querySelector('.top-bar input').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    
    document.querySelectorAll('.card').forEach(card => {
        const cardText = card.textContent.toLowerCase();
        card.style.display = cardText.includes(searchTerm) ? 'block' : 'none';
    });
});

// Selecciona el botón y el ícono
const toggleButton = document.querySelector(".dark-mode-toggle");
const icon = toggleButton.querySelector("i");

// Alternar ícono al hacer clic
toggleButton.addEventListener("click", () => {
  if (icon.classList.contains("fa-moon")) {
    icon.classList.replace("fa-moon", "fa-lightbulb"); // Cambia a luna
  } else {
    icon.classList.replace("fa-lightbulb", "fa-moon"); // Vuelve a bombilla
  }
});