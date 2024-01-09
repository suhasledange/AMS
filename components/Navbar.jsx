import { AmsContext } from '@/context/AMS'
import React, { useContext, useEffect, useState } from 'react'
import { Nav1, Nav2, Nav3 } from '.'
import { GiShotgunRounds } from "react-icons/gi";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Navbar = () => {
    
  const [state,setState] = useState(false);
  const {currentUser,connectWallet,themeMode,setThemeMode} = useContext(AmsContext);

  const onChangeBtn=()=>{
        
        themeMode ==='light' ? setThemeMode('dark') : setThemeMode('light')
  }
  console.log(state)


  const navigation = [
    {id:1,title:"Home",path:"#"},
    {id:2,title:"Services",path:"#"},
    {id:3,title:"About Us",path:"#"},
    {id:4,title:"Contact Us",path:"#"},
  ];

  return (
    <nav className={` z-20 sticky top-0 bg-white dark:shadow-gray-900 lg:rounded-none lg:m-0 lg:shadow-md  dark:bg-gray-800 py-6 md:text-sm ${state ? "shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-2 md:mt-0" : " "} `}>
        <div className='gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8'>
            <div className='flex items-center justify-between md:block'>
                 
                 
                  <button className='text-gray-800 dark:text-white dark:hover:text-gray-300 flex items-center justify-center gap-1'>
                    <GiShotgunRounds className='text-3xl'/>
                    <h1 className=' text-2xl font-bold'>AMS</h1>
                  </button>

                  <div className='md:hidden'>
                      <button className=' text-gray-500 dark:text-white hover:text-gray-800' onClick={()=>setState((prev)=>!prev)}>{
                        state ? <Nav1/> : <Nav2/>
                      }</button>
                  </div>
            </div>  


            <div className={`flex-1 items-center mt-8 md:my-0 md:flex ${
              state ? "block" : "hidden"
            }`}>
                <ul className=' justify-center items-center space-y-6 md:flex md:space-x-6 md:space-y-0'>
                        {navigation.map((item)=>{
                          return (
                            <li key={navigation.id} className='text-gray-700 dark:text-white font-medium dark:hover:text-gray-400 hover:text-gray-900 duration-150'>
                              <a href={item.path} className='block'>{item.title}</a>
                            </li>
                          )
                        })}
                </ul>
                <div className='flex-1 gap-x-6 items-center justify-end space-x-6 md:flex md:space-y-0 lg:mt-0 mt-5'>
                        {currentUser ? (
                          <p className='duration-150 flex items-center justify-center gap-x-1 py-2 px-4 dark:bg-gray-700 text-white font-medium bg-gray-800 hover:bg-gray-700 dark:hover:bg-gray-600 active:bg-gray-900 rounded-full md:inline-flex'>
                            {currentUser.slice(0,8)+"..." +currentUser.slice(35,42)}
                          </p>
                          
                        ) : (
                          <button onClick={()=>connectWallet()} className='duration-150 flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium dark:bg-gray-700 bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex'>Connect Wallet <Nav3/> </button>
                        )}
                </div>
                <div className='ml-4 mt-5 lg:mt-0 '>
                  <button  onClick={onChangeBtn}>
                    {
                      themeMode ==='light'?
                      <MdDarkMode className='text-2xl text-gray-700'/>  
                    : <MdLightMode className='text-2xl'/>
                    }
                    </button>

            {/* <label className="relative inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onChange={onChangeBtn}
                checked={themeMode==="dark"}
            />
            <div className="px-1 flex items-center justify-between w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-700 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-700">
            {<MdLightMode className='text-md'/> } 
            {<MdDarkMode className='text-md'/> } 
            </div>
        </label> */}

                </div>
             </div>
        </div>
    </nav>
  )
}

export default Navbar
