import "./App.css";
import Routing from "./routing/Routing";
<<<<<<< HEAD
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
=======
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
>>>>>>> 291f1cf91c31f189358dc64b9ea43bf742b7b6f5

export default App;
