import React, { useState, useEffect } from "react";
import Layout from "../../components/layouts/Layouts.js";
import AdminMenu from "./../../components/AdminComponent.js";
import toast from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/product/get-products`
      );
      if (data?.success) {
        toast.success("Products Fetched Successfully");
        console.log(data);
        setProducts(data.allProducts);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const containerStyle = {
    width: "70vw",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",  
    gap: "16px",
  };

  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const imageStyle = {
    width: "100%",
    height: "150px",
    objectFit: "contain",
    borderRadius: "4px",
  };

  return (
    <Layout title={"Products - Electronics Shop"}>
      <div className="container-fluid m-3 p-3 text-center">
        <div className="row">
          <div className="col-md-5">
            <AdminMenu />
          </div>
          <div class="col-md-7 container mt-4">
            <h1>PRODUCTS</h1>
            {/* <div class="row"> */}
            <div style={containerStyle}>
              {products?.map((p) => (
                <Link to={`/dashboard/admin/product/${p.slug}`} key={p._id}>
                  <div className="card m-2" style={cardStyle}>
                    <img
                      src={`${process.env.REACT_APP_API}/api/product/product-photo/${p._id}`}
                      className="card-img-top img img-responsive p-2"
                      alt={p.name}
                      style={imageStyle}
                    />
                    <hr></hr>
                    <div className="card-body">
                      <h4 className="card-title">{p.name}</h4>
                      <p className="card-text">{p.description}</p>
                      <h4 className="card-text">{p.price}</h4>
                      <button className="btn btn-secondary ms-2">View</button>
                    </div>
                  </div>
                </Link>
              ))}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AllProducts;
