


const numbersButtons = document.querySelectorAll(".calculator .numbers");
const operationsButtons = document.querySelectorAll(".operations");
const equalButton = document.querySelectorAll(".equal");
const acButton = document.querySelectorAll(".AC");
const deleteButton = document.querySelectorAll(".delete");
const previousInputText = document.querySelectorAll(".previousInput");
const currentInputText = document.querySelectorAll(".currentInput");

const calculator = new Calculator(previousInputText, currentInputText)

numbersButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.addNumber(button.innerText)
        calculator.updateScreen()
    })
})

acButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateScreen()
})