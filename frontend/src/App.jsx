import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { Suspense, lazy } from 'react'
import Home from './pages/Home'
import WebLayout from './layout/WebLayout'
import Loading from './components/Public/Loading'
import Course from './pages/Course'
import AdminDashboard from './pages/Admin/AdminDashboard'
import UserDashboard from './pages/User/UserDashboard'
import AdminLayout from './layout/AdminLayout'
import UserLayout from './layout/UserLayout'

const Signup =lazy(()=> import('./pages/Auth/Signup')) 
const Contact =lazy(()=> import('./pages/Contact'))
const Login =lazy(()=> import('./pages/Auth/Login'))

const App =()=> {
  return (
    <>
    <BrowserRouter>
    <Suspense fallback={<Loading/>}>
    <Routes>
      
      <Route element={<WebLayout/>}>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/courses" element={<Course />}></Route>
      </Route>

      <Route element={<AdminLayout/>}>
        <Route path="/admin/dashboard" element={<AdminDashboard/>}></Route>
      </Route>

      <Route element={<UserLayout/>}>
        <Route path="/user/dashboard" element={<UserDashboard/>}></Route>
      </Route>

    </Routes>
    </Suspense>
    </BrowserRouter>
    </>
  )
}

export default App