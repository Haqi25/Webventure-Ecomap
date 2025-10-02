// Mock data for Media UMKM platform

export const mockUMKMs = [
  {
    id: 1,
    name: "Warung Kopi Selatan",
    category: "Food & Beverage",
    location: "South Jakarta",
    coordinates: { lat: -6.2615, lng: 106.8106 },
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop",
    sustainabilityScore: 92,
    sustainabilityBadges: ["eco-friendly", "local-workers", "green-practices"],
    description: "Traditional Indonesian coffee with organic beans from local farmers",
    priceRange: "$$"
  },
  {
    id: 2,
    name: "Batik Nusantara",
    category: "Fashion & Clothing",
    location: "Yogyakarta",
    coordinates: { lat: -7.7956, lng: 110.3695 },
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    sustainabilityScore: 88,
    sustainabilityBadges: ["eco-friendly", "local-workers"],
    description: "Handcrafted traditional batik clothing using natural dyes",
    priceRange: "$$$"
  },
  {
    id: 3,
    name: "Toko Buah Segar",
    category: "Grocery & Fresh Produce",
    location: "Bandung",
    coordinates: { lat: -6.9175, lng: 107.6191 },
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop",
    sustainabilityScore: 95,
    sustainabilityBadges: ["eco-friendly", "local-workers", "green-practices"],
    description: "Fresh organic fruits directly from local farmers",
    priceRange: "$"
  },
  {
    id: 4,
    name: "Kerajinan Bambu Kreatif",
    category: "Handicrafts",
    location: "Bali",
    coordinates: { lat: -8.3405, lng: 115.0920 },
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
    sustainabilityScore: 90,
    sustainabilityBadges: ["eco-friendly", "green-practices"],
    description: "Eco-friendly bamboo crafts and home decorations",
    priceRange: "$$"
  },
  {
    id: 5,
    name: "Salon Kecantikan Alami",
    category: "Beauty & Wellness",
    location: "Surabaya",
    coordinates: { lat: -7.2575, lng: 112.7521 },
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop",
    sustainabilityScore: 85,
    sustainabilityBadges: ["eco-friendly", "local-workers"],
    description: "Natural beauty treatments using organic local ingredients",
    priceRange: "$$"
  },
  {
    id: 6,
    name: "Bengkel Motor Ramah Lingkungan",
    category: "Automotive Services",
    location: "Medan",
    coordinates: { lat: 3.5952, lng: 98.6722 },
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=400&h=300&fit=crop",
    sustainabilityScore: 78,
    sustainabilityBadges: ["local-workers", "green-practices"],
    description: "Eco-conscious motorcycle repair with recycled parts",
    priceRange: "$"
  },
  {
    id: 7,
    name: "Warung Makan Organik",
    category: "Food & Beverage", 
    location: "Central Jakarta",
    coordinates: { lat: -6.1751, lng: 106.8650 },
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop",
    sustainabilityScore: 89,
    sustainabilityBadges: ["eco-friendly", "local-workers"],
    description: "Organic Indonesian cuisine with locally sourced ingredients",
    priceRange: "$$"
  },
  {
    id: 8,
    name: "Toko Kerajinan Daur Ulang",
    category: "Handicrafts",
    location: "West Jakarta",
    coordinates: { lat: -6.1668, lng: 106.7651 },
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?w=400&h=300&fit=crop",
    sustainabilityScore: 93,
    sustainabilityBadges: ["eco-friendly", "green-practices"],
    description: "Creative handicrafts made from recycled materials",
    priceRange: "$"
  }
];

export const mockCategories = [
  "All Categories",
  "Food & Beverage", 
  "Fashion & Clothing",
  "Grocery & Fresh Produce",
  "Handicrafts",
  "Beauty & Wellness",
  "Automotive Services",
  "Technology Services",
  "Home Services"
];

export const mockLocations = [
  "All Locations",
  "Jakarta",
  "Surabaya", 
  "Bandung",
  "Medan",
  "Semarang",
  "Makassar",
  "Palembang",
  "Yogyakarta",
  "Bali"
];

export const mockTestimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    location: "Jakarta",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "Media UMKM helped me discover amazing local businesses I never knew existed. The sustainability scores are so helpful!"
  },
  {
    id: 2,
    name: "Ahmad Rizki",
    location: "Bandung", 
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "As a small business owner, this platform has connected me with customers who truly value local and sustainable products."
  },
  {
    id: 3,
    name: "Maya Sari",
    location: "Yogyakarta",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    comment: "The search filters make it so easy to find exactly what I need while supporting my community. Love the eco-friendly focus!"
  }
];

export const mockHowItWorksSteps = [
  {
    id: 1,
    title: "Discover",
    description: "Use our interactive map and search filters to find local businesses by category, location, and sustainability score",
    icon: "Search"
  },
  {
    id: 2,
    title: "Explore", 
    description: "Browse detailed business profiles, ratings, and sustainability practices on our WebGIS platform",
    icon: "Users"
  },
  {
    id: 3,
    title: "Connect",
    description: "Visit businesses directly through the map or get directions to support your local community",
    icon: "MapPin"
  },
  {
    id: 4,
    title: "Support",
    description: "Leave reviews and help other conscious consumers discover sustainable local businesses",
    icon: "Heart"
  }
];

export const mockSustainabilityFeatures = [
  {
    id: 1,
    title: "Eco-Friendly Practices",
    description: "Businesses that use sustainable materials and processes",
    icon: "Leaf",
    count: "150+ businesses"
  },
  {
    id: 2,
    title: "Local Workers",
    description: "Supporting businesses that employ community members",
    icon: "Users",
    count: "200+ businesses"  
  },
  {
    id: 3,
    title: "Green Operations",
    description: "Waste reduction, energy efficiency, and environmental care",
    icon: "Recycle",
    count: "120+ businesses"
  }
];