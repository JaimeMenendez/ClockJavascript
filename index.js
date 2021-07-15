const minututero = document.querySelector('.minutos');
const horario = document.querySelector('.horas');
const segundero = document.querySelector('.segundos');

const now = new Date();
let s = now.getSeconds()/60*360;
let m = now.getMinutes()/60*360+now.getSeconds()*0.1;
let h = now.getHours()/(12)*360 + now.getMinutes()*0.5;

const ds = 1/60*360;
const dm = 1/(60*60)*360;
const dh = 1/(60*60*12)*360;

setInterval(() => {
    s = s + ds;
    m = m + dm;
    h = h + dh
    
    segundero.style.transform = `rotate(${s+90}deg)`;
    minututero.style.transform = `rotate(${m+90}deg)`;
    horario.style.transform = `rotate(${h+90}deg)`;
}, 1000);
