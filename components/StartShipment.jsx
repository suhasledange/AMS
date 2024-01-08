import React, { useState } from 'react'
import { Str1 } from '.'

const StartShipment = ({ startModal, setStartModal, startShipment }) => {

  const [getProduct, setGetProduct] = useState({
    receiver: "",
    index: "",
  })

  const StartShipment = () => {
    startShipment(getProduct);
  }

  return startModal ? (
    <div className='fixed inset-0 z-10 overflow-y-auto'>
      <div className='fixed inset-0 w-full h-full bg-black opacity-40' onClick={() => setStartModal(false)}>
      </div>
      <div className='flex items-center min-h-screen px-4 py-8'>
        <div className='relative w-full max-w-lg p-4 mx-auto dark:bg-gray-900 bg-white rounded-sm shadow-lg'>
          <div className='flex justify-end'>
            <button onClick={() => setStartModal(false)} className='p-2 text-gray-400 rounded-md dark:hover:bg-gray-700 hover:bg-gray-100'>
              <Str1 />
            </button>
          </div>
          <div className='max-w-sm mx-auto py-3 space-y-3 text-center'>
            <h4 className='text-lg font-medium  dark:text-gray-200 text-gray-800'>
              Start Shipment
            </h4>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className='relative mt-3'>
                <input className='w-full pl-5 pr-3 py-2 dark:text-gray-200 text-gray-500 bg-transparent outline-none border focus:border-blue-900 shadow-sm rounded-lg' placeholder='Receiver' type='text'
                  onChange={(e) =>
                    setGetProduct({
                      ...getProduct,
                      receiver: e.target.value,
                    })
                  } />
              </div>
              <div className='relative mt-3'>
                <input className='w-full pl-5 pr-3 py-2 dark:text-gray-200  text-gray-500 bg-transparent outline-none border focus:border-blue-900 shadow-sm rounded-lg' placeholder='Id' type='text'
                  onChange={(e) =>
                    setGetProduct({
                      ...getProduct,
                      index: e.target.value,
                    })
                  } />
              </div>
                  <button className='block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-gray-800 dark:hover:bg-gray-600 hover:bg-gray-900 duration-100 active:bg-gray-800 rounded-lg ring-offset-2 ring-gray-700 focus:ring-2' onClick={()=>StartShipment()}>
                    Start Shipment
                  </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : ""
}

export default StartShipment
