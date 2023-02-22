import React, { useEffect } from "react";
import Navbar from "../navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import "./Screen.css";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { getPizza } from "../../store/slices/UserSlice";
import { addCartProduct } from "../../store/slices/addToCartSlice";


function Screen() {
 
//   const exist = useSelector((state) => state.getCartData)
//   console.log("exist",exist)

// function isAdded(_id){
 
//  const match = exist.map(v => v.product.map((data,index) => data._id === _id) )
//  var newObj = Object.assign({}, ...match );
// //  return newObj
// console.log("match",newObj)

// }


  // const product = useSelector((state) => state.allproducts)
  // console.log(product)
  const navigate = useNavigate();
  const loginUser = useSelector((state) => state);
  console.log("loginUser", loginUser);
  const products = useSelector((state) => state.cartDatas);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("http://localhost:4000/api/getAllPizza")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(getPizza(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products=== :", products);

  const addCart = (_id, title, profile, price, category) => {
    console.log("id", _id);
    const userId = localStorage.getItem("userId");
    console.log("userId", userId);

    axios
      .put(`http://localhost:4000/api/addcart/${userId}`, {
        userId,
        _id,
        title,
        profile,
        price,
        category,
        quantity: 1,
      })
      .then((res) => {
        navigate("/Cart");
        dispatch(addCartProduct(res.data));
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-12 max-auto">
            <div className="row">
              {products
                ? products.map((product) => {
                    const { _id, title, profile, price, category } = product;
                    return (
                      <div
                        className="card"
                        style={{ width: "18rem", marginRight: "3rem" }}
                      >
                        <img src={profile} className="card-img-top" alt="..." />
                        <div className="card-body">
                          <h5 className="card-title">{title}</h5>
                          <p className="card-text">price : {price}</p>
                          <p className="card-text">{category}</p>
                         
                            <button
                              onClick={() => {
                                addCart(_id, title, profile, price, category);
                              }}
                              className="btn btn-primary"
                            >
                              Add to Cart
                            </button>
                         
                        </div>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Screen;
