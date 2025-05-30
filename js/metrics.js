// Publication metrics updater
document.addEventListener('DOMContentLoaded', function() {
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