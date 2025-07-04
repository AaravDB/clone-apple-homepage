
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';

const Index = () => {
  const products = [
    {
      id: 'iphone',
      title: 'iPhone 15 Pro',
      subtitle: 'Titanium. So strong. So light. So Pro.',
      description: 'Experience the most advanced iPhone ever with titanium design, A17 Pro chip, and the most sophisticated camera system.',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      backgroundColor: 'bg-gradient-to-br from-gray-900 via-black to-gray-800',
      textColor: 'text-white',
      primaryButtonText: 'Buy Now',
      secondaryButtonText: 'Learn More',
      reverse: false,
    },
    {
      id: 'mac',
      title: 'MacBook Pro',
      subtitle: 'Mind-blowing. Head-turning.',
      description: 'The most powerful MacBook Pro ever is here. With the M3 chip, stunning Liquid Retina XDR display, and all-day battery life.',
      imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
      backgroundColor: 'bg-gradient-to-br from-slate-50 to-gray-100',
      textColor: 'text-gray-900',
      primaryButtonText: 'Buy Now',
      secondaryButtonText: 'Learn More',
      reverse: true,
    },
    {
      id: 'ipad',
      title: 'iPad Pro',
      subtitle: 'Supercharged by M2.',
      description: 'The ultimate iPad experience with M2 chip, breathtaking Liquid Retina XDR display, and incredible all-day battery life.',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      backgroundColor: 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50',
      textColor: 'text-gray-900',
      primaryButtonText: 'Buy Now',
      secondaryButtonText: 'Learn More',
      reverse: false,
    },
    {
      id: 'watch',
      title: 'Apple Watch',
      subtitle: 'Your essential companion.',
      description: 'Advanced health features, comprehensive fitness tracking, and seamless connectivity. The future of health is on your wrist.',
      imageUrl: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&h=600&fit=crop',
      backgroundColor: 'bg-gradient-to-br from-rose-900 via-pink-900 to-red-900',
      textColor: 'text-white',
      primaryButtonText: 'Buy Now',
      secondaryButtonText: 'Learn More',
      reverse: true,
    },
    {
      id: 'airpods',
      title: 'AirPods Pro',
      subtitle: 'Adaptive Audio. Now playing.',
      description: 'Personalized Spatial Audio with dynamic head tracking provides theater-like sound that surrounds you.',
      imageUrl: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=800&h=600&fit=crop',
      backgroundColor: 'bg-gradient-to-br from-gray-100 to-white',
      textColor: 'text-gray-900',
      primaryButtonText: 'Buy Now',
      secondaryButtonText: 'Learn More',
      reverse: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Sections */}
      <div className="pt-12">
        {products.map((product, index) => (
          <HeroSection
            key={product.id}
            {...product}
          />
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Shop and Learn</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Mac</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">iPad</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">iPhone</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Watch</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Apple Music</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Apple TV+</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Apple Fitness+</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Apple News+</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Account</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Manage Your Apple ID</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Apple Store Account</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">iCloud.com</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Apple Store</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Find a Store</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Genius Bar</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Today at Apple</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Apple Camp</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                Copyright © 2024 Apple Inc. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Use</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Sales and Refunds</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
