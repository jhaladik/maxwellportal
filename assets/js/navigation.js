function goToHome() {
    window.location.href = 'index.html';
}

function navigateToSection(section) {
    const pages = {
        'news': 'news.html',
        'library': 'library.html', 
        'tenders': 'tenders.html',
        'academy': 'academy.html'
    };
    
    if (pages[section]) {
        window.location.href = pages[section];
    }
}

// Set active nav state
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', setActiveNav);