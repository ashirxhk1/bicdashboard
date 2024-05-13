import axios from "axios"
import Cookies from "universal-cookie"
const cookie = new Cookies

export const LoginApi = async (data) => {
    let token = cookie.get('token')
    const res = await axios.post(`http://localhost:8000/login`,data)
    return res
}
export const logoutApi = async () => {
    let token = cookie.get('token')
    const res = await axios.get(`http://localhost:8000/logout`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return res
}
export const escalationApi = async (data) => {
    let token = cookie.get('token')
    const res = await axios.post(`http://localhost:8000/createEscalation`,data,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return res
}