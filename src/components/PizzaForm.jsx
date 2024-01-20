// PizzaForm.js
import React, { useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
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

  const orders = useSelector((state) => state.pizza.orders);

  const handlePlaceOrder = () => {
    const inProgessOrders = orders.filter((order)=> order.stage !== 'Done')
    if(inProgessOrders.length >= 10){
      alert('Not taking any order for now')
    }else{
      const current = new Date()
      order.timeSpent = current.toString()
      order.orderPlaceAt = current.toString()
      dispatch(placeOrder(order));
      setOrder({
        type: 'Veg',
        size: 'Medium',
        base: 'Thin',
      });
    }
  };

  return (
    <div className="pizza-form">
      <h2>Place Your Pizza Order</h2>
      <form>
        <div className="form-group">
          <label>Type:</label>
          <select name="type" value={order.type} onChange={handleInputChange}>
            <option value="Veg">Veg</option>
            <option value="Non-Veg">Non-Veg</option>
          </select>
        </div>
        <div className="form-group">
          <label>Size:</label>
          <select name="size" value={order.size} onChange={handleInputChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="form-group">
          <label>Base:</label>
          <select name="base" value={order.base} onChange={handleInputChange}>
            <option value="Thin">Thin</option>
            <option value="Thick">Thick</option>
          </select>
        </div>
        <button type="button" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </form>
    </div>
  );
};

export default PizzaForm;
