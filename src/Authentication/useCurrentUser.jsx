import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [cookies] = useCookies(['jwt']);

  useEffect(() => {
    if (cookies.jwt) {
      const userData = JSON.parse(atob(cookies.jwt.split('.')[1]));
      console.log('User data from cookie:', userData);
      if (userData) {
        setCurrentUser(userData); 
      } else {
        setCurrentUser(null);
      }
      console.log('User role:', userData ? userData.role : 'Guest');
    } else {
      console.log('No jwt cookie found');
    }
  }, [cookies.jwt]);

  return currentUser;
};

export default useCurrentUser;
