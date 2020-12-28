import React , { useState } from 'react';
import Contador from './Contador';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);

  const addNumber = () => {
    setCounter( counter + 1);
  }

  const removeNumber = () => {
    if(counter !== 0){
      setCounter(counter - 1)
    }else{
      console.log("No se puede restar")
    }
  }

  const resetNumber = () => {
    setCounter(0);
  }

  return (
    <div className="App">
      <Contador 
        counter={counter}
        addNumber={addNumber}
        removeNumber={removeNumber}
        resetNumber={resetNumber}
      />
    </div>
  );
}

export default App;
