import React from 'react'
import AuthNavbar from '../components/navbar/AuthNavbar'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
    return (
        <>
            <AuthNavbar />
            <Outlet />
            <Footer />
        </>
    )
}
