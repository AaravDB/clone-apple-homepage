
import React from 'react';
import Navigation from '@/components/Navigation';
import ProductDetailPage from '@/components/ProductDetailPage';
import { productsData } from '@/data/products';

const iPad = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ProductDetailPage product={productsData.ipad} />
    </div>
  );
};

export default iPad;
