/* Volvemos pronto: el año en el pie y los días del horario en el idioma de la página. */
document.getElementById('anio').textContent = new Date().getFullYear();
if (document.documentElement.lang === 'en') {
  document.querySelectorAll('.horario__dias span').forEach((d, i) => { d.textContent = 'MTWTFSS'[i]; });
}
