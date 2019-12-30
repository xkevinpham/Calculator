class Calculator {
    constructor(previousInputText, currentInputText) {
      this.previousInputText = previousInputText
      this.currentInputText = currentInputText
      this.clear();
    };

    clear = () => {
      this.currentInput = ''
      this.previousInput = ''
      this.operation = undefined
    };
  
    deleted = () => {
      this.currentInput = this.currentInput.toString().slice(0, -1)
    };
  
    addNumber = (number) => {
      if (number === '.' && this.currentInput.includes('.')) return
      this.currentInput = this.currentInput.toString() + number.toString()
    };
  
    chooseOperation = (operation) => {
      if (this.currentInput === '') return
      if (this.previousInput !== '') {
        this.compute()
      };
      this.operation = operation
      this.previousInput = this.currentInput
      this.currentInput = ''
    };
  
    compute = () => {
      let computation
      const prev = parseFloat(this.previousInput)
      const current = parseFloat(this.currentInput)
      if (isNaN(prev) || isNaN(current)) return
      switch (this.operation) {
        case '+':
          computation = prev + current
          break
        case '-':
          computation = prev - current
          break
        case '*':
          computation = prev * current
          break
        case '/':
          computation = prev / current
          break
        default:
          return
      }
      this.currentInput = computation
      this.operation = undefined
      this.previousInput = ''
    };
  
    getScreenNumber = (number) => {
      const stringNumber = number.toString()
      const integerDigits = parseFloat(stringNumber.split('.')[0])
      const decimalDigits = stringNumber.split('.')[1]
      let integerDisplay
      if (isNaN(integerDigits)) {
        integerDisplay = ''
      } else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
      }
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
      } else {
        return integerDisplay
      };
    };
  
    updateScreen = () => {
      this.currentInputText.innerText =
        this.getScreenNumber(this.currentInput)
      if (this.operation != null) {
        this.previousInputText.innerText =
          `${this.getScreenNumber(this.previousInput)} ${this.operation}`
      } else {
        this.previousInputText.innerText = ''
      };
    };
};
  
 
  const numberButtons = document.querySelectorAll('.calculator .numbers');
  const operationsButtons = document.querySelectorAll('.operations');
  const equalButton = document.querySelector('.equal');
  const deleteButton = document.querySelector('.deletes');
  const acButton = document.querySelector('.AC');
  const previousInputText = document.querySelector('.previousInput');
  const currentInputText = document.querySelector('.currentInput');
  
  const calculator = new Calculator(previousInputText, currentInputText);
 


  acButton.addEventListener('click', button => {
    clear();
    updateScreen();
  });


  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      addNumber(button.innerText);
      updateScreen();
    });
  });
  
  operationsButtons.forEach(button => {
    button.addEventListener('click', () => {
      chooseOperation(button.innerText);
      updateScreen();
    });
  });
  
  equalButton.addEventListener('click', button => {
    compute();
    updateScreen();
  });

  deleteButton.addEventListener('click', button => {
    deleted();
    updateScreen();
  });

  Calculator();