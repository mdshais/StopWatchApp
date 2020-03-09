
let minutes = 0;
let seconds = 0;
let milli = 0;
let timerID;

const minutesArea = document.querySelector('.minutes');
const secondsArea = document.querySelector('.seconds');
const milliArea = document.querySelector('.milli');

const limiterArea = document.querySelector('.limiter');

const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');


console.log(startBtn,stopBtn, resetBtn);
console.log(minutesArea, secondsArea, milliArea);





function startHandler(e) {
    console.log(e.currentTarget);
    limiterArea.classList.toggle('blink');
    timerID = setInterval(() => {
        seconds += 1;
        minutes += seconds >= 60? 1 : 0;
        seconds = seconds % 60;
        secondsArea.innerHTML = seconds >= 10 ? seconds : `0${seconds}`;
        minutesArea.innerHTML = minutes >= 10 ? minutes : `0${minutes}`;
       
    }, 1000);
}


function stopHandler(e) {
    console.log(e.currentTarget);
    clearInterval(timerID);
    limiterArea.classList.toggle('blink');
}

function resetHandler(e) {
    console.log(e.currentTarget);
    clearInterval(timerID);
    seconds = 0;
    minutes = 0;
    secondsArea.innerHTML = "00";
    minutesArea.innerHTML = "00";
    limiterArea.classList.toggle('blink');
}

startBtn.addEventListener('click',startHandler);
stopBtn.addEventListener('click',stopHandler);
resetBtn.addEventListener('click',resetHandler);