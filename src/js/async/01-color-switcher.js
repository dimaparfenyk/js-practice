const refs={
    body:document.querySelector("body"),
    startBtn:document.querySelector("[data-start]"),
    closeBtn:document.querySelector("[data-stop]"),
};

let intervalId = null;

refs.closeBtn.disabled = true;

refs.startBtn.addEventListener('click', () => {
    
    toggleBtn(refs.closeBtn,refs.startBtn)

    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
});

refs.closeBtn.addEventListener('click', () => {
   clearInterval(intervalId);
   toggleBtn(refs.startBtn, refs.closeBtn)
});

function toggleBtn(activeBtn, disactiveBtn) {
    activeBtn.disabled = false;
    disactiveBtn.disabled = true;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
