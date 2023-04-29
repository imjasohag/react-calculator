import React, { useState } from 'react'
import Buttons from './Components/Buttons'

const App = () => {
  const [resultValue, setResultValue] = useState(0)
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [operation, setOperation] = useState('')

  const result = (result) => {
    console.log("🚀 ~ file: App.jsx:11 ~ result ~ result:", result)
    setResultValue(result)
  }



  return (
    <div className='h-screen flex justify-center items-center bg-gradient-to-r from-sky-600 to-purple-600 p-8' >
      {/* calculator body  */}
      <div className='grid grid-cols-4 gap-1 mx-auto bg-slate-400 p-2 rounded-md w-full md:w-96'>
        {/* output  */}
        <div className='text-center col-span-4 py-4 px-2 bg-violet-400'>
          <div className='text-right text-lg text-gray-700'>
            {input1}{operation}{input2}
          </div >
          <div className='text-right text-2xl'>
            {resultValue}
          </div>
        </div>
        <Buttons result={result} 
        input1={(a) => {
            setInput1(a)
          console.log(input1);
          }
        } input2={(a) => {
          setInput2(a)
        }} operation={(a) => {
          setOperation(a)
        }} />
      </div>
    </div>
  )
}

export default App