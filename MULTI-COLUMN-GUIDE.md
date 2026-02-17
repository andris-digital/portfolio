# 📸 Multi-Column Image Layouts Guide

## 🎨 Available Layout Options

Your project pages now support **flexible image layouts**!

---

## 1️⃣ Single Full-Width Image (Default)

**Use for**: Main hero shots, key showcases

```html
<img src="../images/project-details/hero.jpg" class="detail-img" alt="Project">
```

- Natural aspect ratio (no forced 16:9)
- Full width of container (1400px)
- Best for: Hero images, main showcases

---

## 2️⃣ Two-Column Grid

**Use for**: Before/after, comparisons, side-by-side views

```html
<div class="image-grid-2">
    <img src="../images/project-details/before.jpg" alt="Before">
    <img src="../images/project-details/after.jpg" alt="After">
</div>
```

- Two equal columns
- 24px gap between images
- Responsive (stacks on mobile)
- Best for: Comparisons, variations, dual concepts

---

## 3️⃣ Three-Column Grid

**Use for**: Multiple features, process steps, variations

```html
<div class="image-grid-3">
    <img src="../images/project-details/feature-1.jpg" alt="Feature 1">
    <img src="../images/project-details/feature-2.jpg" alt="Feature 2">
    <img src="../images/project-details/feature-3.jpg" alt="Feature 3">
</div>
```

- Three equal columns
- 20px gap between images
- Responsive (stacks on mobile)
- Best for: Multiple features, UI states, color variations

---

## 4️⃣ Full-Width Edge-to-Edge

**Use for**: Maximum impact moments

```html
<img src="../images/project-details/final.jpg" class="detail-img full-width-img" alt="Final">
```

- Spans entire browser width
- No rounded corners
- Dramatic presentation
- Best for: Final reveals, photography, immersive shots

---

## 📐 Aspect Ratios

### Homepage (Main Grid):
- ✅ **Fixed 16:9** aspect ratio
- All thumbnails uniform
- Professional grid appearance

### Project Detail Pages:
- ✅ **Natural aspect ratio** (no forcing)
- Images display at their original proportions
- Flexibility for vertical, horizontal, or square images

---

## 🎯 Complete Example Layout

Here's how to combine all layouts in one project page:

```html
<div class="detail-container">
    
    <!-- Hero image -->
    <img src="../images/project-details/hero.jpg" class="detail-img" alt="Hero">
    
    <div class="detail-section">
        <h2>Overview</h2>
        <p>Project description...</p>
    </div>

    <!-- 2-column comparison -->
    <div class="image-grid-2">
        <img src="../images/project-details/wireframe.jpg" alt="Wireframe">
        <img src="../images/project-details/final-ui.jpg" alt="Final UI">
    </div>

    <div class="detail-section">
        <h2>Features</h2>
        <p>Feature description...</p>
    </div>

    <!-- 3-column feature showcase -->
    <div class="image-grid-3">
        <img src="../images/project-details/feature-1.jpg" alt="Feature 1">
        <img src="../images/project-details/feature-2.jpg" alt="Feature 2">
        <img src="../images/project-details/feature-3.jpg" alt="Feature 3">
    </div>

    <!-- Single detail image -->
    <img src="../images/project-details/process.jpg" class="detail-img" alt="Process">

    <div class="detail-section">
        <h2>Results</h2>
        <p>Final thoughts...</p>
    </div>

    <!-- Full-width finale -->
    <img src="../images/project-details/final.jpg" class="detail-img full-width-img" alt="Final">

</div>
```

---

## 💡 Design Tips

### 2-Column Grids:
- Works great for: Before/after, desktop/mobile, light/dark mode
- Keep images similar in aspect ratio for best results
- Perfect for comparisons and dual concepts

### 3-Column Grids:
- Works great for: UI states, color palettes, feature highlights
- Best with square or portrait images
- Shows variety and options

### Mixing Layouts:
- Alternate between single and multi-column for rhythm
- Use 2-column for comparisons, 3-column for options
- End with full-width for dramatic impact

---

## 📱 Responsive Behavior

**Desktop (850px+):**
- 2-column shows 2 images side by side
- 3-column shows 3 images side by side

**Mobile (below 850px):**
- 2-column stacks vertically (1 column)
- 3-column stacks vertically (1 column)
- All images full-width for readability

---

## 🎨 Image Recommendations

### 2-Column Grid:
- **Dimensions**: 800 x 600px (or similar)
- **Ratio**: Flexible, but keep consistent within the grid

### 3-Column Grid:
- **Dimensions**: 600 x 600px (square works well)
- **Ratio**: Flexible, square or portrait recommended

### Single Images:
- **Dimensions**: 1600px+ width
- **Ratio**: Any (natural ratio preserved)

---

## ✨ What's Different from Homepage

**Homepage thumbnails:**
- Fixed 16:9 aspect ratio for uniform grid
- All images same height
- Professional, consistent appearance

**Project detail pages:**
- Natural aspect ratios (no forcing)
- Images can be vertical, horizontal, or square
- More creative freedom
- Multi-column options available

---

## 🚀 Quick Reference

| Layout | HTML | Best For |
|--------|------|----------|
| Single | `<img class="detail-img">` | Hero, main shots |
| 2-Column | `<div class="image-grid-2">` | Comparisons |
| 3-Column | `<div class="image-grid-3">` | Features, options |
| Full-Width | `<img class="full-width-img">` | Drama, impact |

---

**Check out the Neural Studio project page for live examples!** 🎨
