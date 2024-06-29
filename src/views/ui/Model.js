import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { LeadRegister } from '../../features/userApis';
const Models= () => {
  const [modal, setModal] = useState(false);
  const [credential,setCredential] = useState({email:'',password:'',role:'user',name:''})
  const toggle = () => setModal(!modal);
  const handleChange = (name,value) => {
    setCredential((pre) => ({
        ...pre,
        [name]:value
    }))
  }

  const handlerRegister = async (e) => {
    e.preventDefault();
    if(credential.email.trim() ==='' || credential.password.trim() === '' || credential.name.trim() === ''){
      alert("field required to fill!")
      return
    }else{ 
      try{
        const {data} = await LeadRegister(credential)
        if(data.success){
          alert("Team Leader Added!")
          setCredential({email:'',password:''})
          toggle()
        }else {
          alert('registration failed. Please check your credentials.');
        }
      }catch(error){
        if (error.response) {
          alert(`Error: ${error.response.data.message || 'An error occurred'}`);
        } else if (error.request) {
          alert('No response received from the server. Please try again later.');
        } else {
          alert('An error occurred. Please try again later.');
        }
      }
    }
  }


  return (
    <div>
      <Button onClick={toggle} className='w-100'>
        Add Team Lead
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add user</ModalHeader>
        <ModalBody>
        <Form onSubmit={handlerRegister}>
              <FormGroup>
                <Label for="username">Name</Label>
                <Input
                  id="username"
                  name="name"
                  placeholder="Enter name"
                  type="text"
                  value={credential.name}
                  onChange={(e) => handleChange('name',e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="useremail">Email</Label>
                <Input
                  id="useremail"
                  name="email"
                  placeholder="Enter email"
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
                  placeholder="Enter Password"
                  type="password"
                  value={credential.password}
                  onChange={(e) => handleChange('password',e.target.value)}
                />
              </FormGroup>
              <ModalFooter>
          <Button color="primary" type='submit'>
            Submit
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
              </Form>
        </ModalBody>
        
      </Modal>
    </div>
  );
}

export default Models;