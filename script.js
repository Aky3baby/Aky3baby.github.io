
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
document.addEventListener("DOMContentLoaded", function () {

  /* ================= FADE ANIMATION ================= */
  const fadeElements = document.querySelectorAll(".fade, .reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  });

  fadeElements.forEach(el => {
    if (el) observer.observe(el);
  });


  /* ================= SLIDER ================= */
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  let index = 0;

  function showSlide(i) {
    index = i;

    if (slider) {
      slider.style.transform = `translateX(-${index * 100}%)`;
    }

    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");
  }

  // DOT CLICK
  dots.forEach(dot => {
    dot.addEventListener("click", function () {
      showSlide(Number(this.dataset.index));
    });
  });

  // AUTO SLIDE
  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 5000);


  /* ================= CONTACT FORM ================= */
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const fullName = document.getElementById("fullname")?.value.trim();
      const userEmail = document.getElementById("email")?.value.trim();
      const messageText = document.getElementById("message")?.value.trim();

      if (!fullName || !userEmail || !messageText) {
        alert("Please fill all fields ✨");
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(userEmail)) {
        alert("Invalid email");
        return;
      }

      const data = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: data,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          alert(`✨ Thank you ${fullName}! We will contact you soon.`);
          form.reset();
        } else {
          alert("❌ Something went wrong. Please try again.");
        }
      } catch (error) {
        alert("❌ Something went wrong. Please try again.");
      }

      const btn = form.querySelector(".btn-send");
      if (btn) {
        btn.innerHTML = "Sent ✓";
        setTimeout(() => {
          btn.innerHTML = "Send inquiry";
        }, 1500);
      }
    });
  }

});


   // Wait for full DOM and any images
  document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.servicesSwiper', {
      // sliding parameters — true hero experience
      loop: true,                // infinite loop sliding
      autoplay: {
        delay: 5500,            // smooth interval between slides
        disableOnInteraction: false,  // keeps autoplay after user clicks
        pauseOnMouseEnter: true,      // modern ux: pause on hover over slider
      },
      speed: 700,               // smooth transition speed
      effect: 'slide',          // classic sliding hero
      grabCursor: true,
      slidesPerView: 1,         // one full service slide at a time
      spaceBetween: 0,
      keyboard: {
        enabled: true,          // keyboard navigation (left/right arrow)
        onlyInViewport: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: false,
      },
      // improve mobile gestures
      touchRatio: 1,
      threshold: 5,
      // maintain nice a11y
      a11y: {
        prevSlideMessage: 'Previous service',
        nextSlideMessage: 'Next service',
        firstSlideMessage: 'First service slide',
        lastSlideMessage: 'Last service slide',
        paginationBulletMessage: 'Go to service {{index}}',
      },
      // optional: breakpoints responsiveness for future adjustments (always 1 slide, but ensures correct padding)
      breakpoints: {
        320: { slidesPerView: 1 },
        768: { slidesPerView: 1 },
        1280: { slidesPerView: 1 }
      },
      // ensures that after slide change, focus remains optional, but smooth
      on: {
        init: function () {
          // small fix to avoid hidden content on load
          document.querySelectorAll('.swiper-slide').forEach(slide => {
            slide.style.opacity = '';
          });
        }
      }
    });

    // Pause autoplay on hover for improved UX (already with pauseOnMouseEnter:true)
    // Additionally we manage cursor elegance
    const swiperContainer = document.querySelector('.servicesSwiper');
    if (swiperContainer) {
      swiperContainer.addEventListener('mouseenter', () => {
        if (swiper.autoplay && swiper.autoplay.running) swiper.autoplay.stop();
      });
      swiperContainer.addEventListener('mouseleave', () => {
        if (swiper.autoplay && !swiper.autoplay.running) swiper.autoplay.start();
      });
    }

    // small fallback for any dynamic height changes: ensure swiper updates layout
    window.addEventListener('resize', () => {
      swiper.update();
    });
  });


  




/* =========================
   HERO SLIDER
========================= */

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function changeSlide(){

    slides[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add("active");
}

setInterval(changeSlide, 5000);





  