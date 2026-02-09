# Quick Start Guide - Apple Standard Website

## 🚀 Getting Started

### Installation
```bash
cd project
npm install
```

### Development
```bash
npm run dev
```
Visit: `http://localhost:5173`

### Production Build
```bash
npm run build
npm run preview
```

## 🎨 Apple-Standard Features

### 1. Premium Typography
- **SF Pro-inspired font stack**
- Precise letter spacing (-0.03em for headlines)
- Optimized line heights (1.1 for headlines, 1.4 for body)

### 2. Smooth Animations
- **Apple's cubic-bezier**: `(0.16, 1, 0.3, 1)`
- GPU-accelerated transforms
- Viewport-triggered animations
- Reduced motion support

### 3. Glass Morphism
- Backdrop blur with saturation
- Semi-transparent backgrounds
- Premium card effects

### 4. Interaction Patterns
- **Hover**: Lift effect (y: -8px)
- **Tap**: Scale down (0.98)
- **Focus**: Blue outline (Apple blue)

## 📱 Components Overview

### HeroSectionApple
**Location**: `src/components/ui/hero-section-apple.tsx`

**Features**:
- Parallax scrolling
- Animated gradient orbs
- Premium badge
- Scroll indicator
- Dual CTAs

**Usage**:
```tsx
import HeroSectionApple from '@/components/ui/hero-section-apple';
<HeroSectionApple />
```

### ServicesApple
**Location**: `src/components/ServicesApple.tsx`

**Features**:
- 6 service cards
- Glass morphism effects
- Hover animations
- Gradient accents

**Customization**:
```tsx
const services = [
  {
    title: "Your Service",
    description: "Description here",
    icon: YourIcon,
  },
];
```

### ProjectsApple
**Location**: `src/components/ProjectsApple.tsx`

**Features**:
- Large project cards
- Gradient overlays
- Category badges
- External link icons

**Customization**:
```tsx
const projects = [
  {
    title: "Project Name",
    description: "Project description",
    category: "Web App",
    gradient: "from-purple-600 to-pink-600",
  },
];
```

### ProcessApple
**Location**: `src/components/ProcessApple.tsx`

**Features**:
- 6-step process
- Grid layout
- Numbered badges
- Icon animations

### CTAApple
**Location**: `src/components/CTAApple.tsx`

**Features**:
- Centered design
- Animated gradients
- Trust indicators
- Dual CTAs

### FooterApple
**Location**: `src/components/FooterApple.tsx`

**Features**:
- Multi-column layout
- Social media links
- Contact information
- Legal links

## 🎯 Key Design Principles

### 1. Spacing
```
Section padding: py-24 md:py-32
Component gaps: gap-6 lg:gap-8
Max width: max-w-7xl (1280px)
```

### 2. Colors
```tsx
// Gradients
from-blue-600 via-cyan-500 to-blue-600

// Dark mode
bg-black, bg-slate-950, bg-slate-900

// Light mode
bg-white, bg-gray-50, bg-gray-100
```

### 3. Border Radius
```
Cards: rounded-3xl (24px)
Buttons: rounded-full
Icons: rounded-2xl (16px)
```

### 4. Shadows
```tsx
// Hover state
shadow-lg hover:shadow-2xl

// Glass cards
shadow-lg with backdrop-blur
```

## 🔧 Customization Guide

### Change Brand Colors
1. Update gradient classes:
```tsx
// Find and replace
from-blue-600 to-cyan-500
// With your colors
from-purple-600 to-pink-500
```

### Adjust Animation Speed
```tsx
// Faster (snappy)
transition={{ duration: 0.3 }}

// Standard (Apple)
transition={{ duration: 0.6 }}

// Slower (dramatic)
transition={{ duration: 1.0 }}
```

### Modify Typography
```tsx
// Tighter spacing
style={{ letterSpacing: '-0.04em' }}

// Looser spacing
style={{ letterSpacing: '-0.01em' }}
```

### Update Content
1. **Hero**: Edit `HeroSectionApple.tsx`
2. **Services**: Edit `ServicesApple.tsx` services array
3. **Projects**: Edit `ProjectsApple.tsx` projects array
4. **Process**: Edit `ProcessApple.tsx` steps array
5. **Footer**: Edit `FooterApple.tsx` links and contact info

## 📊 Performance Tips

### 1. Optimize Images
```tsx
// Use optimized formats
.webp, .avif

// Lazy load
loading="lazy"

// Responsive images
srcset with multiple sizes
```

### 2. Animation Performance
```tsx
// Good (GPU accelerated)
transform, opacity, scale

// Avoid (CPU intensive)
width, height, top, left
```

### 3. Bundle Size
```bash
# Analyze bundle
npm run build

# Check dist/assets/
# JS: ~388KB (118KB gzipped)
# CSS: ~78KB (13KB gzipped)
```

## 🎨 Theme Customization

### Dark/Light Mode
The website automatically supports both themes:

```tsx
import { useTheme } from 'next-themes';

const { resolvedTheme } = useTheme();
const isDark = resolvedTheme === 'dark';
```

### Custom Theme Colors
Edit `src/index.css`:
```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  /* Add your custom colors */
}
```

## 🔍 Troubleshooting

### Animations Not Smooth
1. Check GPU acceleration
2. Reduce animation complexity
3. Use `will-change` sparingly

### Blur Effects Not Working
1. Check browser support
2. Verify backdrop-filter syntax
3. Test on different devices

### Build Errors
```bash
# Clear cache
rm -rf node_modules dist
npm install
npm run build
```

## 📱 Responsive Breakpoints

```tsx
xs: 475px   // Extra small phones
sm: 640px   // Small phones
md: 768px   // Tablets
lg: 1024px  // Small laptops
xl: 1280px  // Desktops
2xl: 1536px // Large screens
```

## ✅ Quality Checklist

Before deployment:
- [ ] Test on mobile devices
- [ ] Test on tablets
- [ ] Test on desktop
- [ ] Verify dark/light themes
- [ ] Check all animations
- [ ] Test keyboard navigation
- [ ] Verify accessibility
- [ ] Optimize images
- [ ] Run production build
- [ ] Test performance

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
vercel deploy
```

### Deploy to Netlify
```bash
netlify deploy --prod
```

## 📚 Additional Resources

- **Full Documentation**: `APPLE_STANDARD_IMPLEMENTATION.md`
- **Design System**: `DESIGN_SYSTEM.md`
- **Theme Guide**: `THEME_IMPLEMENTATION.md`
- **Responsive Guide**: `RESPONSIVE_GUIDE.md`

## 🎉 You're Ready!

Your website now follows Apple's premium standards with:
✅ Smooth animations
✅ Glass morphism effects
✅ Premium typography
✅ Responsive design
✅ Dark/light themes
✅ Optimized performance

Start the dev server and see the magic! 🚀
