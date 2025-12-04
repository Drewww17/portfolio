// Select elements
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    body.classList.add('dark');
    toggleButton.textContent = "Switch to Light Theme";
}

// Handle theme toggle
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        toggleButton.textContent = "Switch to Light Theme";
        localStorage.setItem('theme', 'dark');
    } else {
        toggleButton.textContent = "Switch Theme";
        localStorage.setItem('theme', 'light');
    }
});
