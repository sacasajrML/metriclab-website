(function () {
  var WEBHOOK = 'https://n8n.metriclab.tech/webhook/contacto-web';
  var form = document.getElementById('contact-form');
  var ok = document.getElementById('ok');
  var again = document.getElementById('again');
  var status = document.getElementById('status');
  var send = document.getElementById('send');
  if (!form) return;
  var defaultStatus = status.textContent;

  form.querySelectorAll('.chip').forEach(function (chip) {
    chip.addEventListener('click', function () {
      var on = chip.getAttribute('aria-pressed') === 'true';
      chip.setAttribute('aria-pressed', on ? 'false' : 'true');
    });
  });

  function setStatus(text, isError) {
    status.textContent = text;
    status.style.color = isError ? '#9A4A30' : '#5A6475';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    var data = {
      nombre: form.nombre.value.trim(),
      empresa: form.empresa.value.trim(),
      correo: form.correo.value.trim(),
      telefono: form.telefono.value.trim(),
      fuentes: Array.prototype.map.call(
        form.querySelectorAll('.chip[aria-pressed="true"]'),
        function (c) { return c.dataset.value; }
      ),
      mensaje: form.mensaje.value.trim(),
      sitio: form.sitio.value,
      pagina: location.href
    };
    send.disabled = true;
    send.textContent = 'Enviando...';
    setStatus('Enviando tu mensaje...', false);

    fetch(WEBHOOK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(function (r) {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        form.hidden = true;
        ok.hidden = false;
        ok.focus();
      })
      .catch(function () {
        setStatus('No pudimos enviar tu mensaje. Escríbenos por WhatsApp al +504 9469-4270.', true);
      })
      .finally(function () {
        send.disabled = false;
        send.textContent = 'Enviar mensaje';
      });
  });

  if (again) {
    again.addEventListener('click', function () {
      form.reset();
      form.querySelectorAll('.chip').forEach(function (c) { c.setAttribute('aria-pressed', 'false'); });
      setStatus(defaultStatus, false);
      ok.hidden = true;
      form.hidden = false;
      form.nombre.focus();
    });
  }
})();
