import React, { useState } from 'react';

function Counter() {
  const [counter, setCounter] = useState(0);

  const Add = () => {
    setCounter(counter + 1);
  };

  const handle = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
     <div className='flex items-center justify-center bg-black h-screen'>
      <div className='text-3xl text-center '>
        <h1 className="mb-4 text-white font-bold">{counter}</h1>
        <div className="space-x-4">
          <button 
            className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
            onClick={Add}
          >
            Increase
          </button>
          <button 
            className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
            onClick={handle}
          >
            Decrease
          </button>
        </div>
      </div>
      </div>
    </>
  );
}

export default Counter;
