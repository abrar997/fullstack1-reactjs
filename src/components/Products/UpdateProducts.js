import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
// import {withRouter} from 'react-router-dom'
import { useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import { ImageIcon } from "@primer/octicons-react";

function UpdateProducts(props) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    DataFetch();
  }, []);
  const { id } = useParams();
  async function DataFetch() {
    let result = await fetch(`http://localhost:8000/api/single/${id}`, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      method: "GET",
    });
    setdata(await result.json());
  }
  const [img, setimg] = useState(true);

  return (
    <>
      <Header />
      <Container>
        <Row>
          <h3 className="text-center mt-4">
            Product
            <span className=" text-warning border-bottom border-danger pb-2">
              {data.name}
            </span>
          </h3>
          <form className="shadow p-4 w-50 m-auto mt-2 ">
            <div className="mb-3">
              <label className="form-label fw-bold">Name</label>
              <input
                type="text"
                defaultValue={data.name}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Price</label>
              <input
                type="text"
                defaultValue={data.price}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Description</label>
              <input
                type="text"
                defaultValue={data.description}
                className="form-control"
              />
            </div>
            <div className="mb-3 ">
              <label className="form-label fw-bold">image path</label>
              <input
                type="text"
                defaultValue={data.path}
                className="form-control"
              ></input>
              <button
                className="btn text-primary bg-light mt-2 position-absolute "
                onClick={() => setimg(!img)}
              >
                <ImageIcon size={24} /> {img ? "show img" : "hidden img"}
              </button>
              {img ? null : (
                <img
                  src={"http://localhost:8000/" + data.path}
                  alt={data.name}
                  width="50%"
                  height="50%"
                  className="mt-3"
                />
              )}
            </div>
            <button className="btn btn-danger mt-5">Update</button>
          </form>
        </Row>
      </Container>
    </>
  );
}

export default UpdateProducts;
