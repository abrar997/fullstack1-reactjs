import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import { Link, useParams } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

const SingleProduct = () => {
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

  return (
    <>
      <Header />
      <Container>
        <Row>
          <div className="card shadow bg-light col-lg-6 p-4 m-auto mt-5  ">
            <div className="d-flex">
              <div className="card-image ">
                <img
                  src={"http://localhost:8000/" + data.path}
                  alt={data.name}
                  style={{ width: "90%", height: 230 }}
                />
              </div>
              <div className="ms-5 mt-5">
                <h1 className="text-secondary mt-3"> {data.name}</h1>{" "}
                <h5>{data.description} </h5>
                <p className="text-danger fw-bold">{data.price} $ </p>
                <Link to={"/update/" + data.id}>
                  <button className="btn btn-danger">update </button>{" "}
                </Link>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default SingleProduct;
