import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar2 from '../components/Admin/Sidebar2'

const AdminLayout = () => {
  return (
    <div>
      <Sidebar2 />
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default AdminLayout