import axios from 'axios';
import React, { useState, Component } from 'react';
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { getUserFromLocalStorage, setUserToLocalStorage } from '../../helper/auth'
import { useEffect } from 'react';
const Login = () => {

  var rol = "/warehouse"
  useEffect(() => {

    rol = rol;
  }, [rol])

  const userRole = () => {

    const role = getUserFromLocalStorage().role


    if (role === "admin") {
      rol = "/treasury"
    }
    else if (role === "inventory") {
      rol = "/warehouse"
    }
    else if (role === "GL") {
      rol = "/employees"
    }
    else if (role === "planning") {
      rol = "/treasury"
    }
    else if (role === "purchase") {
      rol = "/payable"
    }
    else if (role === "production") {
      rol = "/machines"
    }
    else if (role === "sales") {
      rol = "/treasury"
    }
    else {
      rol = "/"
    }

  }
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const baseurl = process.env.API_URL;
  console.log(baseurl, "base url")
  const handleSubmit = () => {

    console.log("hello")
    axios.post('http://localhost:8000/api/auth/login',
      {
        "email": email,
        "password": password
      }
    ).then((response) => {
      console.log(response, "yes")
      console.log(response?.data?.token, "token  ")
      setUserToLocalStorage(response?.data?.token, response?.data?.role);
      // switch

      { userRole() }

      navigate(rol)

    }).catch((error) => {
      console.log(error, "error")
    })
  };

  return (

    <div className="container">
      <div className='screen'>
        <h3>Lame Dairy</h3>

        <div className="form-group">
          <label>Login</label>
          <input data-cy="email" type="email" className="form-control" placeholder="Email"
            onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="form-group">

          <input data-cy="password" type="password" className="form-control" placeholder="Password"
            onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="log">
          <button data-cy="submit" id="btn" onClick={handleSubmit} className="btn btn-primary btn-block">Login</button>
        </div>

      </div>
    </div>
  )
}

export default Login




