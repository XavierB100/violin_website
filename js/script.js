// Email Form Handling (using EmailJS)
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Replace with your EmailJS service ID and template ID
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
    .then(() => {
      alert('Message sent successfully!');
      this.reset();
    }, (error) => {
      alert('Error: ' + JSON.stringify(error));
    });
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

// Animation on scroll
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
});

// Initialize sections with fade-in effect
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});
