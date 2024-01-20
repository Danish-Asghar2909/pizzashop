import React , {useEffect , useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { moveOrder, cancelOrder } from '../redux/pizzaSlice';
import Timer from '../components/Timer';
import './style.css'

const PizzaStages = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.pizza.orders);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    console.log("Reload")
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 20000); // Update every 20 sec

    return () => clearInterval(intervalId);
  }, []);

  const handleMoveOrder = (orderId, stage) => {
    dispatch(moveOrder({ orderId, stage }));
  };

  const handleCancelOrder = (orderId) => {
    dispatch(cancelOrder(orderId));
  };

  const isExceedTime = (order) => {
    const orderPlacedTime = new Date(order.timeSpent);
    const timeDifference = (currentTime - orderPlacedTime) / (1000 * 60); // difference in minutes
    const limitedMin = 3
    return timeDifference > limitedMin;
  };

  return (
    <div className="pizza-stages">
      <h2>Pizza Stages</h2>
      <div className="horizontal-stages">
      <div className="stage-column">
        <h3>Order Placed</h3>
        {orders
          .filter((order) => order.stage === 'Placed')
          .map((order) => (
            // <div key={order.id} className="pizza-card">
              <div
                key={order.id}
                className={`pizza-card ${isExceedTime(order) ? 'exceed-time' : ''}`}
              >
              <p>Order ID: {order.id}</p>
              <p>Order Placed: {order.timeSpent} {<Timer {...order}/>}</p>
              <button onClick={() => handleMoveOrder(order.id, 'Making')}>Next</button>
              <button onClick={() => handleCancelOrder(order.id)}>Cancel</button>
            </div>
          ))}
      </div>

      <div className="stage-column">
        <h3>Order in Making</h3>
        {orders
          .filter((order) => order.stage === 'Making')
          .map((order) => (
            // <div key={order.id} className="pizza-card">
            <div
            key={order.id}
            className={`pizza-card ${isExceedTime(order) ? 'exceed-time' : ''}`}
            >
              <p>Order ID: {order.id}</p>
              <p>Order Placed: {order.timeSpent} {<Timer {...order}/>} </p>
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
              <p>Order Placed: {order.timeSpent} {<Timer {...order}/>} </p>
              <button onClick={() => handleMoveOrder(order.id, 'Done')}>Next</button>
              <button onClick={() => handleCancelOrder(order.id)}>Cancel</button>
            </div>
          ))}
      </div>

      <div className="stage-column">
        <h3>Order Picked</h3>
        {orders
          .filter((order) => order.stage === 'Done')
          .map((order) => (
            <div key={order.id} className="pizza-card">
              <p>Order ID: {order.id}</p>
              <p>Order Placed: {order.timeSpent}</p>
              {/* <button onClick={() => handleMoveOrder(order.id, 'Done')}>Next</button> */}
              {/* <button onClick={() => handleCancelOrder(order.id)}>Cancel</button> */}
            </div>
          ))}
      </div>
      </div>
    </div>
  );
};

export default PizzaStages;
