const app = {
  // Constants
  status: false,
  calValue: 0,
  oneNumber: 0,
  twoNumber: 0,
  totalNumber: 0,
  action: NaN,
  numbers: [],
  process: [],
  // DOM Elements
  calValueSpan: document.querySelector('#calValue'),
  processSpan: document.querySelector('#process'),
  oneNumberSpan: document.querySelector('#oneNumber'),
  twoNumberSpan: document.querySelector('#twoNumber'),
  historyToggleButton: document.querySelector('#history-toggle'),
  historyContainer: document.querySelector('#history-container'),
  allDeleteButton: document.querySelector('#allDelete'),
  conclusionButton: document.querySelector('#conclusion'),
  singleDeleteButton: document.querySelector('#singleDelete'),
  appHistoryList: document.querySelector('#app-history'),
  // Methods
  set: {
    status: bool => (app.status = bool),
    calValue: value => {
      if (!app.status) {
        if (app.calValue === 0) {
          app.calValue = value;
        } else {
          if (app.calValue.length < 10) {
            app.calValue += value;
          } else {
            app.calValue = app.calValue.slice(1);
            app.calValue += value;
          }
        }
        app.calValueSpan.innerText = app.calValue.toString();
      } else {
        app.calValue = value;
        app.calValueSpan.innerText = value;
        app.set.status(false);
      }
      // console.log('Cal Value: ' + app.calValue);
    },
    action: process => {
      app.action = process.toString();
      app.processSpan.style.display = 'block';
      app.processSpan.innerText = process.toString();
    },
    oneNumber: value => {
      if (value) {
        app.oneNumber = app.calValue;
        app.oneNumberSpan.style.display = 'block';
        app.oneNumberSpan.innerText = app.calValue.toString();
      } else {
        app.oneNumberSpan.style.display = 'none';
        app.oneNumberSpan.innerText = '';
      }
    },
    twoNumber: value => {
      if (value) {
        app.twoNumber = app.calValue;
        app.twoNumberSpan.style.display = 'block';
        app.twoNumberSpan.innerText = app.calValue.toString();
      } else {
        app.twoNumberSpan.style.display = 'none';
        app.twoNumberSpan.innerText = '';
      }
    },
    totalNumber: value => {
      s1 = parseInt(app.oneNumber);
      // console.log("S1:",s1, "typeof s1:",typeof s1);
      app.set.twoNumber(true);
      s2 = parseInt(app.calValue);
      // console.log("S2:",s2, "typeof s2:",typeof s2);
      app.twoNumber = s2;
      switch (app.action) {
        case '+':
          totalNumber = s1 + s2;
          app.calValue = totalNumber;
          app.calValueSpan.innerText = totalNumber.toString();
          app.set.status(true);
          app.totalNumber = totalNumber;

          break;
        case '-':
          totalNumber = s1 - s2;
          app.calValue = totalNumber;
          app.calValueSpan.innerText = totalNumber.toString();
          app.set.status(true);
          app.totalNumber = totalNumber;
          break;
        case 'x':
          totalNumber = s1 * s2;
          app.calValue = totalNumber;
          app.calValueSpan.innerText = totalNumber.toString();
          app.set.status(true);
          app.totalNumber = totalNumber;

          break;
        case '/':
          totalNumber = s1 / s2;
          app.calValue = totalNumber;
          app.calValueSpan.innerText = totalNumber.toString();
          app.set.status(true);
          app.totalNumber = totalNumber;

          break;
        case '%':
          totalNumber = s1 % s2;
          app.calValue = totalNumber;
          app.calValueSpan.innerText = totalNumber.toString();
          app.set.status(true);
          app.totalNumber = totalNumber;

          break;
        default:
          break;
      }
    },
  },
  clear: {
    calValue: () => {
      app.calValue = 0;
      app.calValueSpan.innerText = app.calValue.toString();
    },
    oneNumber: () => {
      app.oneNumber = 0;
      app.oneNumberSpan.display = 'none';
      app.oneNumberSpan.innerText = '';
    },
    twoNumber: () => {
      app.twoNumber = 0;
      app.twoNumberSpan.display = 'none';
      app.twoNumberSpan.innerText = '';
    },
    action: () => {
      app.action = NaN;
      app.processSpan.style.display = 'none';
      app.processSpan.innerText = '';
    },
  },
};

app.historyToggleButton.addEventListener('click', e => {
  let d = app.historyContainer.computedStyleMap().get('display').value;
  if (d === 'none') {
    app.historyContainer.style.display = 'block';
  } else {
    app.historyContainer.style.display = 'none';
  }
});

const buttons = document.querySelectorAll('button');
buttons.forEach((button, key) => {
  if (button.className === 'number') {
    // Add Number Buttons to the list
    app.numbers.push(button);
  } else if (button.className === 'process') {
    // Add action buttons to the list
    app.process.push(button);
  }
});

app.numbers.forEach(number => {
  number.addEventListener('click', e => {
    // console.log(e.target.innerText);
    if (app.status) {
      app.clear.calValue();
      app.clear.oneNumber();
      app.clear.twoNumber();
      app.clear.action();
      app.set.calValue(e.target.innerText);
      app.calValueSpan.style.fontSize = '60px';
    } else {
      app.set.calValue(e.target.innerText);
    }
  });
});

app.process.forEach(proc => {
  proc.addEventListener('click', e => {
    app.set.action(proc.innerText);
    app.set.oneNumber(true);
    app.calValue = 0;
    app.calValueSpan.innerText = 0;
  });
});

app.allDeleteButton.addEventListener('click', e => {
  app.clear.calValue();
  app.clear.oneNumber();
  app.clear.twoNumber();
  app.clear.action();
  app.calValueSpan.style.fontSize = '60px';
});

app.conclusionButton.addEventListener('click', e => {
  app.set.totalNumber();
  console.log('Total Number : ', app.calValueSpan.innerText.split('').length);
  if (app.calValueSpan.innerText.split('').length > 10) {
    // app.calValueSpan.innerText = app.calValueSpan.innerText.split("").slice(0,11).join("");
    app.calValueSpan.style.fontSize = '30px';
  } else {
    app.calValueSpan.innerText = app.calValueSpan.innerText;
    app.calValueSpan.style.fontSize = '60px';
  }
  historyItem = document.createElement('li');
  historyItem.className = 'history-item';

  historyProcess = document.createElement('div');
  historyProcess.className = 'history-process';

  hOneNumber = document.createElement('span');
  hOneNumber.innerText = app.oneNumber;

  hProcess = document.createElement('span');
  hProcess.innerText = app.action;

  hTwoNumber = document.createElement('span');
  hTwoNumber.innerText = app.twoNumber;

  historyReturn = document.createElement('div');
  historyReturn.className = 'history-return';

  historyReturn.innerText = app.totalNumber;

  historyItem.appendChild(historyProcess);
  historyProcess.appendChild(hOneNumber);
  historyProcess.appendChild(hProcess);
  historyProcess.appendChild(hTwoNumber);
  historyItem.appendChild(historyReturn);
  app.appHistoryList.appendChild(historyItem);
});

app.singleDeleteButton.addEventListener('click', e => {
  app.calValue = app.calValue.slice(0, app.calValue.length - 1);
  app.calValueSpan.innerText = app.calValue;
});
