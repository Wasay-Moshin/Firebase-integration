import React from "react";
import { Link } from "react-router-dom";
function Login1({setEmail,setPassword ,handleAction}) {
  return (
    <div className="loginform">
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <div className="card px-5 py-3 ">
              <div className="login">
                <div>
                  <div className="text-center">
                    <h1>Login</h1>
                  </div>
                  <div></div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      onChange={(e) => setEmail(e.target.value)}
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input
                     onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <Link to="/resetpass">
                  <div className="text-end">
                  <button type="button" class="btn btn-link">Forget Password</button>
                  </div>
                  </Link>
                  <div className="text-center">
                  <button type="submit" className="btn btn-primary " onClick={handleAction}>
                    Login
                  </button>
                  </div>
                  <div className="text-center ">
                  
                    <hr />
                    <label>If you don't have account</label>
                    <br />
                    <Link to="/">
                      <button type="button" className="btn btn-link">
                        Sign Up
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div>
              <img className="img-fluid img1" src="Assets/004.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login1;
