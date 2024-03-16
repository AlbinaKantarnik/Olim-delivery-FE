import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function SignUp() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phone: ''
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(formData));
    handleClose(); 
  };
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Sign-up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign-up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className='mb-3' controlId="formBasicPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className='mb-3' controlId="formBasicConfirmPassword">
              <Form.Label>Confirm password:</Form.Label>
              <Form.Control type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className='mb-3' controlId="formBasicFirstName">
              <Form.Label>First name:</Form.Label>
              <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className='mb-3' controlId="formBasicLastName">
              <Form.Label>Last name:</Form.Label>
              <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </Form.Group>

            <Form.Group className='mb-3' controlId="formBasicPhoneNumber">
              <Form.Label>Phone number:</Form.Label>
              <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </Form.Group>

            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>

              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignUp;
