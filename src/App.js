import logo from './logo.svg';
import './App.css';
import Web3 from 'web3'

function App() {
  const web3 =new Web3("https://mainnet.infura.io/v3/681332a2c23a4ce8ac972bfbdfa75555")
console.log(web3)
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
