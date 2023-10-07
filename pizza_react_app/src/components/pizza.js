import React from 'react';

// WE CAN USE DESTRUCTURING TO THE PROPS AS FOLLOWS :-->
function Pizza({ pizzaDetails }) {
  return (
    // Conditionally rendering the css styles to the elements :-->
    <li className={`pizza ${pizzaDetails.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaDetails.photoName} alt="pizaa images" />
      <div>
        <h3>{pizzaDetails.name}</h3>
        <p>{pizzaDetails.ingredients}</p>

        {/* conditionally rendering elements with 2 ways as follows :--> */}
        {/* {pizzaDetails.soldOut ? (
          <span>SOLD OUT </span>
        ) : (
          <span>{pizzaDetails.price}</span>
        )} */}

        {/* 2nd way :--> */}
        <span>
          {pizzaDetails.soldOut ? 'SOLD OUT' : `${pizzaDetails.price + 3}$`}
        </span>
      </div>
    </li>
  );
}

export default Pizza;
