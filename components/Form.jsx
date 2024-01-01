import React, { useState } from 'react'
import { Nav1 } from '.';

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
  const AmmoType = [
    { title: "Full metal jacket" },
    { title: "Hollow point" },
    { title: "Soft point" },
  ];

  const createItem = async () => {
    try {
      await createShipment(shipment);
    } catch (error) {
      console.log("wrong creating item");
    }
  }

  return createShipmentModel ? (
    <div className='fixed inset-0 z-10 overflow-y-auto'>
      <div className='fixed inset-0 w-full h-full bg-black opacity-40' onClick={() => setcreateShipmentModel(false)}></div>
      <div className='flex items-center min-h-screen px-4 py-4'>
        <div className='relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg'>
          <div className='flex justify-end'>
            <button onClick={() => setcreateShipmentModel(false)} className='p-2 text-gray-400 rounded-md hover:bg-gray-100'>
              <Nav1 className="w-5 h-5 mx-auto" />
            </button>
          </div>
          <div className='max-w-sm mx-auto py-3 space-y-3 text-center'>
            <h4 className='text-lg font-medium text-gray-800'>
              Track and Create Shipment
            </h4>
            <p className='text-[15px] text-gray-600'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore laboriosam repudiandae pariatur voluptatum quae praesentium rerum.
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className='relative mt-3'>
                <input type="text" placeholder='Receiver' className='w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg' onChange={(e) => setShipment({
                  ...shipment,
                  receiver: e.target.value,
                })} />
              </div>
              <div className='relative mt-3'>
                <input type="date" placeholder='PickupTime' className='w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-600 shadow-sm rounded-lg' onChange={(e) => setShipment({
                  ...shipment,
                  pickupTime: e.target.value,
                })} />
              </div>
              <div className='relative mt-3'>
                <input type="text" placeholder='Distance' className='w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg' onChange={(e) => setShipment({
                  ...shipment,
                  distance: e.target.value,
                })} />
              </div>
              <div className='relative mt-3'>
                <input type="text" placeholder='Price' className='w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg' onChange={(e) => setShipment({
                  ...shipment,
                  price: e.target.value,
                })} />
              </div>
              <div className='relative mt-3'>
                <input type="text" placeholder='Weapon Name' className='w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg' onChange={(e) => setShipment({
                  ...shipment,
                  weaponName: e.target.value,
                })} />
              </div>
              <div className='relative mt-3'>
                <select
                    className='w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
                    onChange={(e) => setShipment({
                      ...shipment,
                      weaponType: e.target.value,
                    })}
                  >
                    <option value="">Select Ammunition Type</option>
                    {AmmoType.map((item, index) => (
                      <option key={index} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                  </select>

              </div>
              <div className='relative mt-3'>

                <textarea rows={3} className=' resize-none w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg' placeholder='Weapon Details' onChange={(e) => setShipment({
                  ...shipment,
                  weaponDetails: e.target.value,
                })} />
              </div>
              <button onClick={() => createItem()}
                className='block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-gray-800 hover:bg-gray-900 duration-100 active:bg-gray-800 rounded-lg ring-offset-2 ring-gray-700 focus:ring-2'>
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
