import { Product } from '../types';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max',
    description: 'The most advanced iPhone ever with titanium design, A17 Pro chip, and revolutionary camera system. Features ProRAW photography, 4K video recording, and all-day battery life.',
    price: 1199.99,
    originalPrice: 1299.99,
    images: [
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'electronics',
    rating: 4.9,
    reviewCount: 2847,
    inStock: true,
    tags: ['smartphone', 'apple', 'premium', 'camera'],
    brand: 'Apple',
    specifications: {
      'Display': '6.7" Super Retina XDR',
      'Chip': 'A17 Pro',
      'Storage': '256GB',
      'Camera': '48MP Main + 12MP Ultra Wide',
      'Battery': 'Up to 29 hours video',
      'Material': 'Titanium'
    }
  },
  {
    id: '2',
    name: 'MacBook Pro 16" M3 Max',
    description: 'Supercharged for pros with M3 Max chip. Features stunning Liquid Retina XDR display, advanced camera and audio, and all the ports you need.',
    price: 3999.99,
    originalPrice: 4299.99,
    images: [
      'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'electronics',
    rating: 4.8,
    reviewCount: 1234,
    inStock: true,
    tags: ['laptop', 'apple', 'professional', 'M3'],
    brand: 'Apple',
    specifications: {
      'Chip': 'Apple M3 Max',
      'Memory': '36GB Unified Memory',
      'Storage': '1TB SSD',
      'Display': '16.2" Liquid Retina XDR',
      'Battery': 'Up to 22 hours',
      'Ports': 'Thunderbolt 4, HDMI, SDXC'
    }
  },
  {
    id: '3',
    name: 'Sony WH-1000XM5 Headphones',
    description: 'Industry-leading noise canceling with new Auto NC Optimizer, exceptional call quality, crystal clear hands-free calling, and Alexa voice control.',
    price: 399.99,
    originalPrice: 449.99,
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'electronics',
    rating: 4.7,
    reviewCount: 5678,
    inStock: true,
    tags: ['headphones', 'noise-canceling', 'wireless', 'premium'],
    brand: 'Sony',
    specifications: {
      'Driver': '30mm',
      'Battery Life': '30 hours',
      'Charging': 'USB-C Quick Charge',
      'Weight': '250g',
      'Connectivity': 'Bluetooth 5.2',
      'Features': 'Active Noise Canceling'
    }
  },
  {
    id: '4',
    name: 'Nike Air Jordan 1 Retro High',
    description: 'The Air Jordan 1 Retro High remakes the classic sneaker, giving you a fresh take on what you know: premium materials, comfortable cushioning, and the iconic design.',
    price: 170.00,
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1456706/pexels-photo-1456706.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'clothing',
    rating: 4.6,
    reviewCount: 3421,
    inStock: true,
    tags: ['sneakers', 'basketball', 'retro', 'iconic'],
    brand: 'Nike',
    specifications: {
      'Upper': 'Leather and synthetic',
      'Sole': 'Rubber outsole',
      'Cushioning': 'Air-Sole unit',
      'Closure': 'Lace-up',
      'Style': 'High-top',
      'Colorway': 'Bred/Chicago/Royal'
    }
  },
  {
    id: '5',
    name: 'Dyson V15 Detect Absolute',
    description: 'The most powerful, intelligent cordless vacuum. Laser reveals microscopic dust. Precisely counts and measures the size of particles.',
    price: 749.99,
    originalPrice: 849.99,
    images: [
      'https://images.pexels.com/photos/4107120/pexels-photo-4107120.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4107123/pexels-photo-4107123.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'home',
    rating: 4.8,
    reviewCount: 2156,
    inStock: true,
    tags: ['vacuum', 'cordless', 'smart', 'powerful'],
    brand: 'Dyson',
    specifications: {
      'Suction Power': '230 AW',
      'Battery': 'Up to 60 minutes',
      'Bin Capacity': '0.77L',
      'Weight': '3.1kg',
      'Filtration': 'Advanced whole-machine',
      'Technology': 'Laser dust detection'
    }
  },
  {
    id: '6',
    name: 'Levi\'s 501 Original Jeans',
    description: 'The original blue jean since 1873. A blank canvas for self-expression, the 501 Original sits at the waist with a straight leg and regular fit.',
    price: 89.99,
    originalPrice: 109.99,
    images: [
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'clothing',
    rating: 4.5,
    reviewCount: 8934,
    inStock: true,
    tags: ['jeans', 'classic', 'denim', 'original'],
    brand: 'Levi\'s',
    specifications: {
      'Fit': 'Regular',
      'Rise': 'Mid-rise',
      'Leg': 'Straight',
      'Material': '100% Cotton',
      'Closure': 'Button fly',
      'Care': 'Machine wash cold'
    }
  },
  {
    id: '7',
    name: 'KitchenAid Stand Mixer',
    description: 'Tilt-head design allows clear access to bowl and beaters. 10-speed slide control ranges from a very fast whip to a very slow stir.',
    price: 449.99,
    images: [
      'https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4226801/pexels-photo-4226801.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'home',
    rating: 4.9,
    reviewCount: 4567,
    inStock: true,
    tags: ['kitchen', 'mixer', 'baking', 'professional'],
    brand: 'KitchenAid',
    specifications: {
      'Capacity': '5-Quart',
      'Speeds': '10-Speed',
      'Power': '325 Watts',
      'Attachments': 'Dough Hook, Wire Whip, Flat Beater',
      'Material': 'Die-cast metal',
      'Warranty': '1 Year'
    }
  },
  {
    id: '8',
    name: 'The Ordinary Skincare Set',
    description: 'Complete skincare routine featuring Hyaluronic Acid, Niacinamide, and Retinol. Clinically proven ingredients for healthy, glowing skin.',
    price: 89.99,
    originalPrice: 119.99,
    images: [
      'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'beauty',
    rating: 4.6,
    reviewCount: 6789,
    inStock: true,
    tags: ['skincare', 'serum', 'anti-aging', 'routine'],
    brand: 'The Ordinary',
    specifications: {
      'Set Includes': '6 Products',
      'Key Ingredients': 'Hyaluronic Acid, Niacinamide, Retinol',
      'Skin Type': 'All skin types',
      'Cruelty Free': 'Yes',
      'Vegan': 'Yes',
      'Size': 'Full size products'
    }
  },
  {
    id: '9',
    name: 'Tesla Model S Plaid Wheel',
    description: 'Genuine Tesla 21" Arachnid Wheel for Model S Plaid. Forged aluminum construction with aerodynamic design for maximum performance.',
    price: 4500.00,
    images: [
      'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'electronics',
    rating: 4.8,
    reviewCount: 234,
    inStock: false,
    tags: ['tesla', 'wheel', 'automotive', 'premium'],
    brand: 'Tesla',
    specifications: {
      'Size': '21 inches',
      'Material': 'Forged Aluminum',
      'Finish': 'Gloss Black',
      'Weight': '32 lbs',
      'Compatibility': 'Model S Plaid',
      'Design': 'Arachnid'
    }
  },
  {
    id: '10',
    name: 'Blue Bottle Coffee Subscription',
    description: 'Freshly roasted, single-origin coffee delivered to your door. Sourced directly from farmers and roasted to order for peak freshness.',
    price: 24.99,
    images: [
      'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2061611/pexels-photo-2061611.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'food',
    rating: 4.7,
    reviewCount: 3456,
    inStock: true,
    tags: ['coffee', 'subscription', 'organic', 'single-origin'],
    brand: 'Blue Bottle',
    specifications: {
      'Origin': 'Single-Origin',
      'Roast': 'Light to Medium',
      'Weight': '340g',
      'Grind': 'Whole Bean or Ground',
      'Frequency': 'Weekly/Bi-weekly/Monthly',
      'Shipping': 'Free'
    }
  },
  {
    id: '11',
    name: 'Herman Miller Aeron Chair',
    description: 'Remastered with new materials and enhanced performance. Features PostureFit SL support and advanced tilt mechanics.',
    price: 1395.00,
    originalPrice: 1595.00,
    images: [
      'https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6195127/pexels-photo-6195127.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'home',
    rating: 4.9,
    reviewCount: 1876,
    inStock: true,
    tags: ['chair', 'ergonomic', 'office', 'premium'],
    brand: 'Herman Miller',
    specifications: {
      'Size': 'Size B (Medium)',
      'Material': '8Z Pellicle',
      'Frame': 'Graphite',
      'Arms': 'Adjustable PostureFit SL',
      'Warranty': '12 Years',
      'Weight Capacity': '350 lbs'
    }
  },
  {
    id: '12',
    name: 'Patagonia Better Sweater Jacket',
    description: 'Made from recycled polyester fleece with a sweater-knit aesthetic. Fair Trade Certified sewn with a classic full-zip design.',
    price: 139.00,
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'clothing',
    rating: 4.8,
    reviewCount: 2341,
    inStock: true,
    tags: ['jacket', 'fleece', 'sustainable', 'outdoor'],
    brand: 'Patagonia',
    specifications: {
      'Material': '100% Recycled Polyester',
      'Weight': '13.4 oz',
      'Fit': 'Regular',
      'Features': 'Full-zip, Stand-up collar',
      'Care': 'Machine wash cold',
      'Certification': 'Fair Trade Certified'
    }
  }
];

export const categories = [
  { id: 'all', name: 'All Products', count: mockProducts.length },
  { id: 'electronics', name: 'Electronics', count: mockProducts.filter(p => p.category === 'electronics').length },
  { id: 'clothing', name: 'Fashion', count: mockProducts.filter(p => p.category === 'clothing').length },
  { id: 'home', name: 'Home & Living', count: mockProducts.filter(p => p.category === 'home').length },
  { id: 'beauty', name: 'Beauty & Care', count: mockProducts.filter(p => p.category === 'beauty').length },
  { id: 'food', name: 'Food & Beverage', count: mockProducts.filter(p => p.category === 'food').length },
];