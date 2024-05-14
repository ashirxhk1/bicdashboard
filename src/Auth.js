import Cookies from "universal-cookie";
import { useNavigate} from "react-router-dom";
const cookie = new Cookies()

const Auth = ({children}) => {
    const nav = useNavigate()
    let token = cookie.get('token')
    if(token){
        return token ? children : nav('/login')
    }
    return nav('/login')
}

export default Auth


