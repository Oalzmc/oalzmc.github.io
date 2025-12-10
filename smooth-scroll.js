document.addEventListener('DOMContentLoaded', () => {
    // Select all links (anchor tags) whose href attribute starts with '#'
    const internalLinks = document.querySelectorAll('a[href^="#"]');

    internalLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Prevent the default instant jump behavior
            e.preventDefault();

            // Get the target ID from the href attribute (e.g., "#order")
            const targetId = this.getAttribute('href');

            // Find the target element using the ID
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Use the scrollIntoView method with the 'smooth' behavior option
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});