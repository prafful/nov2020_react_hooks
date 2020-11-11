
import './App.css';
import HelloClass from './component/helloclass';
import HelloHook from "./component/hellohook";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Class: <HelloClass></HelloClass>
        Function: <HelloHook></HelloHook>
      </header>
    </div>
  );
}

export default App;
