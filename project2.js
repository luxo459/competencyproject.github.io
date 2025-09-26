// This ensures the script runs only after the entire HTML document is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Selects all elements with the class 'accordion-header'
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    // Loops through each 'accordion-header' element found
    accordionHeaders.forEach(header => {
        // Adds a click event listener to each header
        header.addEventListener('click', () => {
            // Gets the very next sibling element in the HTML (which should be the content)
            const content = header.nextElementSibling;
            // Toggles the 'active' class on the header, which can be used to change its style
            header.classList.toggle('active');
            // Toggles the 'active' class on the content, which can be used to show or hide it
            content.classList.toggle('active');
        });
    });
});
