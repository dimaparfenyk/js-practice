import {Notify} from 'notiflix';

const form = document.querySelector('.form');
let timerId = null;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let delay = 0;
  const amount = form.elements.amount.value;
  
  for (let i = 1; i <= amount; i += 1) {
    if (i === 1) {
      delay= Number (form.elements.delay.value)
    } else {
      delay += Number(form.elements.step.value);
    };
    
    createPromise(i, delay)
      .then(({ position, delay }) => {
       Notify.success(`Position: ${position}; Delay: ${delay}`)
      })
      .catch(({ position, delay }) => {
          Notify.failure(`Position: ${position}; Delay: ${delay}`);
      });
  };
  form.reset();
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
  timerId= setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
  }, delay);
  });
};






