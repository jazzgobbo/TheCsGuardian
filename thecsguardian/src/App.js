import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';


function App() {
  return (
    <div className="App">
      <div className="outer-container">
        <Menu />


        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </div>
  
    </div>
  );
}

export default App;
