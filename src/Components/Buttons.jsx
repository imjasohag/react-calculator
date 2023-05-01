import React, { useState } from 'react'
// import Button from './Button'

const Buttons = (props) => {
  const { firstInput, setFirstInput, secondInput, setSecondInput, operationval, setOperationval, reset, deleteFun, resultValue, setResultValue } = props

  // numbr input fun
  const numInputValue = (e) => {
    const value = e.target.value;

    if (resultValue !== null && firstInput && operationval && secondInput) {
      // when all the state are filled, and type new number clearing all state
      setFirstInput(value)
      setOperationval(null)
      setSecondInput(null)
      setResultValue(null)
      return // (stop here)
    }
    if (operationval == null && secondInput == null) {
      setFirstInput((prevIn) => {
        if (prevIn == null) {
          return value
        }
        return prevIn + value
      })
    }
    else if (firstInput !== null && operationval !== null) {
      setSecondInput((prevIn) => {
        if (prevIn == null) {
          return value
        } else {
          return prevIn + value
        }

      })
    }
  }
  // operation 
  const operationFun = (e) => {
    if (firstInput == null) {
      setFirstInput(0)
    }
    const value = e.target.value;
    setOperationval(value)
  }
  // output 
  const outputFun = () => {
    switch (operationval) {
      case '+':
        addition(firstInput, secondInput)
        break;
      case '-':
        subtraction(firstInput, secondInput)
        break;
      case 'x':
        multiplication(firstInput, secondInput)
        break;
      case '÷':
        division(firstInput, secondInput)
    }
  }
  // operational functions
  const addition = (a, b) => {
    let result = parseFloat(a) + parseFloat(b)
    setResultValue(result)

  }
  const subtraction = (a, b) => {
    let result = parseFloat(a) - parseFloat(b)

    setResultValue(result)
  }
  const multiplication = (a, b) => {
    let result = parseFloat(a) * parseFloat(b)

    setResultValue(result)
  }
  const division = (a, b) => {
    let result = parseFloat(a) / parseFloat(b)

    setResultValue(result)
  }


  return (
    <>
      <input onClick={reset} className='button col-span-2 ' type="button" value="AC" />
      <input onClick={deleteFun} className='button' type="button" value="DEL" />
      <input onClick={operationFun} className='button-green text-2xl font-semibold' type="button" value="+" />
      <input onClick={numInputValue} className='button' type="button" value='1' />
      <input onClick={numInputValue} className='button' type="button" value="2" />
      <input onClick={numInputValue} className='button' type="button" value="3" />
      <input onClick={operationFun} className='button-green text-2xl font-semibold' type="button" value="-" />
      <input onClick={numInputValue} className='button' type="button" value="4" />
      <input onClick={numInputValue} className='button' type="button" value="5" />
      <input onClick={numInputValue} className='button' type="button" value="6" />
      <input onClick={operationFun} className='button-green text-2xl font-semibold' type="button" value="÷" />
      <input onClick={numInputValue} className='button' type="button" value="7" />
      <input onClick={numInputValue} className='button' type="button" value="8" />
      <input onClick={numInputValue} className='button' type="button" value="9" />
      <input onClick={operationFun} className='button-green font-semibold' type="button" value="x" />
      <input onClick={numInputValue} className='button' type="button" value="." />
      <input onClick={numInputValue} className='button' type="button" value="0" />
      <input onClick={outputFun} className='button-red col-span-2' type="button" value="=" />
    </>
  )
}

export default Buttons