import "./App.css";
import React from "react";
import Home from "./views/homePage/home.component";
import Detail from "./views/detailPage/detail.components";
import Form from "./views/formPage/form.components";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Landing from "./views/landingPage/landing.components";
import NavBar from "./components/navbar/navbar.components";
import SearchBar from "./components/searchBar/searchBar.components";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/" component={NavBar}>
          <Route path="/home" component={SearchBar}/>
            <Route exact path="/home" component={Home} />
            <Route path="/home/:id" component={Detail} />
            <Route path="/form" component={Form} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
