
import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  backgroundColor: string;
  textColor: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  reverse?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  id,
  title,
  subtitle,
  description,
  imageUrl,
  backgroundColor,
  textColor,
  primaryButtonText,
  secondaryButtonText,
  reverse = false,
}) => {
  return (
    <section 
      id={id}
      className={`min-h-screen flex items-center justify-center ${backgroundColor} relative overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Text Content */}
          <div className={`space-y-8 ${reverse ? 'lg:col-start-2' : ''} text-center lg:text-left`}>
            <div className="space-y-4">
              <h1 className={`text-5xl md:text-7xl font-bold tracking-tight ${textColor}`}>
                {title}
              </h1>
              <p className={`text-2xl md:text-3xl font-medium ${textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'}`}>
                {subtitle}
              </p>
              <p className={`text-lg md:text-xl ${textColor === 'text-white' ? 'text-gray-400' : 'text-gray-500'} max-w-2xl mx-auto lg:mx-0`}>
                {description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
              >
                {primaryButtonText}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className={`px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 ${
                  textColor === 'text-white' 
                    ? 'border-gray-400 text-gray-300 hover:bg-white/10 hover:text-white' 
                    : 'border-gray-400 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {secondaryButtonText}
              </Button>
            </div>
          </div>

          {/* Product Image */}
          <div className={`relative ${reverse ? 'lg:col-start-1' : ''}`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-700"></div>
              <img
                src={imageUrl}
                alt={title}
                className="relative z-10 w-full h-auto max-w-lg mx-auto transform transition-all duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>
    </section>
  );
};

export default HeroSection;
