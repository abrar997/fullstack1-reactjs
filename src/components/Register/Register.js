import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header/Header";

// u can not use useNavigate with arrow function
// u can instead onClick bu OnAubmit and revese
// use useNavigate instead of useHsitory react-router-domv5
// if ur using callback function with every inputs u don't need to name=''

function Register() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/login");
    }
    if (!localStorage.getItem("user-info")) {
      navigate("/register");
    }
    registerFunc()
  }, []);

  async function registerFunc() {
    // let navigate = useNavigate();
    let item = { name, email, password };
    let result = await fetch("http://localhost:8000/api/form",{
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result)); //data save in storage if u back to inspect with key ===>user-info
    
    setName('')
    setEmail('')
    setPassword("")
    // navigate('/login')

    // if (name && email && password && localStorage.getItem("user-info")) {
    //   navigate("/login");
    // }

    // if (!name && !email && !password && !localStorage.getItem("user-info")) {
    //   error = "u miss something please check your info again";
    // }
  }

  return (
    <>
      <Header />

      <div>
        <h3 className="mt-4 bg-light text-center text-danger p-1">
          Register page{" "}
        </h3>
        <Form
          className="m-auto w-50 shadow-lg p-4 fw-bold mt-5 "
          onSubmit={(e) => e.preventDefault()}
        >
          <p className="text-danger">{error}</p>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter your name"
              // name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              // name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              // name="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Form.Group>
          <p className="text-secondary">
            if u have account <Link to="/login">login</Link>{" "}
          </p>
          <Button variant="primary" type="submit" onClick={registerFunc}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Register;
