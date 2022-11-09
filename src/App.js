import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, Routes, Route , useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";
import "./App.scss";
import Form from "./Component/Elements/Form";
import Login from "./Component/Elements/Login";
import Home from "./Component/Elements/Home";
import { app } from "./firbase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
// toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  // useEffect(() => {
  //   let authToken = sessionStorage.getItem("auth");
  //   if (authToken) {
  //     navigate("/home");
  //   }
  // }, []);
const handleAction =()=>{}
  // const handleAction = (id) => {
  //   const authentication = getAuth();
  //   if (id === 2) {
  //     createUserWithEmailAndPassword(authentication, email, password)
  //       .then((res) => {
  //         navigate("/home");
  //         sessionStorage.setItem("auth", res._tokenResponse.refreshToken);
  //       })
  //       .catch((e) => {
  //         if (e.code == "auth/wrong-password") {
  //           toast.error("please check the password");
  //         }
  //         if (e.code == "auth/user-not-found") {
  //           toast.error("please check the email");
  //         }
  //       });
  //   }
  //   if (id === 1) {
  //     signInWithEmailAndPassword(authentication, email, password)
  //       .then((res) => {
  //         navigate("/home");
  //         sessionStorage.setItem("auth", res._tokenResponse.refreshToken);
  //       })
  //       .catch((e) => {
  //         if (e.code == "auth/wrong-password") {
  //           toast.error("please check the password");
  //         }
  //         if (e.code == "auth/user-not-found") {
  //           toast.error("please check the email");
  //         }
  //       });
  //   }
  // };
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          {/* <Route path="" element={<Home/>}/> */}
          <Route
            path="/"
            element={
              <Form
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(2)}
                title="Sign Up"
              />
            }
          />
          {/* <Route
            path="/login"
            element={
              <Form
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(1)}
                title="Login"
              />
            }
          /> */}
          <Route
            path="/login"
            element={
              <Login
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(2)}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
