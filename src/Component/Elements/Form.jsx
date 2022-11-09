import React from "react";
// import { Link } from "react-router-dom";
function Form({title, setEmail, setPassword, handleAction}) {
  return (
    <div className="form">
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <div className="card px-5 py-3 ">
              <div className="signup">
                <form>
                  <div className="text-center mb-5">
                    <h1>{title} Now</h1>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Email
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text"></div>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      {" "}
                      Password
                    </label>
                    <input
                    onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      name="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  
                  <div className="text-center mt-4 mb-3">
                    <button type="submit" className="btn btn-primary" onClick={handleAction}>
                      {title}
                    </button>
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

export default Form;
