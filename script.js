const calculator=document.querySelector('.calculator')
const keys=document.querySelector('.calculator_keys')
const display=document.querySelector('.calculator_display')
const operatorKeys= keys.querySelectorAll('[data-type="operator"]')

keys.addEventListener('click', event =>{
  
  if (!event.target.closest('button')) return


  const key= event.target
  const keyValue= key.textContent
  const displayValue=display.textContent
  const type = key.dataset.type
  const previousKeyType=calculator.dataset.previousKeyType

  if (type==='number'){
  if (displayValue==='0' ||
      previousKeyType==='operator'
      ) {
    display.textContent=keyValue 
  }  else {
    display.textContent= displayValue + keyValue 
  }
  
 }
 
 if (type==='operator'){
   
   operatorKeys.forEach(el=>el.dataset.state='')
     key.dataset.state='selecter'
     
     calculator.dataset.firstNumber=displayValue
     calculator.dataset.operator=key.dataset.key
   
  }

  if (type === 'equal') {
    const firstNumber=calculator.dataset.firstNumber
    const operator=calculator.dataset.operator
    const secondNumber=displayValue
    display.textContent=calculate(firstNumber, operator, secondNumber)
    console.log(firstNumber, operator, secondNumber)
  }

  if (type === 'clear') {
    display.textContent = '0'
    delete calculator.dataset.firstNumber
    delete calculator.dataset.operator
  }
    calculator.dataset.previousKeyType=type

  })


  function calculate(firstNumber, operator, secondNumber){
    firstNumber=parseFloat(firstNumber)
    secondNumber=parseFloat(secondNumber)
    let result=''
    if (operator==='plus') result = firstNumber + secondNumber
    if (operator==='minus') result = firstNumber - secondNumber
    if (operator==='times') result = firstNumber * secondNumber
    if (operator==='divide') result = firstNumber / secondNumber
    console.log(result)
    return result
    
  }
    
 

