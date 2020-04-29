import React, { useState, useEffect } from 'react';
import ProductCard from "./TopDealsCard";

const TopDeals = () => {
  const [productlist, setProducts] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:8080/products")
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((error) => console.log(error))
    }
    fetchData();
  }, []
  );
  
  console.log(productlist)
  
  return Object.keys(productlist).length ? (
    <div>
      <ul>{productlist.data.products.map(product => {
        return <ProductCard product={product} />;
      })}</ul>
    </div>
  ) : (
    <div className="empty">No Products</div>
  );
}
 
export default TopDeals;