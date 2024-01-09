import {Base, Card, CompleteShipment, Form, GetShipment, Profile, Services, StartShipment } from '@/components'
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
    themeMode,
  } = useContext(AmsContext);

  useEffect(()=>{
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(themeMode);
    const theme = localStorage.getItem("mode")
  },[themeMode])

  const [createShipmentModel,setcreateShipmentModel] = useState(false);
  const [openProfile,setOpenProfile] = useState(false);
  const [openBase,setBase] = useState(false);

  const [startModal,setStartModal] = useState(false);
  const [completeModal,setCompleteModal] = useState(false);
  const [getModel,setGetModel] = useState(false);

  const [allShipmentsdata,setallShipmentsdata] = useState();
  const [shipCount,setshipCount] = useState(0);
  const [Balance,setBalance] = useState(0);
  useEffect(()=>{
    const getCampaignData = getAllShipment();
    const ShipCount = getAllShipmentCount();
    const balance = getBalance();

    return async ()=>{

      const allData = await getCampaignData;
      setallShipmentsdata(allData);
      
      ShipCount.then(result => {
        setshipCount(result); 
      })

      balance.then(result => {
        setBalance(result); 
      })
    }
  },[])

  return (
    < >

      <Services setOpenProfile={setOpenProfile}
                setBase={setBase}
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
      <Base
             openBase={openBase}
             setBase={setBase}
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
