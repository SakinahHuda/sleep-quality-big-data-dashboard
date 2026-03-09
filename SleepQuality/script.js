// Simple page navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
    });

    const targetId = this.getAttribute('href');
    document.querySelector(targetId).classList.add('active');

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.classList.remove('active');
    });
    this.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Initialize Home Active
document.getElementById('home').classList.add('active');
document.querySelector('.nav-links a[href="#home"]').classList.add('active');
