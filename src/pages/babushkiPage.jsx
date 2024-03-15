import React from 'react';
import { Link } from 'react-router-dom';

const Babushki = () => {
    const hardcodedData = [
        { id: 1, name: "Maria Ivanovna", age: 72, flag_url: "/content/recepies/Russian/Флаг_России_(1).jpg", picture_url: "/content/Grand mothers/9255611_1500n.jpg" },
        { id: 2, name: "Giulia Rossi", age: 68, flag_url: "/content/recepies/Italian/depositphotos_10884967-stock-photo-italian-flag.jpg", picture_url: "/content/Grand mothers/Italian.jpg" },
        { id: 3, name: "Ana da Silva", age: 70, flag_url: "/content/recepies/Brazilian/Flag_of_Brazil.svg.png", picture_url: "public/content/Grand mothers/brazil.jpg" },
        { id: 4, name: "Alemke Tsegaye", age: 75, flag_url: "/content/recepies/Ethiopian/images.png", picture_url: "/content/Grand mothers/ethiop.jpg" },
        { id: 5, name: "Natallia Kovalchuk", age: 69, flag_url: "/content/recepies/Belorussian/Flag_of_Belarus.svg.png", picture_url: "/content/Grand mothers/braz.jpg" }
    ];

    return (
        <>
            <div>
                <h1>Grannies page</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {hardcodedData.map((item) => (
                        <div key={item.id} className="col">
                            <Link to={`/grandma/${item.id}`} className="card-link text-decoration-none">
                                <div className="card" style={{ width: '200px', height: '400px' }}>
                                    <img
                                        src={item.picture_url}
                                        className="card-img-top"
                                        alt={item.name}
                                        style={{ objectFit: 'cover', width: '100%', height: '200px' }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p className="card-text">Age: {item.age}</p>
                                        <img src={item.flag_url} alt={`Flag of ${item.name}`} style={{ width: '30px', height: '20px' }} />
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