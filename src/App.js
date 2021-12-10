import logo from "./logo.svg";
import "./App.css";
import Message from "./components/Message";

const name = "Andrew";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Message name={name} text="Hello, world!" time="11:00" />
      </header>
    </div>
  );
}

export default App;
