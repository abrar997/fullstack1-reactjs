import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import AddProducts from "../Products/AddProducts";
// import UpdateProducts from "../Products/UpdateProducts";


function ProtectedRoutes(props) {
    let Cmp = props.Cmp
  let navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      navigate("/register");
    }
  },[]);

  return (<>
  <Cmp />
  
  </>);
}

export default ProtectedRoutes;
