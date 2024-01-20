// App.js
import React from 'react';
import PizzaForm from './components/PizzaForm';
import PizzaStages from './containers/PizzaStages';
import MainComponent from './containers/MainScreen';
import './App.css'; // Import your CSS file

const App = () => {
  return (
    <div className="app-container">
      <div className="row">
        <div className="column">
          <PizzaForm />
        </div>
        <div className="column">
          <PizzaStages />
        </div>
      </div>
      <div className="row full-height">
        <MainComponent />
      </div>
    </div>
  );
};

export default App;
