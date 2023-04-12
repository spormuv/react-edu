import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

const texts = [
  'Click me',
  'Click me please',
  'Hit me',
  'Press me',
  'Click me again!',
  'Press me!!!',
];

function App() {
  const [count, setCount] = useState(0);
  const incrementCout = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text, ind) => (
        <Button key={ind} onClick={incrementCout} text={text} />
      ))}
    </div>
  );
}

export default App;
