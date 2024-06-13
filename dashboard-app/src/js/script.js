// script.js
export function handleDropdown() {
    const userElement = document.querySelector('.profile_log .user');
    if (!userElement) {
        console.error('User element not found');
        return;
    
    }
 
    userElement.addEventListener('click', function() {
        var dropdownMenu = document.querySelector('.profile_log .dropdown-menu.dropdown-menu-end');
        if (!dropdownMenu) {
            console.error('Dropdown menu not found');
            return;
        }

        if (dropdownMenu.style.display === 'block') {
            dropdownMenu.style.display = 'none';
        } else {
            dropdownMenu.style.display = 'block';
        }
    });
    
    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.profile_log .user') && !event.target.matches('.profile_log .user *')) {
            var dropdowns = document.querySelectorAll('.dropdown-menu.dropdown-menu-end');
            dropdowns.forEach(function(dropdown) {
                if (dropdown.style.display === 'block') {
                    dropdown.style.display = 'none';
                }
            });
        }
    }
}