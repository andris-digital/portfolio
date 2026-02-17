# 📐 Image Size Options

Your project detail pages now support **3 different image sizes**!

## Option 1: Standard Images (Default)
**Use for**: Most project images
```html
<img src="../images/project-details/my-image.jpg" class="detail-img" alt="Project">
```
- Width: 1400px container
- Aspect ratio: 16:9
- Good for: Process shots, UI mockups, general project images

---

## Option 2: Hero Images (Extra Wide)
**Use for**: Main showcase images that need extra impact
```html
<img src="../images/project-details/my-image.jpg" class="detail-img hero-img" alt="Project">
```
- Width: 1400px container
- Aspect ratio: 21:9 (wider/more cinematic)
- Good for: Hero shots, panoramic views, full website mockups

---

## Option 3: Full-Width Images (Edge-to-Edge)
**Use for**: Maximum impact showcase images
```html
<img src="../images/project-details/my-image.jpg" class="detail-img full-width-img" alt="Project">
```
- Width: Full browser width (edge-to-edge)
- Aspect ratio: 16:9
- No rounded corners
- Good for: Dramatic reveals, full bleed photography, immersive shots

---

## 🎨 Visual Comparison

```
┌──────────────────────────────────────────────────────────┐
│                    STANDARD IMAGE                        │
│                     (16:9 ratio)                         │
│                   1400px wide max                        │
│              Good for most images                        │
└──────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────┐
│                     HERO IMAGE                           │
│              (21:9 - more cinematic)                     │
│                   1400px wide max                        │
│            Extra wide for drama                          │
└──────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│                    FULL-WIDTH IMAGE                            │
│                      (16:9 ratio)                              │
│                 Spans entire browser                           │
│              Maximum visual impact                             │
└────────────────────────────────────────────────────────────────┘
```

---

## 📋 Example Usage in a Project Page

```html
<div class="detail-container">
    
    <!-- HERO: Main showcase image - extra wide -->
    <img src="../images/project-details/neural-studio-hero.jpg" 
         class="detail-img hero-img" 
         alt="Neural Studio">
    
    <div class="detail-section">
        <h2>The Challenge</h2>
        <p>Project description...</p>
    </div>

    <!-- STANDARD: Regular project image -->
    <img src="../images/project-details/neural-studio-process.jpg" 
         class="detail-img" 
         alt="Design Process">

    <div class="detail-section">
        <h2>Design Approach</h2>
        <p>More description...</p>
    </div>

    <!-- FULL-WIDTH: Dramatic full-screen showcase -->
    <img src="../images/project-details/neural-studio-final.jpg" 
         class="detail-img full-width-img" 
         alt="Final Design">

    <div class="detail-section">
        <h2>Results</h2>
        <p>Final thoughts...</p>
    </div>
</div>
```

---

## 🎯 Recommended Image Sizes for Upload

### Standard Images:
- **Dimensions**: 1600 x 900px (16:9)
- **File size**: Under 500KB

### Hero Images:
- **Dimensions**: 2100 x 900px (21:9)
- **File size**: Under 800KB

### Full-Width Images:
- **Dimensions**: 2400 x 1350px (16:9) - larger for high-res screens
- **File size**: Under 1MB

---

## ✨ What Changed?

### Increased from 1000px to 1400px:
- ✅ Images are now **40% wider**
- ✅ More visual impact
- ✅ Better for showcasing detailed work
- ✅ Still responsive on mobile

### Added hover effects:
- Images lift slightly on hover
- Enhanced shadow for depth
- Smooth transitions

### New options:
- Hero images for main showcases
- Full-width images for maximum drama
- Mix and match based on your needs

---

## 💡 Tips

1. **Use hero images sparingly** - 1-2 per project page for main showcases
2. **Full-width images work best** for photography, landscapes, or dramatic reveals
3. **Standard images are perfect** for most UI work, process shots, and mockups
4. **Alternate between sizes** to create visual rhythm in your case studies

---

## 🚀 Quick Reference

| Class | Width | Ratio | Best For |
|-------|-------|-------|----------|
| `detail-img` | 1400px | 16:9 | General use |
| `detail-img hero-img` | 1400px | 21:9 | Main showcases |
| `detail-img full-width-img` | Full screen | 16:9 | Drama & impact |

---

**All images are now bigger and have more visual impact!** 🎨
