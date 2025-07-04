
import { ProductData } from '@/components/ProductDetailPage';

export const productsData: Record<string, ProductData> = {
  iphone: {
    id: 'iphone',
    name: 'iPhone 15 Pro',
    tagline: 'Titanium. So strong. So light. So Pro.',
    description: 'Experience the most advanced iPhone ever with titanium design, A17 Pro chip, and the most sophisticated camera system.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
    startingPrice: '$999',
    backgroundColor: 'bg-gradient-to-br from-gray-900 via-black to-gray-800',
    textColor: 'text-white',
    features: [
      {
        icon: '📱',
        title: 'Titanium Design',
        description: 'Lightweight yet incredibly strong titanium construction.'
      },
      {
        icon: '🚀',
        title: 'A17 Pro Chip',
        description: 'The most powerful chip ever in a smartphone.'
      },
      {
        icon: '📸',
        title: 'Pro Camera System',
        description: 'Capture stunning photos with advanced computational photography.'
      },
      {
        icon: '🔋',
        title: 'All-Day Battery',
        description: 'Up to 29 hours of video playback.'
      },
      {
        icon: '🌈',
        title: 'Super Retina XDR',
        description: 'Brilliant 6.7-inch display with ProMotion technology.'
      },
      {
        icon: '⚡',
        title: 'USB-C',
        description: 'Universal connectivity with USB-C.'
      }
    ]
  },
  macbook: {
    id: 'macbook',
    name: 'MacBook Pro',
    tagline: 'Mind-blowing. Head-turning.',
    description: 'The most powerful MacBook Pro ever is here. With the M3 chip, stunning Liquid Retina XDR display, and all-day battery life.',
    imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop',
    startingPrice: '$1,599',
    backgroundColor: 'bg-gradient-to-br from-slate-50 to-gray-100',
    textColor: 'text-gray-900',
    features: [
      {
        icon: '💻',
        title: 'M3 Chip',
        description: 'Next-generation Apple silicon for incredible performance.'
      },
      {
        icon: '🖥️',
        title: 'Liquid Retina XDR',
        description: '14-inch or 16-inch stunning display with extreme dynamic range.'
      },
      {
        icon: '🔋',
        title: '22-Hour Battery',
        description: 'All-day battery life for maximum productivity.'
      },
      {
        icon: '🎵',
        title: 'Six-Speaker System',
        description: 'Studio-quality sound with spatial audio support.'
      },
      {
        icon: '📹',
        title: '1080p FaceTime HD',
        description: 'Advanced camera for crystal-clear video calls.'
      },
      {
        icon: '⚡',
        title: 'Thunderbolt 4',
        description: 'Connect to multiple displays and accessories.'
      }
    ]
  },
  ipad: {
    id: 'ipad',
    name: 'iPad Pro',
    tagline: 'Supercharged by M2.',
    description: 'The ultimate iPad experience with M2 chip, breathtaking Liquid Retina XDR display, and incredible all-day battery life.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    startingPrice: '$799',
    backgroundColor: 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50',
    textColor: 'text-gray-900',
    features: [
      {
        icon: '🚀',
        title: 'M2 Chip',
        description: 'Desktop-class performance in an ultra-portable design.'
      },
      {
        icon: '🖊️',
        title: 'Apple Pencil',
        description: 'Precision drawing and writing with Apple Pencil support.'
      },
      {
        icon: '📱',
        title: 'Liquid Retina XDR',
        description: '12.9-inch stunning display with ProMotion technology.'
      },
      {
        icon: '📸',
        title: 'Pro Cameras',
        description: 'Advanced camera system with LiDAR scanner.'
      },
      {
        icon: '⚡',
        title: 'Thunderbolt',
        description: 'Connect to external displays and accessories.'
      },
      {
        icon: '🎵',
        title: 'Four-Speaker Audio',
        description: 'Immersive sound experience with spatial audio.'
      }
    ]
  },
  watch: {
    id: 'watch',
    name: 'Apple Watch Series 9',
    tagline: 'Your essential companion.',
    description: 'Advanced health features, comprehensive fitness tracking, and seamless connectivity. The future of health is on your wrist.',
    imageUrl: 'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&h=600&fit=crop',
    startingPrice: '$399',
    backgroundColor: 'bg-gradient-to-br from-rose-900 via-pink-900 to-red-900',
    textColor: 'text-white',
    features: [
      {
        icon: '❤️',
        title: 'Health Monitoring',
        description: 'Track heart rate, ECG, and blood oxygen levels.'
      },
      {
        icon: '🏃',
        title: 'Fitness Tracking',
        description: 'Comprehensive workout tracking for all activities.'
      },
      {
        icon: '🔋',
        title: '18-Hour Battery',
        description: 'All-day battery life with fast charging.'
      },
      {
        icon: '📱',
        title: 'Always-On Display',
        description: 'Bright, always-on Retina display.'
      },
      {
        icon: '🌊',
        title: 'Water Resistant',
        description: 'Swim-proof design for water activities.'
      },
      {
        icon: '📞',
        title: 'Cellular Available',
        description: 'Stay connected even without your iPhone.'
      }
    ]
  },
  airpods: {
    id: 'airpods',
    name: 'AirPods Pro (2nd gen)',
    tagline: 'Adaptive Audio. Now playing.',
    description: 'Personalized Spatial Audio with dynamic head tracking provides theater-like sound that surrounds you.',
    imageUrl: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=800&h=600&fit=crop',
    startingPrice: '$249',
    backgroundColor: 'bg-gradient-to-br from-gray-100 to-white',
    textColor: 'text-gray-900',
    features: [
      {
        icon: '🎵',
        title: 'Adaptive Audio',
        description: 'Automatically adjusts to your environment.'
      },
      {
        icon: '🔇',
        title: 'Active Noise Cancellation',
        description: 'Block out unwanted noise completely.'
      },
      {
        icon: '🔋',
        title: '30-Hour Battery',
        description: 'Extended listening time with the charging case.'
      },
      {
        icon: '🎯',
        title: 'Spatial Audio',
        description: 'Immersive 3D audio experience.'
      },
      {
        icon: '💧',
        title: 'Sweat Resistant',
        description: 'IPX4 rating for workouts and weather.'
      },
      {
        icon: '⚡',
        title: 'Quick Charge',
        description: '5 minutes of charging gives 1 hour of listening.'
      }
    ]
  }
};
