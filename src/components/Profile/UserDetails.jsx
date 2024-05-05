import React from 'react'
import { Card, CardBody, CardTitle } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
const UserDetails = () => {
    return (
        <div className='p-3'>
            <Card>
                <CardBody>
                    <CardTitle tag={'h5'} className='fw-bold'>User Details</CardTitle>
                    <div className='d-flex flex-column '>
                        <img src={user1}
                            className="rounded-circle"
                            alt="avatar"
                            width="45"
                            height="45" />
                        <div className="mt-3">
                            <h6 className="">Hanna Gover</h6>
                            <span className="text-muted">hgover@gmail.com</span>
                        </div>
                        <div>
                            <h6 className="mt-3 fw-semibold ">About</h6>
                            <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.</p>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default UserDetails
