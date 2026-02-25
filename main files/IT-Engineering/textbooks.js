document.addEventListener('DOMContentLoaded', function() {
    // Highlight active year button based on scroll position
    const yearSections = document.querySelectorAll('.year-section');
    const yearButtons = document.querySelectorAll('.year-btn');
    
    function updateActiveYear() {
        let currentSection = '';
        
        yearSections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentSection = section.getAttribute('id');
            }
        });
        
        yearButtons.forEach(button => {
            button.classList.remove('active');
            if (button.getAttribute('href') === `#${currentSection}`) {
                button.classList.add('active');
            }
        });
    }
    
    // Update on scroll
    window.addEventListener('scroll', updateActiveYear);
    
    // Smooth scrolling for year buttons
    yearButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 120,
                behavior: 'smooth'
            });
        });
    });
    
    // Initialize active year
    updateActiveYear();
});