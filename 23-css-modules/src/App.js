import './App.css';
import About from './components/About';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <Info />
      <About />
      {/* CSS rule '.info' from the Info CSS module doesn't work here*/}
      <div className="info">
        <h1>App component heading</h1>
        <h2>Heading in the App component</h2>
        <button className="my-button">App component button</button>
      </div>
    </div>
  );
}

export default App;
