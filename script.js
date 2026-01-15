// ---------- ACCORDIONS: Solo se abre uno a la vez ----------
    const accordions = document.getElementsByClassName('accordion');
    for (let i = 0; i < accordions.length; i++) {
      accordions[i].addEventListener('click', function() {
        // Cierra los demás acordeones
        for (let j = 0; j < accordions.length; j++) {
          if (accordions[j] !== this) {
            accordions[j].classList.remove('active-accordion');
            const otherPanel = accordions[j].nextElementSibling;
            otherPanel.style.maxHeight = null;
            otherPanel.classList.remove('open');
          }
        }
        // Alterna el acordeón actual
        this.classList.toggle('active-accordion');
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
          panel.classList.remove('open');
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px';
          panel.classList.add('open');
        }
      });
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
      if (panel.classList.contains('show')) {
        panel.classList.remove('show');
      } else {
        panel.classList.add('show');
      }
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

    // ---------- FPS COUNTER ----------
    function updateFPS() {
      const fps = Math.floor(Math.random() * (900 - 600 + 1)) + 600;
      document.getElementById('fpsCounter').textContent = "FPS: " + fps;
    }
    setInterval(updateFPS, 100);