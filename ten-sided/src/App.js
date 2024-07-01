import React, {useState} from 'react';
import './App.css';

let nextId = 0;

function App() {

  const [firstRoll, setFirstRoll] = useState(0);
  const [arrayOfRolls, setArrayOfRolls] = useState([]);
  // const rollDice = document.getElementById("rollDice");

  function rolling() {
    setFirstRoll(Math.ceil(Math.random() * 10));
    setArrayOfRolls([...arrayOfRolls, {id: nextId++, firstRoll: firstRoll}]);
    return firstRoll;
  }

  return (
    <div className="App">
      <h1>10 Sided Dice Roller</h1>
      <div>{firstRoll}</div>
      <button id="rollDice" onClick={rolling}>Roll</button>
      <div>
        {arrayOfRolls.map(num => (
          <li key={num.id}>{num.firstRoll}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
