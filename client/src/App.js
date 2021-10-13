import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./routing/Routing";
import Contact from "./components/pages/contact/Contact"
import Navbar from "./components/features/navbar/Navbar";


const App = () => {
  return (
     
    <div className="App">
      
    <Router>
    <Navbar/>
      {/* <Routing/>  */}
    </Router>
  </div>

  )
};

export default App;
