let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerRef = document.querySelector(".timer-display");
let int = null;

document.getElementById("start-timer").addEventListener("click" , () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);
});

function displayTimer() {
  milliseconds += 10;
  seconds = milliseconds == 1000 ? (seconds + 1) % 60 : seconds;
  minutes = seconds == 59 && milliseconds == 1000 ? (minutes + 1) % 60 : minutes;
  hours = minutes == 59 && seconds == 59 && milliseconds == 0 ? hours + 1 : hours;
  milliseconds = milliseconds == 1000 ? 0 : milliseconds;

  let h = String(hours).padStart(2, "0");
  let m = String(minutes).padStart(2, "0");
  let s = String(seconds).padStart(2, "0");
  let ms = String(milliseconds).padStart(3, "0");

  timerRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}

document.getElementById("pause-timer").addEventListener("click", () => {
  clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click", () => {
  clearInterval(int);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timerRef.innerHTML = "00 : 00 : 00 : 000";
});

document.addEventListener("keydown", e => { if (e.key.toLowerCase() === "s") { toStart() } });
document.addEventListener("keydown", e => { if (e.key.toLowerCase() === "p") { toPause() } });
document.addEventListener("keydown", e => { if (e.key.toLowerCase() === "r") { toReset() } });

function toStart(){
    if (int !== null) {
      clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
}

function toPause(){
  clearInterval(int);
}

function toReset(){
  clearInterval(int);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timerRef.innerHTML = "00 : 00 : 00 : 000";
}


