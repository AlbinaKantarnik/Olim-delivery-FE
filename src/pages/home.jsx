import { useNavigate } from "react-router-dom";
import React from 'react';
import './home.css'
export default function Home() {
  const navigate = useNavigate();
  const ToSearchPage = (e) => {
    navigate('/menu')
  }

  return (
    <>
      <div className="home-container">
        <div className='home-content'>
          {/* {isAuthenticated.user.Fname && <p><i>Welcome {isAuthenticated.user.Fname}!</i></p>} */}
          <h1>Homemade food from the repatriate’s country</h1>
          <h4>Food prepared by your beloved grandmother especially for you.</h4>
          <button onClick={ToSearchPage}>Order delivery</button>
          {/* {!isAuthenticated.user.Fname && <p><i>To use full functions please Login or Singup</i></p>} */}
          <div className="arrow-container">
            <div className="arrow"></div>
          </div>
        </div>
      </div>

      <div></div>
    </>
  )
}