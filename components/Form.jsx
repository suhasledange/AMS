import React, { useState } from 'react'
import { Nav1 } from '.';
import { AmmoType } from '@/constant';


const Form = ({ createShipmentModel, createShipment, setcreateShipmentModel }) => {

  const [shipment, setShipment] = useState({
    receiver: "",
    pickupTime: "",
    distance: "",
    price: "",
    weaponName: "",
    weaponType: "",
    weaponDetails: "",
  });

  const [filteredAmmoNames, setFilteredAmmoNames] = useState([]);

  const handleAmmoTypeChange = (e) => {
    const selectedType = e.target.value;
    const ammoTypeObject = AmmoType.find((type) => type.title === selectedType);

    if (ammoTypeObject) {
      setFilteredAmmoNames(ammoTypeObject.ammoName);
    } else {
      setFilteredAmmoNames([]);
    }

    setShipment({
      ...shipment,
      weaponType: selectedType,
      weaponName: "",
    });
  };

  // const AmmoType = [
  //   {id:1, title: "Full metal jacket" },
  //   {id:2, title: "Hollow point" },
  //   {id:3, title: "Soft point" },
  // ];

  const createItem = async () => {
    try {
      await createShipment(shipment);
    } catch (error) {
      console.log("wrong creating item");
    }
  }

  return createShipmentModel ? (
    <div className='fixed inset-0 z-30 overflow-y-auto'>
      <div className='fixed inset-0 w-full h-full bg-black opacity-40' onClick={() => setcreateShipmentModel(false)}></div>
      <div className='flex items-center min-h-screen px-4 py-4'>
        <div className='relative w-full max-w-lg p-4 mx-auto bg-white dark:bg-gray-900 rounded-md shadow-lg'>
          <div className='flex justify-end'>
            <button onClick={() => setcreateShipmentModel(false)} className='p-2 text-gray-400 rounded-md dark:hover:bg-gray-700 hover:bg-gray-100'>
              <Nav1 className="w-5 h-5 mx-auto" />
            </button>
          </div>
          <div className='max-w-sm mx-auto py-3 space-y-3 text-center'>
            <h4 className='text-lg font-medium dark:text-gray-200 text-gray-800'>
              Track and Create Shipment
            </h4>
            <p className='text-[15px] dark:text-gray-400 text-gray-600'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore laboriosam repudiandae pariatur voluptatum quae praesentium rerum.
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className='relative mt-3'>
                <input required type="text" placeholder='Receiver' className='w-full pl-5 pr-3 py-2 text-gray-500 dark:text-gray-200 bg-transparent outline-none border dark:focus:border-blue-900 focus:border-blue-900 shadow-sm rounded-lg' onChange={(e) => setShipment({
                  ...shipment,
                  receiver: e.target.value,
                })} />
              </div>
              <div className='relative mt-3'>
                <input required type="date" placeholder='PickupTime' className='w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-600 dark:focus:border-blue-600 shadow-sm rounded-lg' onChange={(e) => setShipment({
                  ...shipment,
                  pickupTime: e.target.value,
                })} />
              </div>
              <div className='relative mt-3'>
                <input required type="text" placeholder='Distance' className='w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent  outline-none border focus:border-blue-900 dark:focus:border-blue-600 shadow-sm rounded-lg' onChange={(e) => setShipment({
                  ...shipment,
                  distance: e.target.value,
                })} />
              </div>
              <div className='relative mt-3'>
                <input required type="number" placeholder='Price' className='w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-900 dark:focus:border-blue-600 shadow-sm rounded-lg' onChange={(e) => setShipment({
                  ...shipment,
                  price: e.target.value,
                })} />
              </div>

              <div className='relative mt-3'>
                <select
                  className='w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border dark:focus:border-blue-600 focus:border-blue-900 shadow-sm rounded-lg'
                  value={shipment.weaponType}
                  onChange={handleAmmoTypeChange}
                >
                  <option value="">Select Ammunition Type</option>
                  {AmmoType.map((item) => (
                    <option key={item.id} value={item.title}>
                      {item.title}
                    </option>
                  ))}
                </select>

              </div>
              <div className='relative mt-3'>

                <select
                  className='w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border dark:focus:border-blue-600 focus:border-blue-900 shadow-sm rounded-lg'

                  value={shipment.weaponName}
                  onChange={(e) => setShipment({ ...shipment, weaponName: e.target.value })}

                >
                  <option value="">Select Ammunition Name</option>
                  {filteredAmmoNames.map((ammo) => (
                    <option key={ammo.id} value={ammo.title}>
                      {ammo.title}
                    </option>
                  ))}
                </select>
              </div>


              {/* <div className='relative mt-3'>
                <input required type="text" placeholder='Ammo Name' className='w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-900 dark:focus:border-blue-600 shadow-sm rounded-lg' onChange={(e) => setShipment({
                  ...shipment,
                  weaponName: e.target.value,
                })} />
              </div> */}


              <div className='relative mt-3'>

                <textarea rows={3} className=' resize-none w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-900 dark:focus:border-blue-600 shadow-sm rounded-lg' placeholder='Ammo Details' onChange={(e) => setShipment({
                  ...shipment,
                  weaponDetails: e.target.value,
                })} />
              </div>
              <button onClick={() => createItem()}
                className='block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-900 duration-100 active:bg-gray-800 rounded-lg ring-offset-2 ring-gray-700 focus:ring-2'>
                Create Shipment
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  ) : ("")
}

export default Form
