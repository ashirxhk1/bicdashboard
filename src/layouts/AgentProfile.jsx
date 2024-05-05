import { lazy } from "react"
import { Container, Row, Col } from "reactstrap"
const UserDetails = lazy(() => import("../components/Profile/UserDetails.jsx"))
const Conversation = lazy(() => import("../components/Profile/Conversation.jsx"))
const AgentCalls = lazy(() => import("../components/Profile/AgentCalls.jsx"))

const AgentProfile = () => {
    return (
        // <Container>
        <div>
            <Row>
                <Col lg='4' md='6' xs='12' className="px-0">
                    <UserDetails />
                </Col>
                <Col lg='4' md='6' xs='12' className="px-0">
                    <Conversation />
                </Col>
                <Col lg='4' md='6' xs='12' className="px-0">
                    <AgentCalls />
                </Col>
            </Row>
        </div>
        // </Container> 
    )
}
export default AgentProfile

