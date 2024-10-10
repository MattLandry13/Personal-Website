function toggleMenu()
{
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


function toggleInfo(button) {
    // Find the closest parent element with the class 'details-container'
    const panel = button.closest('.details-container');
    
    // Toggle a CSS class for styling instead of manually applying styles
    panel.classList.toggle('dark-mode');
    
    // Find the custom paragraph within this panel
    const customParagraph = panel.querySelector('.custom-paragraph');
    
    if (panel.classList.contains('dark-mode')) {
        // If dark-mode is active, hide all child elements except the custom paragraph
        panel.querySelectorAll('*:not(.custom-paragraph)').forEach(child => {
            child.style.visibility = 'hidden';
        });
        customParagraph.style.visibility = 'visible';
    } else {
        // Otherwise, show all children and hide the custom paragraph
        panel.querySelectorAll('*').forEach(child => {
            child.style.visibility = 'visible';
        });
        customParagraph.style.visibility = 'hidden';
    }
}

