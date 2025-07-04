
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export interface ProductFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ProductData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  imageUrl: string;
  startingPrice: string;
  features: ProductFeature[];
  backgroundColor: string;
  textColor: string;
}

interface ProductDetailPageProps {
  product: ProductData;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product }) => {
  return (
    <div className={`min-h-screen ${product.backgroundColor} pt-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className={`space-y-6 ${product.textColor}`}>
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                {product.name}
              </h1>
              <p className={`text-2xl md:text-3xl font-medium ${
                product.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {product.tagline}
              </p>
              <p className={`text-lg ${
                product.textColor === 'text-white' ? 'text-gray-400' : 'text-gray-500'
              } max-w-2xl`}>
                {product.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-full"
              >
                Buy from {product.startingPrice}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className={`px-8 py-4 text-lg font-medium rounded-full ${
                  product.textColor === 'text-white' 
                    ? 'border-gray-400 text-gray-300 hover:bg-white/10 hover:text-white' 
                    : 'border-gray-400 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Learn more
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-700"></div>
              <img
                src={product.imageUrl}
                alt={product.name}
                className="relative z-10 w-full h-auto max-w-lg mx-auto transform transition-all duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="space-y-8">
          <h2 className={`text-4xl font-bold text-center ${product.textColor}`}>
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.features.map((feature, index) => (
              <Card 
                key={index} 
                className={`border-none shadow-lg ${
                  product.textColor === 'text-white' 
                    ? 'bg-white/10 backdrop-blur-sm' 
                    : 'bg-white/80 backdrop-blur-sm'
                }`}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-4xl">{feature.icon}</div>
                  <h3 className={`text-xl font-semibold ${product.textColor}`}>
                    {feature.title}
                  </h3>
                  <p className={`${
                    product.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
