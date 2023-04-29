import React from 'react'

const App = () => {
  return (
    <div className='h-screen flex justify-center items-center bg-gradient-to-r from-sky-600 to-purple-600 p-8' >
      {/* calculator body  */}
      <div className='grid grid-cols-4 gap-1 mx-auto bg-slate-400 p-2 rounded-md w-full md:w-96'>
        {/* output  */}
        <div className='text-center col-span-4 py-4 px-2 bg-violet-400'>
          <div className='text-right'>
            num1+num2
          </div >
          <div className='text-right'>
            result
          </div>
        </div>
        {/* button  */}
        <input className='button col-span-2' type="button" value="AC" />
        <input className='button' type="button" value="DEL" />
        <input className='button-green' type="button" value="÷" />
        <input className='button' type="button" value="1" />
        <input className='button' type="button" value="2" />
        <input className='button' type="button" value="3" />
        <input className='button-green' type="button" value="X" />
        <input className='button' type="button" value="4" />
        <input className='button' type="button" value="5" />
        <input className='button' type="button" value="6" />
        <input className='button-green' type="button" value="+" />
        <input className='button' type="button" value="7" />
        <input className='button' type="button" value="8" />
        <input className='button' type="button" value="9" />
        <input className='button-green' type="button" value="-" />
        <input className='button' type="button" value="." />
        <input className='button' type="button" value="0" />
        <input className='button-red col-span-2' type="button" value="=" />
      </div>
    </div>
  )
}

export default App