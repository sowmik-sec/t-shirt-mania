import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h3>Order Summary</h3>
      <h5>Order quantity: {cart.length}</h5>
    </div>
  );
};

export default Cart;
