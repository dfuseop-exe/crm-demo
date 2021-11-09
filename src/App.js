import { Container} from "@material-ui/core";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter , Route , Switch  } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";


function App() {

  const [mode, setmode] = useState("white");

  const togglemode = () => {
    
    if (mode === "white") {
      setmode("dark");
      document.body.style.backgroundColor = "#212529";
  
      document.body.style.color = "white";
      
    } else {
      setmode("white");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
     
    }
  };

  return( 
   
      <BrowserRouter>
      <Container>
        <Navbar togglemode={togglemode} mode={mode}/> 
        <Switch>
    
          <Route exact path="/" ><Home togglemode={togglemode} mode={mode}/> </Route>
          <Route exact path="/Contact"><Contact togglemode={togglemode} mode={mode}/></Route>
        
        </Switch>   
      </Container>
    </BrowserRouter>
   
  )}

export default App;
