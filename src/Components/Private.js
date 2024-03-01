import React from 'react'
import { Navigate, Outlet} from 'react-router-dom'

export default function Private() {
    const user=localStorage.getItem("user")
    return user ?<Outlet  role="outlet"/>:<Navigate  to="signup" />
}
