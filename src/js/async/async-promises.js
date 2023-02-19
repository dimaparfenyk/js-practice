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

// let person = {
//   updateName: function (newName) {
//   return  this.name = newName;
//   },
//   greet: function () {
//     return alert(`Hi, ${this.name} ${this.surname}!`);
//   },
//   log: function () {
//   return  console.log(this)
//   },
// };

// let detective = Object.create(person)
// detective.name = "Fred";
// detective.surname = "Stone";
// detective.greet();


// let sailor = Object.create(person);
// sailor.name = "Tom";
// sailor.surname = "Gustav";
// sailor.skills=['swim','run','drink']
// console.dir(detective.__proto__===sailor.__proto__);
// sailor.updateName('Billy')
// sailor.log()

// let seawolf = Object.create(sailor);
// seawolf.experience = 85;
// seawolf.gainXP = function () {
//   this.experience += 1
// }

// seawolf.gainXP()
// console.dir(seawolf)

const Sailor = function ({name,age,xp}={}) {
  this.name = name;
  this.age = age;
  this.xp = xp;
};

Sailor.prototype.gainXp = function (value) {
  return this.xp += value;
};
Sailor.prototype.getName = function () {
  return this.name;
};

const shipboy = new Sailor({name:'Tommy', age:19, xp:12});
const midshipman = new Sailor({name:'Billy', age:23, xp:27});
shipboy.gainXp(5)
midshipman.gainXp(10)
// console.log(Sailor.prototype===shipboy.__proto__)
// console.log(shipboy.gainXp === midshipman.gainXp)
// console.log(shipboy.getName===midshipman.getName)
console.log('shipboy',shipboy);
console.log('midshipman',midshipman);
// console.log(typeof(Sailor))
// console.log(typeof (new Sailor()))




