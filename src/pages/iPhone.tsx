
import React from 'react';
import Navigation from '@/components/Navigation';
import ProductDetailPage from '@/components/ProductDetailPage';
import { productsData } from '@/data/products';

const iPhone = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ProductDetailPage product={productsData.iphone} />
    </div>
  );
};

export default iPhone;
