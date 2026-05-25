document.getElementById('menu')?.addEventListener('click', () => {
  document.getElementById('links')?.classList.toggle('open');
});

document.querySelectorAll('[data-tab]').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-tab]').forEach((item) => item.classList.remove('active'));
    document.querySelectorAll('.panel').forEach((panel) => panel.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById(btn.dataset.tab)?.classList.add('active');
  });
});

const events = [
  'Incumplimiento de EPP · lentes no detectados · correo enviado',
  'Zona de riesgo · persona dentro de perímetro · prioridad alta',
  'Postura de riesgo · registrar evento preventivo',
  'Rack B-14 · ocupación cambió · actualizar tablero',
  'Actividad inusual · zona sensible · requiere revisión',
];

const rackEvents = [
  'Rack A-01 · Lleno · bloquear reabasto automático',
  'Rack B-14 · Hay espacio · sugerir acomodo de pallet',
  'Rack C-07 · Vacío · validar contra inventario esperado',
  'Rack D-03 · Cambio de ocupación · enviar alerta a almacén',
];

const ergoEvents = [
  'Ergonomía · brazos sobre hombros · alerta preventiva enviada',
  'Postura crítica · alcance elevado sostenido · revisar estación',
  'Riesgo ergonómico · repetición de brazos elevados · registrar evento',
];

document.getElementById('simulate')?.addEventListener('click', () => {
  document.getElementById('event').textContent = events[Math.floor(Math.random() * events.length)];
});

document.getElementById('simulateRack')?.addEventListener('click', () => {
  document.getElementById('rackEvent').textContent = rackEvents[Math.floor(Math.random() * rackEvents.length)];
});

document.getElementById('simulateErgo')?.addEventListener('click', () => {
  document.getElementById('ergoEvent').textContent = ergoEvents[Math.floor(Math.random() * ergoEvents.length)];
});

const lightMain = document.getElementById('lightMain');
const lightTag = document.getElementById('lightTag');
const lightTitle = document.getElementById('lightTitle');
const lightDesc = document.getElementById('lightDesc');

document.querySelectorAll('[data-light-image]').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-light-image]').forEach((item) => item.classList.remove('active'));
    btn.classList.add('active');
    if (lightMain) {
      lightMain.src = btn.dataset.lightImage;
      lightMain.alt = btn.dataset.lightTitle || 'Demo de luces de seguridad industrial';
    }
    if (lightTag) lightTag.textContent = btn.dataset.lightTag || '';
    if (lightTitle) lightTitle.textContent = btn.dataset.lightTitle || '';
    if (lightDesc) lightDesc.textContent = btn.dataset.lightDesc || '';
  });
});
