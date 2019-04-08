window.addEventListener('load', () => {
    setInterval(adjustClock, 1000);
});

let hourHand = document.querySelector('.hour-hand');
let minuteHand = document.querySelector('.minute-hand');
let secondHand = document.querySelector('.second-hand');
let d, h, m, s, hourDeg, date, day;
let dateElem = document.querySelector('.date');
let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function adjustClock() {
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    hourDeg = h * 30 + m / 2;

    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${m * 6}deg)`;
    secondHand.style.transform = `rotate(${s * 6}deg)`;

    adjustDate();
}

function adjustDate() {
    day = d.getDay();
    date = d.getDate();

    dateElem.innerHTML = `${days[day]}, ${date}`;
}