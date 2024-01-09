import React from 'react'
import { MdIncompleteCircle } from "react-icons/md";
import { SlTarget } from "react-icons/sl";
import { FaUser } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const Services = ({setOpenProfile,setBase,setCompleteModal,setGetModel,setStartModal,shipCount}) => {

  const team = [
    {id:1,avatar:"Start Shipment",logo:<IoIosSend />},
    {id:2,avatar:"Complete Shipment", logo:<MdIncompleteCircle />},
    {id:3,avatar:"Get Shipment",logo:<SlTarget />},
    {id:4,avatar:"User Profile",logo:<FaUser />},
    {id:5,avatar:"Inventory",logo:<FaDatabase />},
  ]

  const openModelBox = (text)=>{
    if(text === 1){
      setStartModal(true);
    }else if(text === 2){
      setCompleteModal(true);
    }else if(text === 3){
      setGetModel(true);
    }else if(text === 4){
      setOpenProfile(true);
    }else if(text === 5){
      setBase(true);
    }
    
  };

  return (
    <section className='py-0 pb-14 '>
        <div className='max-w-screen-xl mx-auto px-4 md:px-8'>
          <div className='mt-12 '>
              <ul className='grid gap-8 sm:grid-cols-3 md:grid-cols-5'>
            {
              team.map((item,i)=>(
                <li className='  list-none' key={team.id}>
                  <div onClick={()=>openModelBox(i+1)} className='duration-150 p-3 bg-gray-800 dark:bg-gray-700 flex items-center gap-2 cursor-pointer hover:bg-gray-900 dark:hover:bg-gray-600 justify-center shadow-gray-700 shadow-md dark:shadow-gray-900'>
                      <p className='text-gray-100'>
                      {item.logo}
                      </p>
                      <h1 className='font-medium text-gray-100 w-full h-full object-cover object-center'>{item.avatar}</h1>
                  </div>
                </li>
              ))
            }

            {/* <li className='  list-none'>
                  <div className=' p-3 bg-gray-800 dark:bg-gray-700 flex items-center gap-2 cursor-pointer dark:hover:bg-gray-600 hover:bg-gray-900 justify-center shadow-gray-700 shadow-md dark:shadow-gray-900'>
                      <p className='text-gray-100'>
                      <MdOutlineFormatListNumbered />
                      </p>
                      <h1 className='font-medium text-gray-100 w-full h-full object-cover object-center'>Ship Count</h1>
                      <h3  className='text-gray-100'>({shipCount})</h3>
                  </div>
                </li> */}
                
            </ul>
          </div>

        </div>
    </section>
  )
}

export default Services
