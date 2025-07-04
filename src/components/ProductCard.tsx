
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ProductData } from '@/components/ProductDetailPage';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: ProductData;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <Link to={`/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </Link>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              {product.tagline}
            </p>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-gray-900">
              From {product.startingPrice}
            </span>
            <Button 
              onClick={handleAddToCart}
              size="sm" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
