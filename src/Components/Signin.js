import React from "react";
import back from '../Components/background.jpg'
import "./Signin.css"

export default function Signin() {
  return (
    <div style = {{
      // backgroundImage: `url(${back})`
      backgroundColor : "#f77f1bc7"
      }}>
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
        class="card shadow  p-3 mb-5 rounded"
        style={{
          width: "500px",
          height: "auto",
          padding: "40px", 
        }}
      >
        <div class="card-body ">
          <h5 class="card-title" style={{fontSize : "40px" , fontWeight : "bold"}}>Sign In</h5>
          <h6 class="card-subtitle mb-2 text-muted">Email Address</h6>

          <div class="input-group mb-3 mt-2">
            <input
              type="text"
              class="form-control"
              placeholder="name@domain.com"
            />
          </div>

          <h6 class="card-subtitle mb-2 text-muted">Password</h6>

          <div class="input-group mb-3 mt-2">
            <input
              type="text"
              class="form-control"
              placeholder="Enter your password"

            />
          </div>

          {/* check box */}

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              id="flexCheckChecked" 
            />
            <label class="form-check-label" for="flexCheckChecked">
              Remember Me
            </label>
          </div>

          <button
            type="button"
            class="btn mt-2"
            style={{
              backgroundColor: "#D2691E",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Sign In
          </button>

          <a
            href="/"
            class="card-link mt-2"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              display: "block",
            }}
          >
            Forgot Your Password ?
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}
