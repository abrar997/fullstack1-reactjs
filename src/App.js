import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AddProducts from "./components/Products/AddProducts";
import UpdateProducts from "./components/Products/UpdateProducts";
import Products from "./components/Products/Products";
import Home from "./components/Home/Home";
// import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
function App() {
  return (
    <div className="App">
      <>
        {/* <h3 className="mt-3 ">ecommerece dashboard </h3> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Register />} /> */}
          <Route element={<Products />} path="/prod" />
          <Route path="/add" element={<AddProducts />} />
          <Route path="/update" element={<UpdateProducts />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </>
    </div>
  );
}

export default App;
