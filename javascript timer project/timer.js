const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const restartButton = document.getElementById("restart");

const hoursText = document.getElementById("hours");
const minutesText = document.getElementById("minutes");
const secondsText = document.getElementById("seconds");

let hoursDisplay;
let minutesDisplay;
let secondsDisplay;

let hoursMilliseconds;
let minutesMilliseconds;
let secondsMilliseconds;
let currentTime;
let startingTimeMilliseconds;

let isTimerStarted = false;
let timerStarted;
let timerStopped;
let NewTimer;

const Timer = function() {
    this.getStartingTime = function() {
        currentTime = Date.now();
        hoursMilliseconds = parseInt(hoursText.value) * 3600000;
        minutesMilliseconds = parseInt(minutesText.value) * 60000;
        secondsMilliseconds = parseInt(secondsText.value) * 1000;
        startingTimeMilliseconds = hoursMilliseconds + minutesMilliseconds + secondsMilliseconds;
        console.log (startingTimeMilliseconds);
    }

    // this.displayTime = function() {
    //     hoursDisplay = Math.floor(startingTimeMilliseconds / 3600000);
    //     minutesDisplay = Math.floor((startingTimeMilliseconds % 3600000) / 60000);
    //     secondsDisplay = (Math.floor(startingTimeMilliseconds % 3600000) % 60000) / 1000;

    //     hoursText.value = hoursDisplay;
    //     minutesText.value = minutesDisplay;
    //     secondsText.value = secondsDisplay;
    //     // 3 hours 3 minutes 3 seconds = 10,983,000 ms
    // }

    this.countdownTime = function(){
        if (isTimerStarted === true){
            startingTimeMilliseconds -= 1000;

            hoursDisplay = Math.floor(startingTimeMilliseconds / 3600000);
            minutesDisplay = Math.floor((startingTimeMilliseconds % 3600000) / 60000);
            secondsDisplay = (Math.floor(startingTimeMilliseconds % 3600000) % 60000) / 1000;

            hoursText.value = hoursDisplay;
            minutesText.value = minutesDisplay;
            secondsText.value = secondsDisplay;
            console.log("counting down timer" + startingTimeMilliseconds);
            // 3 hours 3 minutes 3 seconds = 10,983,000 ms
        }
    }
}

startButton.onclick = function(){
    NewTimer = new Timer();

    NewTimer.getStartingTime();
    isTimerStarted = true;
    timerStarted = setInterval(NewTimer.countdownTime, 1000);
}

stopButton.onclick = function(){
    clearInterval(timerStarted);
}


 



