import React from "react";

const Cart = ({ cart, handleRemoveItem }) => {
  let message;
  if (cart.length === 0) {
    message = <p>Please buy at least one item</p>;
  } else if (cart.length === 1) {
    message = (
      <div>
        <h3>Please, buy 1 for me</h3>
        <p>Buy another for a poor guy</p>
      </div>
    );
  } else {
    message = <p>Thanks for buying</p>;
  }
  return (
    <div>
      <h3>Order Summary</h3>
      <h5>Order quantity: {cart.length}</h5>
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handleRemoveItem(tshirt)}>X</button>
        </p>
      ))}
      {message}
    </div>
  );
};

export default Cart;

/*
1. use element and if-else
*/
