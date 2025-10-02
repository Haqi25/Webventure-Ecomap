# Media UMKM - API Contracts & Integration Plan

## Overview
This document outlines the API contracts needed to integrate the Media UMKM frontend with the backend, replacing mock data with real functionality.

## Current Mock Data Structure

### UMKM Business Model
```javascript
{
  id: number,
  name: string,
  category: string,
  location: string,
  rating: number (1-5),
  image: string (URL),
  sustainabilityScore: number (0-100),
  sustainabilityBadges: Array<"eco-friendly" | "local-workers" | "green-practices">,
  description: string,
  priceRange: string ("$" | "$$" | "$$$")
}
```

### User Testimonial Model
```javascript
{
  id: number,
  name: string,
  location: string,
  avatar: string (URL),
  rating: number (1-5),
  comment: string
}
```

## Required API Endpoints

### 1. Business Discovery & Search
```
GET /api/businesses
Query Parameters:
- category?: string
- location?: string  
- minSustainabilityScore?: number (0-100)
- search?: string
- page?: number
- limit?: number

Response: {
  businesses: Array<Business>,
  total: number,
  page: number,
  totalPages: number
}
```

### 2. Featured Businesses
```
GET /api/businesses/featured
Response: Array<Business>
```

### 3. Business Categories
```
GET /api/categories
Response: Array<{
  id: string,
  name: string,
  businessCount: number
}>
```

### 4. Available Locations
```
GET /api/locations
Response: Array<{
  id: string,
  name: string,
  businessCount: number
}>
```

### 5. Testimonials
```
GET /api/testimonials
Response: Array<Testimonial>
```

### 6. Business Details
```
GET /api/businesses/:id
Response: Business & {
  contactInfo: {
    phone?: string,
    email?: string,
    website?: string,
    address?: string
  },
  operatingHours?: Array<{
    day: string,
    open: string,
    close: string
  }>,
  images?: Array<string>,
  reviews?: Array<{
    id: string,
    userName: string,
    rating: number,
    comment: string,
    date: string
  }>
}
```

## Database Models

### Business Collection
```javascript
{
  _id: ObjectId,
  name: String (required),
  category: String (required),
  location: String (required),
  description: String,
  sustainabilityScore: Number (0-100),
  sustainabilityBadges: [String],
  rating: Number (1-5),
  priceRange: String,
  images: [String],
  contactInfo: {
    phone: String,
    email: String,
    website: String,
    address: String
  },
  operatingHours: [{
    day: String,
    open: String,
    close: String
  }],
  featured: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Testimonial Collection
```javascript
{
  _id: ObjectId,
  name: String (required),
  location: String,
  avatar: String,
  rating: Number (1-5),
  comment: String (required),
  businessId: ObjectId (optional),
  featured: Boolean,
  createdAt: Date
}
```

### Category Collection
```javascript
{
  _id: ObjectId,
  name: String (required),
  description: String,
  businessCount: Number (default: 0),
  createdAt: Date
}
```

## Frontend Integration Points

### Current Mock Files to Replace:
- `/src/data/mock.js` - Remove all mock data
- Components using mock data:
  - `HeroSection.jsx` - Search functionality
  - `FeaturedUMKM.jsx` - Featured businesses display
  - `TestimonialsSection.jsx` - User testimonials
  - `SustainabilitySection.jsx` - Statistics updates

### Required Frontend Changes:
1. Create API service functions in `/src/services/api.js`
2. Add React Query or similar for state management
3. Replace mock data imports with API calls
4. Add loading states and error handling
5. Implement proper search functionality
6. Add pagination for business listings

### Search Integration:
- Hero search form will call `GET /api/businesses` with query parameters
- Results will be displayed in a new search results page/component
- Filters (category, location, sustainability score) will be applied as query params

## Error Handling Strategy
- Network errors: Show retry option with fallback UI
- Empty results: Display "No businesses found" with suggestion to adjust filters
- Server errors: Show generic error message with support contact

## Performance Considerations
- Implement pagination for large business lists
- Add image lazy loading for business cards
- Cache frequently accessed data (categories, locations)
- Debounce search input to reduce API calls

## Next Steps for Backend Implementation:
1. Create MongoDB collections and models
2. Implement CRUD operations for businesses and testimonials
3. Add search functionality with filtering
4. Seed database with sample data
5. Test all endpoints
6. Update frontend to use real APIs