import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.scss";
import Form from "./Component/Elements/Form";
import Home from "./Component/Elements/Home";
import Details from "./Component/Elements/Details";
import db from "./firbase";
import { doc, setDoc } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import Login1 from "./Component/Elements/Login1";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Resetpass from "./Component/Elements/Resetpass";
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
      createUserWithEmailAndPassword(authentication, email, password).then(
        (res) => {
          navigate("/home");
          toast.info("Sign Up successfully");
          sessionStorage.setItem("auth", res._tokenResponse.refreshToken);
          setDoc(doc(db, "users", res.user.uid), {
            email: email,
            password: password,
          });
        }
      );
    }
    if (id === 1) {
      signInWithEmailAndPassword(authentication, email, password)
        .then((res) => {
          navigate("/home");
          toast.info("logged in successfully");
          sessionStorage.setItem("auth", res._tokenResponse.refreshToken);
        })
        .catch((e) => {
          if (e.code === "auth/wrong-password") {
            toast.error("please enter correct password");
          }
          if (e.code === "auth/user not-found") {
            toast.error("please enter correct email");
          }
        });
    }
  };
  const resetAction=()=>{
    const auth = getAuth();
sendPasswordResetEmail(auth, email)
  .then(() => {
    console.log('click for ')
  })
  .catch((error) => {
    console.log(error)
  });

  }
 

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path="/login"
          element={
            <Login1
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
        <Route
          path="/resetpass"
          element={
            <Resetpass
            resetAction={() => resetAction()}
            />
          }
        />
         <Route path="/detail" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
