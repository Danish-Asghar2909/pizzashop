// App.js
import React from 'react';
import PizzaForm from './components/PizzaForm';
import PizzaStages from './containers/PizzaStages';

const App = () => {
  return (
    <div className="app">
      <PizzaForm />
      <PizzaStages />
    </div>
  );
};

export default App;
