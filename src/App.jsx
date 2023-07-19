import { useState } from 'react';

function App() {
  const [startingNumbers, setStartingNumbers] = useState([0]);
  const [operation, setOperation] = useState('plus');
  const [operator, setOperator] = useState(0);

  function changeOperation(e) {
    setOperation(e.target.value);
  }

  return (
    <div style={{ width: '800px', maxWidth: '100%', margin: '100px auto' }}>
      <h1>Multi-Calculator</h1>
      <p>Add as many numbers as you want, and perform the same simple math operation on each of them.</p>

      <h2>Add Starting numbers</h2>

      <div>
        {startingNumbers.map((num, index) => {
          return (
            <input
              key={index}
              type="number"
              value={startingNumbers[index]}
              onChange={e => {
                setStartingNumbers([...startingNumbers.slice(0, index), e.currentTarget.value, ...startingNumbers.slice(index + 1)]);
              }}
            />
          );
        })}
        <button
          onClick={() => {
            setStartingNumbers([...startingNumbers, 0]);
          }}
        >
          Add
        </button>
      </div>

      <h2>Operation</h2>

      <div>
        <button value="plus" onClick={changeOperation} style={operation === 'plus' ? { background: '#646cff', color: 'white' } : {}}>
          +
        </button>
        <button value="minus" onClick={changeOperation} style={operation === 'minus' ? { background: '#646cff', color: 'white' } : {}}>
          -
        </button>
        <button
          value="multiply"
          onClick={changeOperation}
          style={operation === 'multiply' ? { background: '#646cff', color: 'white' } : {}}
        >
          *
        </button>
        <button value="divide" onClick={changeOperation} style={operation === 'divide' ? { background: '#646cff', color: 'white' } : {}}>
          /
        </button>
      </div>

      <h2>Operator</h2>
      <div>
        <input
          type="number"
          value={operator}
          onChange={e => {
            setOperator(e.target.value);
          }}
        />
      </div>

      <h2>Results</h2>

      {startingNumbers.map((num, index) => {
        switch (operation) {
          case 'plus':
            return <button key={index}>{num + operator}</button>;
          case 'minus':
            return <button key={index}>{num - operator}</button>;
          case 'multiply':
            return <button key={index}>{num * operator}</button>;
          case 'divide':
            return <button key={index}>{num / operator}</button>;
        }
      })}
    </div>
  );
}

export default App;
