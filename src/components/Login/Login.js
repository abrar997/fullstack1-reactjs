import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  let navigate = useNavigate();

  async function loginHandle(e) {
    e.preventDefault();
    let items = { email, password };
    let result = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(items),
    });

    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));

    if (email && password && localStorage.getItem("user-info")) {
      navigate("/");
    }
    if (!email || !password) {
      setError("check your email and password and try again ...");
      // navigate("/login");
    }
  }

  return (
    <div className="bg-light">
      <Header />
      <Container>
        <h3 className="text-center bg-light mt-3">Login page </h3>
        <Form className="w-50 m-auto shadow p-4 mt-3">
          <p className="text-danger">{error}</p>
          <Form.Group controlId="formBasicEmail">
            <Form.Label> Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
              // value={email}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label> Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Your Email"
              onChange={(e) => setPassword(e.target.value)}
              // value={password}
            />
          </Form.Group>

          <button onClick={loginHandle} className="btn btn-primary mt-4">
            {" "}
            log in
          </button>
        </Form>
      </Container>
    </div>
  );
}

export default Login;
