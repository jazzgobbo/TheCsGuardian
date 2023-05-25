import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Menu from './components/Menu';


function App() {
  return (
    <div className="App">
      <div className="outer-container">
        <NavBar />
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
