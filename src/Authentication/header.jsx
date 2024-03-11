import React from 'react';

const Header = ({ user }) => {
    return (
        <>
            <header className="d-flex justify-content-center">
                <h1>Welcome, {user ? `${user.firstName} ${user.lastName}` : 'Guest'}!</h1>
            </header>
            <div className="text-left container mt-4 mb-4">
                <p>Dive into the flavors and aromas of the world with our unique offering - food delivery prepared by loving grandmothers from around the globe! From aromatic Italian pasta made according to traditional recipes to tender French cassoulet, we invite you to enjoy a variety of dishes cooked with love and care.</p>
                <p>Our grandmothers are true culinary experts of their country, passing down not only recipes but also stories and traditions. They use only the finest ingredients and meticulously oversee each stage of preparation to ensure you a delightful experience.</p>
                <p>Olim Delivery provides a convenient way to enjoy authentic food from different countries without leaving your home. Simply choose the dishes that interest you, place an order, and we'll deliver them right to your doorstep. Let us bring a little magic to your table - order food delivery from our grandmothers today!</p>
            </div>
        </>
    )
}

export default Header;
