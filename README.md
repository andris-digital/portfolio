# Andris Gusts Portfolio

A modern, clean portfolio website with enhanced visual effects and professional presentation.

## 📁 File Structure

```
portfolio/
├── index.html              # Homepage with project grid
├── about.html              # About page
├── css/
│   └── style.css          # All styling with enhanced visual effects
├── js/
│   └── main.js            # JavaScript for project loading
└── projects/              # Individual project pages (9 files)
    ├── neural-studio.html
    ├── oasis-mobile.html
    ├── flux-identity.html
    ├── hyper-glass.html
    ├── core-type.html
    ├── vertex-web.html
    ├── eco-system.html
    ├── sonic-brand.html
    └── lumina-ux.html
```

## 🎨 Features

### Enhanced Visual "Pop"
- Gradient accents on badges and hover states
- Smooth animations with custom easing curves
- Dynamic shadows that respond to interactions
- Hover effects with scale transforms and color shifts
- Pulse animations on hero badge
- Underline animations on navigation links
- Image zoom on project card hover
- Tag transformations with color and position changes

### Design Elements
- Clean sans-serif typography (Inter font)
- Google-inspired floating nav bar with blur effect
- 2-column responsive grid layout
- Consistent 16:9 aspect ratio for all images
- Mobile-responsive design

## 🚀 Getting Started

1. Open `index.html` in any modern web browser
2. No build process needed - everything works with vanilla HTML/CSS/JS
3. Customize content in `js/main.js` and individual HTML files

## ✏️ Customization

**Update Projects** (`js/main.js`):
```javascript
const projects = [
    { 
        id: "your-project-slug",
        title: "Your Project", 
        tag: "Category", 
        img: "your-image-url.jpg", 
        desc: "Description"
    }
];
```

**Change Colors** (`css/style.css`):
```css
:root {
    --google-blue: #4285F4;
    --accent-purple: #9334E9;
    --accent-orange: #FF6B35;
}
```

## 📱 Responsive
- Desktop: 2-column grid
- Mobile: 1-column grid (below 850px)

---

Replace Unsplash placeholder images with your own work!
