import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import { Landing, Detail, Home, Form } from "./views";
import NavBar from "./components/navbar/navbar.components";
import SearchBar from "./components/searchBar/searchBar.components";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";


function App() {
  const location = useLocation()
 

  // uso el useEffect para llenar el estado global con lo que voy a necesitar

 
  return (
   
   
      <div>
      {location.pathname !== "/" && <NavBar/>}
      {location.pathname !== "/" && <SearchBar/>}
          <Route exact path="/" render={()=> <Landing/>} />
            <Route path="/home" render={()=> <Home/>} />
            <Route path="/detail/:id" render={()=> <Detail/>} />
            <Route path="/create" render={()=> <Form/>} />     
      </div>
   
  );
}

export default App;
