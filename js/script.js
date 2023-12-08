ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.h-content, .hp, #title, #caption', { origin: 'top' });
ScrollReveal().reveal('.hh-img, .port-Container, .socialMedia', { origin: 'bottom' });
ScrollReveal().reveal('.name, .img_about, .contactInfo', { origin: 'left' });
ScrollReveal().reveal('.rg, .messageForm', { origin: 'right' });

const typed = new Typed('.text', {
    strings: ['Computer Science Student', 'Future Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    BackDelay: 1000,
    loop: true
  });
