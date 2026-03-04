# 🎯 QUICK REFERENCE GUIDE
## Futuristic Research Portfolio Website

---

## 🚀 DEPLOYMENT IN 3 STEPS

### Step 1: Create GitHub Repo
```
Go to github.com → New Repository
Name: your-username.github.io
Make it PUBLIC
```

### Step 2: Upload Files
```
Click "Add file" → "Upload files"
Select: index.html, style.css, script.js
Click "Commit changes"
```

### Step 3: Wait & Visit
```
Your site is live at:
https://your-username.github.io
(Wait 2 minutes after upload)
```

---

## 📝 MOST COMMON EDITS

### 1. Change Your Name
**File:** `index.html`
**Find:** Line with `<h1 class="hero-title">Alexandria Chen</h1>`
**Replace:** 
```html
<h1 class="hero-title">Your Name</h1>
```

### 2. Change Email
**File:** `index.html`
**Find:** `<a href="mailto:alexandria.chen@stanford.edu"`
**Replace:**
```html
<a href="mailto:your.email@example.com"
```

### 3. Add New Research Interest
**File:** `index.html`
**Find:** Research Interests section (around line 270)
**Add Below Existing Cards:**
```html
<div class="research-card">
    <div class="card-icon">📚</div>
    <h3>Your Topic Name</h3>
    <p>Brief description of what interests you about this topic.</p>
</div>
```

### 4. Add New Project
**File:** `index.html`
**Find:** Projects section (around line 310)
**Add Below Existing Projects:**
```html
<div class="project-card">
    <div class="project-header">
        <h3>Your Project Title</h3>
        <a href="https://github.com/your-username/repo-name" class="project-link" target="_blank">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.375 3.375 0 0 0-1.015-2.413l1.423-1.423a3.375 3.375 0 0 0-4.776-4.776L13.36 3.36A3.375 3.375 0 0 0 9.948 1.345M3 12c0-1.657.895-3.105 2.236-3.893M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
            </svg>
        </a>
    </div>
    <p class="project-description">
        Your project description here.
    </p>
    <div class="tech-stack">
        <span class="tech-tag">Python</span>
        <span class="tech-tag">PyTorch</span>
    </div>
</div>
```

### 5. Add New Publication
**File:** `index.html`
**Find:** Publications section (around line 380)
**Add Below Existing Papers:**
```html
<div class="publication-card">
    <div class="publication-header">
        <h3>Your Paper Title</h3>
        <span class="publication-year">2024</span>
    </div>
    <p class="publication-authors">
        <strong>Your Name</strong>, Co-Author 1, Co-Author 2
    </p>
    <p class="publication-venue">
        <em>Conference Name</em> | Full Conference Name
    </p>
    <p class="publication-description">
        Brief description of your paper and its contributions.
    </p>
    <a href="https://arxiv.org/abs/2024.xxxxx" target="_blank" class="doi-link">
        📄 arXiv:2024.xxxxx
    </a>
</div>
```

### 6. Update Education Timeline
**File:** `index.html`
**Find:** About & Education section (around line 140)
**Replace Timeline Items:**
```html
<div class="timeline-item">
    <div class="timeline-marker">
        <div class="marker-dot"></div>
    </div>
    <div class="timeline-content">
        <h3>PhD in Your Field</h3>
        <p class="institution">Your University</p>
        <p class="time-period">2023 - Present</p>
        <p class="description">Focus: Your Research Area</p>
    </div>
</div>
```

### 7. Add New Skill
**File:** `index.html`
**Find:** Technical Expertise section (around line 540)
**Add Skills to Existing Categories:**
```html
<span class="skill-item">New Skill Name</span>
```

### 8. Update Social Links
**File:** `index.html`
**Find:** Contact section, Social Media block (around line 600)
**Update URLs:**
```html
<a href="https://github.com/your-username" target="_blank" class="social-link" title="GitHub">
    <span>💻</span> GitHub
</a>
```

---

## 🎨 COLOR QUICK REFERENCE

**File:** `style.css` (Top of file)

```css
--primary-dark: #0a0e27;      /* Dark background */
--accent-cyan: #00d9ff;       /* Bright cyan */
--accent-purple: #b300ff;     /* Purple */
--accent-pink: #ff006e;       /* Pink/Red */
--accent-blue: #0080ff;       /* Blue */
--text-primary: #e0e0ff;      /* Main text */
--text-secondary: #a0a0c0;    /* Muted text */
```

**To Change All Colors At Once:**
1. Open `style.css`
2. Scroll to top (line 1-30)
3. Find the `:root {` section
4. Replace color hex codes
5. Save and refresh browser

---

## 📱 TEST ON MOBILE

### Option 1: Device Testing
1. On your phone/tablet, open: `https://your-username.github.io`
2. Check that menu works (hamburger icon)
3. Scroll through all sections
4. Test contact form

