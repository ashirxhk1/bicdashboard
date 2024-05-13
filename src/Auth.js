import Cookies from "universal-cookie";
import React from 'react'
import { useNavigate,Outlet} from "react-router-dom";
const cookie = new Cookies()
const Auth = () => {
    const nav = useNavigate()
    let token = cookie.get('token')
    return (
        <>
        {token ? <Outlet/> : nav('/')}
        </>
    )
}

export default Auth
