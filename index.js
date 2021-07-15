const minututero = document.querySelector('.minutos');
const horario = document.querySelector('.horas');
const segundero = document.querySelector('.segundos');

setInterval(() => {
    const now = new Date()
    console.log(now.getHours());
    console.log(now.getMinutes());
    console.log(now.getSeconds());

    const secondsDegrees = now.getSeconds()/60*360;
    const hoursDegrees = now.getHours()/12*360;
    const minutesDegrees = now.getMinutes()/(60)*360;

    segundero.style.transform = `rotate(${secondsDegrees+90}deg)`;
    minututero.style.transform = `rotate(${minutesDegrees+90}deg)`
    horario.style.transform = `rotate(${hoursDegrees+90}deg)`
}, 1000);
