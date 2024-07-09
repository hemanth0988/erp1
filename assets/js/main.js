document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-btn');
    const sidebar = document.querySelector('.sidebar');

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });

    // Dark mode toggle
    const darkModeCheckbox = document.getElementById('dark-mode-checkbox');
    darkModeCheckbox.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode', darkModeCheckbox.checked);
        localStorage.setItem('darkMode', darkModeCheckbox.checked ? 'enabled' : 'disabled');
    });

    // Set initial dark mode state
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
        darkModeCheckbox.checked = true;
    }
});
