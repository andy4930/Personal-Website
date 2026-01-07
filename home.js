 /* PARALLAX */
    window.addEventListener('scroll', () => {
      document.querySelectorAll('.parallax').forEach(el => {
        const speed = el.dataset.speed;
        el.style.transform = `translateY(${window.scrollY * speed}px)`;
      });
    });

    /* REVEAL ON SCROLL */
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.2 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    /* MOBILE NAV */
    const toggle = document.querySelector('.nav-toggle');
    const links = document.querySelector('.nav-links');
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => links.classList.remove('open'));
    });