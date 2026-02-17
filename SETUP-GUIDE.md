# 🚀 SETUP GUIDE - How to Link Everything

## Step 1: Download All Files

Download all the files and maintain this EXACT folder structure:

```
portfolio/
├── index.html
├── about.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── main.js
└── projects/
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

## Step 2: Verify File Locations

**CRITICAL**: All files must be in the correct folders:
- HTML files (`index.html`, `about.html`) → Root of `portfolio` folder
- CSS file (`style.css`) → Inside `css` folder
- JS file (`main.js`) → Inside `js` folder
- All 9 project pages → Inside `projects` folder

## Step 3: How Links Work

### From Homepage (index.html):
```
portfolio/index.html 
    → Links to: css/style.css ✓
    → Links to: js/main.js ✓
    → Links to: about.html ✓
    → Links to: projects/neural-studio.html (and 8 others) ✓
```

### From About Page (about.html):
```
portfolio/about.html 
    → Links to: css/style.css ✓
    → Links to: index.html ✓
```

### From Project Pages (projects/*.html):
```
portfolio/projects/neural-studio.html 
    → Links to: ../css/style.css ✓ (../ means "go up one folder")
    → Links to: ../index.html ✓
    → Links to: ../about.html ✓
```

## Step 4: Open Your Portfolio

1. Navigate to your `portfolio` folder
2. Double-click `index.html` OR right-click → "Open with" → your browser
3. That's it! Everything should work

## 🔧 Troubleshooting

### Problem: CSS not loading (page looks plain)
**Solution**: Make sure `style.css` is in the `css` folder

### Problem: Projects don't show on homepage
**Solution**: Make sure `main.js` is in the `js` folder

### Problem: Clicking a project shows "Page not found"
**Solution**: Make sure all 9 project HTML files are in the `projects` folder

### Problem: "Back to Work" button doesn't work on project pages
**Solution**: Make sure you're opening from the root `index.html`, not directly opening project pages

## 📁 Quick Check

Open your `portfolio` folder. You should see:
- ✓ 2 HTML files (index.html, about.html)
- ✓ 1 README.md file
- ✓ 3 folders (css, js, projects)

Inside `css` folder:
- ✓ style.css

Inside `js` folder:
- ✓ main.js

Inside `projects` folder:
- ✓ 9 HTML files (all project pages)

## 🌐 Want to Put It Online?

### Option 1: GitHub Pages (Free)
1. Create a GitHub account
2. Create a new repository called "portfolio"
3. Upload all files maintaining the folder structure
4. Go to Settings → Pages → Enable GitHub Pages
5. Your site will be at: `https://yourusername.github.io/portfolio`

### Option 2: Netlify (Free, Easier)
1. Go to netlify.com
2. Drag and drop your entire `portfolio` folder
3. Done! You get a free URL instantly

### Option 3: Your Own Domain
1. Buy a domain (Namecheap, Google Domains, etc.)
2. Use any web hosting service (Netlify, Vercel, traditional hosting)
3. Upload your files via FTP or drag-and-drop

## ✅ Everything is Already Linked!

All the links between files are already set up correctly. You don't need to change anything - just maintain the folder structure and it will work perfectly!

---

Need help? Check that your folder structure matches the diagram at the top!
