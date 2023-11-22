const carousel = document.querySelector('.carousel');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let currentIndex = 0;
const slideWidth = 300; // Width of each image

function goToSlide(index) {
    if (index < 0) {
        index = slides.children.length - 1;
    } else if (index >= slides.children.length) {
        index = 0;
    }

    currentIndex = index;
    const offset = -currentIndex * slideWidth;
    slides.style.transform = `translateX(${offset}px)`;
}

// script.js

// Function to toggle between Dark and Light themes
function toggleTheme() {
    const body = document.body;

    // Check if the 'dark-theme' class is already present
    const isDarkMode = body.classList.contains('dark-theme');

    // Toggle between Dark and Light themes
    body.classList.toggle('dark-theme', !isDarkMode);
    body.classList.toggle('light-theme', isDarkMode);

    // Save the theme preference to local storage
    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');
}

// Check for the theme preference in local storage on page load
document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
});

// Check for the theme preference when navigating back using the browser
window.addEventListener('pageshow', function (event) {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
});

// Scroll functions
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

// Show or hide scroll buttons based on scroll position
function handleScroll() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const scrollToBottomBtn = document.getElementById('scrollToBottomBtn');
    
    const scrollPosition = window.scrollY;

    // Show/hide buttons based on scroll position
    if (scrollPosition > 200) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }

    if (scrollPosition + window.innerHeight < document.body.scrollHeight - 200) {
        scrollToBottomBtn.style.display = 'block';
    } else {
        scrollToBottomBtn.style.display = 'none';
    }
}

// Attach the scroll event listener
document.addEventListener('scroll', handleScroll);

// Add this event listener to handle the initial state when the page loads
document.addEventListener('DOMContentLoaded', handleScroll);