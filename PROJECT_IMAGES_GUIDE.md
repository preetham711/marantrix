# Project Images Guide

## Overview
This guide explains how to add relevant images for each project in the Featured Projects section.

## Image Location
All project images should be placed in:
```
project/public/images/projects/
```

## Required Images

### 1. Eccentro (Our Product)
**Filename**: `eccentro.jpg`
**Recommended Image**: 
- Screenshot of Eccentro website homepage
- Business discovery interface
- Map view with business listings
- Clean, modern UI showing the platform

**Dimensions**: 1200x800px (3:2 ratio)
**Style**: Clean, professional, showing the actual product

### 2. E-Commerce Platform
**Filename**: `ecommerce.jpg`
**Recommended Image**:
- Modern e-commerce website interface
- Product grid or shopping cart
- Clean product pages
- Payment/checkout interface

**Dimensions**: 800x600px (4:3 ratio)
**Style**: Professional online store aesthetic

### 3. Healthcare App
**Filename**: `healthcare.jpg`
**Recommended Image**:
- Telemedicine app interface
- Doctor-patient video call screen
- Medical dashboard
- Health records interface

**Dimensions**: 800x600px (4:3 ratio)
**Style**: Clean, trustworthy, medical-themed

### 4. Financial Dashboard
**Filename**: `financial.jpg`
**Recommended Image**:
- Analytics dashboard with charts
- Financial graphs and data visualization
- Stock market interface
- Banking dashboard

**Dimensions**: 800x600px (4:3 ratio)
**Style**: Professional, data-rich, modern

### 5. Social Media Platform
**Filename**: `social.jpg`
**Recommended Image**:
- Social media feed interface
- User profiles and posts
- Modern social networking UI
- Content sharing interface

**Dimensions**: 800x600px (4:3 ratio)
**Style**: Vibrant, engaging, modern

## Image Specifications

### Technical Requirements
- **Format**: JPG or PNG (JPG preferred for smaller file size)
- **Quality**: High quality, but optimized for web
- **File Size**: Under 500KB per image
- **Resolution**: 72-96 DPI (web standard)

### Dimensions by Project Type
- **Eccentro (Full-width)**: 1200x800px or 1600x900px
- **Other Projects**: 800x600px or 1000x750px

### Image Style Guidelines
1. **Clean and Professional**
   - No cluttered interfaces
   - Clear, readable text
   - Good contrast

2. **Apple-Style Aesthetic**
   - Minimal and clean
   - Plenty of white space
   - Modern UI elements
   - Soft shadows

3. **Consistent Look**
   - Similar lighting
   - Consistent color temperature
   - Professional photography/screenshots

## How Images Are Displayed

### With Image
```
┌─────────────────────┐
│  Actual Screenshot  │
│  + Gradient Overlay │
│  (80% opacity)      │
└─────────────────────┘
```

### Fallback (No Image)
```
┌─────────────────────┐
│  Gradient Only      │
│  (Current display)  │
└─────────────────────┘
```

## Image Sources

### Option 1: Use Actual Screenshots
- Take screenshots of real projects
- Crop and resize appropriately
- Optimize for web

### Option 2: Use Stock Images
**Recommended Sites**:
- Unsplash (https://unsplash.com/)
- Pexels (https://www.pexels.com/)
- Pixabay (https://pixabay.com/)

**Search Terms**:
- Eccentro: "business directory app", "local business platform", "map interface"
- E-Commerce: "online shopping", "ecommerce website", "product grid"
- Healthcare: "telemedicine", "medical app", "healthcare dashboard"
- Financial: "financial dashboard", "analytics charts", "stock market"
- Social Media: "social network", "social media app", "user feed"

### Option 3: Use Design Mockups
- Create mockups in Figma/Sketch
- Export as high-quality images
- Ensure they look professional

## Adding Images

### Step 1: Prepare Images
1. Download or create images
2. Rename according to the guide:
   - `eccentro.jpg`
   - `ecommerce.jpg`
   - `healthcare.jpg`
   - `financial.jpg`
   - `social.jpg`

### Step 2: Optimize Images
Use tools like:
- TinyPNG (https://tinypng.com/)
- Squoosh (https://squoosh.app/)
- ImageOptim (Mac)

Target: Under 500KB per image

### Step 3: Add to Project
Copy images to:
```
project/public/images/projects/
```

### Step 4: Verify
1. Run `npm run dev`
2. Navigate to Featured Projects section
3. Check that images load correctly
4. Verify gradient overlay looks good

## Current Implementation

### Code Structure
```typescript
{
  title: "Eccentro",
  image: "/images/projects/eccentro.jpg",
  gradient: "from-blue-600 to-indigo-600",
  // ... other properties
}
```

### Image Rendering
- Image loads as background
- Gradient overlay (80% opacity) on top
- Fallback to gradient if image fails
- Maintains aspect ratio with object-cover

### Gradient Colors (Fallback)
- Eccentro: Blue to Indigo
- E-Commerce: Purple to Pink
- Healthcare: Blue to Cyan
- Financial: Emerald to Teal
- Social Media: Orange to Red

## Testing Checklist

After adding images:
- [ ] All images load correctly
- [ ] Images are properly sized
- [ ] Gradient overlays look good
- [ ] Text is readable over images
- [ ] Images work on mobile
- [ ] File sizes are optimized
- [ ] No broken image icons
- [ ] Hover effects work properly

## Troubleshooting

### Image Not Loading
1. Check file path is correct
2. Verify file exists in `/public/images/projects/`
3. Check file extension matches (jpg vs jpeg)
4. Clear browser cache

### Image Too Large
1. Resize to recommended dimensions
2. Compress using optimization tools
3. Convert PNG to JPG if possible

### Image Looks Bad
1. Adjust gradient opacity in code
2. Try different image
3. Ensure image quality is high enough

## Example Images to Use (Temporary)

Until you have actual project images, you can use:

1. **Eccentro**: Screenshot from https://eccentroweb.com/
2. **E-Commerce**: Shopify/WooCommerce demo screenshots
3. **Healthcare**: Telemedicine app screenshots
4. **Financial**: Trading platform screenshots
5. **Social Media**: Social network UI screenshots

## Next Steps

1. Gather or create images for each project
2. Optimize images for web
3. Add images to `/public/images/projects/`
4. Test on local development server
5. Commit and push to GitHub

---

**Note**: The code is already updated to support images. Simply add the image files to the correct directory and they will automatically display!
