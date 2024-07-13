document.addEventListener("DOMContentLoaded", function() {
    // Define the tour steps
    const intro = introJs();
    intro.setOptions({
        steps: [
            {
                intro: "Welcome to my portfolio website!"
            },
            {
                element: document.querySelector('nav ul li a[href="#home"]'),
                intro: "This is the Home section."
            },
            {
                element: document.querySelector('nav ul li a[href="#about"]'),
                intro: "Learn more about me in the About section."
            },
            {
                element: document.querySelector('nav ul li a[href="#education"]'),
                intro: "Check out my educational background here."
            },
            {
                element: document.querySelector('nav ul li a[href="#fun"]'),
                intro: "Visit the Fun Zone for some entertainment."
            },
            {
                element: document.querySelector('nav ul li a[href="#gallery"]'),
                intro: "Take a look at my Gallery."
            },
            {
                element: document.querySelector('nav ul li a[href="#social"]'),
                intro: "Connect with me on social media."
            },
            {
                element: document.querySelector('nav ul li a[href="#contact"]'),
                intro: "Feel free to contact me here."
            }
        ]
    });

    // Start the tour
    intro.start();
});
