const App = ({ initButtonText, initClassesList }) => {
  const [buttonText, setButtonText] = React.useState(initButtonText);
  const [classesList, setClassesList] = React.useState(initClassesList);

  const onButtonClick = () => {
    setButtonText('Hello from React');
    setClassesList('green-btn');
  };

  return (
    <div className="app">
      <button className={classesList} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App initButtonText="Click me" initClassesList="" />);
