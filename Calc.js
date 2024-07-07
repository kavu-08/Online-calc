document.addEventListener('DOMContentLoaded', () => {
   const display = document.getElementById('display');
   const buttons = Array.from(document.getElementsByClassName('btn'));
   let operator = null;
   let firstOperand = null;
   let secondOperand = null;
   let shouldResetDisplay = false;

   buttons.forEach(button => {
       button.addEventListener('click', () => {
           if (button.classList.contains('number') || button.id === 'decimal') {
               if (shouldResetDisplay) {
                   display.innerText = button.innerText;
                   shouldResetDisplay = false;
               } else {
                   display.innerText = display.innerText === '0' ? button.innerText : display.innerText + button.innerText;
               }
           } else if (button.classList.contains('operator')) {
               firstOperand = parseFloat(display.innerText);
               operator = button.id;
               shouldResetDisplay = true;
           } else if (button.id === 'equals') {
               secondOperand = parseFloat(display.innerText);
               performCalculation();
               shouldResetDisplay = true;
           } else if (button.id === 'clear') {
               clearDisplay();
           } else if (button.id === 'modulo') {
               display.innerText = parseFloat(display.innerText) / 100;
           } else if (button.id === 'square') {
               display.innerText = Math.pow(parseFloat(display.innerText), 2);
           }
       });
   });

   function performCalculation() {
       let result;
       switch (operator) {
           case 'add':
               result = firstOperand + secondOperand;
               break;
           case 'subtract':
               result = firstOperand - secondOperand;
               break;
           case 'multiply':
               result = firstOperand * secondOperand;
               break;
           case 'divide':
               result = firstOperand / secondOperand;
               break;
           default:
               return;
       }
       display.innerText = result;
   }

   function clearDisplay() {
       display.innerText = '0';
       firstOperand = null;
       secondOperand = null;
       operator = null;
       shouldResetDisplay = false;
   }
});
