// PizzaStages.js
import React from 'react';
import { useSelector } from 'react-redux';

const PizzaStages = () => {
  const orders = useSelector((state) => state.pizza.orders);

  return (
    <div className="pizza-stages">
      <h2>Pizza Stages</h2>
      <div className="stage-column">
        {/* Display orders in each stage */}
        {/* ... */}
      </div>
    </div>
  );
};

export default PizzaStages;
