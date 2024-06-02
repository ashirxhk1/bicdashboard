import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { LeadRegister } from '../../features/userApis';
const Models= () => {
  const [modal, setModal] = useState(false);
  const [credential,setCredential] = useState({email:'',password:'',role:'user'})
  const toggle = () => setModal(!modal);
  const handleChange = (name,value) => {
    setCredential((pre) => ({
        ...pre,
        [name]:value
    }))
  }

  const handlerRegister = async () => {
    const {data} = await LeadRegister(credential)
    if(credential.email.trim() ==='' || credential.password.trim() === ''){
      alert("field required to fill!")
      return
    } 
    if(data.success){
      alert("Team Leader Added!")
      setCredential({email:'',password:''})
    }
  }


  return (
    <div>
      <Button onClick={toggle}>
        Add Team Lead
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add user</ModalHeader>
        <ModalBody>
        <Form>
              <FormGroup>
                <Label for="useremail">Email</Label>
                <Input
                  id="useremail"
                  name="email"
                  placeholder="Enter Lead email"
                  type="email"
                  value={credential.email}
                  onChange={(e) => handleChange('email',e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="userpass">Password</Label>
                <Input
                  id="userpass"
                  name="password"
                  placeholder="Enter Lead Paaword"
                  type="password"
                  value={credential.password}
                  onChange={(e) => handleChange('password',e.target.value)}
                />
              </FormGroup>
              </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => {
            handlerRegister()
            toggle()
          }}>
            Submit
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Models;