
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Mobile Menu Toggle
            const hamburger = document.querySelector('.hamburger');
            const navMenu = document.querySelector('.nav-menu');
            
            hamburger.addEventListener('click', function() {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
            
            // Close mobile menu when clicking a link
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
            
            // Header scroll effect
            window.addEventListener('scroll', function() {
                const header = document.querySelector('.header');
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Form submission handling
            const forms = document.querySelectorAll('form');
            forms.forEach(form => {
                form.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // In a real implementation, you would send the form data to a server
                    // For this example, we'll just show an alert
                    const formName = this.id === 'info-request-form' ? 'Information Request' : 
                                   this.id === 'contact-form' ? 'Contact' : 'Newsletter Subscription';
                    
                    alert(`Thank you! Your ${formName} form has been submitted. We'll get back to you soon.`);
                    this.reset();
                });
            });
            
            // Simple image gallery for news/events (could be expanded)
            const newsCards = document.querySelectorAll('.news-card');
            newsCards.forEach(card => {
                card.addEventListener('click', function(e) {
                    // Don't trigger if clicking on a link
                    if (e.target.tagName === 'A') return;
                    
                    // In a real implementation, this would open a modal or navigate to a details page
                    const title = this.querySelector('h3').textContent;
                    alert(`Showing details for: ${title}`);
                });
            });
            
            // Animation on scroll
            function animateOnScroll() {
                const elements = document.querySelectorAll('.about-container, .academic-card, .admissions-process, .admissions-form, .news-card, .testimonial-card, .contact-info, .contact-form');
                
                elements.forEach(element => {
                    const elementPosition = element