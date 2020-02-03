const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const restartButton = document.getElementById("restart");

const inputFields = document.querySelectorAll("input");

const hoursText = document.getElementById("hours");
const minutesText = document.getElementById("minutes");
const secondsText = document.getElementById("seconds");

let hours;
let minutes;
let seconds;

let hoursMilliseconds;
let minutesMilliseconds;
let secondsMilliseconds;
let currentTime;
let startingTimeMilliseconds;

let isTimerStarted = false;
let timerStarted;
let timerStopped;


hoursText.onfocus = function(){
    if (hoursText.value === "00"){
        hoursText.value = "";
    }
}
hoursText.onblur = function(){
    if (hoursText.value === "" || hoursText.value === 0){
        hoursText.value = "00";
    }
}
hoursText.oninput = function () {
    if (this.value.length > 2)
        this.value = this.value.slice(0,2); 
}

minutesText.onfocus = function(){
    if (minutesText.value === "00"){
        minutesText.value = "";
    }
}
minutesText.onblur = function(){
    if (minutesText.value === "" || minutesText.value === 0){
        minutesText.value = "00";
    }
}
minutesText.oninput = function () {
    if (this.value.length > 2)
        this.value = this.value.slice(0,2); 
}

secondsText.onfocus = function(){
    if (secondsText.value === "00"){
        secondsText.value = "";
    }
}
secondsText.onblur = function(){
    if (secondsText.value === "" || secondsText.value === 0){
        secondsText.value = "00";
    }
}
secondsText.oninput = function () {
    if (this.value.length > 2)
        this.value = this.value.slice(0,2); 
}




const Timer = function() {
    const self = this;

    this.displayTime = function() {
        if (hours < 10){
            hoursText.value = "0" + hours;
        }
        else {
            hoursText.value = hours;
        }

        if (minutes < 10){
            minutesText.value = "0" + minutes;
        }
        else {
            minutesText.value = minutes;
        }

        if (seconds < 10){
            secondsText.value = "0" + seconds;
        }
        else {
            secondsText.value = seconds;
        }
    }

    this.getStartingTime = function() {
        currentTime = Date.now();

        // hoursText.value = parseInt(hoursText.value);
        // minutesText.value = parseInt(minutesText.value);
        // secondsText.value = parseInt(secondsText.value);

        hoursMilliseconds = parseInt(hoursText.value) * 3600000;
        minutesMilliseconds = parseInt(minutesText.value) * 60000;
        secondsMilliseconds = parseInt(secondsText.value) * 1000;
        startingTimeMilliseconds = hoursMilliseconds + minutesMilliseconds + secondsMilliseconds;
        
        hours = Math.floor(startingTimeMilliseconds / 3600000);
        minutes = Math.floor((startingTimeMilliseconds % 3600000) / 60000);
        seconds = (Math.floor(startingTimeMilliseconds % 3600000) % 60000) / 1000;
        self.displayTime();
        console.log (startingTimeMilliseconds);
    }



    this.countdownTime = function(){
        if (startingTimeMilliseconds === 0){
            clearInterval(timerStarted);
            hours = 0;
            minutes = 0;
            seconds = 0;
            self.displayTime();
        }
        else if (startingTimeMilliseconds > 0){
            startingTimeMilliseconds -= 1000;
        }

        hours = Math.floor(startingTimeMilliseconds / 3600000);
        minutes = Math.floor((startingTimeMilliseconds % 3600000) / 60000);
        seconds = (Math.floor(startingTimeMilliseconds % 3600000) % 60000) / 1000;
        self.displayTime();
    }
}

let NewTimer = new Timer();


startButton.onclick = function(){
    NewTimer.getStartingTime();
    timerStarted = setInterval(NewTimer.countdownTime, 1000);
}

stopButton.onclick = function(){
    clearInterval(timerStarted);
}

restartButton.onclick = function(){
    clearInterval(timerStarted);

    hours = 0;
    minutes = 0;
    seconds = 0;

    NewTimer.displayTime();
}


 



