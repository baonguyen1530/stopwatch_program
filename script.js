const time_display = document.getElementById("time_display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        setInterval(timer, 1000);
        elapsedTime = Date.now() - startTime;
    }
}

function stop(){
    isRunning = false;
}

function reset(){
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    time_display.textContent = "00:00:00:00";
}

function update(){

}