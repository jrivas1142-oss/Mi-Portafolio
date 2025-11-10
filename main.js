document.addEventListener('DOMContentLoaded', function() {
    
    /*Lógica del Menú Móvil*/
    const burger = document.getElementById('burger-menu');
    const nav = document.querySelector('.nav-links');

    if (burger && nav) {
        burger.addEventListener('click', function() {
            burger.classList.toggle('active');
            nav.classList.toggle('active');
        });
        
        // Cierra el menú al hacer clic en un enlace
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                burger.classList.remove('active');
            });
        });
    }


    /* Lógica de Revelación de Secciones,Habilidades, Experiencia, Educación, etc.) */
    
    // Selecciona todos los elementos que deben ser animados
    const revealElements = document.querySelectorAll(
        '.reveal-left, .reveal-right, .reveal-top, .skill-item, .experience-item-simple, .education-item-simple'
    );

    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.15 
    };

    // Crea el observador
    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                
                entry.target.classList.add('is-visible');
                
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Observa todos los elementos seleccionados
    revealElements.forEach(element => {
        observer.observe(element);
    });
});