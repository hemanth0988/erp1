document.addEventListener('DOMContentLoaded', function() {
    fetch('sidebar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('sidebar-container').innerHTML = data;
            const darkModeCheckbox = document.getElementById('dark-mode-checkbox');
            
            // Re-initialize the dark mode checkbox state
            const darkMode = localStorage.getItem('darkMode');
            if (darkMode === 'enabled') {
                document.body.classList.add('dark-mode');
                darkModeCheckbox.checked = true;
            } else {
                darkModeCheckbox.checked = false;
            }

            // Add event listener for dark mode toggle
            darkModeCheckbox.addEventListener('change', function() {
                if (this.checked) {
                    document.body.classList.add('dark-mode');
                    localStorage.setItem('darkMode', 'enabled');
                } else {
                    document.body.classList.remove('dark-mode');
                    localStorage.setItem('darkMode', 'disabled');
                }
            });

            // Add event listener for hamburger menu toggle
            document.getElementById('toggle-btn').addEventListener('click', function() {
                document.querySelector('.sidebar').classList.toggle('collapsed');
            });

            // Ensure only one dropdown is open at a time
            document.querySelectorAll('.menu-item.has-dropdown > a').forEach(item => {
                item.addEventListener('click', function(event) {
                    // Check if sidebar is collapsed
                    if (document.querySelector('.sidebar').classList.contains('collapsed')) {
                        return; // Exit if sidebar is collapsed
                    }

                    event.preventDefault();

                    // Close all open dropdowns
                    document.querySelectorAll('.menu-item.has-dropdown').forEach(dropdown => {
                        if (dropdown !== this.parentElement) {
                            dropdown.classList.remove('open');
                            dropdown.querySelector('.dropdown-menu').style.display = 'none';
                        }
                    });

                    // Toggle the clicked dropdown
                    let parentItem = this.parentElement;
                    parentItem.classList.toggle('open');
                    let dropdownMenu = parentItem.querySelector('.dropdown-menu');
                    if (dropdownMenu.style.display === 'flex') {
                        dropdownMenu.style.display = 'none';
                    } else {
                        dropdownMenu.style.display = 'flex';
                    }
                });
            });
        })
        .catch(error => console.error('Error loading sidebar:', error));
});
