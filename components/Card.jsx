import React, { useState } from 'react'
import Cards from './Cards';
import { FaSearch } from "react-icons/fa";


const Card = ({setcreateShipmentModel,allShipmentsdata}) => {
  
  const [searchValue, setSearchValue] = useState('');
  if (!allShipmentsdata) {
    return <div className='text-lx font-medium text-gray-600 pl-52'>Loading...</div>; 
  }


  const filteredData = allShipmentsdata.filter((shipment) => {
    const { weaponName, weaponType,sender,receiver } = shipment;

    return (
      weaponName.toLowerCase().includes(searchValue.toLowerCase()) ||
      weaponType.toLowerCase().includes(searchValue.toLowerCase()) ||
      sender.toLowerCase().includes(searchValue.toLowerCase()) ||
      receiver.toLowerCase().includes(searchValue.toLowerCase())

    );
  });

  return (
    <div className=' min-h-40 max-w-screen-xl mx-auto px-4 md:px-8'>
        <div className=' items-start md:flex justify-between'>
        <div className=' w-full max-w-lg flex items-center justify-start gap-2 border-b-2 border-gray-400 dark:border-gray-200 p-2 '>
              <FaSearch className='text-gray-500 dark:text-gray-200'/>
              <input className='focus:outline-none w-full text-gray-800 dark:text-gray-200 bg-transparent' type='text' placeholder='Search' 
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              />
          </div>
          <div className='mt-3 md:mt-0'>
              <p onClick={()=>setcreateShipmentModel(true)} className=' cursor-pointer inline-block px-4 py-2 text-white duration-150 font-medium bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-900 active:bg-gray-950 md:text-sm rounded-lg md:inline-flex shadow-lg'>
                Add Data
              </p>
        </div>
        </div>

      <div className='mt-12'>
 
         <div className='flex flex-wrap gap-5 items-center lg:justify-normal justify-center'>
      
       {filteredData.map((shipment,idx)=>(
         <Cards key={idx} shipment={shipment}/>      
         ))} 
        </div> 
        
      </div>

    </div>
  )
}

export default Card
