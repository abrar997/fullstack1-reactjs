import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
function AddProducts() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  let navigate = useNavigate();
  async function AddProduct(e) {
    e.preventDefault();
    console.log({ name, price, description, file });
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("path", file);
    await fetch("http://localhost:8000/api/shop", {
      method: "POST",
      body: formData,
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // },
    });
    alert("Data has been saved ");
    navigate("/Products");
  }

  return (
    <>
      <Header />
      <div>
        <Container>
          <h1 className="text-center mt-5 offset-sm-12"> Add product</h1>
          <Form method="post" className="w-50 m-auto shadow p-4 mt-3">
            <Form.Group controlId="formBasicEmail">
              <Form.Label> name</Form.Label>
              <Form.Control
                type="text"
                placeholder="product name "
                onChange={(e) => setName(e.target.value)}
                // value={email}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label> price</Form.Label>
              <Form.Control
                type="text "
                placeholder="product price"
                onChange={(e) => setPrice(e.target.value)}
                // value={password}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label> description</Form.Label>
              <Form.Control
                type="text "
                placeholder="product description"
                onChange={(e) => setDescription(e.target.value)}
                // value={password}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label> upload file</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
                accept="products"
              />
            </Form.Group>

            <button onClick={AddProduct} className="btn btn-danger mt-4">
              add product
            </button>
          </Form>
        </Container>
      </div>
    </>
  );
}

export default AddProducts;
