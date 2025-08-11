// Global JS extracted from baseof.html and modern-homepage.html

// Helper: toggle mobile menus by id
function toggleMobileMenuById(id) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle('hidden');
}

// Expose two common ids used in templates
function toggleMobileMenu() {
  // Try both IDs used across templates
  toggleMobileMenuById('mobile-menu');
  toggleMobileMenuById('mobileMenu');
}

// Navbar scroll effect (supports both templates)
document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = function () {
      if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
        // baseof uses transparency classes
        navbar.classList.add('bg-white/95');
        navbar.classList.remove('bg-transparent');
      } else {
        navbar.classList.remove('shadow-lg');
        navbar.classList.remove('bg-white/95');
        navbar.classList.add('bg-transparent');
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // IntersectionObserver animations (used on homepage sections)
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  try {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0) scale(1)';
          entry.target.classList.add('animate-slide-up');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.group, .bg-gray-50, section').forEach((el, index) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px) scale(0.95)';
      el.style.transition = `all 0.8s ease-out ${index * 0.1}s`;
      observer.observe(el);
    });
  } catch (e) {
    // Older browsers without IntersectionObserver can ignore
  }

  // Parallax effect for elements with .animate-float
  window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;
    document.querySelectorAll('.animate-float').forEach((shape, index) => {
      const speed = 0.5 + (index * 0.1);
      shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });

  // Ripple click effect for all buttons
  document.querySelectorAll('button').forEach(button => {
    button.style.position = button.style.position || 'relative';
    button.style.overflow = button.style.overflow || 'hidden';
    button.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
});
