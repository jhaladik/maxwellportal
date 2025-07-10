// Better navigation with absolute paths from root
function goToHome() {
    console.log('Navigating to home...');
    window.location.href = '/index.html';  // Absolute path
}

// Ensure it's not overridden
window.goToHome = goToHome;

function navigateToSection(section) {
    const pages = {
        'index': '/index.html',      // Use absolute paths
        'news': '/news.html',
        'library': '/library.html', 
        'tenders': '/tenders.html',
        'academy': '/academy.html'
    };
    
    if (pages[section]) {
        console.log(`Navigating to section: ${section}`);
        window.location.href = pages[section];
    } else {
        console.warn(`Unknown section: ${section}`);
    }
}

// Fixed active nav logic
function setActiveNav() {
    // Get current page name (without path)
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        // Extract filename from href (handle both ./file.html and /file.html)
        const href = link.getAttribute('href');
        const linkPage = href.split('/').pop();
        
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', setActiveNav);