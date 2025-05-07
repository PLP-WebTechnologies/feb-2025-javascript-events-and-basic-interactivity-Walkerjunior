// Button click to change color
document.getElementById('changeColorBtn').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
});

// Button click to change text
document.getElementById('textChangeBtn').addEventListener('click', function () {
    this.textContent = 'You clicked me!';
});

// Hover effect
document.getElementById('hoverArea').addEventListener('mouseenter', function () {
    this.style.backgroundColor = '#3498db';
});
document.getElementById('hoverArea').addEventListener('mouseleave', function () {
    this.style.backgroundColor = '#e2e2e2';
});

// Keypress detection
document.getElementById('keypressInput').addEventListener('keydown', function (e) {
    document.getElementById('feedback').textContent = `You pressed: ${e.key}`;
});

// Image gallery functionality
let currentImage = 0;
const images = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150/FF0000',
    'https://via.placeholder.com/150/00FF00'
];

document.getElementById('nextImageBtn').addEventListener('click', function () {
    currentImage = (currentImage + 1) % images.length;
    document.getElementById('galleryImage').src = images[currentImage];
});

// Accordion functionality
const accordionButtons = document.querySelectorAll('.accordionBtn');
accordionButtons.forEach(button => {
    button.addEventListener('click', function () {
        const content = this.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

// Form validation
document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!name || !email || !password) {
        alert('All fields are required!');
        return;
    }

    if (!/^[a-zA-Z0-9]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}$/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters.');
        return;
    }

    alert('Form submitted successfully!');
});
