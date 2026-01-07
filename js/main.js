// Main JS

document.addEventListener('DOMContentLoaded', () => {
    // Active Navigation Link
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        // Simple check for pathmatch
        if (link.getAttribute('href') === currentPath || 
            (link.getAttribute('href') !== '/' && currentPath.includes(link.getAttribute('href'))) ||
            (link.getAttribute('href') === '/' && currentPath.endsWith('index.html') && !currentPath.includes('about') && !currentPath.includes('skills'))) {
             // Basic logic, improved later if needed
        }
        
        // Better logic for static file structure
        const href = link.getAttribute('href');
        // If we are on root index.html
        if (href === '/') {
            if (currentPath.endsWith('nigilan_portfolio/') || currentPath.endsWith('index.html')) {
               // Only active if not in a subdir
               if (!currentPath.includes('/about/') && !currentPath.includes('/skills/') && !currentPath.includes('/foodie/') && !currentPath.includes('/projects/') && !currentPath.includes('/contact/')) {
                   link.classList.add('active');
               }
            }
        } else {
             // remove leading slash for match check if needed
             const cleanHref = href.replace(/^\//, '');
             if (currentPath.includes(cleanHref)) {
                 link.classList.add('active');
             }
        }
    });

    console.log("Nigilan's Portfolio Loaded. Welcome, fellow cringe lord.");
});
