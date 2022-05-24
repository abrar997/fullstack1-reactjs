import axios from "axios";
import React, { useEffect, useState } from "react";
// import axios from "axios";
import { Container, Table } from "react-bootstrap";
import Header from "../Header/Header";

function Products() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let result = await fetch("http://localhost:8000/api/list");
      // result = await result.json();
      setdata(await result.json());
      console.log("data", data);
      // let  result=await axios.get('http://localhost:8000/api/list').then(res=>{
      //     result =  res.result.json();
      //   setdata(result)
      //   console.log("data",data);
      // })
    }
    fetchData();
  }, []);

  return (
    <div className="products_list">
      <Header />
      <Container>
        <h3 className="text-center text-danger text-capitalize mt-5 mb-3">
          products page
        </h3>
        <div className="offset-sm-2 col-sm-10 m-auto">

        <Table striped bordered hover className=" m-auto text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>name</th>
              <th>price</th>
              <th>description</th>
              <th>image</th>
            </tr>
          </thead>

          <tbody>
            {data.map((items) => {
              return (
                <tr key={items.id}>
                  <td> {items.id} </td>
                  <td> {items.name}</td>
                  <td> {items.price}</td>
                  <td> {items.description}</td>
                  <td>
                    {" "}
                    <img
                      src={"http://localhost:8000/" + items.path}
                      alt={items.name}
                      style={{ width: 180 }}
                      />{" "}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
            </div>
      </Container>
    </div>
  );
}

export default Products;
