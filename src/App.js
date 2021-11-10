import { Container} from "@material-ui/core";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter , Route , Switch  } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";


function App() {

  const [mode, setmode] = useState("white");
  const [theme, settheme] = useState('orange')

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


  const HandleSelect = (e)=>{
    const selectedColor = e.target.value;
    settheme(selectedColor);
    console.log(theme);
  }

  return( 
   
      <BrowserRouter>
      <Container >
        <Navbar togglemode={togglemode} mode={mode} theme={theme} HandleSelect={HandleSelect}/> 
        <Switch>
    
          <Route exact path="/" ><Home togglemode={togglemode} mode={mode}/> </Route>
          <Route exact path="/Contact"><Contact togglemode={togglemode} mode={mode} theme={theme}/></Route>
        
        </Switch>   
      </Container>
    </BrowserRouter>
   
  )}

export default App;
