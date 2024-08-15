// Add event listeners to navigation menu items
document.querySelectorAll('nav ul li a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Add animation to hero section button
  document.querySelector('.hero button').addEventListener('click', () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Add hover effect to hero section button
  document.querySelector('.hero button').addEventListener('mouseover', () => {
    document.querySelector('.hero button').style.background-color = '#3e8e41';
  });
  
  document.querySelector('.hero button').addEventListener('mouseout', () => {
    document.querySelector('.hero button').style.background-color= '#4CAF50';
  });
  
  // Add scroll event listener to update navigation menu active state
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('main section');
    const navLinks = document.querySelectorAll('nav ul li a');
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY + 200; // adjust the offset to match your design
  
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${section.id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
