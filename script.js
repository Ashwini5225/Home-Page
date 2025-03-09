document.addEventListener("DOMContentLoaded", function () {
    // ✅ Dropdown Toggle (Clicking Only on Arrow Icon)
    document.querySelectorAll(".dropdown-toggle i").forEach(icon => {
        icon.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent link navigation
            event.stopPropagation(); // Prevent event bubbling

            let parentDropdown = this.closest(".dropdown");
            parentDropdown.classList.toggle("active");

            // Close other open dropdowns (optional)
            document.querySelectorAll(".dropdown").forEach(dropdown => {
                if (dropdown !== parentDropdown) {
                    dropdown.classList.remove("active");
                }
            });

            // Toggle dropdown arrow direction
            this.classList.toggle("fa-angle-down");
            this.classList.toggle("fa-angle-up");
        });
    });

    // ✅ Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown").forEach(dropdown => {
                dropdown.classList.remove("active");
            });

            // Reset dropdown arrow
            document.querySelectorAll(".dropdown-toggle i").forEach(icon => {
                icon.classList.add("fa-angle-down");
                icon.classList.remove("fa-angle-up");
            });
        }
    });

    // ✅ Hero Section Button Click
    const heroButton = document.querySelector(".hero button");
    if (heroButton) {
        heroButton.addEventListener("click", function () {
            alert("More information coming soon!");
        });
    }

    // ✅ Mobile Navigation Toggle
    

    // ✅ Adjust Layout on Resize
    function adjustLayout() {
        const heroSection = document.querySelector(".hero h1");
        if (heroSection) {
            heroSection.style.fontSize = window.innerWidth < 768 ? "2em" : "2.5em";
        }
    }

    adjustLayout();
    window.addEventListener("resize", adjustLayout);

    // ✅ FAQ Toggle
    document.querySelectorAll(".toggle-btn").forEach(button => {
        button.addEventListener("click", function () {
            const faqItem = this.closest(".faq-item");

            // Close all other FAQ items
            document.querySelectorAll(".faq-item").forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove("active");
                }
            });

            // Toggle clicked FAQ item
            faqItem.classList.toggle("active");
        });
    });

    // ✅ Subscription Button Click
    const subscribeButton = document.querySelector(".subscribe-form button");
    if (subscribeButton) {
        subscribeButton.addEventListener("click", function () {
            alert("Subscription successful! Stay tuned for updates.");
        });
    }

    // ✅ Subscription with Email
    const subscribeBtn = document.querySelector(".subscribe-btn");
    if (subscribeBtn) {
        subscribeBtn.addEventListener("click", function () {
            let email = document.querySelector(".email-input").value;
            if (email) {
                alert("Subscribed successfully with " + email);
            } else {
                alert("Please enter a valid email.");
            }
        });
    }

    // ✅ Image & Dot Interaction (For Book Section)
    const images = document.querySelectorAll(".book-container img");
    const dots = document.querySelectorAll(".dot");

    function updateActiveDot(index) {
        document.querySelector(".dot.active")?.classList.remove("active");
        dots[index]?.classList.add("active");
    }

    images.forEach((img, index) => {
        img.addEventListener("click", () => updateActiveDot(index));
    });

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => updateActiveDot(index));
    });

    
});

document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector(".dropdown-toggle");

        toggle.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();

            dropdown.classList.toggle("active");

            // Close other dropdowns
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove("active");
                }
            });
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove("active");
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // ✅ Dropdown Toggle (Clicking Only on Arrow Icon)
    document.querySelectorAll(".dropdown-toggle i").forEach(icon => {
        icon.addEventListener("click", function (event) {
            event.preventDefault();
            event.stopPropagation();

            let parentDropdown = this.closest(".dropdown");
            parentDropdown.classList.toggle("active");

            document.querySelectorAll(".dropdown").forEach(dropdown => {
                if (dropdown !== parentDropdown) {
                    dropdown.classList.remove("active");
                }
            });

            this.classList.toggle("fa-angle-down");
            this.classList.toggle("fa-angle-up");
        });
    });

    // ✅ Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown").forEach(dropdown => {
                dropdown.classList.remove("active");
            });

            document.querySelectorAll(".dropdown-toggle i").forEach(icon => {
                icon.classList.add("fa-angle-down");
                icon.classList.remove("fa-angle-up");
            });
        }
    });

    // ✅ Mobile Navigation Toggle
    
    // ✅ Adjust Layout on Resize
    function adjustLayout() {
        const heroSection = document.querySelector(".hero h1");
        if (heroSection) {
            heroSection.style.fontSize = window.innerWidth < 768 ? "2em" : "2.5em";
        }
    }

    adjustLayout();
    window.addEventListener("resize", adjustLayout);
});
document.addEventListener("DOMContentLoaded", function () {
    let menuIcon = document.querySelector(".menu-icon");
    const header = document.querySelector(".header");
    
    // ✅ If .menu-icon doesn't exist, create and append it
    if (!menuIcon && header) {
        menuIcon = document.createElement("div");
        menuIcon.classList.add("menu-icon");
        menuIcon.innerHTML = "&#9776;"; // Hamburger icon
        header.appendChild(menuIcon);
    }

    const navMenu = document.querySelector(".nav-menu");

    // ✅ Ensure both elements exist before adding event listener
    if (menuIcon && navMenu) {
        menuIcon.addEventListener("click", function () {
            console.log("Menu clicked!"); // Debugging
            navMenu.classList.toggle("active"); // Toggle visibility
        });
    } else {
        console.error("Menu icon or nav menu is missing!");
    }
});
