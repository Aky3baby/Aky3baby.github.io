
  const menuBtn = document.getElementById('mobileMenuBtn');
  const nav = document.getElementById('mainNav');

  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Optional: close menu when a link is clicked (better UX on mobile)
  const navLinks = document.querySelectorAll('#mainNav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });
const icon = menuBtn.querySelector('i');
if (nav.classList.contains('active')) {
  icon.classList.remove('fa-bars');
  icon.classList.add('fa-times');
} else {
  icon.classList.remove('fa-times');
  icon.classList.add('fa-bars');
}











 (function() {
      // 1. PARALLAX SCROLL EFFECT (Webify style – background moves at slower pace)
      const parallaxBg = document.getElementById('parallaxBg');
      if (parallaxBg) {
        function updateParallax() {
          // Move background vertically at 40% speed of scroll
          const scrollPos = window.scrollY;
          const translateY = scrollPos * 0.4;   // smooth parallax factor
          parallaxBg.style.transform = `translateY(${translateY}px)`;
        }
        
        // Throttle using requestAnimationFrame for 60fps performance
        let ticking = false;
        window.addEventListener('scroll', () => {
          if (!ticking) {
            requestAnimationFrame(() => {
              updateParallax();
              ticking = false;
            });
            ticking = true;
          }
        });
        // initial call
        updateParallax();
      }

      // 2. SCROLL REVEAL ANIMATION (elements fade in as they enter viewport)
      const revealElements = document.querySelectorAll('.reveal');
      
      function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealThreshold = 100; // pixels before element becomes visible
        
        revealElements.forEach(el => {
          const rect = el.getBoundingClientRect();
          const isVisible = rect.top < windowHeight - revealThreshold && rect.bottom > 0;
          
          if (isVisible) {
            el.classList.add('visible');
          } else {
            // Optional: keep visible once revealed (uncomment next line if you want them to stay)
            // el.classList.remove('visible'); 
          }
        });
      }
      
      // Run on scroll and on load
      window.addEventListener('scroll', checkReveal);
      window.addEventListener('resize', checkReveal);
      checkReveal();  // immediate check
      
      // 3. SMOOTH ACCESSIBILITY: ensure hero content is legible
      // nothing else needed — but we force a tiny preload for the background
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'image';
      preloadLink.href = 'https://images.pexels.com/photos/1571460/architectural-design-architecture-building-construction-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600';
      document.head.appendChild(preloadLink);
    })();


    












     (function() {
      // SCROLL REVEAL USING INTERSECTION OBSERVER (best performance)
      const fadeElements = document.querySelectorAll('.fade-up');
      
      // Optional: add a little delay for items inside stats if you want them to pop later,
      // but we keep it clean: each .fade-up reveals when it enters viewport.
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Once revealed, you could unobserve for performance:
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: "0px 0px -20px 0px" }); // triggers when 15% visible
      
      fadeElements.forEach(el => {
        observer.observe(el);
      });
      
      // Also manually trigger in case some elements are already visible on load
      // (the observer will catch them if they are above threshold, but we force a check)
      setTimeout(() => {
        fadeElements.forEach(el => {
          const rect = el.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          if (rect.top < windowHeight - 100) {
            el.classList.add('revealed');
            observer.unobserve(el);
          }
        });
      }, 200);
    })();









     (function() {
      // Intersection Observer for scroll reveal (same smooth effect as Webify)
      const fadeElements = document.querySelectorAll('.fade-up');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2, rootMargin: "0px 0px -30px 0px" });
      
      fadeElements.forEach(el => observer.observe(el));
      
      // Also trigger for any already visible elements (just in case)
      setTimeout(() => {
        fadeElements.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) {
            el.classList.add('revealed');
            observer.unobserve(el);
          }
        });
      }, 150);
    })();



       // Parallax background
    const parallaxBg = document.getElementById('parallaxBg');
    window.addEventListener('scroll', () => {
      let scrollPos = window.scrollY;
      if (parallaxBg) {
        parallaxBg.style.transform = `translateY(${scrollPos * 0.4}px)`;
      }
    });

    // Scroll reveal (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-up');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2, rootMargin: "0px 0px -20px 0px" });

    fadeElements.forEach(el => observer.observe(el));