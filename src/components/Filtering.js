import { useState, useEffect } from "react";
function Filtering(props) {
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    async function handleFilter() {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      setFilter(data);
    }
    handleFilter();
  }, []);
  console.log(filter);

  const filterByCategory = filter.map((product) => {
    return (
      <div className="">
        <button
          onClick={() => props.onFilter(product)}
          className="btn btn-primary me-2"
        >
          {product}
        </button>
      </div>
    );
  });
  return (
    <div className="">
      <button
        onClick={() => props.onFilter("All")}
        className="btn btn-primary me-2"
      >
        All
      </button>
      {filterByCategory}
    </div>
  );
}
export default Filtering;
