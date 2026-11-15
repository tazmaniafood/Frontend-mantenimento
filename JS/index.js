/* Mantenimiento: año en el pie y slider que muestra una criatura de neón a la vez. */
document.getElementById('anio').textContent=new Date().getFullYear();
(()=>{
const lista=['torito-neon','marimonda-neon','sombrero-vueltiao-neon'].map(n=>'IMG/Criaturas/'+n+'.webp?v=8');
lista.forEach(src=>{const im=new Image();im.src=src;});
const emo=document.getElementById('emo');
let i=0;
if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
setInterval(()=>{
  emo.className='emo sale';
  setTimeout(()=>{i=(i+1)%lista.length;emo.src=lista[i];emo.className='emo entra'},350);
},2200);
})();
