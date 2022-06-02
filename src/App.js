import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AddProducts from "./components/Products/AddProducts";
import UpdateProducts from "./components/Products/UpdateProducts";
import Products from "./components/Products/Products";
import Home from "./components/Home/Home";
import SingleProduct from "./components/Products/SingleProduct";
// import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";

function App() {
  // const [data, setdata] = useState(<AddProducts />);

  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/add" element={<AddProducts />} />
          <Route path="/SingleProduct/:id" element={<SingleProduct />} />
          <Route path="/update/:id" element={<UpdateProducts />} />
          <Route path="/update" element={<UpdateProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </>
    </div>
  );
}

export default App;
