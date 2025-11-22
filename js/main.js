document.addEventListener('DOMContentLoaded', ()=>{
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  const form = document.getElementById('contactForm');
  const toggle = document.getElementById('mobileToggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileClose = document.getElementById('mobileClose');

  function openNav(){
    mobileNav.classList.add('open');
    mobileNav.setAttribute('aria-hidden','false');
    toggle.setAttribute('aria-expanded','true');
  }
  function closeNav(){
    mobileNav.classList.remove('open');
    mobileNav.setAttribute('aria-hidden','true');
    toggle.setAttribute('aria-expanded','false');
  }

  toggle && toggle.addEventListener('click', ()=>{
    if(mobileNav.classList.contains('open')) closeNav(); else openNav();
  });
  mobileClose && mobileClose.addEventListener('click', closeNav);
  mobileNav && mobileNav.addEventListener('click', (e)=>{ if(e.target===mobileNav) closeNav(); });

  // WhatsApp Message Sender Integration
  form && form.addEventListener("submit", (ev) => {
    ev.preventDefault();

    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;

    const message = `New Enquiry:%0AName: ${name}%0APhone: ${phone}%0AEmail: ${email}`;
    const yourNumber = "7892987283"; // replace with your WhatsApp number

    window.open(`https://wa.me/${yourNumber}?text=${message}`, "_blank");

    form.reset();
  });
});
