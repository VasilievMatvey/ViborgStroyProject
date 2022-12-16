const timer = document.querySelector(".time");
const audio = document.querySelector(".audio");
let time = 0;
let minutes = 00;
function setTime() {
  time += 1;

  if (time == 60) {
    time = 00;
    minutes += 1;
  }
  if (time % 10 == 0) {
    audio.play();
  }
  timer.innerHTML = `${minutes}:${time}`;
}
x = setInterval(() => setTime(), 1000);
