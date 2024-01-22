// MainComponent.js
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Timer from '../components/Timer';
import './MainScreen.css'; // Import your CSS file

const MainComponent = () => {
  const orders = useSelector((state) => state.pizza.orders);

  const calculateMinuteDifference = ( startDate , endDate ) => {
    const startDateTime = new Date(startDate);
    const endDateTime = new Date();

    // Calculate the difference in milliseconds
    const differenceInMilliseconds = endDateTime - startDateTime;

    // Convert milliseconds to minutes
    // const differenceInMinutes = differenceInMilliseconds / (1000 * 60);

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

  return (
    <div className="main-component">
      <h2>Main Section {<button onClick={()=> refreshScreen()}>Refresh</button>} </h2>
      {/* <button onClick={()=> refreshScreen()}>Refresh</button> */}
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
                {calculateMinuteDifference(order.orderPlaceAt)}
              </td>
              <td>
                {order.stage !== 'Done' && (
                  <>
                    <button >Cancel</button>
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
