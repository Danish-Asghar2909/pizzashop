// PizzaStages.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moveOrder, cancelOrder } from '../redux/pizzaSlice';

const PizzaStages = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.pizza.orders);

  const handleMoveOrder = (orderId, stage) => {
    dispatch(moveOrder({ orderId, stage }));
  };

  const handleCancelOrder = (orderId) => {
    dispatch(cancelOrder(orderId));
  };

  return (
    <div className="pizza-stages">
      <h2>Pizza Stages</h2>
      <div className="stage-column">
        <h3>Order Placed</h3>
        {orders
          .filter((order) => order.stage === 'Placed')
          .map((order) => (
            <div key={order.id} className="pizza-card">
              <p>Order ID: {order.id}</p>
              <p>Type: {order.type}</p>
              <p>Size: {order.size}</p>
              <p>Base: {order.base}</p>
              <p>Time Spent: {order.timeSpent}</p>
              <button onClick={() => handleMoveOrder(order.id, 'Making')}>Next</button>
              <button onClick={() => handleCancelOrder(order.id)}>Cancel</button>
            </div>
          ))}
      </div>

      <div className="stage-column">
        <h3>Order Making</h3>
        {orders
          .filter((order) => order.stage === 'Making')
          .map((order) => (
            <div key={order.id} className="pizza-card">
              <p>Order ID: {order.id}</p>
              <p>Type: {order.type}</p>
              <p>Size: {order.size}</p>
              <p>Base: {order.base}</p>
              <p>Time Spent: {order.timeSpent}</p>
              <button onClick={() => handleMoveOrder(order.id, 'Ready')}>Next</button>
              <button onClick={() => handleCancelOrder(order.id)}>Cancel</button>
            </div>
          ))}
      </div>

      <div className="stage-column">
        <h3>Order Ready</h3>
        {orders
          .filter((order) => order.stage === 'Ready')
          .map((order) => (
            <div key={order.id} className="pizza-card">
              <p>Order ID: {order.id}</p>
              <p>Type: {order.type}</p>
              <p>Size: {order.size}</p>
              <p>Base: {order.base}</p>
              <p>Time Spent: {order.timeSpent}</p>
              <button onClick={() => handleMoveOrder(order.id, 'Done')}>Next</button>
              <button onClick={() => handleCancelOrder(order.id)}>Cancel</button>
            </div>
          ))}
      </div>

      <div className="stage-column">
        <h3>Order Done</h3>
        {orders
          .filter((order) => order.stage === 'Done')
          .map((order) => (
            <div key={order.id} className="pizza-card">
              <p>Order ID: {order.id}</p>
              <p>Type: {order.type}</p>
              <p>Size: {order.size}</p>
              <p>Base: {order.base}</p>
              <p>Time Spent: {order.timeSpent}</p>
              {/* <button onClick={() => handleMoveOrder(order.id, 'Done')}>Next</button> */}
              <button onClick={() => handleCancelOrder(order.id)}>Cancel</button>
            </div>
          ))}
      </div>

    </div>
  );
};

export default PizzaStages;
