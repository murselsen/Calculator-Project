const calValueSpan = document.querySelector('#calValue');
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
    if (calValue.length < 10) {
      calValue += value;
    } else {
      calValue = calValue.slice(1);
      calValue += value;
    }
  }
  document.getElementById('calValue').innerText = calValue;
};
const setAction = action => {
  document.querySelector('#oneNumber').style.display = 'block';
  oneNumber = calValue;
  document.querySelector('#oneNumber').nodeValue = oneNumber;
  // document.querySelector('#oneNumber').style.display = 'block';
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
      document.querySelector('#oneNumber').innerText = e.target.innerText;
      console.log(e.target.innerText);

      switch (e.target) {
        case '%':
          break;

        default:
          setAction(e.target.innerText);
          break;
      }
    });
  });
});
