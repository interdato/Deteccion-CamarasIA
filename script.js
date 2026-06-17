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
const lightStandard = document.getElementById('lightStandard');

const lightStandards = {
  'Grúas': 'Apoya advertencias visuales para maniobras de izaje y zonas de riesgo conforme a NOM-006-STPS-2023, NOM-026-STPS-2008, ISO 7010 e ISO 12100:2010.',
  'Montacargas': 'Refuerza la separación visual entre equipo móvil y peatones en manejo de materiales, alineado a NOM-006-STPS-2023, NOM-026-STPS-2008 e ISO 7010.',
  'Pasillos': 'Satisface necesidades de señalización de rutas, cruces y zonas seguras conforme a NOM-026-STPS-2008, ISO 7010 e ISO 45001:2018.',
  'Perímetros': 'Ayuda a delimitar zonas de no ingreso y puntos de operación de maquinaria bajo NOM-004-STPS-1999, NOM-026-STPS-2008, ISO 7010 e ISO 12100:2010.',
  'Dirección': 'Apoya señales direccionales, advertencias y guías de flujo conforme a NOM-026-STPS-2008 e ISO 7010.',
  'Noche': 'Refuerza condiciones de visibilidad en patios y áreas de baja iluminación conforme a NOM-025-STPS-2008 y NOM-026-STPS-2008.',
  'Equipo': 'Complementa controles visuales en maquinaria y áreas de trabajo conforme a NOM-004-STPS-1999, NOM-026-STPS-2008 e ISO 12100:2010.',
  'Producto': 'Permite implementar patrones y colores de advertencia compatibles con NOM-026-STPS-2008 e ISO 7010.',
};

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
    if (lightStandard) lightStandard.textContent = lightStandards[btn.dataset.lightTag] || lightStandards.Producto;
  });
});
