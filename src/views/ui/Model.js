import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

const Models= () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button onClick={toggle}>
        Add Agent
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add user</ModalHeader>
        <ModalBody>
        <Form>
              <FormGroup>
                <Label for="username">Name</Label>
                <Input
                  id="username"
                  name="name"
                  placeholder="Enter Agent Name"
                  type="name"
                />
              </FormGroup>
              <FormGroup>
                <Label for="useremail">Email</Label>
                <Input
                  id="useremail"
                  name="email"
                  placeholder="Enter Agent Email"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="usernumber">Extension</Label>
                <Input
                  id="usernumber"
                  name="number"
                  placeholder="Enter Agent Extension"
                  type="number"
                  min="10" max="15"
                />
              </FormGroup>
              </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
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