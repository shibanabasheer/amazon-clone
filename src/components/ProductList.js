import React from 'react';
import ProductCard from './ProductCard';
import mockProducts from '../mockProducts';

const ProductList = () => {
  return (
    <div className="product-list">
      {mockProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

