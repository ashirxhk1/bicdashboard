import axios from "axios"
import Cookies from "universal-cookie"
const cookie = new Cookies

export const LoginApi = async (data) => {
    const res = await axios.post(`http://localhost:8000/api/login`,data)
    return res
}

export const LeadRegister = async (data) => {
    const res = await axios.post(`http://localhost:8000/api/register`,data)
    return res
}

export const logoutApi = async () => {
    let token = cookie.get('bictoken')
    const res = await axios.get(`http://localhost:8000/api/logout`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return res
}
export const escalationApi = async (data) => {
    let token = cookie.get('bictoken')
    const res = await axios.post(`http://localhost:8000/api/createEscalation`,data,{
        headers:{
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
        }
    })
    return res
}

export const evaluationApi = async (data) => {
    let token = cookie.get('bictoken')
    const res = await axios.post(`http://localhost:8000/api/createEvaluation`,data,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return res
}

export const fetchleaders = async () => {
    let token = cookie.get('bictoken')
    const res = await axios.get(`http://localhost:8000/api/fetchleaders`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return res
}

export const fetchallusers = async () => {
    let token = cookie.get('bictoken')
    const res = await axios.get(`http://localhost:8000/api/getallusers`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return res
}

export const fetchuserbyid = async (id) => {
    let token = cookie.get('bictoken')
    const res = await axios.get(`http://localhost:8000/api/fetchuserbyid/${id}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return res
}

export const createteamLeaders = async (data) => {
    let token = cookie.get('bictoken')
    const res = await axios.post(`http://localhost:8000/api/createteamLeaders`,data,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return res
}

export const leaddelete = async (id) => {
    let token = cookie.get('bictoken')
    const res = await axios.delete(`http://localhost:8000/api/leaddelete/${id}`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return res
}
