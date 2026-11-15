/* Mantenimiento: año en el pie y slider de antojos que muestra un emoji a la vez. */
document.getElementById('anio').textContent=new Date().getFullYear();
(()=>{
const lista=['🍕','🍟','🍔','🌭','🌽','🥤'];
const emo=document.getElementById('emo');
let i=0;
if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
setInterval(()=>{
  emo.className='emo sale';
  setTimeout(()=>{i=(i+1)%lista.length;emo.textContent=lista[i];emo.className='emo entra'},350);
},2200);
})();
