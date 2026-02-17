# 🖼️ How to Replace Images on the Main Homepage

## Quick Answer:

Edit the file: **`js/main.js`**

---

## Step-by-Step Instructions:

### 1. Add Your Images

Put your project thumbnail images here:
```
portfolio/
└── images/
    └── projects/
        ├── neural-studio.jpg      ← Your image
        ├── oasis-mobile.jpg       ← Your image
        ├── flux-identity.jpg      ← Your image
        └── ... (etc.)
```

**Recommended specs:**
- Size: 1200 x 675px (16:9 ratio)
- Format: JPG or PNG
- File size: Under 500KB

---

### 2. Open `js/main.js`

You'll see this code:

```javascript
const projects = [
    { 
        id: "neural-studio",
        title: "Neural Studio", 
        tag: "AI / UX", 
        img: "https://images.unsplash.com/photo-1620641788421....",  ← CHANGE THIS LINE
        desc: "A next-generation creative workspace..."
    },
    { 
        id: "oasis-mobile",
        title: "Oasis Mobile", 
        tag: "App Design", 
        img: "https://images.unsplash.com/photo-1551650975...",  ← CHANGE THIS LINE
        desc: "Minimalist banking for a sustainable future..."
    },
    // ... more projects
];
```

---

### 3. Replace the Image URLs

**BEFORE (using web images):**
```javascript
img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&w=1200&q=80",
```

**AFTER (using your local images):**
```javascript
img: "images/projects/neural-studio.jpg",
```

---

## 📋 Complete Example

Here's the full `js/main.js` file with local images:

```javascript
// Project data
const projects = [
    { 
        id: "neural-studio",
        title: "Neural Studio", 
        tag: "AI / UX", 
        img: "images/projects/neural-studio.jpg",  // ← Your image
        desc: "A next-generation creative workspace built for generative design workflows."
    },
    { 
        id: "oasis-mobile",
        title: "Oasis Mobile", 
        tag: "App Design", 
        img: "images/projects/oasis-mobile.jpg",  // ← Your image
        desc: "Minimalist banking for a sustainable future, focusing on transparency."
    },
    { 
        id: "flux-identity",
        title: "Flux Identity", 
        tag: "Branding", 
        img: "images/projects/flux-identity.jpg",  // ← Your image
        desc: "Dynamic visual identity for a fluid tech startup in the motion space."
    },
    { 
        id: "hyper-glass",
        title: "Hyper Glass", 
        tag: "Interface", 
        img: "images/projects/hyper-glass.jpg",  // ← Your image
        desc: "Exploration into frosted glass materials and spatial UI layouts."
    },
    { 
        id: "core-type",
        title: "Core Type", 
        tag: "Typography", 
        img: "images/projects/core-type.jpg",  // ← Your image
        desc: "A custom variable typeface designed for maximum legibility in VR."
    },
    { 
        id: "vertex-web",
        title: "Vertex Web", 
        tag: "Development", 
        img: "images/projects/vertex-web.jpg",  // ← Your image
        desc: "Redefining the SaaS dashboard experience with modular widgets."
    },
    { 
        id: "eco-system",
        title: "Eco System", 
        tag: "Identity", 
        img: "images/projects/eco-system.jpg",  // ← Your image
        desc: "Visual storytelling for a global reforestation initiative."
    },
    { 
        id: "sonic-brand",
        title: "Sonic Brand", 
        tag: "Motion", 
        img: "images/projects/sonic-brand.jpg",  // ← Your image
        desc: "Sound-reactive motion graphics for a high-end audio hardware brand."
    },
    { 
        id: "lumina-ux",
        title: "Lumina UX", 
        tag: "Research", 
        img: "images/projects/lumina-ux.jpg",  // ← Your image
        desc: "In-depth user research and prototyping for a smart-home ecosystem."
    }
];

// Populate project grid on homepage
function loadProjects() {
    const grid = document.getElementById('main-grid');
    if (!grid) return;
    
    projects.forEach((p) => {
        const projectCard = document.createElement('a');
        projectCard.href = `projects/${p.id}.html`;
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="img-wrapper">
                <img src="${p.img}" alt="${p.title}">
            </div>
            <div class="project-content">
                <h3>${p.title}</h3>
                <span class="project-tag">${p.tag}</span>
            </div>
        `;
        
        grid.appendChild(projectCard);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
});
```

---

## 🎯 What You Need to Change

For each project, **only change the `img:` line**:

```javascript
img: "images/projects/YOUR-IMAGE-NAME.jpg",
```

Make sure your image filename matches exactly (including dashes and lowercase)!

---

## ✅ Checklist

- [ ] Images saved in `portfolio/images/projects/` folder
- [ ] Images are 1200x675px (16:9 ratio) or similar
- [ ] Filenames match in `main.js` (e.g., `neural-studio.jpg`)
- [ ] No spaces in filenames (use dashes: `my-project.jpg`)
- [ ] File extensions match (.jpg or .png)

---

## 🔍 How to Find the Right Line

In `js/main.js`, find the project by its title:

```javascript
// Looking for Neural Studio? Find this block:
{ 
    id: "neural-studio",
    title: "Neural Studio",   ← Found it!
    tag: "AI / UX", 
    img: "CHANGE THIS LINE",  ← Change only this
    desc: "..."
},
```

---

## 💡 Pro Tips

1. **Keep the same filename structure**: `project-name.jpg`
2. **Name your images to match project IDs**: If id is `neural-studio`, name the image `neural-studio.jpg`
3. **Test one project first**: Replace one image, refresh the page, see if it works
4. **Clear browser cache**: If images don't update, press Ctrl+F5 (or Cmd+Shift+R on Mac)

---

## 🚨 Common Mistakes

❌ **Wrong path**: `img: "neural-studio.jpg"` (missing `images/projects/`)
✅ **Correct path**: `img: "images/projects/neural-studio.jpg"`

❌ **Wrong case**: Image file is `Neural-Studio.jpg` but code says `neural-studio.jpg`
✅ **Match exactly**: If file is `Neural-Studio.jpg`, code must say `Neural-Studio.jpg`

❌ **Spaces in filename**: `my project.jpg`
✅ **Use dashes**: `my-project.jpg`

---

**That's it!** Change the `img:` lines in `js/main.js` and your homepage will show your images! 🎨
