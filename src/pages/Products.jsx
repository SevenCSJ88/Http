import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../components/Product";

const Products = () => {
  const [products, setProducts] = useState({
    data: null,
    isLoading: false,
  });

  useEffect(() => {
    (async () => {
      setProducts((prev) => ({ ...prev, isLoading: true }));
      const { data: _data } = await axios.get(
        "https://fakestoreapi.com/products"
      );
      setProducts(() => ({ data: _data, isLoading: false }));
    })();
  }, []);

  const { data, isLoading } = products;

  return (
    <div className="product-list">
      {data?.map((item, index) => (
        <Product item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Products;
