import React, { useState } from 'react'
import { Str1 } from '.'
import { BaseData } from '@/constant';

const Base = ({ openBase, setBase }) => {

    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedAmmo, setSelectedAmmo] = useState([]);
  
    const handleSelectChange = (e) => {
      const selectedValue = e.target.value;
      setSelectedLocation(selectedValue);
  
      const selectedLocationData = BaseData.find((item) => item.name === selectedValue);
  
      if (selectedLocationData) {
        setSelectedAmmo(selectedLocationData.data[0].ammoName);
      } else {
        setSelectedAmmo([]);
      }
    };


    return openBase ? (
        <div className='fixed inset-0 z-10 overflow-y-auto'>
            <div className='fixed inset-0 w-full h-full bg-black opacity-40' onClick={() => setBase(false)}>
            </div>
            <div className='flex items-center min-h-screen px-4 py-8'>
                <div className='relative w-full max-w-lg p-4 mx-auto dark:bg-gray-900 bg-white rounded-sm shadow-lg'>

                    <div className='flex justify-end'>
                        <button onClick={() => setBase(false)} className='p-2 text-gray-400 rounded-md dark:hover:bg-gray-700 hover:bg-gray-100'>
                            <Str1 />
                        </button>
                    </div>

                    <div className='max-w-sm mx-auto py-3 space-y-3 text-center'>
                        <h4 className='text-lg font-medium dark:text-gray-200 text-gray-800'>Inventory</h4>
                        <form>
                            <label htmlFor="locations">Select a location:</label>
                            <select id="locations" value={selectedLocation} onChange={handleSelectChange}>
                                <option value="">Select</option>
                                {BaseData.map((item) => (
                                    <option key={item.id} value={item.name}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </form>
                        <div>
                            {/* Render selected location's ammo names */}
                            <h3>Ammo Names:</h3>
                            <ul>
                                {selectedAmmo.map((ammo) => (
                                    <li key={ammo.id}>{ammo.title}</li>
                                ))}
                            </ul>
                        </div>



                    </div>

                </div>
            </div>
        </div>
    ) : ""
}

export default Base
