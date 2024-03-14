import React from 'react';
import { useParams, Link } from 'react-router-dom';

const hardcodedData = [
  { id: 1, name: "Vereshchaka", price: "3.99", grams: "200g", flag_url: "/content/recepies/Belorussian/Flag_of_Belarus.svg.png", picture_url: "/content/recepies/Belorussian/Vereshchaka.jpg" },
  { id: 2, name: "Potato Babka", price: "5.99", grams: "250g", flag_url: "/content/recepies/Belorussian/Flag_of_Belarus.svg.png", picture_url: "/content/recepies/Belorussian/Potato-Babka-1-26.jpg" },
  { id: 3, name: "Pot Chiken", price: "8.99", grams: "300g", flag_url: "/content/recepies/Brazilian/Flag_of_Brazil.svg.png", picture_url: "/content/recepies/Brazilian/pot chicken.jpg" },
  { id: 4, name: "Pudding", price: "6.49", grams: "150g", flag_url: "/content/recepies/Brazilian/Flag_of_Brazil.svg.png", picture_url: "/content/recepies/Brazilian/Pudim de Leite Condensado.jpg" },
  { id: 5, name: "Misir Wat", price: "7.99", grams: "250g", flag_url: "/content/recepies/Ethiopian/images.png", picture_url: "/content/recepies/Ethiopian/Misir Wat.jpg" },
  { id: 6, name: "Quick Injera", price: "4.99", grams: "200g", flag_url: "/content/recepies/Ethiopian/images.png", picture_url: "/content/recepies/Ethiopian/Quick Injera.jpg" },
  { id: 7, name: "Pasta", price: "5.99", grams: "300g", flag_url: "/content/recepies/Italian/depositphotos_10884967-stock-photo-italian-flag.jpg", picture_url: "./content/recepies/Italian/pasta.jpg" },
  { id: 8, name: "Pizza", price: "10.99", grams: "400g", flag_url: "/content/recepies/Italian/depositphotos_10884967-stock-photo-italian-flag.jpg", picture_url: "./content/recepies/Italian/pizza.jpg" },
  { id: 9, name: "Blini", price: "3.49", grams: "150g", flag_url: "/content/recepies/Russian/Флаг_России_(1).jpg", picture_url: "/content/recepies/Russian/blini.jpg" },
  { id: 10, name: "Borsch", price: "4.99", grams: "300g", flag_url: "/content/recepies/Russian/Флаг_России_(1).jpg", picture_url: "/content/recepies/Russian/borsch.jpg" },
];

export default function SingleDishes() {
  const { id_dish } = useParams();
  const dishData = hardcodedData.find(item => item.id === parseInt(id_dish));

  if (!dishData) {
    return <div>Dish not found</div>;
  }

  return (
    <>
      <div className="dishPage-container">
        <div className='dishPage-content'>

          <div className='Card-header'>
            <button>
              <Link to={`/menu`}>Back to menu</Link>
            </button>
          </div>

          <div className='CardBlock1'>
            <div className='CardImgDish'>
              <img src={dishData.picture_url} alt={dishData.name} style={{ width: '300px', height: '200px' }} />
            </div>
            <div>
              <h2>{dishData.name}</h2>
              <h3>{dishData.type}</h3>
              <ul className='stats'>
                <li>
                  <var>{dishData.price} ₪</var>
                  <label>Price</label>
                </li>
                <li>
                  <var>{dishData.grams} gr</var>
                  <label>Weight</label>
                </li>
                <li>
                  <var>{dishData.glueten_free === 1 ? 'YES' : 'NO'}</var>
                  <label>Glueten free</label>
                </li>
                <li>
                  <var>{dishData.lakctoze_free === 1 ? 'YES' : 'NO'}</var>
                  <label>Lakctoze free</label>
                </li>
              </ul>

              <h2> Will be cooked by grandma {dishData.granny_name} from {dishData.country}</h2>
              <h3>{dishData.description}</h3>
            </div>
          </div>

          <div className='IconCard'>

            {/* <button className={saveButtonClass} onClick={handleFavoriteIconClick}> I want</button> */}

          </div>
        </div>
      </div>
    </>
  )
}