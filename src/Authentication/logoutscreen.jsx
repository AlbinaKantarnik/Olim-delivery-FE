import React, { useState, useEffect } from 'react';
import Header from './header';
import LoginModal from './Login';
import SignUp from './SignUp';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

function LogOutScreen() {
  const [user, setUser] = useState(null);
  const isLoggedIn = !!user;
  const [cookies, setCookie, removeCookie] = useCookies(['jwt']);

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
  
  return (
    <div className='custom-margin-top'>
      <Header user={user} />
      <div className="d-flex justify-content-evenly mt-4">
        {isLoggedIn ? (
          <>
            <Link to="/my-pets" className="btn btn-primary">
              My Pets
            </Link>

            <Link to="/profile-settings" className="btn btn-primary">
              Profile Settings
            </Link>
          </>
        ) : (
          <>
            <LoginModal onLogin={handleLogin} />
            <SignUp onLogin={handleLogin} />
          </>
        )}
      </div>
      <p className='d-flex justify-content-center mt-4'>
      <Link to="/search">Search Page</Link>
    </p>
    </div>
  );
}

export default LogOutScreen;
