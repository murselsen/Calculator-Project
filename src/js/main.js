const calValueSpan = document.querySelector('#calValue');
const oneNumberSpan = document.querySelector('#oneNumber');
const processSpan = document.querySelector('#process');
const twoNumberSpan = document.querySelector('#twoNumber');
let calValue = 0,
  oneNumber,
  action,
  twoNumber,
  totalNumber,
  numbers = [],
  process = [];

const setCalValue = value => {
  if (calValue === 0) {
    calValue = value;
  } else {
    calValue.toString();
    if (calValue.length < 8) {
      calValue += value;
    } else {
      calValue = calValue.slice(1);
      calValue += value;
    }
  }
  document.getElementById('calValue').innerText = calValue;
};
const setAction = action => {
  oneNumber = calValue;
  oneNumberSpan.style.display = 'block';
  document.querySelector('#oneNumber').style.display = 'block';
};

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('button');
  console.log(buttons);
  buttons.forEach((button, key) => {
    if (button.className === 'number') {
      numbers.push(button);
    } else if (button.className === 'process') {
      process.push(button);
    }
  });

  numbers.forEach(number => {
    number.addEventListener('click', e => {
      // console.log(e.target.innerText);
      setCalValue(e.target.innerText);
    });
  });
  process.forEach(proc => {
    proc.addEventListener('click', e => {
      console.log(e.target.innerText);
    });
  });
});
