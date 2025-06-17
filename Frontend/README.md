# GameDev JIIT Website

Official website of Game Development Hub at JIIT.

## 🚀 Tech Stack

- **Framework**: React.js
- **Styling**: Tailwind CSS
- **Animation**: GSAP (GreenSock Animation Platform)
- **Icons**: React Icons
- **Fonts**: Custom fonts (General Sans, Circular Web, Robert, Zentry)
- **State Management**: React Hooks (useState, useEffect, useRef)
- **Scroll Management**: react-use (useWindowScroll)

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── About.jsx        # About section with parallax effects
│   ├── AnimatedTitle.jsx # Reusable animated title component
│   ├── Button.jsx       # Custom button component with hover effects
│   ├── Contact.jsx      # Contact section with clipped images
│   ├── Event.jsx        # Event section with 3D image tilt
│   ├── Features.jsx     # Features section with bento grid
│   ├── Footer.jsx       # Footer with social links
│   ├── Home.jsx         # Home/hero section with video background
│   ├── Navbar.jsx       # Navigation bar with scroll behavior
│   └── VideoPreview.jsx # Video preview with 3D hover effects
├── App.jsx              # Main application component
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Components Overview

### Core Components

#### Navbar (`Navbar.jsx`)
- **Features**:
  - Responsive navigation with mobile support
  - Smooth scroll to sections
  - Audio toggle with visual indicator
  - Dynamic background on scroll
  - GSAP animations for show/hide
- **Key Implementations**:
  - Uses `useWindowScroll` for scroll position tracking
  - Implements floating nav effect on scroll
  - Audio playback control with visual feedback

#### Home (`Home.jsx`)
- **Features**:
  - Video background with multiple clips
  - Interactive video preview
  - Dynamic text overlays
  - Loading animation
  - Join Us button with feedback
- **Key Implementations**:
  - Video switching with GSAP animations
  - Custom loading animation
  - Responsive text scaling
  - Video preloading system

#### About (`About.jsx`)
- **Features**:
  - Animated title with 3D effect
  - Parallax scrolling
  - Clipped image sections
  - Responsive layout
- **Key Implementations**:
  - GSAP ScrollTrigger for animations
  - Custom clip-path animations
  - Responsive text scaling

#### Features (`Features.jsx`)
- **Features**:
  - Interactive bento grid layout
  - Video card components
  - 3D tilt effect on hover
  - Coming soon indicators
- **Key Implementations**:
  - Custom BentoCard component
  - Mouse-follow tilt effect
  - Responsive grid system
  - Video background cards

#### Event (`Event.jsx`)
- **Features**:
  - 3D image tilt effect
  - Animated title
  - Registration button
  - Clipped image sections
- **Key Implementations**:
  - GSAP for 3D transformations
  - Mouse position tracking
  - Custom clip paths

#### Contact (`Contact.jsx`)
- **Features**:
  - Clipped image sections
  - Animated title
  - Contact button
  - Responsive layout
- **Key Implementations**:
  - Custom clip paths
  - Image positioning system
  - Responsive text scaling

### Utility Components

#### AnimatedTitle (`AnimatedTitle.jsx`)
- **Features**:
  - 3D text animation
  - Scroll-triggered animations
  - Custom font support
  - Line break support
- **Key Implementations**:
  - GSAP timeline animations
  - Word-by-word animation
  - Custom font integration

#### Button (`Button.jsx`)
- **Features**:
  - Hover animation
  - Icon support (left/right)
  - Custom styling
  - Click handler support
- **Key Implementations**:
  - CSS transitions
  - Icon positioning
  - Custom class support

#### VideoPreview (`VideoPreview.jsx`)
- **Features**:
  - 3D hover effect
  - Mouse tracking
  - Smooth transitions
  - Perspective transformations
- **Key Implementations**:
  - GSAP for 3D effects
  - Mouse position calculations
  - Transform origin management

## 🎯 Features

### Animation System
- GSAP animations for smooth transitions
- Scroll-triggered animations
- 3D transformations
- Custom clip paths
- Hover effects
- Loading animations

### Responsive Design
- Mobile-first approach
- Breakpoint-specific layouts
- Fluid typography
- Responsive images
- Adaptive spacing

### Interactive Elements
- Video background system
- Audio toggle with visual feedback
- 3D hover effects
- Smooth scrolling
- Dynamic navigation

### Performance Optimizations
- Video preloading
- Lazy loading images
- Optimized animations
- Efficient state management
- CSS optimization

## 🛠️ Setup and Installation

1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

## 📝 Development Guidelines

### Code Style
- Use functional components
- Implement React hooks for state management
- Follow component composition patterns
- Use semantic HTML elements
- Implement proper prop types

### Animation Guidelines
- Use GSAP for complex animations
- Implement scroll-triggered animations
- Optimize animation performance
- Use CSS transitions for simple effects
- Maintain consistent animation timing

### Styling Guidelines
- Use Tailwind utility classes
- Follow mobile-first approach
- Implement responsive design
- Use custom CSS for complex effects
- Maintain consistent spacing

### Performance Guidelines
- Optimize image and video assets
- Implement lazy loading
- Use proper caching strategies
- Minimize re-renders
- Optimize animation performance

## 🔧 Customization

### Fonts
Custom fonts are located in the `public/fonts` directory:
- General Sans: Main text font
- Circular Web: Secondary text font
- Robert: Special text elements
- Zentry: Decorative elements

### Images and Media
Media assets are stored in:
- `public/img/` - Images (PNG, WebP)
- `public/videos/` - Video files (MP4)
- `public/audio/` - Audio files (MP3)

### Color Scheme
- Primary: Violet (#5542ff)
- Secondary: Black (#000000)
- Accent: Yellow (#FFD700)
- Text: Blue (#1a1a2e)
- Background: Light Violet (#dfdff0)

## 📄 License

© JIIT. All rights reserved.
