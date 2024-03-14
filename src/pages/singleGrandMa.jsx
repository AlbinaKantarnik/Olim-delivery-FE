import React from 'react';
import { useParams } from 'react-router-dom';

const hardcodedData = [
    { id: 1, grandma_name: "Maria Ivanovna", age: 72, country: "Russia", biography: "Lorem ipsum..." },
    { id: 2, grandma_name: "Giulia Rossi", age: 68, country: "Italy", biography: "Lorem ipsum..." },
    { id: 3, grandma_name: "Ana da Silva", age: 70, country: "Brazil", biography: "Lorem ipsum..." },
    { id: 4, grandma_name: "Alemke Tsegaye", age: 75, country: "Ethiopia", biography: "Lorem ipsum..." },
    { id: 5, grandma_name: "Natallia Kovalchuk", age: 69, country: "Belarus", biography: "Lorem ipsum..." }
];

const SingleGrandMa = () => {
    const { id_grandma } = useParams();
    const grandMaData = hardcodedData.find(item => item.id === parseInt(id_grandma));

    if (!grandMaData) {
        return <div>Grandma not found</div>;
    }

    return (
        <> 
            <h2>Hi dear! I'm {grandMaData.grandma_name}</h2>
            <h3>I'm {grandMaData.age} years old, and I'm from {grandMaData.country}.
            My little story is - {grandMaData.biography}</h3>
        </>
    );
};

export default SingleGrandMa;
