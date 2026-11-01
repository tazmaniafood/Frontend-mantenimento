/* Mantenimiento: año en el pie y slider de antojos que muestra un emoji a la vez. */
document.getElementById('anio').textContent=new Date().getFullYear();
(()=>{
const lista=['🍕','🍟','🍔','🌭','🌽','🥤'];
const emo=document.getElementById('emo'),dots=document.getElementById('puntitos');
dots.append(...lista.map(()=>document.createElement('i')));
let i=0;
const marca=()=>[...dots.children].forEach((d,j)=>d.classList.toggle('on',j===i));
marca();
if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
setInterval(()=>{
  emo.className='emo sale';
  setTimeout(()=>{i=(i+1)%lista.length;emo.textContent=lista[i];emo.className='emo entra';marca()},350);
},2200);
})();
