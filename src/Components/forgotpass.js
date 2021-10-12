import React from "react";
import back from '../Components/background.jpg'

export default function forgotpass() {
  return (
    <div style = {{backgroundImage: `url(${back})`}}>
    <div
      class="container"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        fontFamily : 'Manrope',
      }}
    >
      <div
        class="card shadow p-3 mb-5 rounded"
        style={{
          width: "500px",
          height: "auto",
          padding: "45px",
          
        }}
      >
        <div class="card-body ">
          <h5 class="card-title" style={{fontSize : "40px" ,fontWeight : "bold"}}>Forgot Your Password ?</h5>
          <h6 class="card-subtitle mb-2 text-muted">Email Address*</h6>

          <div class="input-group mb-3 mt-2">
            <input
              type="text"
              class="form-control"
              placeholder="username"
            />
            <span class="input-group-text" id="basic-addon2">
              @gmail.com
            </span>
          </div>

          <button type="button" class="btn" style={{backgroundColor : "#D2691E" , color : "white" , fontWeight : "bold"}}>Request</button>


          <a href="/" class="card-link mt-2"  style={{textDecoration : "none" , fontWeight : "bold" , display : "block"}}>Return to login</a>
        </div>
      </div>
    </div>
    </div>
  );
}
