import React, { useState } from 'react'
// import Button from './Button'

const Buttons = (props) => {
  const [firstInput, setFirstInput] = useState('0')
  // console.log("🚀 ~ file: Buttons.jsx:6 ~ Buttons ~ firstInput:", firstInput)
  const [secondInput, setSecondInput] = useState('')
  // console.log("🚀 ~ file: Buttons.jsx:6 ~ Buttons ~ secondInput:", secondInput)
  const [operationval, setOperationval] = useState('')
  // console.log("🚀 ~ file: Buttons.jsx:8 ~ Buttons ~ operation:", operationval)
  
  // numbr input fun
  const numInputValue = (e) => {
    const value = e.target.value;
    if (operationval == '') {
      setFirstInput((prevIn) => {
        return prevIn + value
      })
      
    } else {
      setSecondInput((prevIn) => {
        return prevIn + value
      })
      props.input2(secondInput)
    }
  }
  // operation 
  const operationFun = (e) => {
    const value = e.target.value;
    setOperationval(value)
    props.operation(operationval)
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
    let result = parseInt(a) + parseInt(b)
    // console.log("🚀 ~ file: Buttons.jsx:52 ~ addition ~ result:", result)
    props.result(result)
  }
  const subtraction = (a, b) => {
    let result = parseInt(a) - parseInt(b)
    // console.log("🚀 ~ file: Buttons.jsx:55 ~ subtraction ~ result:", result)
    props.result(result)
  }
  const multiplication = (a, b) => {
    let result = parseInt(a) * parseInt(b)
    // console.log("🚀 ~ file: Buttons.jsx:60 ~ multiplication ~ result:", result)
    props.result(result)
  }
  const division = (a, b) => {
    let result = parseInt(a) / parseInt(b)
    // console.log("🚀 ~ file: Buttons.jsx:65 ~ division ~ result:", result)
    props.result(result)
  }


  return (
    <>
      <input className='button col-span-2' type="button" value="AC" />
      <input className='button' type="button" value="DEL" />
      <input onClick={operationFun} className='button-green' type="button" value="÷" />
      <input onClick={numInputValue} className='button' type="button" value='1' />
      <input onClick={numInputValue} className='button' type="button" value="2" />
      <input onClick={numInputValue} className='button' type="button" value="3" />
      <input onClick={operationFun} className='button-green' type="button" value="x" />
      <input onClick={numInputValue} className='button' type="button" value="4" />
      <input onClick={numInputValue} className='button' type="button" value="5" />
      <input onClick={numInputValue} className='button' type="button" value="6" />
      <input onClick={operationFun} className='button-green' type="button" value="+" />
      <input onClick={numInputValue} className='button' type="button" value="7" />
      <input onClick={numInputValue} className='button' type="button" value="8" />
      <input onClick={numInputValue} className='button' type="button" value="9" />
      <input onClick={operationFun} className='button-green' type="button" value="-" />
      <input onClick={numInputValue} className='button' type="button" value="." />
      <input onClick={numInputValue} className='button' type="button" value="0" />
      <input onClick={outputFun} className='button-red col-span-2' type="button" value="=" />
    </>
  )
}

export default Buttons