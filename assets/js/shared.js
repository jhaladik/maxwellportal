// Global functions used across all pages
const Maxwell = {
    user: {
        name: 'Jan Novák',
        role: 'Lab Manager',
        company: 'TechLab s.r.o.'
    },
    
    // Cross-page data sharing
    setUserData: function(data) {
        localStorage.setItem('maxwell_user', JSON.stringify(data));
    },
    
    getUserData: function() {
        return JSON.parse(localStorage.getItem('maxwell_user') || '{}');
    },
    
    // Global utilities
    formatDate: function(dateString) {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('cs-CZ', options);
    },
    
    showNotification: function(message, type = 'info') {
        // Global notification system
    }
};

// Initialize on every page
document.addEventListener('DOMContentLoaded', function() {
    Maxwell.init();
});