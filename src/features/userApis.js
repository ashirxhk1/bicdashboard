import axios from "axios"
import Cookies from "universal-cookie"
const cookie = new Cookies

export const LoginApi = async (data) => {
    const res = await axios.post(`https://backendbic.onrender.com/login`,data)
    return res
}

export const LeadRegister = async (data) => {
    const res = await axios.post(`https://backendbic.onrender.com/register`,data)
    return res
}

export const logoutApi = async () => {
    let token = cookie.get('bictoken')
    const res = await axios.get(`https://backendbic.onrender.com/logout`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return res
}
export const escalationApi = async (data) => {
    let token = cookie.get('bictoken')
    const res = await axios.post(`https://backendbic.onrender.com/createEscalation`,data,{
        headers:{
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        }
    })
    return res
}

export const evaluationApi = async (data) => {
    let token = cookie.get('bictoken')
    const res = await axios.post(`https://backendbic.onrender.com/createEvaluation`,data,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return res
}

export const fetchleaders = async () => {
    let token = cookie.get('bictoken')
    const res = await axios.get(`https://backendbic.onrender.com/fetchleaders`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return res
}

export const fetchallusers = async () => {
    let token = cookie.get('bictoken')
    const res = await axios.get(`https://backendbic.onrender.com/getallusers`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return res
}

export const fetchuserbyid = async (id) => {
    let token = cookie.get('bictoken')
    const res = await axios.get(`https://backendbic.onrender.com/fetchuserbyid/${id}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return res
}

export const createteamLeaders = async (data) => {
    let token = cookie.get('bictoken')
    const res = await axios.post(`https://backendbic.onrender.com/createteamLeaders`,data,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return res
}

export const leaddelete = async (id) => {
    let token = cookie.get('bictoken')
    const res = await axios.delete(`https://backendbic.onrender.com/leaddelete/${id}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return res
}
