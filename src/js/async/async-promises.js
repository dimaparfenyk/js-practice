// const notification = document.querySelector(".js-alert");
// let timeoutId = null;
// const NOTIFICATION_DELAY = 3000;

// showNotification();

// notification.addEventListener("click", () => {
//     hideNotification();
//     clearInterval(timeoutId);
//     console.log("таймер очищен и не сработает");
// });

// function showNotification() {
//     notification.classList.add("is-visible");

//     timeoutId = setTimeout(() => {
//         console.log("сработал таймер");
//         hideNotification();
//     }, NOTIFICATION_DELAY);
// };

// function hideNotification() {
//     notification.classList.remove("is-visible")
// };

const refs = {
  startBtn: document.querySelector('button[data-action-start]'),
  stopBtn: document.querySelector('button[data-action-stop]'),
  clockface: document.querySelector('.js-clockface'),
};

class Timer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;

    this.init();
    };

  init() {
    const time = this.getTimeComponents(0);
    this.onTick(time);
    };

  start() {
    if (this.isActive) {
      return;
      };
      
    const startTime = Date.now();
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = this.getTimeComponents(deltaTime);

      this.onTick(time);
    }, 1000);
    };

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
    const time = this.getTimeComponents(0);
    this.onTick(time);
    };

  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { hours, mins, secs };
    };

  pad(value) {
    return String(value).padStart(2, '0');
    };
};

const timer = new Timer({
  onTick: updateClockface,
});

refs.startBtn.addEventListener('click', timer.start.bind(timer));
refs.stopBtn.addEventListener('click', timer.stop.bind(timer));

function updateClockface({ hours, mins, secs }) {
  refs.clockface.textContent = `${hours}:${mins}:${secs}`;
};






