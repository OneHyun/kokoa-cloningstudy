const clock = document.getElementById("clock");
function printTime()
{
    const now = new Date();
    const nowTime = String(now.getHours()).padStart(2,"0") 
    + ":" + String(now.getMinutes()).padStart(2,"0");
    clock.innerHTML = nowTime;
}
printTime();
setInterval(printTime, 1000);