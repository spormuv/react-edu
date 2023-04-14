import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import ResetButton from './components/ResetButton';

function App() {
  const [count, setCount] = useState(0);

  const incrementCout = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const buttonStyle = { backgroundColor: 'lightgreen' };

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCout} />
      <Button onClick={incrementCout} />
      <Button onClick={incrementCout} />
      <Button onClick={incrementCout} />
      <ResetButton {...{ count, resetCount, buttonStyle }} />
    </div>
  );
}

export default App;
