function toggleCardContent(button) {
  const cardContent = button.nextElementSibling;
  cardContent.classList.toggle('open');
  if (cardContent.classList.contains('open')) {
    button.textContent = 'Ver Menos';
  } else {
    button.textContent = 'Ver Más';
  }
}

// ---------- BOTÓN VOLVER ARRIBA ----------
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---------- TOGGLE THEME ----------
function toggleTheme() {
  document.body.classList.toggle('light-mode');
  const btn = document.querySelector('.theme-toggle');
  if (document.body.classList.contains('light-mode')) {
    btn.textContent = 'Modo Oscuro';
  } else {
    btn.textContent = 'Modo Claro';
  }
}

// ---------- TIKTOK ACCORDION ----------
function toggleTikTok() {
  const panel = document.getElementById('tiktokPanel');
  panel.classList.toggle('show');
}

// ---------- MODAL VIDEO ----------
function showVideoModal() {
  document.getElementById('videoModal').style.display = 'flex';
}
function closeVideoModal() {
  document.getElementById('videoModal').style.display = 'none';
}

// ---------- MODAL PAYPAL ----------
function showPaypalModal() {
  document.getElementById('paypalModal').style.display = 'flex';
}
function closePaypalModal() {
  document.getElementById('paypalModal').style.display = 'none';
}

// ---------- MODAL NEQUI ----------
function showNequiModal() {
  document.getElementById('nequiModal').style.display = 'flex';
}
function closeNequiModal() {
  document.getElementById('nequiModal').style.display = 'none';
}

// ---------- MODAL "QUIÉN SOY" ----------
function showAboutModal() {
  document.getElementById('aboutModal').style.display = 'flex';
}
function closeAboutModal() {
  document.getElementById('aboutModal').style.display = 'none';
}
