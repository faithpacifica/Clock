const hourHand = document.querySelector('.hour');
const minuteHand = document.querySelector('.minute');
const secondHand = document.querySelector('.second');

function updateClock() {
    const now = new Date();

    const seconds = now.getSeconds() / 60;
    const minutes = (seconds + now.getMinutes()) / 60;
    const hours = (minutes + now.getHours()) / 12;

    setRotation(secondHand, seconds);
    setRotation(minuteHand, minutes);
    setRotation(hourHand, hours);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

updateClock();
setInterval(updateClock, 1000);