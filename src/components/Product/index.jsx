import { Button } from "antd";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const Product = ({ item }) => {
  const {
    image,
    title,
    description,
    rating: { rate },
    price,
  } = item;
  return (
    <div className="product-item">
      <img src={image} />
      <h2 className="name">{title}</h2>
      <p className="description">{description}</p>
      <div className="rating">
        {Array.from(Array(Math.ceil(rate)).keys()).map((star) => (
          <AiFillStar color="gold" size={20} key={star} />
        ))}
      </div>
      <div className="item-bottom">
        <p className="price">${price}</p>
        <Button type="link" href={`/product/${item.id}`}>
          View details
        </Button>
      </div>
    </div>
  );
};

export default Product;