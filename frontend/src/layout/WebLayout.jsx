import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Public/Navbar'
import Footer from '../components/Public/Footer'

const WebLayout = () => {
  return (
    <>
        <div className='h-screen w-screen p-0 m-0 flex-col justify-center'>
            <Navbar/>
            <div>
              <Outlet/>
            </div>
            <Footer/>
        </div>
    </>
  )
}

export default WebLayout