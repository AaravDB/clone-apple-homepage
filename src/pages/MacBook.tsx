
import React from 'react';
import Navigation from '@/components/Navigation';
import ProductDetailPage from '@/components/ProductDetailPage';
import { productsData } from '@/data/products';

const MacBook = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ProductDetailPage product={productsData.macbook} />
    </div>
  );
};

export default MacBook;
