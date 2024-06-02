import axios from "axios"
import Cookies from "universal-cookie"
const cookie = new Cookies

export const LoginApi = async (data) => {
    const res = await axios.post(`http://localhost:8000/login`,data)
    return res
}

export const LeadRegister = async (data) => {
    const res = await axios.post(`http://localhost:8000/register`,data)
    return res
}

export const logoutApi = async () => {
    let token = cookie.get('bictoken')
    const res = await axios.get(`http://localhost:8000/logout`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return res
}
export const escalationApi = async (data) => {
    let token = cookie.get('bictoken')
    const res = await axios.post(`http://localhost:8000/createEscalation`,data,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return res
}

export const evaluationApi = async (data) => {
    let token = cookie.get('bictoken')
    const res = await axios.post(`http://localhost:8000/createEvaluation`,data,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return res
}

export const fetchleaders = async () => {
    let token = cookie.get('bictoken')
    const res = await axios.get(`http://localhost:8000/fetchleaders`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return res
}

export const fetchallusers = async () => {
    let token = cookie.get('bictoken')
    const res = await axios.get(`http://localhost:8000/getallusers`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return res
}

export const createteamLeaders = async (data) => {
    let token = cookie.get('bictoken')
    const res = await axios.post(`http://localhost:8000/createteamLeaders`,data,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return res
}

export const leaddelete = async (id) => {
    let token = cookie.get('bictoken')
    const res = await axios.delete(`http://localhost:8000/leaddelete/${id}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return res
}