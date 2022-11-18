import React from "react";
import { Link } from "react-router-dom";
function Form({
  title,
  setName,
  setAddress,
  setContact,
  setEmail,
  setPassword,
  handleAction,
}) {
  
  return (
    <div className="form">
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <div className="card px-5 py-3 ">
              <div className="signup">
                <div>
                  <div className="text-center">
                    <h1>{title} Now</h1>
                  </div>
                  <div className="mb-2">
                    <label for="exampleInputEmail" className="form-label">
                      Full Name
                    </label>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      name="name"
                      type="name"
                      className="form-control"
                    />
                    <div className="form-text"></div>
                  </div>
                  <div className="mb-2">
                    <label for="exampleInputEmail" className="form-label">
                      Address
                    </label>
                    <input
                      onChange={(e) => setAddress(e.target.value)}
                      name="address"
                      type="text"
                      className="form-control"
                    />
                    <div id="emailHelp" className="form-text"></div>
                  </div>
                  <div className="mb-2">
                    <label for="exampleInputEmail" className="form-label">
                      Contact
                    </label>
                    <input
                      onChange={(e) => setContact(e.target.value)}
                      name="contact"
                      type="text"
                      className="form-control"
                    />
                    <div className="form-text"></div>
                  </div>
                  <div className="mb-2">
                    <label for="exampleInputEmail" className="form-label">
                      Email
                    </label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      type="email"
                      className="form-control"
                      id="exampleInputEmail"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text"></div>
                  </div>
                  <div className="mb-2">
                    <label for="exampleInputPassword" className="form-label">
                      {" "}
                      Password
                    </label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      name="password"
                      className="form-control"
                      id="exampleInputPassword"
                    />
                  </div>

                  <Link to="/upload">Upload Image</Link>
          
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={handleAction}
                    >
                      {title}
                    </button>
                  </div>
                 
                  <hr />
                  <div className="text-center">
                    If you already have then &nbsp;
                    <Link to="/login">Click here</Link>
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

export default Form;
