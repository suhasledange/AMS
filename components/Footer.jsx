import React from 'react'
import { GiShotgunRounds } from 'react-icons/gi'
import { Fot1, Fot2 } from '.'

const Footer = () => {
    const footerNavs=[
      {path:"#",name:"Terms"},
      {path:"#",name:"License"},
      {path:"#",name:"Privacy"},
      {path:"#",name:"About Us"},
    ]

  return (
    <footer className=' bottom-0 pt-10 bg-gray-300 mt-10'>
        <div className='max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8'>
        <div className=' justify-between sm:flex'>
              <div className='space-y-6'>
              <a href="#" className='text-gray-800 hover:text-gray-950 flex items-center gap-1'>
                    <GiShotgunRounds className='text-3xl'/>
                    <h1 className=' text-2xl font-bold'>AMS</h1>
                  </a>
                <p className='text-gray-600'>
                Keep the correct amount of safe ammo in the right place with the Ammunition Management System.
                </p>
                <ul className='font-medium flex flex-wrap items-center gap-4 text-lg sm:text-base'>
                  {footerNavs.map((item,idx)=>(
                    <li key={idx} className='text-gray-800 hover:text-gray-700 hover:underline duration-150'>
                      <a key={idx} href={item.path}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>

            <div className='mt-6 '>
                      <p className='text-gray-700 font-semibold'>Get the app</p>
                      <div className='flex items-center gap-3 mt-3 sm:block'>
                          <a href='#'>
                            <Fot1/>
                          </a>
                          <a href="#" className='mt-0 block sm:mt-3'>
                          <Fot2/>
                          </a>
                      </div>
            </div>
        </div>
        
        </div>
        <div className='bg-gray-800 mt-10 py-5 border-t md:text-center'>
                    <p className='text-gray-200'>&copy; 2023 Ammunation Management System. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
