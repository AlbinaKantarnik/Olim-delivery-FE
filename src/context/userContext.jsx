import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const updateUserContext = (userData) => {
    setUser(userData);
  };
  const logoutUser = () => {
    setUser({});
    localStorage.removeItem('accessToken');    
  };

  return <UserContext.Provider value={{user, logoutUser, updateUserContext}}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);