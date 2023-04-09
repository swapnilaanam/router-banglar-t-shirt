import React from 'react';
import './TShirt.css';

const TShirt = ({ tshirt, handleAddToCart }) => {
    const {name, price, picture} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt={name} />
            <h4>{name}</h4>
            <p>${price}</p>
            <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;