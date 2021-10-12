import "./App.css";
import Routing from "./routing/Routing";
import { Provider } from "react-redux";
import store from "./components/Redux/store";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
           <Routing/>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
