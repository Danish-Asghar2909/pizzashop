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
    console.log("Reload" , orders)
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every sec

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
    const currentTimeNeedToCompare = new Date();
    const timeDifference = (currentTimeNeedToCompare - orderPlacedTime) / (1000 * 60); // difference in minutes
    const limitedMin = 3;
  
    return timeDifference >= limitedMin; // Use >= instead of just >
  };

  const calculateTimeDifference = (order) => {
    const orderPlacedTime = new Date(order.timeSpent);
    const currentTimeNeedToCompare = new Date();
    const timeDifference = (currentTimeNeedToCompare - orderPlacedTime) / 1000; // difference in seconds
  
    const minutes = Math.floor(timeDifference / 60);
    const seconds = Math.floor(timeDifference % 60);
  
    return `${minutes} min :${seconds < 10 ? '0' : ''}${seconds} sec`;
  };

  const calculateMinuteDifference = (order) => {
    let startDateTime = new Date(order.timeSpent);
    let endDateTime = new Date();
    if(order.orderCompleted){
      endDateTime = new Date(order.orderCompleted)
      startDateTime = new Date(order.orderPlaceAt);
    }else{
      startDateTime = new Date(order.timeSpent);
    }
  
    // Calculate the difference in milliseconds
    const differenceInMilliseconds = endDateTime - startDateTime;

    const min = Math. floor((differenceInMilliseconds/1000/60) << 0)
    const sec = Math. floor((differenceInMilliseconds/1000) % 60);

    return min + " min : " + sec + " sec"
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
              <p>{calculateTimeDifference(order)}</p>
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
              <p>{calculateTimeDifference(order)}</p>
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
              <p>{calculateTimeDifference(order)}</p>
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
              <p>{calculateMinuteDifference(order)}</p>
            </div>
          ))}
      </div>
      </div>
    </div>
  );
};

export default PizzaStages;
