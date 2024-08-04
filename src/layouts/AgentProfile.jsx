import { lazy, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Container, Row, Col,Button} from "reactstrap"
import { socket } from "../socket.js"
import ProjectTables from "../components/dashboard/ProjectTable.js"
const UserDetails = lazy(() => import("../components/Profile/UserDetails.jsx"))
const Conversation = lazy(() => import("../components/Profile/Conversation.jsx"))
const AgentCalls = lazy(() => import("../components/Profile/AgentCalls.jsx"))
const Model = lazy(() => import('../views/ui/Model.js'))


const AgentProfile = () => {
    const [isConnect,setIsConnected] = useState(false)
    const user = JSON.parse(localStorage.getItem('bicuserData'))
    
    // const handlerJoin = () => {
    //     socket.emit('join-room',{username:user.name,userRoom:'notificationRoom'})
    // }

    useEffect(() => {
        socket.on('connected',() => {
            setIsConnected(true)
        })
        
        socket.on('user-connect',(data) => {
            console.log(data)
        })

        socket.emit('join-room',{username:user.name,userRoom:'notification-Room'})

    },[socket])



    return (
        <div className="d-flex flex-column gap-5 justify-content-center align-items-center">
            <div className="w-100">
                <ProjectTables/>
                {/* <Button onClick={() => handlerJoin()}>Join</Button> */}
            </div>
        </div> 
    )
}
export default AgentProfile
