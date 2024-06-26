import { useRoutes } from "react-router-dom";
import Themeroutes from "./routes/Router";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookie = new Cookies()
const App = () => {
  const navigate = useNavigate()
  const routing = useRoutes(Themeroutes);
  let token = cookie.get('bictoken')
  // useEffect(() => {
  //   if(token){
  //     navigate('/bi/profile')
  //     // window.location.reload();
  //   }
  // },[])

  return <div className="dark">{routing}</div>;
};

export default App;
