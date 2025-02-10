var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Dreamer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
window.onload = function() {
    // Select all progress bars and apply width
    document.querySelectorAll('.progress-line span').forEach(function(bar) {
        bar.style.width = bar.parentElement.classList.contains('html') ? '95%' :
                          bar.parentElement.classList.contains('css') ? '99%' :
                          bar.parentElement.classList.contains('javascript') ? '80%' :
                          bar.parentElement.classList.contains('react') ? '75%' :
                          bar.parentElement.classList.contains('python') ? '80%' : '0';
    });
};
particlesJS("particles-js", {
    particles: {
        number: {
            value: 300,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: "#00bcd4", 
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000",
            },
        },
        opacity: {
            value: 0.5,
            random: false,
        },
        size: {
            value: 5,
            random: true,
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00bcd4", 
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 3,
            "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse",
            },
            onclick: {
                enable: true,
                mode: "push",
            },
        },
    },
    retina_detect: true,
});


document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const domain = document.getElementById("domain").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all required fields.");
            return;
        }

        // Create payload
        const formData = {
            name: name,
            email: email,
            domain: domain,
            message: message
        };

        // Send data to backend
        fetch("https://portfolio-backend-y29u.onrender.com/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.text())
        .then(data => {
            alert(data); // Show success message
            form.reset(); // Reset form
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Error sending message.");
        });
    });
});

