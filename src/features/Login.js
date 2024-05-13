import axios from "axios"
import Cookies from "universal-cookie"
const cookie = new Cookies
let token = cookie.get('token')
export const LoginApi = async (data) => {
    const res = await axios.post(`http://localhost:8000/login`,data)
    return res
}
export const logoutApi = async () => {
    const res = await axios.get(`http://localhost:8000/logout`,{
        headers:{
            Authorization: `Bearer ${token}`
        }
    })
    return res
}