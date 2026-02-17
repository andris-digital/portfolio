# 📸 How to Add Your Personal Images

## Step 1: Create an Images Folder

Add a new folder to your portfolio structure:

```
portfolio/
├── index.html
├── about.html
├── css/
├── js/
├── projects/
└── images/              ← CREATE THIS FOLDER
    ├── projects/        ← For project thumbnails
    │   ├── neural-studio.jpg
    │   ├── oasis-mobile.jpg
    │   └── ... (9 images total)
    └── project-details/ ← For detail page images
        ├── neural-studio-1.jpg
        ├── neural-studio-2.jpg
        └── ... (multiple per project)
```

## Step 2: Add Your Images

Put your images in the `images` folder:
- **Project thumbnails** → `images/projects/`
- **Detail page images** → `images/project-details/`

**Recommended image specs:**
- Thumbnails: 1200x675px (16:9 ratio)
- Detail images: 1600x900px (16:9 ratio)
- Format: JPG or PNG
- File size: Under 500KB for fast loading

## Step 3: Update Image Links

### In `js/main.js` (for homepage thumbnails):

**BEFORE (using web images):**
```javascript
const projects = [
    { 
        id: "neural-studio",
        title: "Neural Studio", 
        tag: "AI / UX", 
        img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=1200&q=80", 
        desc: "A next-generation creative workspace..."
    },
```

**AFTER (using your images):**
```javascript
const projects = [
    { 
        id: "neural-studio",
        title: "Neural Studio", 
        tag: "AI / UX", 
        img: "images/projects/neural-studio.jpg",    ← CHANGE THIS
        desc: "A next-generation creative workspace..."
    },
```

### In Project Pages (e.g., `projects/neural-studio.html`):

**BEFORE (using web images):**
```html
<img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=1600&q=80" 
     alt="Neural Studio" class="detail-img">
```

**AFTER (using your images):**
```html
<img src="../images/project-details/neural-studio-1.jpg" 
     alt="Neural Studio" class="detail-img">
```

**Note the `../`** - This means "go up one folder" because we're inside the `projects/` folder.

## 📍 Path Examples

### From Homepage (`index.html`):
```
index.html → images/projects/your-image.jpg
```

### From Project Pages (`projects/neural-studio.html`):
```
projects/neural-studio.html → ../images/project-details/your-image.jpg
                                ↑ Go up one level first
```

## 🎨 Example: Complete Update for One Project

### 1. Add your images:
```
portfolio/
└── images/
    ├── projects/
    │   └── my-awesome-project.jpg
    └── project-details/
        ├── my-awesome-project-hero.jpg
        ├── my-awesome-project-process.jpg
        └── my-awesome-project-final.jpg
```

### 2. Update `js/main.js`:
```javascript
{ 
    id: "my-awesome-project",
    title: "My Awesome Project", 
    tag: "Web Design", 
    img: "images/projects/my-awesome-project.jpg",  ← Local image
    desc: "This is my amazing work"
},
```

### 3. Update project page `projects/my-awesome-project.html`:
```html
<!-- Hero image -->
<img src="../images/project-details/my-awesome-project-hero.jpg" 
     alt="My Awesome Project" class="detail-img">

<!-- Process image -->
<img src="../images/project-details/my-awesome-project-process.jpg" 
     alt="Design Process" class="detail-img">

<!-- Final image -->
<img src="../images/project-details/my-awesome-project-final.jpg" 
     alt="Final Design" class="detail-img">
```

## ✅ Quick Reference

| Location | Image Path |
|----------|------------|
| `index.html` | `images/projects/image.jpg` |
| `about.html` | `images/about/image.jpg` |
| `projects/*.html` | `../images/project-details/image.jpg` |

## 🔍 Why the `../`?

```
When you're in:  projects/neural-studio.html
You need to:     Go UP one level (../)
                 Then INTO images folder
                 
Full path:       ../images/project-details/image.jpg
```

## 💡 Pro Tips

1. **Name files clearly**: `project-name-hero.jpg`, `project-name-process.jpg`
2. **Keep consistent sizes**: All thumbnails same ratio (16:9 recommended)
3. **Optimize images**: Use tools like TinyPNG to reduce file size
4. **Use lowercase names**: `my-image.jpg` not `My Image.jpg`
5. **No spaces in filenames**: Use dashes: `my-project.jpg` not `my project.jpg`

## 🚨 Common Mistakes

❌ **Wrong**: `images/my image.jpg` (space in name)
✅ **Right**: `images/my-image.jpg`

❌ **Wrong**: From project page: `images/project-details/image.jpg` (missing `../`)
✅ **Right**: From project page: `../images/project-details/image.jpg`

❌ **Wrong**: `Images/Projects/photo.jpg` (wrong case)
✅ **Right**: `images/projects/photo.jpg` (all lowercase)

---

**Remember**: Once you add the `images` folder with your photos, just update the paths in the code and everything will work perfectly!
