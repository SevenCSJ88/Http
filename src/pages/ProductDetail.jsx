import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";

const ProductDetail = () => {
  const params = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
        const productId = params.productId;
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
        setProduct(response.data);
    };
    fetchProduct();
  }, [params.productId]);

  return (
    <div className="product-detail">
      {product ? (
        <>
          <img src={product.image} alt={product.title} />
          <h2 className="name">{product.title}</h2>
          <p className="description">{product.description}</p>
          <div className="rating">
            {Array.from({ length: Math.ceil(product.rating.rate) }).map((_, index) => (
              <AiFillStar color="gold" size={20} key={index} />
            ))}
          </div>
          <p className="price">${product.price}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetail;
