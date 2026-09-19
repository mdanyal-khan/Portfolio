// ===================================================
// THEME TOGGLE
// ===================================================
const themeToggle = document.getElementById('themeToggle');
const rootEl = document.documentElement;

function setTheme(theme) {
  rootEl.setAttribute('data-theme', theme);
}

themeToggle.addEventListener('click', () => {
  const current = rootEl.getAttribute('data-theme');
  setTheme(current === 'light' ? 'dark' : 'light');
});

// Default to dark (matches design brief); no persistence needed for single-page demo.
setTheme('dark');

// ===================================================
// STICKY NAV + SCROLL SPY
// ===================================================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  backToTop.classList.toggle('visible', window.scrollY > 600);

  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===================================================
// MOBILE MENU
// ===================================================
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('open');
  const expanded = hamburger.classList.contains('active');
  hamburger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  hamburger.setAttribute('aria-label', expanded ? 'Close menu' : 'Open menu');
});

mobileMenu.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
  });
});

// ===================================================
// TYPING ANIMATION
// ===================================================
const roles = [
  'Flutter mobile apps',
  'Flutter Desktop/Laptop apps',
  'C++ programs',
  'Python scripts',
  'Real-World software',
  'Flutter apps in Charsadda',
  'Train AI Models'
];

const typedTextEl = document.getElementById('typedText');
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = roles[roleIndex];

  if (!deleting) {
    typedTextEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1800);
      return;
    }
  } else {
    typedTextEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeLoop, deleting ? 40 : 70);
}

typeLoop();

// ===================================================
// SCROLL REVEAL
// ===================================================
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach((el) => revealObserver.observe(el));

// ===================================================
// ANIMATED COUNTERS
// ===================================================
const statNumbers = document.querySelectorAll('.stat-number');

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseFloat(el.getAttribute('data-target'));
      let current = 0;
      const duration = 1400;
      const startTime = performance.now();

      function step(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        current = Math.floor(eased * target);
        el.textContent = current;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target;
        }
      }
      requestAnimationFrame(step);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.4 });

statNumbers.forEach((el) => counterObserver.observe(el));

// ===================================================
// PROJECT FILTERING
// ===================================================
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterBtns.forEach((b) => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach((card) => {
      const categories = card.getAttribute('data-category');
      if (filter === 'all' || categories.includes(filter)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ===================================================
// CERTIFICATE PREVIEW (full-size dialog)
// ===================================================
const certOpen = document.getElementById('certOpen');
const certDialog = document.getElementById('certDialog');

if (certOpen && certDialog) {
  const certFull = document.getElementById('certFull');
  const certClose = document.getElementById('certClose');

  certOpen.addEventListener('click', () => {
    // Load the large image only when it's first needed.
    if (!certFull.getAttribute('src')) certFull.setAttribute('src', certFull.dataset.src);
    if (typeof certDialog.showModal === 'function') {
      certDialog.showModal();
    } else {
      window.open(certFull.dataset.src, '_blank', 'noopener');
    }
  });

  certClose.addEventListener('click', () => certDialog.close());

  // Clicking the dimmed backdrop (the dialog element itself) closes it.
  certDialog.addEventListener('click', (e) => {
    if (e.target === certDialog) certDialog.close();
  });
}

// ===================================================
// TESTIMONIAL CAROUSEL
// ===================================================
const track = document.getElementById('testimonialTrack');
const dotsContainer = document.getElementById('testimonialDots');
const testimonialCards = document.querySelectorAll('.testimonial-card');
let testimonialIndex = 0;
let carouselTimer;

testimonialCards.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.classList.add('testimonial-dot');
  dot.setAttribute('aria-label', `Show testimonial ${i + 1}`);
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToTestimonial(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.testimonial-dot');

function goToTestimonial(index) {
  testimonialIndex = index;
  track.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
}

function nextTestimonial() {
  goToTestimonial((testimonialIndex + 1) % testimonialCards.length);
}

function startCarousel() {
  carouselTimer = setInterval(nextTestimonial, 6000);
}

function resetCarousel() {
  clearInterval(carouselTimer);
  startCarousel();
}

dots.forEach((dot) => dot.addEventListener('click', resetCarousel));
startCarousel();

// ===================================================
// CONTACT FORM
// ===================================================
const form = document.getElementById("contactForm");
const status = document.getElementById("form-status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  try {
    const response = await fetch(
      "https://formspree.io/f/xgobrppb",
      {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json"
        }
      }
    );

    if (response.ok) {
      status.textContent = "Message sent successfully.";
      status.style.color = "#22c55e";
      form.reset();
      setTimeout(() => {
        status.textContent = "";
      }, 5000);
    } else {
      status.textContent = "Failed to send message.";
      status.style.color = "#ef4444";
    }
  } catch (error) {
    status.textContent = "Something went wrong.";
    status.style.color = "#ee7d0b";
  }
});

// ===================================================
// SMOOTH ANCHOR SCROLL (account for fixed nav)
// ===================================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const offset = 90;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});