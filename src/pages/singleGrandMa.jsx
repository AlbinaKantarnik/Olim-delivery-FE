import React from 'react';
import { Link, useParams } from 'react-router-dom';
import "./grandma.css";

const hardcodedData = [
    {
        id: 1,
        grandma_name: "Maria Ivanovna",
        age: 72,
        picture_url: "/content/Grand mothers/9255611_1500n.jpg",
        country: "Russia",
        biography: "I was born and raised in Russia. Growing up, I lived in a small village surrounded by beautiful forests and fields. My childhood was filled with joyful moments spent with my family and friends. As I grew older, I learned the traditions and values passed down through generations in my community. Today, I cherish the memories of my homeland while enjoying the vibrant culture of Israel, where I now reside."
    },
    {
        id: 2,
        grandma_name: "Giulia Rossi",
        age: 68,
        picture_url: "/content/Grand mothers/Italian.jpg",
        country: "Italy",
        biography: "My journey began in Italy, where I was born and spent my early years. Italy holds a special place in my heart, with its rich history, delicious cuisine, and warm hospitality. I fondly remember the days spent exploring the cobblestone streets of my hometown and savoring homemade pasta dishes prepared by my family. Though I now call Israel my home, I carry with me the traditions and flavors of Italy, keeping them alive in my daily life."
    },
    {
        id: 3,
        grandma_name: "Ana da Silva",
        age: 70,
        picture_url: "/content/Grand mothers/ethiop.jpg",
        country: "Brazil",
        biography: "I hail from the vibrant country of Brazil, known for its lively culture, stunning landscapes, and passionate people. Growing up, I was immersed in the rhythms of samba and the flavors of Brazilian cuisine. From the bustling streets of Rio de Janeiro to the tranquil shores of Salvador, I experienced the diverse beauty of my homeland. Now living in Israel, I bring the spirit of Brazil with me, sharing its warmth and joy with those around me."
    },
    {
        id: 4,
        grandma_name: "Alemke Tsegaye",
        age: 75,
        picture_url: "/content/Grand mothers/braz.jpg",
        country: "Ethiopia",
        biography: "Ethiopia, my birthplace, is a land of ancient traditions, breathtaking landscapes, and deep-rooted spirituality. From the highlands of Addis Ababa to the shores of Lake Tana, I was surrounded by the natural beauty and cultural richness of my homeland. My childhood was filled with stories of Ethiopian legends and rituals, shaping my identity and values. Now residing in Israel, I carry the spirit of Ethiopia within me, drawing strength from its history and heritage."
    },
    {
        id: 5,
        grandma_name: "Natallia Kovalchuk",
        age: 69,
        picture_url: "/content/Grand mothers/belorus.jpg",
        country: "Belarus",
        biography: "Belarus, my native land, is a place of quiet beauty, with its vast forests, serene lakes, and charming villages. Growing up in Minsk, I cherished the simplicity and tranquility of rural life, surrounded by fields of golden wheat and fields of wildflowers. My memories of Belarus are filled with warmth and nostalgia, shaping my love for nature and community. Now settled in Israel, I carry the spirit of Belarus with me, finding comfort in its familiar landscapes and enduring traditions."
    }
];


const SingleGrandMa = () => {
    const { id_grandma } = useParams();
    const grandMaData = hardcodedData.find(item => item.id === parseInt(id_grandma));

    if (!grandMaData) {
        return <div>Grandma not found</div>;
    }

    return (
        <>
            <div className="grandma-container">

                <div className="grandma-content">
                    <img className="grandma-img" src={grandMaData.picture_url} alt={grandMaData.grandma_name} />
                    <h3>Hi dear! I'm {grandMaData.grandma_name}</h3>
                    <h4>I'm {grandMaData.age} years old, born in <b>{grandMaData.country}</b>.</h4><br></br>
                    <h5><i><b>My little story is -</b> {grandMaData.biography}</i></h5>
                    <div className='Card-footer'>
                        <button className='Card-footer'>
                            <Link to={`/menu`}>Back to menu</Link>
                        </button></div>
                </div>
            </div>
        </>
    );
};

export default SingleGrandMa;
