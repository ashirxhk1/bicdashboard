import { lazy } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Row, Col,Button} from "reactstrap"
const UserDetails = lazy(() => import("../components/Profile/UserDetails.jsx"))
const Conversation = lazy(() => import("../components/Profile/Conversation.jsx"))
const AgentCalls = lazy(() => import("../components/Profile/AgentCalls.jsx"))
const Model = lazy(() => import('../views/ui/Model.js'))
const AgentProfile = () => {
    const Navigation = useNavigate()
    const Nav = () =>{
        Navigation('/bi/agentform')
    }
    const Escalation = () =>{
        Navigation('/bi/escalationform')
    }
    return (
        // <Container>
        <div className="d-flex justify-content-center align-items-center">
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <Button className="btn btn-outline-success me-md-2"onClick={Nav}> Evaluation</Button>
                <Button className="btn btn-outline-danger me-md-2"onClick={Escalation}> Escalation</Button>
                <Model/>
            </div>
            {/* <Row>
                <Col lg='4' md='6' xs='12' className="px-0">
                    <UserDetails />
                </Col>
                <Col lg='4' md='6' xs='12' className="px-0">
                    <Conversation />
                </Col>
                <Col lg='4' md='6' xs='12' className="px-0">
                    <AgentCalls />
                </Col>
            </Row> */}
        </div>
        // </Container> 
    )
}
export default AgentProfile

