import logo from "./logo.svg";
import "./App.css";
import MyPage from "./component/MyPage";
import InfoInputs from "./component/InfoInputs";

function App() {
  return (
    <div className="App">
      <MyPage />
      <MyPage user="kim" />
      <MyPage user={{ name: "kim" }} />
      <InfoInputs />
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
