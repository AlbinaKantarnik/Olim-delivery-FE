import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useUser } from '../context/userContext'; 

function LoginModal({ onLogin }) {
    const { updateUserContext } = useUser();
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState(null);

    const handleClose = () => {
        setShow(false);
        setFormData({ email: '', password: '' });
        setError(null);
    };

    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem('user')); 
        if (storedUser && storedUser.email === formData.email && storedUser.password === formData.password) {
            updateUserContext(storedUser);
            onLogin(storedUser);
            handleClose();
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Login
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <label>Email:</label>
                            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
                        </div>

                        <div className='mb-3'>
                            <label>Password:</label>
                            <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
                        </div>

                        {error && <div className="alert alert-danger" role="alert">{error}</div>}

                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default LoginModal;
