import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0);
  const incrementCout = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCout} />
      <Button onClick={incrementCout} />
      <Button onClick={incrementCout} />
      <Button onClick={incrementCout} />
    </div>
  );
}

export default App;
