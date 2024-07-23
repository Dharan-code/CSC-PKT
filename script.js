// Example function for form validation
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        return false;
    }

    // Additional validation logic (e.g., email format check)

    return true;
}

// Example: Toggle visibility of course details
document.getElementById('showDetailsBtn').addEventListener('click', function() {
    var details = document.getElementById('courseDetails');
    if (details.style.display === 'none') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const autoSlideInterval = 1500; // Change slide every 3 seconds (3000ms)

function nextSlide() {
  slides[currentSlide].style.display = 'none';
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = 'block';
}

// Initial setup
slides[currentSlide].style.display = 'block';
setInterval(nextSlide, autoSlideInterval);

  