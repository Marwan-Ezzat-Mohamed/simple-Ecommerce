import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Orders from "./components/Orders";
import Checkout from "./components/Checkout";

const App = () => {
  return (
    <div className="d-flex flex-column vh-100 ">
      <Router>
        <NavBar />
        <div className="d-flex flex-column flex-grow-1 px-5 mx-5">
          {/* <Route
        path="/"
        render={() => {
          return (
            <Redirect
              to={deviceState === REGISTERED ? "/login" : "/register-device"}
            />
          );
        }}
      /> */}

          <Route path="/home" render={(params) => <Home />} />
          <Route path="/login" render={(params) => <Login />} />
          <Route path="/orders" render={(params) => <Orders />} />
          <Route path="/checkout" render={(params) => <Checkout />} />
        </div>
      </Router>
    </div>
  );
};

export default App;
