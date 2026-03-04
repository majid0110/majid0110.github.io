# 🚀 Futuristic Dark-Themed Research Portfolio Website

A complete, production-ready PhD research portfolio website with a stunning dark theme, neon effects, and smooth animations.

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [File Structure](#file-structure)
4. [Quick Start](#quick-start)
5. [Customization Guide](#customization-guide)
6. [Deployment to GitHub Pages](#deployment-to-github-pages)
7. [Advanced Customization](#advanced-customization)
8. [Browser Support](#browser-support)
9. [Troubleshooting](#troubleshooting)

---

## 📌 Project Overview

This is a complete research portfolio website built with:
- **HTML5** for semantic structure
- **CSS3** for styling with animations and effects
- **Vanilla JavaScript** for interactivity (no dependencies!)

### Key Characteristics:
- ✨ Futuristic cyberpunk aesthetic with cyan, purple, and pink neon effects
- 🌌 Animated gradient background orbs with parallax effects
- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Smooth scroll animations and hover effects
- 🎨 Glassmorphism and neon border styling
- ♿ Accessible with keyboard navigation support
- 🔒 No external dependencies - pure HTML/CSS/JS

---

## ✨ Features

### Navigation
- Fixed sticky navbar with smooth transitions
- Active link highlighting based on scroll position
- Mobile hamburger menu with animations
- Keyboard accessible

### Hero Section
- Large animated title with gradient text
- Typewriter effect for text reveal
- Call-to-action buttons with hover animations
- Animated floating card element
- Scroll indicator with bouncing animation

### About & Education Section
- Personal introduction
- Education timeline with institutions and dates
- Animated timeline markers with connecting line
- Scroll-reveal animations

### Research Interests
- 6 research topic cards with emojis
- Grid layout with hover effects
- Glassmorphic design with backdrop blur

### Projects
- 6 featured research projects
- Project descriptions and technologies
- GitHub links for each project
- Tech stack tags with hover effects
- Shimmer animations on hover

### Publications
- 6 academic publications
- Conference/journal information
- ArXiv link simulation
- Publication year badges
- Slide animations on hover

### Experience
- Professional roles and dates
- Company names and descriptions
- Bullet-point achievement list
- Card-based layout with hover effects

### Skills Section
- 4 skill categories
- Individual skill items with hover effects
- Color-coded skill groups

### Contact Section
- Contact form with validation
- Email, Google Scholar, ResearchGate links
- GitHub, LinkedIn, Twitter profiles
- Form submission with success/error notifications
- Responsive form layout

### Footer
- Copyright information
- Animated heart effect

---

## 📁 File Structure

```
your-portfolio/
├── index.html          # Main HTML structure (700+ lines)
├── style.css           # Complete stylesheet (1000+ lines)
├── script.js           # JavaScript interactivity (450+ lines)
└── README.md           # This file
```

**Important:** Keep all three files in the same directory!

---

## 🚀 Quick Start

### Method 1: Open Locally (Quickest)

1. Download the three files: `index.html`, `style.css`, `script.js`
2. Place them in a folder, e.g., `my-portfolio/`
3. Double-click `index.html` to open in your default browser
4. ✅ Done! The site works offline

### Method 2: Live Server (Recommended for Development)

If you're using **VS Code**:

1. Install "Live Server" extension (by Ritwick Dey)
2. Right-click `index.html`
3. Select "Open with Live Server"
4. Browser opens with auto-refresh on save

If you're using **Python** (any OS):
```bash
# Python 3
python -m http.server 8000

# Then visit: http://localhost:8000
```

If you're using **Node.js**:
```bash
# Install globally (once)
npm install -g http-server

# Run in your project folder
http-server

# Visit: http://localhost:8080
```

---

## 🎨 Customization Guide

### 1. Change Personal Information

Open `index.html` and find and replace:

```
Alexandria Chen          → Your Name
PhD Researcher in Artificial Intelligence   → Your Title
Stanford University      → Your University
alexandria.chen@stanford.edu  → Your Email
```

### 2. Update About Section

Find the "About & Education" section and update:
- Personal description (2 paragraphs)
- Degree names (PhD, MSc, BSc)
- University names
- Years attended
- Research focus descriptions

Example:
```html
<h3>PhD in [Your Field]</h3>
<p class="institution">Your University</p>
<p class="time-period">2023 - Present</p>
<p class="description">Focus: [Your Research Area]</p>
```

### 3. Update Research Interests

Find the "Research Interests" section. Each card looks like:

```html
<div class="research-card">
    <div class="card-icon">🧠</div>
    <h3>Your Research Topic</h3>
    <p>Description of your research interest and what makes it exciting.</p>
</div>
```

You can:
- Change the emoji (🧠, 💡, 🔬, etc.)
- Update the title
- Edit the description (1-2 sentences)

### 4. Update Projects

Find the "Projects" section. Each project has:

```html
<div class="project-card">
    <div class="project-header">
        <h3>Project Title</h3>
        <a href="https://github.com/your-username/repo" class="project-link" target="_blank">
            [GitHub SVG Icon]
        </a>
    </div>
    <p class="project-description">
        Your project description here...
    </p>
    <div class="tech-stack">
        <span class="tech-tag">Python</span>
        <span class="tech-tag">PyTorch</span>
        <!-- Add more tech tags -->
    </div>
</div>
```

Steps to customize:
1. Change "Project Title" to your project name
2. Replace `https://github.com/...` with your actual GitHub repo link
3. Update the description (2-3 sentences)
4. Add/remove tech tags as needed

### 5. Update Publications

Find the "Publications" section. Each publication has:

```html
<div class="publication-card">
    <div class="publication-header">
        <h3>Paper Title Here</h3>
        <span class="publication-year">2024</span>
    </div>
    <p class="publication-authors">
        <strong>Your Name</strong>, Co-Author 1, Co-Author 2
    </p>
    <p class="publication-venue">
        <em>Conference Name</em> | Full Name
    </p>
    <p class="publication-description">
        Your paper description...
    </p>
    <a href="https://arxiv.org/abs/..." target="_blank" class="doi-link">
        📄 arXiv:XXXX.XXXXX
    </a>
</div>
```

### 6. Update Experience

Find the "Experience" section. Each role has:

```html
<div class="experience-card">
    <div class="experience-header">
        <h3>Job Title</h3>
        <span class="experience-dates">2023 - Present</span>
    </div>
    <p class="experience-company">Company Name | Location</p>
    <ul class="experience-details">
        <li>Achievement or responsibility</li>
        <li>Another achievement</li>
        <li>One more achievement</li>
    </ul>
</div>
```

### 7. Update Skills

Find the "Technical Expertise" section:

```html
<div class="skill-group">
    <h4>Category Name</h4>
    <div class="skill-items">
        <span class="skill-item">Skill 1</span>
        <span class="skill-item">Skill 2</span>
        <span class="skill-item">Skill 3</span>
    </div>
</div>
```

### 8. Update Contact Information

Find the "Contact" section and update:
- Email address (in the `<a href="mailto:...">` tag)
- Links to social profiles:
  - Google Scholar
  - ResearchGate
  - GitHub
  - LinkedIn
  - Twitter/X
  - ORCID

### 9. Change Color Scheme (Advanced)

All colors are defined in CSS variables at the top of `style.css`:

```css
:root {
    --primary-dark: #0a0e27;        /* Main background */
    --accent-cyan: #00d9ff;         /* Primary accent */
    --accent-purple: #b300ff;       /* Secondary accent */
    --accent-pink: #ff006e;         /* Tertiary accent */
    --accent-blue: #0080ff;         /* Fourth accent */
    --text-primary: #e0e0ff;        /* Main text */
    --text-secondary: #a0a0c0;      /* Muted text */
}
```

To change the color scheme:
1. Pick new colors in hex format
2. Replace the values above
3. All elements automatically update!

Example for a blue/teal theme:
```css
--accent-cyan: #00d9ff;    /* Keep bright cyan */
--accent-purple: #0080ff;  /* Change to blue */
--accent-pink: #00d9ff;    /* Change to cyan */
```

### 10. Change Fonts

In `style.css`, find:
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

Replace with your preferred font. Some nice options:
- `'Inter', sans-serif` - Modern and clean
- `'Space Mono', monospace` - Futuristic code font
- `'JetBrains Mono', monospace` - Technical look
- `'Poppins', sans-serif` - Friendly and rounded

You'll need to import the font from Google Fonts at the top of CSS:
```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
```

---

## 🌍 Deployment to GitHub Pages

### Step 1: Create a GitHub Account

If you don't have one:
1. Go to https://github.com
2. Click "Sign Up"
3. Follow the signup process

### Step 2: Create a New Repository

1. Click the **+** icon (top right) → "New repository"
2. Repository name: **`your-username.github.io`**
   - ⚠️ **IMPORTANT:** Use exactly this naming format!
   - Replace `your-username` with your actual GitHub username
   - Example: `alexandriachen.github.io`
3. Keep it **Public** (required for GitHub Pages)
4. ✅ Check "Add a README file"
5. Click "Create repository"

### Step 3: Upload Your Files

**Option A: Using GitHub Web Interface (Easiest)**

1. You're now in your repository
2. Click "Add file" → "Upload files"
3. Drag and drop (or select) your three files:
   - `index.html`
   - `style.css`
   - `script.js`
4. At the bottom, click "Commit changes"
5. In the message box, type: `Add portfolio website`
6. Click "Commit changes"

**Option B: Using Git Command Line (For Advanced Users)**

```bash
# 1. Create a folder and navigate to it
mkdir my-portfolio
cd my-portfolio

# 2. Initialize git repository
git init

# 3. Add all files
git add .

# 4. Create initial commit
git commit -m "Add portfolio website"

# 5. Add GitHub as remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git

# 6. Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. In your repository, click **Settings** (top right)
2. Scroll down to "GitHub Pages" section
3. Under "Source", select **main branch** (or master)
4. Click **Save**
5. Wait 1-2 minutes for deployment
6. You'll see a green checkmark with your live URL!

### Step 5: Access Your Live Website

Your website is now live at:
```
https://your-username.github.io
```

Example: `https://alexandriachen.github.io`

You can share this link anywhere!

### 🔄 Updating Your Website

After your site is live, to make changes:

**Using Web Interface:**
1. Open your repository on GitHub
2. Click on the file you want to edit (e.g., `index.html`)
3. Click the **pencil icon** (Edit)
4. Make your changes
5. Scroll down and click "Commit changes"
6. Wait a few seconds for the site to update

**Using Git Command Line:**
```bash
# 1. Make changes to your local files
# 2. Add and commit
git add .
git commit -m "Update portfolio content"

# 3. Push to GitHub
git push origin main
```

---

## 🎯 Advanced Customization

### Add Your Own Favicon

1. Create a small image (256x256px) of your initials or logo
2. Save as `favicon.ico` in the same folder as your files
3. Add this line to the `<head>` section of `index.html`:
```html
<link rel="icon" type="image/x-icon" href="favicon.ico">
```

### Add Google Analytics

1. Create a Google Analytics account at https://analytics.google.com
2. Add your website and get your Tracking ID
3. Add this before the closing `</head>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR-ID');
</script>
```

### Enable Contact Form with Formspree

To make the contact form actually send emails:

1. Go to https://formspree.io
2. Sign up and create a new form
3. Get your form endpoint
4. In `index.html`, find the `<form>` tag
5. Change `id="contactForm"` to:
```html
<form action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
```

### Add a Blog Section

Add this new section before the Footer:

```html
<section id="blog" class="blog">
    <div class="section-container">
        <h2 class="section-title">Latest Articles</h2>
        <div class="blog-grid">
            <article class="blog-card">
                <h3>Article Title</h3>
                <p class="blog-date">March 2024</p>
                <p class="blog-excerpt">Article preview text...</p>
                <a href="#" class="read-more">Read More →</a>
            </article>
        </div>
    </div>
</section>
```

### Add Animations to Custom Sections

Use these CSS class names for automatic animations:
- `.scroll-reveal` - Fade in on scroll
- `.research-card` - Card hover effects
- `.project-card` - Project hover effects

---

## 🌐 Browser Support

This website works on:
- ✅ Chrome/Edge (latest versions)
- ✅ Firefox (latest versions)
- ✅ Safari (latest versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Note:** Some advanced CSS features (backdrop-filter, CSS gradients) require:
- Chrome 76+
- Firefox 103+
- Safari 9+
- Edge 79+

---

## 🐛 Troubleshooting

### Issue: Site looks broken or unstyled
**Solution:** Make sure all three files (`index.html`, `style.css`, `script.js`) are in the same folder.

### Issue: Hamburger menu doesn't work on mobile
**Solution:** Check that `script.js` is loading. Open Developer Tools (F12) → Console and look for errors.

### Issue: Links don't work
**Solution:** Check that URLs are correct. External links should start with `https://`.

### Issue: Contact form doesn't send emails
**Solution:** Follow the "Enable Contact Form with Formspree" section above. Currently, the form is frontend-only (shows success message without actually sending).

### Issue: Animations aren't smooth
**Solution:** This is often a performance issue. Try:
1. Closing other browser tabs
2. Disabling browser extensions
3. Using a modern browser (Chrome, Firefox, Safari, Edge)

### Issue: GitHub Pages shows 404 error
**Solution:** 
1. Check repository name is exactly `username.github.io`
2. Make sure it's PUBLIC
3. Wait 5 minutes after uploading
4. Check Settings → Pages shows "Published"

### Issue: CSS/JS files return 404 on GitHub Pages
**Solution:** 
1. Make sure files are named exactly: `style.css` and `script.js` (lowercase!)
2. Make sure `index.html` has correct paths:
   - `<link rel="stylesheet" href="style.css">`
   - `<script src="script.js"></script>`

---

## 📊 Project Statistics

- **HTML:** 720+ lines
- **CSS:** 1,000+ lines with animations
- **JavaScript:** 450+ lines
- **No external dependencies!**
- **Fully responsive**
- **100+ animations and effects**

---

## 💡 Tips for Success

1. **Personalization is Key** - Replace all dummy data with your actual information
2. **Keep It Updated** - Update projects and publications regularly
3. **Use Real Links** - Make sure GitHub, LinkedIn, etc. links are correct
4. **Mobile Testing** - Always test on your phone before sharing
5. **Performance** - The site is optimized, but avoid adding large images
6. **Backup** - Always keep a local copy of your files
7. **Version Control** - Use Git to track changes

---

## 🎓 Academic Use

This portfolio is perfect for:
- PhD students
- Postdocs
- Research scientists
- Academic professionals
- Researchers in any field

Customize it with your own research areas, projects, and publications!

---

## 📝 License

This project is provided as-is for personal and academic use.

---

## 🚀 Next Steps

1. ✅ Customize with your information
2. ✅ Test locally in your browser
3. ✅ Create GitHub repository
4. ✅ Deploy to GitHub Pages
5. ✅ Share your portfolio with the world!

---

## ❓ Need Help?

For the latest version and updates:
- Check GitHub for similar portfolio projects
- Look at GitHub Pages documentation: https://pages.github.com
- Study the comments in the code for deep explanations

Happy coding! 🎉
