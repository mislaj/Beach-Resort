import React from "react";
import "./App.css";

import Home from "./pages/Home";
import Room from "./pages/Room";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import {Route, Switch} from 'react-router-dom';


import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/room/" component={Room}/>
    <Route exact path="/room/ :slug" component={SingleRoom}/>
    <Route component={Error} />
    </Switch>
    </>
  );
}

export default App;
