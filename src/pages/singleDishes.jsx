import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./dishesPage.css"

export default function SingleDishes() {
  const { id_dish } = useParams();
  const [portionCount, setPortionCount] = useState(1);
  const [showPortionControls, setShowPortionControls] = useState(false);

  const hardcodedDataDishes = [
    { id: 1, name: "Vereshchaka", type: "Soup", glueten_free: 2, lakctoze_free: 1, description: "Vereshchaka is a baked dish made from meat, potatoes, onions, and spices. The dish is baked in the oven until cooked through. When vereshchaka is ready, it has a crispy crust on top and juicy, meaty potatoes inside. It can be served with or without eggs.", country: "Belarus", id_granny: 5, granny_name: "Natallia Kovalchuk", price: "39", grams: "200", flag_url: "/content/recepies/Belorussian/Flag_of_Belarus.svg.png", picture_url: "/content/recepies/Belorussian/Vereshchaka.jpg" },
    { id: 2, name: "Potato Babka", type: "Сasserole", glueten_free: 2, lakctoze_free: 1, description: "It is a very tasty and satisfying casserole for the whole family. Typically, babka is made with beef, pork, or chicken. In fasting, potato babka is made with mushrooms, tomatoes, cabbage or zucchini.", price: "59", country: "Belarus", id_granny: 5, granny_name: "Natallia Kovalchuk", grams: "250", flag_url: "/content/recepies/Belorussian/Flag_of_Belarus.svg.png", picture_url: "/content/recepies/Belorussian/Potato-Babka-1-26.jpg" },
    { id: 3, name: "Pot Chiken", type: "Main dish", glueten_free: 1, lakctoze_free: 1, description: "The main ingredients for making Pot Chiken or Frango de Panela typically include chicken pieces, onion, garlic, tomatoes, carrots, and spices. The chicken is simmered in its own juices together with the vegetables and spices, giving the dish a rich taste and aroma. It is  served hot, with rice or potatoes, as well as salad or bread rolls.", country: "Brazil", id_granny: 3, granny_name: "Ana da Silva", price: "89", grams: "300", flag_url: "/content/recepies/Brazilian/Flag_of_Brazil.svg.png", picture_url: "/content/recepies/Brazilian/pot chicken.jpg" },
    { id: 4, name: "Pudding", type: "Dessert", glueten_free: 1, lakctoze_free: 1, description: "It has a wonderful, creamy texture without being too heavy. Melted syrup will run down sides, forming a caramel sauce. Serve cool with a dollop of whipped cream on the side. Top it with toasted coconut and serve with a garnish of tropical fruits such as mango or pineapple.", country: "Brazil", id_granny: 3, granny_name: "Ana da Silva", price: "64", grams: "150", flag_url: "/content/recepies/Brazilian/Flag_of_Brazil.svg.png", picture_url: "/content/recepies/Brazilian/pudim-de-leite-condensado.jpg" },
    { id: 5, name: "Misir Wat", type: "Main dish", glueten_free: 1, lakctoze_free: 1, description: "The main ingredients include red lentils, onion, garlic, tomato paste, chili pepper, and various spices. The dish is prepared by simmering lentils in a spicy and flavorful sauce made from spices and tomato paste, giving it a rich taste and intense aroma. Misir Wat is often served with Quick Injera, rice, or potatoes.", country: "Ethiopia", id_granny: 4, granny_name: "Alemke Tsegaye", price: "78", grams: "250", flag_url: "/content/recepies/Ethiopian/images.png", picture_url: "/content/recepies/Ethiopian/Misir Wat.jpg" },
    { id: 6, name: "Quick Injera", type: "Main dish", glueten_free: 1, lakctoze_free: 1, description: "This dish is prepared on a skillet or grill to achieve the characteristic bubbly and elastic bread. It is often served alongside various sauces and curries such as doro wot (chicken stew) or doro tibs (fried chicken with vegetables), as well as vegetable and meat dishes.", country: "Ethiopia", id_granny: 4, granny_name: "Alemke Tsegaye", price: "45", grams: "200", flag_url: "/content/recepies/Ethiopian/images.png", picture_url: "/content/recepies/Ethiopian/Quick Injera.jpg" },
    { id: 7, name: "Sausage pasta", type: "Main dish", glueten_free: 1, lakctoze_free: 1, description: "This Sausage Pasta includes a rich homemade sauce with sausage, tomatoes, peppers and onions, as well as plenty of fresh herbs and Parmesan cheese. You’ve get a simple, hearty and delicious meal. Don’t forget the garlic bread!", country: "Italy", id_granny: 2, granny_name: "Giulia Rossi", price: "55", grams: "300", flag_url: "/content/recepies/Italian/depositphotos_10884967-stock-photo-italian-flag.jpg", picture_url: "/content/recepies/Italian/pasta1.jpg" },
    { id: 8, name: "Pizza", type: "Main dish", glueten_free: 2, lakctoze_free: 2, description: "The tomato sauce is homemade from ripe tomatoes, garlic, olive oil, and herbs such as basil and oregano. It's spread evenly over the crust, adding a burst of tangy sweetness to each bite. As for toppings, the possibilities are endless. Our classic choices include slices of pepperoni, mushrooms and olives", country: "Italy", id_granny: 2, granny_name: "Giulia Rossi", price: "103", grams: "400", flag_url: "/content/recepies/Italian/depositphotos_10884967-stock-photo-italian-flag.jpg", picture_url: "/content/recepies/Italian/pizza.jpg" },
    { id: 9, name: "Blini", type: "Pancake", glueten_free: 2, lakctoze_free: 2, description: "Russian blini or pancakes are often served with butter, sour cream, jam, or condensed milk, creating a simple but delicious breakfast or snack. For a hearty snack, they can be served with mushroom julienne, meat filling, cheese, and ham.", country: "Russia", id_granny: 1, granny_name: "Maria Ivanovna", price: "39", grams: "150", flag_url: "/content/recepies/Russian/Флаг_России_(1).jpg", picture_url: "/content/recepies/Russian/blini.jpg" },
    { id: 10, name: "Borsch", type: "Soup", glueten_free: 1, lakctoze_free: 2, description: "The main component of borscht is beetroot, which gives the soup a special aroma and sweetish taste. Borscht also includes potatoes, carrots, onions, cabbage, and tomatoes, creating a variety of textures and flavor nuances. Our recipe uses beef, which adds even more nourishment to the borscht.", country: "Russia", id_granny: 1, granny_name: "Maria Ivanovna", price: "47", grams: "300", flag_url: "/content/recepies/Russian/Флаг_России_(1).jpg", picture_url: "/content/recepies/Russian/borsch.jpg" },
  ];
  const dishData = hardcodedDataDishes.find(item => item.id === parseInt(id_dish));

  if (!dishData) {
    return <div>Dish not found</div>;
  }

  const handleWantButtonClick = () => {
    setShowPortionControls(true);
  };

  const handleIncrement = () => {
    setPortionCount(portionCount + 1);
  };

  const handleDecrement = () => {
    if (portionCount > 1) {
      setPortionCount(portionCount - 1);
    } else {
      setPortionCount(1);
      setShowPortionControls(false); 
    }
  };

  return (
    <>
      <div className="dishPage-container">
        <div className='dishPage-content'>

          <div className='Card-header'>
            <button>
              <Link to={`/menu`}>Back to menu</Link>
            </button>
            <img src={dishData.flag_url} alt={`Flag of ${dishData.country}`} style={{ width: '70px', height: '40px' }} />
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
                  <var>{dishData.price}₪</var>
                  <label>Price</label>
                </li>
                <li>
                  <var>{dishData.grams}gr</var>
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

              <h2> Will be cooked by <Link to={`/grandma/${dishData.id_granny}`}>grandma {dishData.granny_name}</Link> from {dishData.country}</h2>
              <h3>{dishData.description}</h3>
            </div>
          </div>

          {!showPortionControls && (
            <div className='IconCard'>
              <button onClick={handleWantButtonClick}>I want it</button>
            </div>
          )}
          {showPortionControls && (
            <div className='IconCard'>
              <button onClick={handleDecrement}>-</button>
              <span className='Count'>{portionCount}</span>
              <button onClick={handleIncrement}>+</button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}