
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Package, Truck } from 'lucide-react';

interface OrderData {
  orderId: string;
  items: any[];
  total: number;
  customerInfo: any;
  orderDate: string;
}

const OrderConfirmation = () => {
  const [orderData, setOrderData] = useState<OrderData | null>(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem('lastOrder');
    if (savedOrder) {
      setOrderData(JSON.parse(savedOrder));
    }
  }, []);

  if (!orderData) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">No order found</h2>
            <Link to="/store">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="text-center mb-8">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
          <p className="text-gray-600">Thank you for your purchase. Your order has been successfully placed.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Order ID</p>
                <p className="font-mono font-medium">{orderData.orderId}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Order Date</p>
                <p className="font-medium">
                  {new Date(orderData.orderDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Total Amount</p>
                <p className="text-2xl font-bold text-green-600">${orderData.total.toLocaleString()}</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Shipping Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="font-medium">
                {orderData.customerInfo.firstName} {orderData.customerInfo.lastName}
              </p>
              <p className="text-gray-600">{orderData.customerInfo.email}</p>
              <p className="text-gray-600">{orderData.customerInfo.phone}</p>
              <div className="pt-2">
                <p className="text-gray-600">{orderData.customerInfo.address}</p>
                <p className="text-gray-600">
                  {orderData.customerInfo.city}, {orderData.customerInfo.state} {orderData.customerInfo.zipCode}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Items Ordered</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {orderData.items.map((item) => (
                <div key={item.product.id} className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div>
                      <h3 className="font-medium">{item.product.name}</h3>
                      <p className="text-gray-600 text-sm">{item.product.tagline}</p>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-medium">
                    ${(parseInt(item.product.startingPrice.replace(/[^0-9]/g, '')) * item.quantity).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center space-y-4">
          <div className="flex justify-center items-center space-x-8 text-gray-600">
            <div className="flex flex-col items-center">
              <Package className="w-8 h-8 mb-2" />
              <span className="text-sm">Processing</span>
            </div>
            <div className="flex-1 h-px bg-gray-300"></div>
            <div className="flex flex-col items-center">
              <Truck className="w-8 h-8 mb-2" />
              <span className="text-sm">Shipping</span>
            </div>
          </div>
          <p className="text-gray-600">
            We'll send you shipping confirmation when your items are on the way!
          </p>
          <div className="space-x-4">
            <Link to="/store">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
                Continue Shopping
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" className="px-8 py-3 rounded-full">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
