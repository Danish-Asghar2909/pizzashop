// MainComponent.js
import React, { useEffect, useState } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import './MainScreen.css'; // Import your CSS file
import { cancelOrder } from '../redux/pizzaSlice';

const MainComponent = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.pizza.orders);

  const calculateMinuteDifference = (order) => {
    let startDateTime = new Date(order.orderPlaceAt);
    let endDateTime = new Date();
    if(order.orderCompleted){
      endDateTime = new Date(order.orderCompleted)
      startDateTime = new Date(order.orderPlaceAt);
    }else{
      startDateTime = new Date(order.orderPlaceAt);
    }
  
    // Calculate the difference in milliseconds
    const differenceInMilliseconds = endDateTime - startDateTime;

    const min = Math. floor((differenceInMilliseconds/1000/60) << 0)
    const sec = Math. floor((differenceInMilliseconds/1000) % 60);

    return min + " min : " + sec + " sec"
  };

  const [ refresh , toggleRefresh ] = useState(false)
  const refreshScreen = ( ) =>{
    toggleRefresh(!refresh)
  }
  useEffect(()=>{
  },[refresh])

  const calculateCompletedOrder = ( orders ) =>{
    let completedOrders = 0
    for(let i = 0 ; i < orders.length ; i++){
      if(orders[i].stage === 'Done'){
        completedOrders++
      }
    }
    return completedOrders
  }

  const handleCancelOrder = (orderId) => {
    dispatch(cancelOrder(orderId));
  };

  return (
    <div className="main-component">
      <h2>Main Section {<button onClick={()=> refreshScreen()}>Refresh</button>} </h2>
      <table>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Stage</th>
            <th>Total time spent (time from order placed)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>Order id : {order.id}</td>
              <td>{order.stage}</td>
              <td>
                {calculateMinuteDifference(order)}
              </td>
              <td>
                {order.stage !== 'Done' && (
                  <>
                    <button onClick={() => handleCancelOrder(order.id)} >Cancel</button>
                  </>
                )}
              </td>
            </tr>
          ))}
          <div>
            <p>Total order Delivered : {calculateCompletedOrder(orders)}</p>
          </div>
        </tbody>
      </table>
    </div>
  );
};

export default MainComponent;
