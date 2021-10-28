import { Container } from "@material-ui/core";
import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter , Route , Switch  } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";


function App() {

  return( 
    <BrowserRouter>
      <Container>
        <Navbar/> 
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>   
      </Container>
    </BrowserRouter>
  )}

export default App;
