import React from 'react'
import { RiFileCopyLine } from 'react-icons/ri';
const Cards = ({shipment}) => {

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text); // Copy text to clipboard
      };
      
    const convertTime = (time)=>{
        const newTime = new Date(time);
        const dateTime = new Intl.DateTimeFormat("en-US",{
          year:"numeric",
          month:"2-digit",
          day:"2-digit",
        }).format(newTime);
        return dateTime;
      };
      const hexValue = shipment.distance._hex;
    const distance = parseInt(hexValue, 16);

  return (
    <div className='relative md:w-full sm:w-[20rem] border-2 p-2 pb-0 shadow-sm shadow-gray-600'>
            <h1 className='z-10 bg-gray-800 text-white rounded-b-md font-medium text-sm absolute top-0 left-0 p-1'>
                    {shipment.status == 0 ? "Pending" : shipment.status==1 ? "IN_TRANSIT" : "Delivered"}
            </h1>
            <h1 className='font-medium text-gray-700 text-sm absolute top-0 right-1 p-1'>
                    {shipment.isPaid ? "Complete" : "Not Complete"}
            </h1>


        <div className='my-8 flex flex-col gap-2 px-1 text-wrap break-words overflow-x-hidden overflow-y-scroll h-[25rem] w-full'>
                
                <div className='border-b-2 border-gray-400 pb-1 '>
                    <h1 className='text-md font-medium'>Sender : </h1>
                    <p className='text-sm flex gap-2 items-center'>{shipment.sender.slice(0,10)+"..."+shipment.sender.slice(36,42)}
                    <RiFileCopyLine
                        className='cursor-pointer hover:text-indigo-500 text-gray-500'
                        size={18}
                        onClick={() => handleCopy(shipment.sender)}
                        title='Copy Sender Address'
                    />
                    </p>
                    
                </div>
                <div className='border-b-2 border-gray-400 pb-1 '>
                    <h1 className='text-md font-medium'>Receiver : </h1>
                    <p className='text-sm flex gap-2 items-center'>{shipment.receiver.slice(0,10)+"..."+shipment.receiver.slice(36,42)}
                    <RiFileCopyLine
                        className='cursor-pointer hover:text-indigo-500 text-gray-500'
                        size={18}
                        onClick={() => handleCopy(shipment.receiver)}
                        title='Copy Receiver Address'
                    />
                    </p>
                </div>
                <div className='border-b-2 border-gray-400 pb-1 '>
                    <h1 className='text-md font-medium'>Weapon Name : </h1>
                    <p className='text-sm'>{shipment.weaponName}</p>
                </div>
                <div className='border-b-2 border-gray-400 pb-1 '>
                    <h1 className='text-md font-medium'>Weapon Type : </h1>
                    <p className='text-sm'>{shipment.weaponType}</p>
                </div>
                <div className='border-b-2 border-gray-400 pb-1 '>
                    <h1 className='text-md font-medium'>Weapon Details : </h1>
                    <textarea  rows={4} className='text-sm w-full resize-none' value={shipment.weaponDetails} />
                </div>
                <div className='border-b-2 border-gray-400 pb-1 '>
                    <h1 className='text-md font-medium'>Pickup Time : </h1>

                    <p className='text-sm'>{convertTime(shipment.pickupTime)}</p>
                </div>
                <div className='border-b-2 border-gray-400 pb-1 '>
                    <h1 className='text-md font-medium'>Delivery Time : </h1>
                    <p className='text-sm'>{convertTime(shipment.deliveryTime)}</p>
                </div>
                <div className='border-b-2 border-gray-400 pb-1 '>
                    <h1 className='text-md font-medium'>Distance : </h1>
                    <p className='text-sm'>{distance+" Km"}</p>
                </div>
                <div className='border-b-2 border-gray-400 pb-1 '>
                    <h1 className='text-md font-medium'>Price : </h1>
                    <p className='text-sm'>{shipment.price}</p>
                </div>
               
        </div>
    </div>
  )
}

export default Cards
