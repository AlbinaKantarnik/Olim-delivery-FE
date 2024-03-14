import React from 'react';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const hardcodedData = [
    { id: 1, name: "Vereshchaka", price: "3.99", grams: "200g", flag_url: "/content/recepies/Belorussian/Flag_of_Belarus.svg.png", picture_url: "/content/recepies/Belorussian/Vereshchaka.jpg" },
    { id: 2, name: "Potato Babka", price: "5.99", grams: "250g", flag_url: "/content/recepies/Belorussian/Flag_of_Belarus.svg.png", picture_url: "/content/recepies/Belorussian/Potato-Babka-1-26.jpg" },
    { id: 3, name: "Pot Chiken", price: "8.99", grams: "300g", flag_url: "/content/recepies/Brazilian/Flag_of_Brazil.svg.png", picture_url: "/content/recepies/Brazilian/pot chicken.jpg" },
    { id: 4, name: "Pudding", price: "6.49", grams: "150g", flag_url: "/content/recepies/Brazilian/Flag_of_Brazil.svg.png", picture_url: "/content/recepies/Brazilian/Pudim de Leite Condensado.jpg" },
    { id: 5, name: "Misir Wat", price: "7.99", grams: "250g", flag_url: "/content/recepies/Ethiopian/images.png", picture_url: "/content/recepies/Ethiopian/Misir Wat.jpg" },
    { id: 6, name: "Quick Injera", price: "4.99", grams: "200g", flag_url: "/content/recepies/Ethiopian/images.png", picture_url: "/content/recepies/Ethiopian/Quick Injera.jpg" },
    { id: 7, name: "Pasta", price: "5.99", grams: "300g", flag_url: "/content/recepies/Italian/depositphotos_10884967-stock-photo-italian-flag.jpg", picture_url: "/content/recepies/Italian/pasta.jpg" },
    { id: 8, name: "Pizza", price: "10.99", grams: "400g", flag_url: "/content/recepies/Italian/depositphotos_10884967-stock-photo-italian-flag.jpg", picture_url: "/content/recepies/Italian/pizza.jpg" },
    { id: 9, name: "Blini", price: "3.49", grams: "150g", flag_url: "/content/recepies/Russian/Флаг_России_(1).jpg", picture_url: "/content/recepies/Russian/blini.jpg" },
    { id: 10, name: "Borsch", price: "4.99", grams: "300g", flag_url: "/content/recepies/Russian/Флаг_России_(1).jpg", picture_url: "/content/recepies/Russian/borsch.jpg" },
  ];

  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/dish/${id}`);
  };

  const handleAddToCart = (id) => {
    navigate(`/order/${id}`);
  };

  return (
    <>
      <div>
        <h1>Menu page</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {hardcodedData.map((item) => (
            <div key={item.id} className="col">
              <div className="card" style={{ width: '200px', height: '400px' }} onClick={() => handleCardClick(item.id)}>
                <img
                  src={item.picture_url}
                  className="card-img-top"
                  alt={item.name}
                  style={{ objectFit: 'cover', width: '100%', height: '200px' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Price: ${item.price} | Grams: {item.grams}</p>
                  <button onClick={(e) => { e.stopPropagation(); handleAddToCart(item.id); }} className="btn btn-primary">
                    Add to the cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
