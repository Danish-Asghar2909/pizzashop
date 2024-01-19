// PizzaForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { placeOrder } from '../redux/pizzaSlice';

const PizzaForm = () => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState({
    type: 'Veg',
    size: 'Medium',
    base: 'Thin',
  });

  const handleInputChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    dispatch(placeOrder(order));
    // Additional logic for clearing the form or showing a success message
  };

  return (
    <div className="pizza-form">
      <h2>Place Your Pizza Order</h2>
      <form>
        {/* Input fields for pizza type, size, and base */}
        {/* ... */}
        <button type="button" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </form>
    </div>
  );
};

export default PizzaForm;
