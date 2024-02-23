import React from 'react'
import { Navigate, Outlet} from 'react-router-dom'

export default function Private({user}) {
    
    return user ?<Outlet />:<Navigate to="signup" />
}
