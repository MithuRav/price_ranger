import React, { useEffect, useState } from "react";
import Product from "./product";
import SearchBar from "./searchbar";

const Products = () => {
  const [products, setProducts] = useState({});
  const [loaded, setLoaded] = useState(false);
  const url = "https://dummyjson.com/products";
  useEffect(() => {
    fetchProducts(url);
  }, []);

  const fetchProducts = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoaded(true);
      })
      .catch((error) => {
        setLoaded(false);
      });
  };

  return <> {loaded ? <Product productlist={products} /> : <h1>Loading</h1>}</>;
};

export default Products;
