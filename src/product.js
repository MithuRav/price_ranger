import React, { useRef, useState } from "react";

const Product = (props) => {
  const productList = props.productlist.products;
  const initialState = productList;
  const [state, setState] = useState(initialState);
  const priceList = productList.map((product) => product.price);
  const maxprice = Math.max(...priceList);
  const minprice = Math.min(...priceList);
  const pricerangerref = useRef();
  const handleInput = () => {
    const filteredPrice = pricerangerref.current.value;
    const filteredList = productList.filter(
      (product) => product.price < filteredPrice
    );
    setState(filteredList);
  };
  return (
    <>
      <div className="searchbar">
        <label for="price_search">Price Filter</label>
        <input
          type="range"
          name="price_search"
          min={minprice}
          max={maxprice}
          step="1"
          ref={pricerangerref}
          onInput={handleInput}
        />
      </div>
      <p>
        {state.map((product) => (
          <ol>
            {product.title} - {product.price}
          </ol>
        ))}
      </p>
    </>
  );
};

export default Product;
