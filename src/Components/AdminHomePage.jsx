import React from 'react'
import AdminNavLinks from './AdminNavLinks'
import { Route, Routes } from 'react-router-dom'
import AddBus from './AddBus'
import UserList from './UserList'
import Reservations from './Reservations'

const AdminHomePage = () => {
  return (
    <div>
      <AdminNavLinks/>
      <Routes>
        <Route path='/addbus' element={<AddBus/>}/>
        <Route path='/userlist' element={<UserList/>}/>
        <Route path='/reservations' element={<Reservations/>}/>
      </Routes>
    </div>
  )
}

export default AdminHomePage