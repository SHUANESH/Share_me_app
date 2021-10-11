import "./App.css";
import AppRouter from "./AppRouter/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";


const App = () => {
  return <div className="App">
    <Router>
      <AppRouter/>
    </Router>

  </div>;
};
