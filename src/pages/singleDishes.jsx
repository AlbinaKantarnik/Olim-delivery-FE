import { useParams, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
export default function SingleDishes() {
    const { id_dish } = useParams();
    const [dishData, setDishData] = useState(null);

    useEffect(() => {
        const fetchDishData = async () => {
          try {
            const response = await fetchGetDishById(id_dish);
            const dish = response[0];
            setDishData(dish);
            
          } catch (error) {
            console.error('Error fetching to dish page:', error);
          }
        };
        fetchDishData();
      }, [id_dish]);

      
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
            <div className='CardImgDish' style={{ backgroundImage: `url(${dishData.picture})` }} />
            <div>
              <h2>{dishData.name}</h2>
              <h3>{dishData.type}</h3>
              <ul className='stats'>
                <li>
                  <var>{dishData.price} ₪</var>
                  <label>Price</label>
                </li>
                <li>
                  <var>{dishData.weight} gr</var>
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
            
            <button className={saveButtonClass} onClick={handleFavoriteIconClick}> I want</button>

          </div>
        </div>



      </div>
      </>
    )
  }