### Option 2: Browser Dev Tools
1. Open website in browser
2. Press `F12` (or Right-click → Inspect)
3. Click phone icon (top-left of dev tools)
4. Select device type
5. Check responsiveness

---

## 🔍 FINDING SECTIONS IN HTML

Use Ctrl+F (Cmd+F on Mac) to find sections:

| Section | Search For |
|---------|-----------|
| Name/Title | `<h1 class="hero-title">` |
| About | `<section id="about"` |
| Research | `<section id="research"` |
| Projects | `<section id="projects"` |
| Publications | `<section id="publications"` |
| Experience | `<section id="experience"` |
| Contact | `<section id="contact"` |

---

## ⚡ QUICK PERFORMANCE TIPS

1. **Large Images:** Compress before adding (use TinyPNG.com)
2. **Keep File Sizes Small:** Each file should be <500KB
3. **Test Speed:** Use https://pagespeed.web.dev/
4. **Mobile First:** Always test on mobile

---

## 🔗 UPDATE ALL SOCIAL LINKS

**Find this section in Contact:**
```html
<div class="social-links">
    <a href="..." class="social-link">...
```

Replace all URLs:
- GitHub: `https://github.com/your-username`
- LinkedIn: `https://linkedin.com/in/your-profile`
- Twitter: `https://twitter.com/your-handle`
- Google Scholar: `https://scholar.google.com/citations?user=YOUR-ID`
- ResearchGate: `https://www.researchgate.net/profile/Your-Name`
- ORCID: `https://orcid.org/XXXX-XXXX-XXXX-XXXX`

---

## 📧 ENABLE CONTACT FORM EMAILS

The contact form currently shows a success message without sending emails.

**To Actually Send Emails:**

1. Go to https://formspree.io
2. Sign up (free account)
3. Create new form for your email
4. Copy the form ID
5. In `index.html`, find the `<form` tag
6. Change action to:
```html
<form action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
```

---

## 🎯 CHANGE COLOR SCHEME COMPLETELY

### Theme 1: Ocean Blue
```css
--primary-dark: #0a1428;
--accent-cyan: #0dcaf0;
--accent-purple: #0d6efd;
--accent-pink: #00d4ff;
```

### Theme 2: Sunset
```css
--primary-dark: #1a0a0a;
--accent-cyan: #ff6b35;
--accent-purple: #ff8c42;
--accent-pink: #ffa35d;
```

### Theme 3: Forest
```css
--primary-dark: #0a1a1a;
--accent-cyan: #00d9a3;
--accent-purple: #00aa77;
--accent-pink: #00ff88;
```

---

## 📊 METADATA FOR SEO

**File:** `index.html`

Update the `<title>` tag (line 5):
```html
<title>Your Name | PhD in [Your Field] | Research Portfolio</title>
```

Add description (after line 5):
```html
<meta name="description" content="PhD researcher in [your field]. Exploring [your interests]. Check out my projects, publications, and research.">
```

---

## 🐛 DEBUG MODE

Open browser console (F12) and type:
```javascript
showDebugInfo()
```

This shows:
- Current scroll position
- Active nav links
- Visible sections

---

## 💾 BACKUP YOUR WORK

### Using Git
```bash
git add .
git commit -m "Update portfolio with my research"
git push
```

### Manual Backup
1. Keep a copy of files on your computer
2. Save to cloud (Google Drive, Dropbox, OneDrive)
3. Weekly updates to GitHub

---

## 🚀 AFTER DEPLOYING

1. ✅ Share link: `https://your-username.github.io`
2. ✅ Add to email signature
3. ✅ Add to LinkedIn profile
4. ✅ Add to research profile (ResearchGate, ORCID)
5. ✅ Share on Twitter/X
6. ✅ Update resume with portfolio link
7. ✅ Submit to research directories

---

## 📞 STILL HAVE QUESTIONS?

**Common Issues & Solutions:**

| Problem | Solution |
|---------|----------|
| Site won't load | Wait 5 min, clear browser cache |
| Styling broken | Check CSS file is in same folder |
| Links don't work | Verify URLs start with `https://` |
| Mobile looks bad | Check viewport meta tag is present |
| Changes not showing | Hard refresh (Ctrl+Shift+R / Cmd+Shift+R) |

---

## 🎓 BEST PRACTICES

✅ **DO:**
- Keep information current
- Use real links (test them)
- Check spelling and grammar
- Test on mobile
- Update projects regularly
- Use high-quality descriptions
- Back up your work

❌ **DON'T:**
- Use placeholder text in final version
- Have broken links
- Forget to test on mobile
- Overload with animations
- Use very large files
- Leave typos
- Forget to commit changes

---

## 📈 NEXT IMPROVEMENTS

Once deployed, consider adding:
1. Blog section with articles
2. Newsletter signup
3. Download CV button
4. Video/demo sections
5. Testimonials/recommendations
6. Speaking engagements
7. Award badges

---

**Happy coding! 🚀**

For detailed instructions, see README.md
