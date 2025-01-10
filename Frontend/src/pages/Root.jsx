import React from 'react'
import UserNavbar from './userNavbar/UserNavbar'
import UserFooter from './userFooter/UserFooter'
import { Outlet } from 'react-router'

function Root() {
    return (
        <>
            <UserNavbar />
            <Outlet />
            <UserFooter />
        </>
    )
}

export default Root
