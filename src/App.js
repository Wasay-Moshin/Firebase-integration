import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route , useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";
import "./App.scss";
import Form from "./Component/Elements/Form";
import Home from "./Component/Elements/Home";
// eslint-disable-next-line
import { app } from "./firbase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("auth");
    if (authToken) {
      navigate("/home");
    }
  }, [navigate]);
  const handleAction = (id) => {
    const authentication = getAuth();
    if (id === 2) {
      createUserWithEmailAndPassword(authentication, email, password)
        .then((res) => {
          navigate("/home");
          sessionStorage.setItem("auth", res._tokenResponse.refreshToken);
        });
    }
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((res) => {
          navigate("/home");
          sessionStorage.setItem("auth", res._tokenResponse.refreshToken);
        })
        .catch((e) => {
          if (e.code === "auth/wrong-password") {
            toast.error("please check the password");
          }
          if (e.code === "auth/user-not-found") {
            toast.error("please check the email");
          }
        });
        
       
    }
  };
  return (
    <>
      <ToastContainer />
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route
            path="/login"
            element={
              <Form
                setEmail={setEmail}
                setPassword={setPassword}
                handleAction={() => handleAction(1)}
                title="Login"
              />
            }
          />
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
        </Routes>
    </>
  );
}

export default App;
