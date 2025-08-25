document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    const sections = document.querySelectorAll('.section');
    const nav = document.querySelector('.nav-container');

    // Funzione per gestire lo smooth scroll e l'aggiunta di un offset
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    const navHeight = nav.offsetHeight;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
            
            // Chiudi il menu mobile se è aperto
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('open');
            }
        });
    });

    // Gestione del menu mobile
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('open');
    });
    
    // Gestione dei link "Unisciti" (placeholder per il link Discord)
    // Non è più necessario un listener specifico in quanto l'URL è già nell'attributo href
    
    // Gestione del form
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        formStatus.style.display = 'block';
        formStatus.style.color = '#fff';
        formStatus.style.backgroundColor = 'var(--accent-color)';
        formStatus.style.padding = '0.75rem';
        formStatus.style.borderRadius = 'var(--border-radius)';
        formStatus.textContent = 'Domanda inviata con successo! Ti risponderemo presto.';
        form.reset();
    });

});