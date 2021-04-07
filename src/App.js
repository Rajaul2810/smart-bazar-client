import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import './App.css';
import Admin from "./Compunents/Admin/Admin";
import Checkout from "./Compunents/Checkout/Checkout";
import Header from "./Compunents/Header/Header";
import Home from "./Compunents/Home/Home";
import Login from "./Compunents/Login/Login";
import Order from "./Compunents/Order/Order";
import PrivateRoute from "./Compunents/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]} >
     <Router>
       <Header/>
       <Switch>
         <Route exact path="/">
              <Home/>
         </Route>
         <Route path="/Home">
            <Home/>
         </Route>
         <PrivateRoute path="/admin">
             <Admin/>
         </PrivateRoute>
         <PrivateRoute path="/order">
             <Order/>
         </PrivateRoute>
         <PrivateRoute path="/checkout/:_id">
            <Checkout/>
         </PrivateRoute>
         <Route path="/login">
             <Login/>
         </Route>
       </Switch>
     </Router>
     </UserContext.Provider>
  );
}

export default App;
