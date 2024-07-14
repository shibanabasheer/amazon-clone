import React from 'react';
import { useParams } from 'react-router-dom';
import mockProducts from '../mockProducts';

const ProductCard = ({ product: propProduct }) => {
  const { id } = useParams();
  const product = propProduct || mockProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      {propProduct ? (
        <a href={`/product/${product.id}`}>View Details</a>
      ) : null}
    </div>
  );
};

export default ProductCard;
