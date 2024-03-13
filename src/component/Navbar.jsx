import './navbar.css'
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
// import { useUser } from '../Context/UserContext';
import LoginModal from '../Authentication/Login';
import SignUp from '../Authentication/SignUp';
import { useCookies } from 'react-cookie';

export default function Navbar() {
    const [user, setUser] = useState(null);
    const isLoggedIn = !!user;
    const [cookies, setCookie, removeCookie] = useCookies(['jwt']);
    const navigate = useNavigate();

    useEffect(() => {
        if (cookies.jwt) {
            const userData = JSON.parse(atob(cookies.jwt.split('.')[1]));
            if (userData) {
                setUser({
                    id: userData.id,
                    email: userData.email,
                    firstName: userData.firstName,
                    lastName: userData.lastName,
                    role: userData.role,
                });
            } else {
                setUser(null);
            }
        }
    }, [cookies.jwt]);

    const handleLogin = (userData) => {
        setUser(userData);
    };

    const handleOpenOrder = () => {
        navigate(`/order/${user.id}`)
    }
    return (
        <>
            <div className='Navbar'>

                <div className='rightSide'>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/menu'>Menu delivery </Link></li>
                        
                    </ul>
                </div>
                <div className='leftSide'>
                    {isLoggedIn ? (
                        <>
                            <button onClick={handleOpenOrder}>My order</button>
                            <h4>Hi {user.firstName}!</h4>
                            {/* <LogoutModal onLogout={handleLogout} /> */}
                        </>
                    ) : (
                        <>
                            <LoginModal onLogin={handleLogin} />
                            <SignUp onLogin={handleLogin} />
                        </>
                    )}
                </div>
            </div>
        </>
    )
}
