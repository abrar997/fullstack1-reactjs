import React from "react";
import { Container } from "react-bootstrap";
import Header from "../Header/Header";
// import Products from "../Products/Products";

const Home = () => {
  return (
    <div>
      <Header />
      <Container>
        <h1>Home page </h1>
        {/* <Products /> */}
      </Container>
    </div>
  );
};

export default Home;
