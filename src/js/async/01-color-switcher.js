const refs={
    body:document.querySelector("body"),
    startBtn:document.querySelector("[data-start]"),
    closeBtn:document.querySelector("[data-stop]"),
};

let intervalId = null;
refs.closeBtn.disabled = true;
refs.closeBtn.classList.add("is-active");

refs.startBtn.addEventListener('click', () => {
    
    toggleBtn(refs.closeBtn, refs.startBtn);

    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
});

refs.closeBtn.addEventListener('click', () => {
   clearInterval(intervalId);
    toggleBtn(refs.startBtn, refs.closeBtn);
});

function toggleBtn(activeBtn, disactiveBtn) {
    activeBtn.disabled = false;
    disactiveBtn.disabled = true;
    activeBtn.classList.toggle("is-active");
    disactiveBtn.classList.toggle("is-active");
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const colorGenerator = {

//     intervalId: null,
//     isActive: false,
   
//     start() {
//         if (this.isActive) return;
        
//         refs.startBtn.disabled = true;
//         refs.stopBtn.disabled = false;
//         this.isActive = true;

//         this.intervalId = setInterval(() => {
//             refs.body.style.background = getRandomHexColor();
//         }, 1000);
//     },

//     stop() {
//         clearInterval(this.intervalId);
//         this.isActive = false;
//         refs.stopBtn.disabled = true;
//         refs.startBtn.disabled = false;
//     },
// };

// refs.startBtn.addEventListener('click', () => { colorGenerator.start() });
// refs.stopBtn.addEventListener('click', () => { colorGenerator.stop() });