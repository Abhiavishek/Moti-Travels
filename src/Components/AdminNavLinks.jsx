import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavLinks = () => {
  return (
    <div>
        <Link to="/adminhome/userlist">User-List</Link>
        <Link to="/adminhome/addbus">Add Bus</Link>
        <Link to="/adminhome/reservations">Reservations</Link>
    </div>
  )
}

export default AdminNavLinks