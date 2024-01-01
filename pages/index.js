import { Card, CompleteShipment, Form, GetShipment, Profile, Services, StartShipment } from '@/components'
import { AmsContext } from '@/context/AMS'
import React, { useContext, useEffect, useState } from 'react'

const index = () => {

  const {
    currentUser,
    createShipment,
    getAllShipment,
    completeShipment,
    getShipment,
    startShipment,
    getAllShipmentCount,
    getBalance,
  } = useContext(AmsContext);

  const [createShipmentModel,setcreateShipmentModel] = useState(false);
  const [openProfile,setOpenProfile] = useState(false);
  const [startModal,setStartModal] = useState(false);
  const [completeModal,setCompleteModal] = useState(false);
  const [getModel,setGetModel] = useState(false);

  const [allShipmentsdata,setallShipmentsdata] = useState();
  const [shipCount,setshipCount] = useState();
  const [Balance,setBalance] = useState();
  useEffect(()=>{
    const getCampaignData = getAllShipment();
    const ShipCount = getAllShipmentCount();
    const balance = getBalance();

    return async ()=>{
      const allData = await getCampaignData;
      setallShipmentsdata(allData);
      
      ShipCount.then(result => {
        setshipCount(result.toNumber()); 
      })
      balance.then(result => {
        setBalance(result); 
      })
    }
  },[])

  return (
    < >

      <Services setOpenProfile={setOpenProfile}
                setCompleteModal={setCompleteModal}
                setGetModel={setGetModel}
                setStartModal={setStartModal}
                shipCount={shipCount}

      />
      <Card
            setcreateShipmentModel={setcreateShipmentModel}
            allShipmentsdata={allShipmentsdata}
      />

      <Form
            createShipmentModel={createShipmentModel}
            createShipment={createShipment}
            setcreateShipmentModel={setcreateShipmentModel}
      />
      <Profile
            openProfile={openProfile}
            setOpenProfile={setOpenProfile}
            currentUser={currentUser}
            shipCount={shipCount}
            Balance={Balance}

      />
      <CompleteShipment
            completeModal={completeModal}
            setCompleteModal={setCompleteModal}
            completeShipment={completeShipment}
      />
      <GetShipment
          getModel={getModel}
          setGetModel={setGetModel}
          getShipment={getShipment}
      />
      <StartShipment
          startModal={startModal}
          setStartModal={setStartModal}
          startShipment={startShipment}
      />
  </>
  )
}

export default index
