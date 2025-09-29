import './App.css';

function App() {
  const name = "Meena";
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Website</h1>
        <div className="name-display">
          <h2>Hello, my name is {name}!</h2>
          <p>Nice to meet you!</p>
        </div>
      </header>
    </div>
  );
}

export default App;
