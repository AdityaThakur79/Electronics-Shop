import Layout from "../components/layouts/Layouts.js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const AllProducts = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/product/get-products`
      );
      if (data?.success) {
        toast.success(data.message);
        setProducts(data.allProducts);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout title={"Products - Electronics Shop"}>
      <div className="container-fluid mt-3 md-3">
        <div className="heading">
          <div className=" ">
            <h4>Filter By Category</h4>
          </div>
        </div>
        <div className="text-center">
          <h1>All Products</h1>
          <div
            className="products-grid text-center"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
              marginTop: "16px",
            }}
          >
            {products?.map((p) => (
              <div key={p._id} className="card" style={{ width: "100%" }}>
                <img
                  src={`${process.env.REACT_APP_API}/api/product/product-photo/${p._id}`}
                  className="card-img-top img img-responsive p-2"
                  alt={p.name}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
                <hr />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description}</p>
                  <h4 className="card-text">Rs {p.price}</h4>
                  <button className="btn btn-secondary me-2">View</button>
                  <button className="btn btn-success">Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AllProducts;
