import React from "react";
import {HashRouter,Route} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Navigation from "./component/Navigation";
import Details from "./component/Detail";

function App(){
  return <HashRouter>
    <Navigation/>
    <Route path='/' exact={true} component={Home}/>
    <Route path='/about'  component={About}/>
    <Route path='/movie_details/:id' component={Details}/>
  </HashRouter>
}

export default App;