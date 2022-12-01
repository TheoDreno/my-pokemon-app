import { Provider } from "react-redux";
import "./App.css";
import Router from "./composants/Router";
import { store } from "./store/Redux";

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
