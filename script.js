document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container');
    const dashboardContentElement = document.getElementById('dashboard-content');

    if (!dashboardContentElement) {
        console.error('Dashboard content element not found');
        return;
    }

    const dashboardContent = dashboardContentElement.innerHTML;

    function setupDashboard() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.addEventListener('click', (e) => {
                if (e.target.tagName !== 'BUTTON') {
                    const button = card.querySelector('.btn');
                    button.click();
                }
            });

            const button = card.querySelector('.btn');
            button.addEventListener('click', () => {
                const appName = card.dataset.app;
                loadApp(appName);
            });
        });
    }

    function loadApp(appName) {
        // Clear the container
        container.innerHTML = '';

        // Add a back button
        const backButton = document.createElement('button');
        backButton.textContent = 'Back to Dashboard';
        backButton.classList.add('btn', 'back-btn');
        backButton.addEventListener('click', () => {
            container.innerHTML = dashboardContent;
            setupDashboard();
        });
        container.appendChild(backButton);

        // Load the appropriate app
        switch(appName) {
            case 'voice-transcriber':
                container.innerHTML += '<h2>Voice Transcriber</h2><p>Voice transcriber content goes here.</p>';
                break;
            case 'invoice-generator':
                container.innerHTML += '<h2>Invoice Generator</h2><p>Invoice generator content goes here.</p>';
                break;
            case 'todo-app':
                container.innerHTML += '<h2>Todo App</h2><p>Todo app content goes here.</p>';
                break;
            case 'daily-memo':
                container.innerHTML += '<h2>Daily Memo</h2><p>Daily memo content goes here.</p>';
                break;
            case 'social-media-scheduler':
                container.innerHTML += '<h2>Social Media Scheduler</h2><p>Social media scheduler content goes here.</p>';
                break;
            case 'review-responder':
                container.innerHTML += '<h2>Review Responder</h2><p>Review responder content goes here.</p>';
                break;
            case 'seo-optimizer':
                container.innerHTML += '<h2>SEO Optimizer</h2><p>SEO optimizer content goes here.</p>';
                break;
            case 'keyword-expander':
                container.innerHTML += '<h2>Keyword Expander</h2><p>Keyword expander content goes here.</p>';
                break;
            case 'niche-explorer':
                container.innerHTML += '<h2>Niche Explorer</h2><p>Niche explorer content goes here.</p>';
                break;
            default:
                container.innerHTML += '<h2>App not found</h2><p>The selected app is not available.</p>';
        }
    }

    setupDashboard();
});
