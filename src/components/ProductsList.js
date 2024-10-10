import { useEffect, useState } from "react";
import Product from "./Product";
import Filtering from "./Filtering";
export default function ProductsList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setProducts(json));
  }, []);
  const handleFilter = (category) => {
    if (category === "All") {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((json) => setProducts(json));
    } else {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((response) => response.json())
        .then((json) => setProducts(json));
    }
  };
  return (
    <div>
      <h1 className="m-5">Products</h1>
      <div className="m-5 d-flex justify-content-center align-items-center">
        <Filtering onFilter={handleFilter} />
      </div>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <Product key={product.id} list={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
