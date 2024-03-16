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
          <h1>Grandma's kitchen</h1>
          <h4>A Taste of Home: bringing cultures together through Grandma's Recipes</h4>
          <button onClick={ToSearchPage}>Order delivery</button>
          {/* {!isAuthenticated.user.Fname && <p><i>To use full functions please Login or Singup</i></p>} */}
          <div className="arrow-container">
            <div className="arrow"></div>
          </div>
        </div>
      </div>

      <div className="home-container2">

        <div className="home-content1">
          <img className="homeImg1" src="/granny1.jpg" alt="Granny" />
          <img className="homeImg2" src="/fried.jpg" alt="Granny's food" />
        </div>

        <div className="home-content2">
          <h1>We finded place 
          <br></br> where traditional home kitchen
          <br></br> knows no borders</h1>
          <h4>Israel has always embraced diversity and the ability to unite people from different cultures and traditions. 
            <br></br>
            <br></br> Our platform is a place where grandmothers from around the world come together with one goal: to offer you the taste of home and the warmth of family dishes. 
            <br></br>
            <br></br>Here you will meet grandmothers from different countries, each ready to cook dishes steeped in history and tradition that will be familiar and beloved to each of you. 
            </h4>
        </div>
      </div>
    </>
  )
}