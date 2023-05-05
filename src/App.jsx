import React, { useState } from 'react'
import Buttons from './Components/Buttons'

export const AppState = {
  init: "init",
  done: "done"
}

const App = () => {
  const [state, setState] = useState(AppState.init)
  const [firstInput, setFirstInput] = useState(null)
  const [secondInput, setSecondInput] = useState(null)
  const [operationval, setOperationval] = useState(null)

  const [resultValue, setResultValue] = useState(null)


  // reset function
  const reset = () => {
    setState(AppState.init)
    setFirstInput(null)
    setSecondInput(null)
    setOperationval(null)
    setResultValue(null)
  }

  // delete function 
  const deleteFun = () => {
    setState(AppState.init)
    if ((firstInput && firstInput.length == 1) && operationval == null && secondInput == null && resultValue !== null) {
      setFirstInput(null)
      setResultValue(null)
      return
    }

    if (secondInput != null) {
      setSecondInput((prevIn) => {
        if ((prevIn.slice(0, (prevIn.length - 1)))) {
          return (prevIn.slice(0, (prevIn.length - 1)))
        } else {
          return null;
        }
      })
    } else if (operationval != null) {
      setOperationval((prevIn) => {
        if ((prevIn.slice(0, (prevIn.length - 1)))) {
          return (prevIn.slice(0, (prevIn.length - 1)))
        } else {
          return null;
        }
      })
    } else if (firstInput !== null) {
      setFirstInput((prevIn) => {
        if ((prevIn.slice(0, (prevIn.length - 1)))) {
          return (prevIn.slice(0, (prevIn.length - 1)))
        } else {
          return null;
        }
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

            {firstInput == null ? "0" : firstInput}{operationval}{secondInput}

            {/* f={firstInput || "n"} op={operationval} s={secondInput} */}
          </div >
          <div className='text-right text-2xl'>
            {resultValue == null ? "0" : resultValue}
          </div>
                 
        </div>
        <Buttons
          state={state} setState={setState}
          resultValue={resultValue} reset={reset} deleteFun={deleteFun}
          firstInput={firstInput} secondInput={secondInput} operationval={operationval} setFirstInput={setFirstInput} setSecondInput={setSecondInput} setOperationval={setOperationval} setResultValue={setResultValue} />
      </div>
    </div>
  )
}

export default App