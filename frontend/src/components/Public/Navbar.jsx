import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const links=
    [
        {
            name:'Home',
            path:'/'
        },
        {
            name:'About Us',
            path:'/Aboutus'
        },
        {
            name:'contact',
            path:'/contact'
        },
        {
            name:'login',
            path: '/Login'
        }
    ]
  return (
    <div className='h-[5vh] w-screen flex flex-row justify-center items-center bg-emerald-400'>
        <div className='w-[90%] h-full flex flex-row justify-between items-center'>
            <div className='w-1/4 text-2xl font-bold text-blue-950'>
                FutuRe ThiNk
            </div>
            <div className='w-1/4 flex flex-row justify-between items-center font-bold text-white'>
                {links.map((link,index)=>(
                    <NavLink key={index} to={link.path} className='cursor-pointer'>
                        {link.name}
                    </NavLink>
                ))
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar




