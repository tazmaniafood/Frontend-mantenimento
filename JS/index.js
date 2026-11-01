/* Página de mantenimiento: va cambiando el mensaje del "horno" y llena la barra poco a poco. */
(()=>{
const pasos=['Amasando la masa…','Echándole la salsa de la casa…','Rayando el queso…','Poniendo los toppings…','Calentando el horno…','Casi listo, ¡huele delicioso!'];
const txt=document.getElementById('paso'),bar=document.getElementById('bar');
let i=0;
const tick=()=>{
  txt.classList.remove('in');void txt.offsetWidth;
  txt.textContent=pasos[i];txt.classList.add('in');
  bar.style.width=Math.round(((i+1)/pasos.length)*100)+'%';
  i=(i+1)%pasos.length;
};
tick();
setInterval(tick,2600);
})();
