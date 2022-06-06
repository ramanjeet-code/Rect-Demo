import axios from "axios";
import React, { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuth, toggleAuth } = useContext(AuthContext);
  const onhandle = (e) => {
    e.preventDefault();
    axios({
      url: "https://reqres.in/api/login",
      method: "POST",
      data: {
        email,
        password
      }
    })
      .then((res) => {
        alert("sucess");
        toggleAuth();
      })
      .catch((err) => {
        console.log(err.message);
        alert("Error");
      });
    if (isAuth) {
      console.log("hii");
      return <Navigate to="/products" />;
    }
  };
  return (
    <div>
      <input
        data-cy="login-email"
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br></br>
      <input
        data-cy="login-password"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br></br>
      <button data-cy="login-submit" onClick={onhandle}>
        Login
      </button>
    </div>
  );
};
export default Login;
