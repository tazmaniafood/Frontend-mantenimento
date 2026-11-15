/* Mantenimiento: año en el pie y aro donde pasan los antojos de neón, uno a la vez. */
document.getElementById('anio').textContent=new Date().getFullYear();
(()=>{
const lista=['pizza','salchipapa','burguer','perro','mazorcada','bebida'].map(k=>'IMG/Iconos/'+k+'-neon.svg?v=9');
const emo=document.getElementById('emo');
let i=0;
if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
setInterval(()=>{
  emo.className='aro__antojo sale';
  setTimeout(()=>{i=(i+1)%lista.length;emo.src=lista[i];emo.className='aro__antojo entra'},350);
},2200);
})();
