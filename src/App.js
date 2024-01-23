// App.js
import React from 'react';
import PizzaForm from './components/PizzaForm';
import PizzaStages from './containers/PizzaStages';
import MainComponent from './containers/MainScreen';
import './App.css'; // Import your CSS file

const App = () => {
  return (
    <div className="app-container">
        <PizzaForm />
        <PizzaStages />
        <MainComponent />
    </div>
  );
};

export default App;
