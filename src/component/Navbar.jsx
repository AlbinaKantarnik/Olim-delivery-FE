import './navbar.css';
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import LoginModal from '../Authentication/Login';
import SignUp from '../Authentication/SignUp';

export default function Navbar() {
    const [user, setUser] = useState(null);
    const isLoggedIn = !!user;
    const navigate = useNavigate();

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
            setUser({
                id: userData.id,
                email: userData.email,
                firstName: userData.firstName,
                lastName: userData.lastName,
                role: userData.role,
            });
        }
    }, []);

    const handleLogin = (userData) => {
        setUser(userData);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        // Redirect to home page or any other desired page after logout
        navigate('/');
    };

    const handleOpenOrder = () => {
        navigate(`/order/${user.id}`);
    };
    
    return (
        <div className='Navbar'>
            <div className='rightSide'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/menu'>Menu delivery</Link></li>
                    <li><Link to='/grandmas'>Grandmas</Link></li>
                </ul>
            </div>
            <div className='leftSide'>
                {isLoggedIn ? (
                    <>
                        <button onClick={handleOpenOrder}>My order</button>
                        <h4>Hi {user.firstName}!</h4>
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <LoginModal onLogin={handleLogin} />
                        <SignUp onLogin={SignUp} />
                    </>
                )}
            </div>
        </div>
    );
}
