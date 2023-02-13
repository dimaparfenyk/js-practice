import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  datetimePicker: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  daysVal: document.querySelector('[data-days]'),
  hoursVal: document.querySelector('[data-hours]'),
  minsVal: document.querySelector('[data-minutes]'),
  secondsVal: document.querySelector('[data-seconds]'),
};

let deltaTime = 0;
let isActive = true;

activateButton();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const endTime = selectedDates[0].getTime();
    const currentTime = this.config.defaultDate.getTime();

    deltaTime = endTime - currentTime;
    
    if ( deltaTime < 0) {
      alert("Choose only future date")
      return;
    };
    isActive = false;
    activateButton();
   
    return deltaTime;
  },
};

flatpickr(refs.datetimePicker, options);
refs.startBtn.addEventListener('click', handleStartButtonClick);

function handleStartButtonClick() {
  isActive = true;
  activateButton();

  const intervalId = setInterval(() => {
  
    if (deltaTime < 1000) {
      clearInterval(intervalId);
      return;
    };
    
    deltaTime -= 1000;
    
    const convertedTime = convertMs(deltaTime);

    populateTimerValues(convertedTime);
}, 1000);
};

function populateTimerValues(time) {
  const { days, hours, minutes, seconds } = time;

  refs.daysVal.textContent = days;
  refs.hoursVal.textContent = hours;
  refs.minsVal.textContent = minutes;
  refs.secondsVal.textContent = seconds;
};

function activateButton() {
  if (isActive) {
    refs.startBtn.disabled = true;
    refs.startBtn.classList.add("is-active");
    return;
  };
    refs.startBtn.disabled = false;
    refs.startBtn.classList.remove("is-active");
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};
