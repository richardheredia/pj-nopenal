(function () {
  const title = document.getElementById('resultTitle');
  const text = document.getElementById('resultText');
  const status = document.getElementById('resultStatus');
  const icon = document.getElementById('resultIcon');

  if (!title || !text || !status || !icon) return;

  const params = new URLSearchParams(window.location.search);
  const estado = (params.get('estado') || 'aprobado').toLowerCase();

  if (estado === 'observado') {
    title.textContent = 'Validación observada';
    text.textContent = 'La operación quedó marcada como observada en esta demostración. Puedes reenviar el flujo o revisar los datos simulados.';
    status.textContent = 'Observado';
    icon.textContent = '!';
    icon.classList.remove('success');
    icon.classList.add('warning');
    return;
  }

  title.textContent = 'Validación completada';
  text.textContent = 'La identidad fue validada correctamente dentro del flujo de demostración. Ya puedes continuar al siguiente paso del servicio digital.';
  status.textContent = 'Aprobado';
  icon.textContent = '✓';
  icon.classList.remove('warning');
  icon.classList.add('success');
})();
