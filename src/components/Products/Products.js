import React, { useEffect, useState } from "react";
// import axios from "axios";
import { Button, Container, Table } from "react-bootstrap";
import Header from "../Header/Header";
import { Link, Outlet } from "react-router-dom";

function Products() {
  const [data, setdata] = useState([]);

  async function fetchData() {
    let result = await fetch("http://localhost:8000/api/list");
    // result = await result.json();
    setdata(await result.json());
    // let  result=await axios.get('http://localhost:8000/api/list').then(res=>{
    //     result =  res.result.json();
    //   setdata(result)
    //   console.log("data",data);
    // })
  }

  async function deleteProduct(id) {
    let deleteItems = await fetch("http://localhost:8000/api/delete/" + id, {
      method: "DELETE",
    });

    deleteItems = await deleteItems.json();
    console.log(deleteItems);
    fetchData();
  }

  useEffect(() => {
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
          <Table striped bordered className=" m-auto shadow text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>name</th>
                <th>price</th>
                <th>description</th>
                <th>image</th>
                <th>Operation</th>
                <th>details</th>
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
                      <img
                        src={"http://localhost:8000/" + items.path}
                        alt={items.name}
                        style={{ width: 180, height: 130 }}
                      />
                    </td>
                    <td>
                      <Button
                        className="btn-danger"
                        onClick={() => deleteProduct(items.id)}
                      >
                        delete
                      </Button>
                    </td>
                    <td>
                      <Link to={"/SingleProduct/" + items.id}>
                        <Button className="btn-success">details</Button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Container>
      <Outlet />
    </div>
  );
}

export default Products;
