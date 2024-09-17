document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready');
    
    // Example: Handling click events
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            alert(`You clicked on ${this.textContent}`);
        });
    });
    
    // Example: Dynamic content loading (you can replace this with actual logic)
    const mainContent = document.querySelector('main');
    mainContent.innerHTML = '<h2>Welcome to FTM MOVIES Blog!</h2><p>Enjoy our curated selection of movies.</p>';
});