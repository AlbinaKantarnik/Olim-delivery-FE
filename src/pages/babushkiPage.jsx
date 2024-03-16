import React from 'react';
import { Link } from 'react-router-dom';

const Babushki = () => {
    const hardcodedData = [
        { id: 1, name: "Maria Ivanovna", age: 72, flag_url: "/content/recepies/Russian/Флаг_России_(1).jpg", picture_url: "/content/Grand mothers/9255611_1500n.jpg", country: "Russia" },
        { id: 2, name: "Giulia Rossi", age: 68, flag_url: "/content/recepies/Italian/depositphotos_10884967-stock-photo-italian-flag.jpg", picture_url: "/content/Grand mothers/Italian.jpg" , country: "Italy"},
        { id: 3, name: "Ana da Silva", age: 70, flag_url: "/content/recepies/Brazilian/Flag_of_Brazil.svg.png", picture_url: "/content/Grand mothers/ethiop.jpg", country: "Brazil" },
        { id: 4, name: "Alemke Tsegaye", age: 75, flag_url: "/content/recepies/Ethiopian/images.png", picture_url: "/content/Grand mothers/braz.jpg" , country: "Ethiopia" },
        { id: 5, name: "Natallia Kovalchuk", age: 69, flag_url: "/content/recepies/Belorussian/Flag_of_Belarus.svg.png", picture_url: "/content/Grand mothers/belorus.jpg", country: "Belarus" }
    ];

    return (
        <>
            <div className="menuPage-container">
                <h1 className='menuPage-header'><b>Grandmother's table:</b> <br></br>always a celebration of tastes familiar from childhood</h1>
                <h4></h4>
                <div className="menuPage-results">
                    {hardcodedData.map((item) => (
                        <div key={item.id} className="col">
                            <Link to={`/grandma/${item.id}`} className="card-link text-decoration-none">
                                <div className="card" style={{ width: '380px', height: '500px' }}>
                                    <img
                                        src={item.picture_url}
                                        className="card-img-top"
                                        alt={item.name}
                                        style={{ objectFit: 'cover', width: '100%', height: '200px' }}
                                    />
                                    <div className="card-body">
                                        <h3 className="card-title">{item.name}</h3>
                                        <h4 className="card-text">Age: {item.age}</h4>
                                        <div className="card-flag">
                                        <img  src={item.flag_url} alt={`Flag of ${item.name}`} style={{ width: '70px', height: '40px' }} /> <p>{item.country}</p></div>
                                        <div className='IconCard'>
                                            <button>Learn more</button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Babushki;