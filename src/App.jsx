import React, { useState } from 'react'
import Buttons from './Components/Buttons'

const App = () => {
  const [firstInput, setFirstInput] = useState('0')
  // console.log("🚀 ~ file: Buttons.jsx:6 ~ Buttons ~ firstInput:", firstInput)
  const [secondInput, setSecondInput] = useState('')
  // console.log("🚀 ~ file: Buttons.jsx:6 ~ Buttons ~ secondInput:", secondInput)
  const [operationval, setOperationval] = useState('')
  // console.log("🚀 ~ file: Buttons.jsx:8 ~ Buttons ~ operation:", operationval)
  const [resultValue, setResultValue] = useState(0)

  // result 
  const result = (result) => {
    // console.log("🚀 ~ file: App.jsx:11 ~ result ~ result:", result)
    setResultValue(result)
  }
  // reset 
  const reset = () => {
    setFirstInput('0')
    setSecondInput('')
    setOperationval('')
    setResultValue('0')
  }

  // delete fun 
  const deleteFun = () => {
    // 

    if ((firstInput && firstInput.length == 1) && operationval == '' && secondInput == '' && result !== '') {
      setFirstInput('0')
      setResultValue('0')
      return
    }

    if (secondInput != '') {
      setSecondInput((prevIn) => {
        return (prevIn.slice(0, (prevIn.length - 1)))
      })
    } else if (operationval != '') {
      setOperationval((prevIn) => {
        return (prevIn.slice(0, (prevIn.length - 1)))
      })
    } else if (firstInput != '') {
      setFirstInput((prevIn) => {
        return (prevIn.slice(0, (prevIn.length - 1)))
      })
    }

  }

  return (
    <div className='h-screen flex justify-center items-center bg-gradient-to-r from-sky-600 to-purple-600 p-8' >
      {/* calculator body  */}
      <div className='grid grid-cols-4 gap-1 mx-auto bg-slate-400 p-2 rounded-md w-full md:w-96'>
        {/* output  */}
        <div className='text-center col-span-4 py-4 px-2 bg-violet-400'>
          <div className='text-right text-lg text-gray-700'>
            {(firstInput == '0') ? firstInput : (firstInput.startsWith('0') ? firstInput.slice(1) : firstInput)}
            {operationval}{secondInput}
            {/* f={firstInput} op={operationval} s={secondInput}  */}
          </div >
          <div className='text-right text-2xl'>
            {resultValue}
          </div>
        </div>
        <Buttons result={result} reset={reset} deleteFun={deleteFun}
          firstInput={firstInput} secondInput={secondInput} operationval={operationval} setFirstInput={setFirstInput} setSecondInput={setSecondInput} setOperationval={setOperationval} setResultValue={setResultValue} />
      </div>
    </div>
  )
}

export default App