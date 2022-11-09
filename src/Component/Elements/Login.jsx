import React from "react";

function Login() {
  return (
    <div className="loginform">
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <div className="card px-5 py-3 ">
              <div className="login">
                <form>
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
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" for="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                  <div className="text-center">
                    <br />
                    <hr />
                    <label>If you don't have account</label>
                    <br />
                    <a href="/">
                      <button type="button" className="btn btn-link">
                        Sign Up
                      </button>
                    </a>
                  </div>
                </form>
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

export default Login;
