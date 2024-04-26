import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { Suspense, lazy } from 'react'
import Home from './pages/Home'
import WebLayout from './layout/WebLayout'
import Loading from './components/Public/Loading'
import Course from './pages/Course'
import AdminDashboard from './pages/Admin/AdminDashboard'
import AdminLayout from './layout/AdminLayout'
import AdminProfile from './pages/Admin/Adminprofile'
import RefundPolicy from './pages/refundpolicy'
import TermsAndConditions from './pages/termsandcondition'
import PrivacyPolicy from './pages/privacy'
import UserDashboard from './pages/User/UserDashboard'
import UserList from './pages/Admin/courses/UserList'
import Courses from './pages/Admin/courses/Courses'
import UserLayout from './layout/UserLayout'
import AdminList from './pages/Admin/AdminList'
import ProfilePage from './pages/User/Uprofile'
import PaymentHistoryPage from './pages/Admin/payment'
import Certification from './pages/User/Ucertificates'
import UserInquiryPage from './pages/User/AddInquery'
import UserPaymentHistory from './pages/User/paymenthistory'
import EnquiriesPage from './pages/Admin/AdminEnqueryResponse'
import MyCoursesPage from './pages/User/mycourses'


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
        <Route path="/refundpolicy" element={<RefundPolicy/>}></Route>
        <Route path="/TermsAndConditions" element={<TermsAndConditions/>}></Route>
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>}></Route>
      </Route>

      <Route element={<AdminLayout/>}>
        <Route path="/admin/dashboard" element={<AdminDashboard/>}></Route>
        <Route path="/admin/AdminList" element={<AdminList/>}></Route>
        <Route path="/admin/userlist" element={<UserList/>}></Route>
        <Route path="/admin/courses" element={<Courses/>}></Route>
        <Route path="/admin/profile" element={<AdminProfile/>}></Route>
        <Route path="/admin/paymentHistory" element={<PaymentHistoryPage/>}></Route>
        <Route path="/admin/enquires" element={<EnquiriesPage/>}></Route>
      
      </Route>

    <Route element={<UserLayout/>}>
      <Route path="/user/dashboard" element={<UserDashboard/>}></Route>
      <Route path="/user/mycourses" element={<MyCoursesPage/>}></Route>
      <Route path="/user/profile" element={<ProfilePage/>}></Route>
      <Route path="/user/certificates" element={<Certification/>}></Route>
      <Route path="/user/enquires" element={<UserInquiryPage/>}></Route>
      <Route path="/user/paymentHistory" element={<UserPaymentHistory/>}></Route>
    

    </Route>

    </Routes>
    </Suspense>
    </BrowserRouter>
    </>
  )
}

export default App