function navigateTo(section) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(sec => {
        if (sec.id === section) {
            sec.classList.add('visible');
            sec.style.display = 'block';
            setTimeout(() => {
                sec.style.opacity = 1;
            }, 10); // Slight delay for transition effect
        } else {
            sec.style.opacity = 0;
            setTimeout(() => {
                sec.style.display = 'none';
                sec.classList.remove('visible');
            }, 300); // Wait for the transition to complete
        }
    });

    // Change the active class for the navigation links
    const links = document.querySelectorAll('.navigation a');
    links.forEach(link => {
        if (link.textContent.toLowerCase() === section) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function viewBlog(blogId) {
    navigateTo(blogId);
}

function initMap() {
    const itahari = { lat: 26.6758, lng: 87.2750 };
    const map = new google.maps.Map(document.getElementById('map'), {
        center: itahari,
        zoom: 14
    });
    const marker = new google.maps.Marker({
        position: itahari,
        map: map
    });
}

// Initialize the first section as visible and set the first link as active
document.addEventListener('DOMContentLoaded', () => {
    navigateTo('about');
    const firstLink = document.querySelector('.navigation a');
    firstLink.classList.add('active');
});
