class Calculator{
    constructor(previousOperandTextElement, currentOperandButton){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandButton = currentOperandButton
    }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandButton = document.querySelector('[data-current-operand]')