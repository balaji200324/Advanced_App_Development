import React from 'react'
import Sidebar from '../components/Admin/sidebar'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div>
      <Sidebar/>
      <div>
        <Outlet/>
      </div>

    </div>
  )
}

export default UserLayout