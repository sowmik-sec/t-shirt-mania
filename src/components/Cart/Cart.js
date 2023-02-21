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
      {cart.length === 3 ? <p>Tin jon ke gift diba?</p> : <p>kino kino</p>}
      <p>and operator</p>
      {cart.length === 2 && <h2>You selected 2 shirts</h2>}
      <p>OR Operator</p>
      {cart.length === 4 || <p>4 TA item na</p>}
    </div>
  );
};

export default Cart;

/*
1. use element and if-else
2. ternary operation condition ? true:false
3. && operator (if condition is true, I wanna display something)
4. || operator (if condition is false, I want to display something)
*/
