import React, { useContext, useEffect, useState } from 'react';
import { Base, Card, CompleteShipment, Form, GetShipment, Profile, Services, StartShipment } from '@/components';
import { AmsContext } from '@/context/AMS';

const Index = () => {
  const { currentUser, createShipment, getAllShipment, completeShipment, getShipment, startShipment, getAllShipmentCount, getBalance, themeMode } = useContext(AmsContext);

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  const [createShipmentModel, setCreateShipmentModel] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openBase, setBase] = useState(false);
  const [startModal, setStartModal] = useState(false);
  const [completeModal, setCompleteModal] = useState(false);
  const [getModel, setGetModel] = useState(false);
  const [allShipmentsdata, setAllShipmentsdata] = useState();
  const [shipCount, setShipCount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  

  useEffect(()=>{
    const notificationShown = localStorage.getItem('notificationShown');
    if (!notificationShown) {
      setShowNotification(true);
      localStorage.setItem('notificationShown', 'true');
  
      setTimeout(() => {
        setShowNotification(false);
      }, 8000);
    }

  },[])


  useEffect(() => {
    const fetchData = async () => {
      const allData = await getAllShipment();
      const count = await getAllShipmentCount();
      const balance = await getBalance();
  
      setAllShipmentsdata(allData);
      setShipCount(count);
      setBalance(balance);
    };
  
    fetchData();
  
    // const intervalId = setInterval(fetchData, 10000);
  
    // return () => clearInterval(intervalId);
  }, []);


  const PolygonNotification = () => {
    return (
      <div onClick={()=>setShowNotification(false)} className={`${showNotification ? "flex" : "hidden"} absolute items-center justify-center w-full h-full bg-black/[0.5]`}>
        <div className='-translate-y-20 bg-gray-800 mx-5 p-3 rounded-sm'>
        <p className='text-center text-gray-100 font-semibold tracking-wider' style={{ margin: '0' }}>Note: This application requires arbitrum-sepolia Testnet account to function properly.</p>
        </div>
      </div>
    );
  };

  return (
    <>
      {<PolygonNotification />}
      
      <Services setOpenProfile={setOpenProfile} setBase={setBase} setCompleteModal={setCompleteModal} setGetModel={setGetModel} setStartModal={setStartModal} shipCount={shipCount} />
      <Card setcreateShipmentModel={setCreateShipmentModel} allShipmentsdata={allShipmentsdata} />
      <Form createShipmentModel={createShipmentModel} createShipment={createShipment} setcreateShipmentModel={setCreateShipmentModel} getAllShipment={getAllShipment} setallShipmentsdata={setAllShipmentsdata} />
      <Profile openProfile={openProfile} setOpenProfile={setOpenProfile} currentUser={currentUser} shipCount={shipCount} Balance={balance} />
      <Base openBase={openBase} setBase={setBase} />
      <CompleteShipment completeModal={completeModal} setCompleteModal={setCompleteModal} completeShipment={completeShipment} getAllShipment={getAllShipment} setAllShipmentsdata={setAllShipmentsdata} />
      <GetShipment getModel={getModel} setGetModel={setGetModel} getShipment={getShipment} />
      <StartShipment startModal={startModal} setStartModal={setStartModal} startShipment={startShipment} getAllShipment={getAllShipment} setAllShipmentsdata={setAllShipmentsdata} />
    </>
  );
};

export default Index;
