import React, { useState } from 'react'
import { Str1 } from '.';

const GetShipment = ({ getModel, setGetModel, getShipment }) => {

  const [index, setIndex] = useState(0);
  const [singleShipmentData, setSingleShipmentData] = useState();

  const getShipmentData = async () => {
    const getData = await getShipment(index);
    setSingleShipmentData(getData);
  }
  const convertTime = (time) => {
    const newTime = new Date(time);
    const dateTime = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(newTime);
    return dateTime;
  };

  return getModel ? (
    <div className='fixed inset-0 z-10 overflow-y-auto'>
      <div className='fixed inset-0 w-full h-full bg-black opacity-40' onClick={() => setGetModel(false)}>
      </div>

      <div className='flex items-center  min-h-screen px-4 py-8'>
        <div className='relative w-full max-w-lg p-4 mx-auto dark:bg-gray-900 bg-white rounded-md shadow-lg'>
          <div className='flex justify-end'>

            <button onClick={() => setGetModel(false)} className=' p-2 text-gray-400 rounded-md hover:bg-gray-100'>
              <Str1 className='w-5 h-5 mx-auto' />
            </button>
          </div>

          <div className='max-w-sm mx-auto py-3 space-y-3 text-center'>
            <h4 className='text-lg font-medium dark:text-gray-200 text-gray-800'>Tracking Details</h4>
            
            <form onSubmit={(e) => e.preventDefault()}>
              <div className=' relative mt-3'>
                  <input required type='number' placeholder='Id' className=' w-full pl-5 pr-3 py-2 dark:text-gray-200  text-gray-500 bg-transparent outline-none border focus:border-blue-900 shadow-sm rounded-lg' 
                  onChange={(e)=>setIndex(e.target.value)}/>
              </div>
              <button onClick={()=>getShipmentData()} className='block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-900 duration-100 active:bg-gray-800 rounded-lg ring-offset-2 ring-gray-700 focus:ring-2'>
                    Get Details
              </button>
            </form>

            {singleShipmentData == undefined ? (
              ""
            ): (
              <div className='text-left'>
                    <p>Sender : {singleShipmentData.sender.slice(0,10)+"..."+singleShipmentData.sender.slice(36,42)}</p>
                    <p>Receiver : {singleShipmentData.receiver.slice(0,10)+"..."+singleShipmentData.receiver.slice(36,42)}</p>
                    <p>Ammo Name : {singleShipmentData.weaponName}</p>
                    <p>Ammo Type : {singleShipmentData.weaponType}</p>
                    <p>Ammo Details : {singleShipmentData.weaponDetails}</p>
                    <p>PickUp Time : {convertTime(singleShipmentData.pickupTime)}</p>
                    <p>DeliveryTime : {convertTime(singleShipmentData.deliveryTime)}</p>
                    <p>Distance : {singleShipmentData.distance+" Km"}</p>
                    <p>Status :  {singleShipmentData.status == 0 ? "Pending" : singleShipmentData.status==1 ? "IN_TRANSIT" : "Delivered"}</p>
                    <p>
                      Paid : {singleShipmentData.isPaid ? "Complete" : "Not Complete"}
                    </p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  ) : ""
}

export default GetShipment
