import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function SingleGrandMa() {
    const { id_grandma } = useParams();
    const [grandMaData, setGrandMaData] = useState(null);
    useEffect(() => {
        const fetchDishData = async () => {
          try {
            const response = await fetchGetDishById(id_grandma);
            const grandma = response[0];
            setGrandMaData(grandma);
            
          } catch (error) {
            console.error('Error fetching to grandma page:', error);
          }
        };
        fetchDishData();
      }, [id_grandma]);

      return (
        <> 
        <h2>Hi dear! I'm {grandMaData.grandma_name}</h2>
        <h3>I'm {grandMaData.age} years old, and I'm from {grandMaData.country}.
        My little story is - {grandMaData.biography}</h3>
         </>
      )
}