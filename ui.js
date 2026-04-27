/**
 * GymScribe — UI Interactions
 * Nav scroll effect · Scroll-reveal observer · Contact form → WhatsApp redirect
 */

/* ── Nav: glass blur on scroll ── */
function initNavScroll() {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });
}

/* ── Scroll-reveal: IntersectionObserver ── */
function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

/* ── Contact / Demo form → WhatsApp redirect ── */
function submitForm(btn) {
  const name  = (document.getElementById('cf-name')  || {}).value?.trim()  || '';
  const gym   = (document.getElementById('cf-gym')   || {}).value?.trim()  || '';
  const phone = (document.getElementById('cf-phone') || {}).value?.trim()  || '';
  const msg   = (document.getElementById('cf-msg')   || {}).value?.trim()  || '';

  if (!phone) {
    alert('Please enter your phone number so we can reach you!');
    return;
  }

  // Build a pre-filled WhatsApp message
  const text = [
    `Hi! I'm interested in GymScribe for my gym. Please send me more details.`,
    name  ? `\nName: ${name}`       : '',
    gym   ? `\nGym: ${gym}`         : '',
    `\nMy Phone: ${phone}`,
    msg   ? `\nMessage: ${msg}`     : '',
  ].join('');

  const waURL = `https://wa.me/919502713510?text=${encodeURIComponent(text)}`;
  window.open(waURL, '_blank');

  // Visual feedback
  btn.style.display = 'none';
  document.getElementById('cf-success').style.display = 'block';
}
