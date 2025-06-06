// Combined mobile menu functionality and publication metrics updater
document.addEventListener('DOMContentLoaded', function() {
    // Get references to menu elements
    const menu = document.getElementById('menu');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = menu && menu.contains(event.target);
        const isClickOnMenuButton = mobileMenuBtn && mobileMenuBtn.contains(event.target);
        
        // If the menu is active and the click is outside the menu and not on the button
        if (menu && menu.classList.contains('active') && !isClickInsideMenu && !isClickOnMenuButton) {
            menu.classList.remove('active');
            if (mobileMenuBtn) {
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
    
    // Function to update metrics
    function updateMetrics() {
        // Static metrics (since Frontiers doesn't provide a direct API)
        // These would normally come from an API
        const metrics = {
            totalViews: 62792,
            profileViews: 250,
            totalPublications: 4,
            publicationViews: 62542,
            downloads: 2186,
            citations: 16
        };
        
        // Update the DOM elements with the metrics
        const elements = document.querySelectorAll('[data-metric]');
        elements.forEach(element => {
            const metricName = element.getAttribute('data-metric');
            if (metrics[metricName] !== undefined) {
                // Add animation effect
                element.classList.add('updating');
                setTimeout(() => {
                    element.textContent = metrics[metricName].toLocaleString();
                    element.classList.remove('updating');
                }, 500);
            }
        });
        
        // Add last updated timestamp
        const lastUpdated = document.getElementById('metrics-last-updated');
        if (lastUpdated) {
            lastUpdated.textContent = new Date().toLocaleString();
        }
    }
    
    // Update immediately on page load
    updateMetrics();
    
    // Setup periodic updates (every hour)
    setInterval(updateMetrics, 3600000);
});