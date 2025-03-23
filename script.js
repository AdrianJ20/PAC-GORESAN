document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (mobileNavToggle && navList) {
        mobileNavToggle.addEventListener('click', function() {
            navList.classList.toggle('show');
        });
    }
    
    // Accordion functionality
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            // Toggle active class on the clicked item
            item.classList.toggle('active');
            
            // Close other accordion items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });
    
    // Principles accordion functionality
    const principleItems = document.querySelectorAll('.principle-item');
    
    principleItems.forEach(item => {
        const header = item.querySelector('.principle-header');
        
        header.addEventListener('click', () => {
            // Toggle active class on the clicked item
            item.classList.toggle('active');
            
            // Update toggle icon
            const toggleIcon = header.querySelector('.toggle-icon');
            if (toggleIcon) {
                if (item.classList.contains('active')) {
                    toggleIcon.classList.remove('fa-chevron-down');
                    toggleIcon.classList.add('fa-chevron-up');
                } else {
                    toggleIcon.classList.remove('fa-chevron-up');
                    toggleIcon.classList.add('fa-chevron-down');
                }
            }
        });
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Back to top button functionality
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (backToTopButton) {
        // Show/hide back to top button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.style.display = 'flex';
            } else {
                backToTopButton.style.display = 'none';
            }
        });
        
        // Scroll to top when button is clicked
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Active menu item highlighting
    const currentPage = window.location.pathname.split('/').pop();
    
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkHref = link.getAttribute('href');
        
        if (linkHref === currentPage || 
            (currentPage === '' && linkHref === 'index.html') ||
            (linkHref === 'index.html' && currentPage === '')) {
            link.classList.add('active');
        }
    });
    
    // Handle print functionality
    const printButtons = document.querySelectorAll('.print-button');
    
    printButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            window.print();
        });
    });
    
    // Responsibility sections collapsible functionality
    const responsibilitySections = document.querySelectorAll('.responsibility-section');
    
    if (responsibilitySections.length > 0) {
        // Set first section as active by default
        responsibilitySections[0].classList.add('active');
        
        responsibilitySections.forEach(section => {
            const header = section.querySelector('.responsibility-header');
            
            header.addEventListener('click', () => {
                section.classList.toggle('active');
            });
        });
    }
    
    // Disposiciones sections collapsible functionality
    const disposicionSections = document.querySelectorAll('.disposicion-section');
    
    if (disposicionSections.length > 0) {
        // Set first section as active by default
        disposicionSections[0].classList.add('active');
        
        disposicionSections.forEach(section => {
            const header = section.querySelector('.disposicion-header');
            
            header.addEventListener('click', () => {
                section.classList.toggle('active');
            });
        });
    }
    
    // Casos sections collapsible functionality
    const casoSections = document.querySelectorAll('.caso-container');
    
    if (casoSections.length > 0) {
        casoSections.forEach(section => {
            const header = section.querySelector('.caso-header');
            
            if (header) {
                header.addEventListener('click', () => {
                    section.classList.toggle('active');
                });
            }
        });
    }
});
