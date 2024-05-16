document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been sent successfully.`);

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});
document.querySelectorAll('#projects .project').forEach(project => {
    project.addEventListener('mouseover', () => {
        project.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });

    project.addEventListener('mouseout', () => {
        project.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been sent successfully.`);

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});
