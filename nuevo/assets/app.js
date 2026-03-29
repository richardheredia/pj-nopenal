
const fallbackHeader = `
<header class="site-header">
  <div class="header-left">
    <a class="header-home-link" href="index.html" aria-label="Ir al inicio">
      <div class="eje-logo" aria-label="Logo EJE">
        <div class="eje-logo-mark">
          <span class="eje-main">EJE</span>
          <span class="eje-sub">Escuela Nacional de Formación</span>
        </div>
      </div>
      <span class="header-divider" aria-hidden="true"></span>
    </a>
  </div>
  <div class="header-title">Plataforma de servicios digitales</div>
  <div class="header-right">
    <a href="index.html" aria-label="Inicio del Poder Judicial">
      <div class="pj-logo" aria-label="Logo del Poder Judicial del Perú">
        <div class="pj-logo-mark">
          <span class="pj-main">PJ</span>
          <span class="pj-sub">Poder Judicial<br>del Perú</span>
        </div>
      </div>
    </a>
  </div>
</header>`;

const fallbackFooter = `
<footer class="site-footer">
  <div class="ornament-strip" aria-hidden="true"></div>
  <div class="footer-band" aria-hidden="true"></div>
  <div class="footer-light" aria-hidden="true">
    <div class="footer-spacer"></div>
  </div>
</footer>`;

async function loadPartial(targetId, url, fallback) {
  const target = document.getElementById(targetId);
  if (!target) return;
  try {
    const response = await fetch(url, { cache: 'no-store' });
    if (!response.ok) throw new Error('No se pudo cargar el parcial');
    target.innerHTML = await response.text();
  } catch (error) {
    target.innerHTML = fallback;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadPartial('header-partial', 'partials/header.html', fallbackHeader);
  loadPartial('footer-partial', 'partials/footer.html', fallbackFooter);
});
