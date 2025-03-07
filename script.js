document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".hero button");
    
    button.addEventListener("click", function() {
        alert("More information coming soon!");
    });
});
// Function to adjust elements based on screen size
function adjustLayout() {
    const heroSection = document.querySelector(".hero h1");
    
    if (window.innerWidth < 768) {
        heroSection.style.fontSize = "2em"; // Reduce font size for smaller screens
    } else {
        heroSection.style.fontSize = "2.5em"; // Default size for larger screens
    }
}

// Toggle mobile navigation menu
function toggleMenu() {
    const nav = document.querySelector("nav ul");
    nav.classList.toggle("active");
}

// Event listener for screen resize
window.addEventListener("resize", adjustLayout);

// Call function on page load
adjustLayout();

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.createElement("button");
    menuButton.innerText = "☰";
    menuButton.classList.add("menu-toggle");
    
    const header = document.querySelector("header");
    header.prepend(menuButton);

    menuButton.addEventListener("click", toggleMenu);
});
document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const icon = dropdownToggle.querySelector("i");

    dropdownToggle.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior

        // Toggle icon
        icon.classList.toggle("fa-angle-down");
        icon.classList.toggle("fa-angle-up");
    });
});
const images = document.querySelectorAll('.book-container img');
const dots = document.querySelectorAll('.dot');

// Function to update active dot
function updateActiveDot(index) {
    document.querySelector('.dot.active')?.classList.remove('active');
    dots[index].classList.add('active');
}

// Add click event to images
images.forEach((img, index) => {
    img.addEventListener('click', () => {
        updateActiveDot(index);
    });
});

// Add click event to dots (optional: if you want dots to control image selection)
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        updateActiveDot(index);
    });
});
