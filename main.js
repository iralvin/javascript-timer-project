console.log("hello world");

let timer = document.getElementById("timer");
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let displayMilliseconds;
let displaySeconds;
let displayMinutes;
let displayHours;

function StopWatch(){
    milliseconds++;

    if (milliseconds === 100){
        milliseconds = 0;
        seconds++;
    
        if (seconds === 60){
            seconds = 0;
            minutes++;

            if (minutes === 60){
                minutes = 0;
                hours++;
            }
        }
    }

    if (milliseconds < 10){
        displayMilliseconds = "0" + milliseconds;
    }
    else {
        displayMilliseconds = milliseconds;
    }


    if (seconds < 10){
        displaySeconds = "0" + seconds;
    }
    else{
        displaySeconds = seconds;
    }

    if (minutes < 10){
        displayMinutes = "0" + minutes;
    }
    else {
        displayMinutes = minutes;
    }

    if (hours < 10){
        displayHours = "0" + hours;
    }
    else {
        displayhours = hours;
    }

    timer.innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds + ":" + displayMilliseconds;

}

window.setInterval(StopWatch,10);
