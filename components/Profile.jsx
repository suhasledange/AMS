import React from 'react'
import { Str1 } from '.'
import { FaRegUserCircle } from "react-icons/fa";

const Profile = ({ openProfile, setOpenProfile, currentUser, shipCount,Balance }) => {


  return openProfile ? (
    <div className='fixed inset-0 z-10 overflow-y-auto'>
      <div className='fixed inset-0 w-full h-full bg-black opacity-40' onClick={() => setOpenProfile(false)}>
      </div>
      <div className='flex items-center min-h-screen px-4 py-8'>
        <div className='relative w-full max-w-lg p-4 mx-auto dark:bg-gray-900 bg-white rounded-sm shadow-lg'>

          <div className='flex justify-end'>
            <button onClick={() => setOpenProfile(false)} className='p-2 text-gray-400 rounded-md dark:hover:bg-gray-700 hover:bg-gray-100'>
              <Str1 />
            </button>
          </div>

          <div className='max-w-sm mx-auto py-3 space-y-3 text-center'>
              <div className='flex flex-col items-center pb-10'>
                    <FaRegUserCircle className='w-24 h-24 mb-3 shadow-lg rounded-full text-gray-800 dark:text-gray-200'/>
                    <h5 className='mb-1 text-xl font-medium dark:text-gray-200 text-gray-700 datk:text-white'>
                      Welcome
                    </h5>
                    <span className='text-sm text-gray-500 dark:text-gray-400'>
                      {currentUser}
                    </span>
                    <div className='flex mt-4 space-x-3 md:mt-6'>
                          <p className='flex items-center gap-1 px-4 py-2 text-sm font-normal text-center text-black rounded-lg border-2'>
                                <span className='text-gray-700 dark:text-gray-200 font-medium'> Balance : </span>
                                 <span className='dark:text-gray-400'> {Balance.slice(0,10)} ETH</span>
                          </p>
                          <p className='flex items-center gap-1 px-4 py-2 text-sm font-normal text-center text-black rounded-lg border-2'>
                                <span className='dark:text-gray-200 text-gray-700 font-medium '>Total Shipment : </span>
                                 <span className='dark:text-gray-300'> {shipCount}</span>
                          </p>
                    </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  ) : ""
}

export default Profile
