import React, { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";

export default function Shop() {
  const [products, setProducts] = useState(null);
  const [currentProduct, setCurrentProduct] = useState(0);
  const [load,setLoad]= useState(false);
  
  
    useEffect(() => {
      
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, {});

  const next = () => {
    setCurrentProduct(
      currentProduct < products.length - 1 ? currentProduct + 1 : 0
    );
  };
  const prev = () => {
    setCurrentProduct(
      currentProduct === 0 ? products.length - 1 : currentProduct - 1
    );
  };

  return (
    <>
      {products ? (
        <div className="container row">
          <span className="arrow-prev" onClick={prev}></span>

          <div className="card card-css">
            <img
              className="card-img-top img-css"
              src={products[currentProduct].image}
              alt="Card image cap"
            />
            <div class="card-body">
              <h5 class="card-title">{products[currentProduct].title}</h5>
            </div>
          </div>
          <span className="arrow-next" onClick={next}></span>
        </div>
      ) : (
        <MoonLoader color='#111' className="loading"/>
      )}
    </>
  );
}

{/* <DotLoader color="#36d7b7" /> */}