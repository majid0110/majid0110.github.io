# 📋 CUSTOMIZATION DATA SHEET
## Replace Dummy Data With Your Information

---

## 👤 PERSONAL INFORMATION

### Current Dummy Data
```
Name: Alexandria Chen
Title: PhD Researcher in Artificial Intelligence
Email: alexandria.chen@stanford.edu
Current: PhD Student at Stanford University
```

### Your Information
```
Name: _________________________________
Title: _________________________________
Email: _________________________________
Current: _______________________________
```

### How to Replace

**File:** `index.html`

1. Find: `<h1 class="hero-title">Alexandria Chen</h1>`
   Replace with your name

2. Find: `<p class="hero-subtitle">PhD Researcher in Artificial Intelligence</p>`
   Replace with your title

3. Find: `alexandria.chen@stanford.edu`
   Replace with your email (appears 3 times in document)

4. Find: `Stanford University` (appears multiple times)
   Replace with your university

---

## 🎓 EDUCATION SECTION

### Current Timeline
```html
<!-- PhD -->
PhD in Computer Science | Stanford University | 2021 - Present
Focus: Neural Network Interpretability & Deep Learning

<!-- MSc -->
MSc in Machine Learning | University of Cambridge | 2019 - 2021
Thesis: Attention Mechanisms in Transformer Models

<!-- BSc -->
BSc in Computer Science | National University of Singapore | 2015 - 2019
Honors: Summa Cum Laude, Minor in Mathematics
```

### Your Timeline

**Degree 1 (Most Recent)**
```
Degree Name: ____________________________
University: ____________________________
Years: ______ - ______
Description: ____________________________
```

**Degree 2**
```
Degree Name: ____________________________
University: ____________________________
Years: ______ - ______
Description: ____________________________
```

**Degree 3 (Earliest)**
```
Degree Name: ____________________________
University: ____________________________
Years: ______ - ______
Description: ____________________________
```

### Code to Update

In `index.html`, find the `<section id="about"` and update each timeline item:

```html
<div class="timeline-item">
    <div class="timeline-marker">
        <div class="marker-dot"></div>
    </div>
    <div class="timeline-content">
        <h3>YOUR DEGREE NAME HERE</h3>
        <p class="institution">YOUR UNIVERSITY HERE</p>
        <p class="time-period">START YEAR - END YEAR</p>
        <p class="description">YOUR FOCUS OR ACHIEVEMENT HERE</p>
    </div>
</div>
```

---

## 🔬 RESEARCH INTERESTS (6 Topics)

### Current Dummy Topics
1. 🧠 Neural Network Interpretability
2. ⚡ Efficient Deep Learning
3. 🔗 Computational Neuroscience
4. 🛡️ Robust & Trustworthy AI
5. 🔄 Continual Learning
6. 🌐 Foundation Models

### Your Topics

**Topic 1:**
```
Emoji: ____
Title: ____________________________
Description: ____________________________
         ____________________________
```

**Topic 2:**
```
Emoji: ____
Title: ____________________________
Description: ____________________________
         ____________________________
```

(Repeat for Topics 3-6)

### Code to Update

```html
<div class="research-card">
    <div class="card-icon">YOUR EMOJI HERE</div>
    <h3>YOUR TOPIC TITLE</h3>
    <p>YOUR DESCRIPTION (1-2 sentences)</p>
</div>
```

**Emoji Ideas:**
- 🧠 Brain/AI topics
- 💡 Ideas/Innovation
- 🔬 Science/Research
- ⚡ Energy/Efficiency
- 🛡️ Security/Safety
- 🔄 Cycles/Processes
- 🌐 Networks/Global
- 📊 Data/Analytics
- 🔗 Connections/Links
- 🚀 Advanced/Future

---

## 💻 PROJECTS (6 Featured)

### Project 1 Template

```
Title: _________________________________
Description: _________________________________
            _________________________________
GitHub Link: https://github.com/your-username/repo-name
Technologies: _______, _______, _______
```

### Your Projects

**Project 1:**
```
Title: _________________________________
Description: _________________________________
            _________________________________
GitHub: https://github.com/...
Tech 1: ____________________
Tech 2: ____________________
Tech 3: ____________________
Tech 4: ____________________
```

**Project 2:**
```
Title: _________________________________
Description: _________________________________
            _________________________________
GitHub: https://github.com/...
Tech 1: ____________________
Tech 2: ____________________
Tech 3: ____________________
Tech 4: ____________________
```

(Repeat for Projects 3-6)

### Code to Update

```html
<div class="project-card">
    <div class="project-header">
        <h3>YOUR PROJECT TITLE</h3>
        <a href="https://github.com/your-username/repo" class="project-link" target="_blank">
            <svg>...</svg>
        </a>
    </div>
    <p class="project-description">
        YOUR PROJECT DESCRIPTION (2-3 sentences)
    </p>
    <div class="tech-stack">
        <span class="tech-tag">Technology1</span>
        <span class="tech-tag">Technology2</span>
        <span class="tech-tag">Technology3</span>
        <span class="tech-tag">Technology4</span>
    </div>
</div>
```

---

## 📄 PUBLICATIONS (6 Papers)

### Publication 1 Template

```
Title: _________________________________
Authors: You, CoAuthor1, CoAuthor2
Venue: CONFERENCE NAME YEAR | Full Name
Year: 202X
Description: _________________________________
            _________________________________
ArXiv: https://arxiv.org/abs/YYYY.XXXXX
```

### Your Publications

**Paper 1:**
```
Title: _________________________________
You + Authors: _________________________________
Venue: _________________________________
Year: ____
Description: _________________________________
ArXiv/DOI: https://arxiv.org/abs/...
```

(Repeat for Papers 2-6)

### Code to Update

```html
<div class="publication-card">
    <div class="publication-header">
        <h3>YOUR PAPER TITLE</h3>
        <span class="publication-year">2024</span>
    </div>
    <p class="publication-authors">
        <strong>Your Name</strong>, CoAuthor1, CoAuthor2
    </p>
    <p class="publication-venue">
        <em>Conference Name</em> | Full Conference Name
    </p>
    <p class="publication-description">
        Your paper description (2-3 sentences)
    </p>
    <a href="https://arxiv.org/abs/2024.xxxxx" target="_blank" class="doi-link">
        📄 arXiv:2024.xxxxx
    </a>
</div>
```

---

## 💼 EXPERIENCE (4 Roles)

### Current Experience

```
1. Research Assistant | Stanford AI Lab | 2023 - Present
2. ML Research Intern | DeepMind, Google | Summer 2023
3. Software Engineering Intern | OpenAI | Summer 2022
4. Teaching Assistant | Cambridge University | 2021 - 2022
```

### Your Experience

**Role 1 (Current):**
```
Title: _________________________________
Organization: _________________________________
Dates: ______ - Present (or ______)
Achievement 1: _________________________________
Achievement 2: _________________________________
Achievement 3: _________________________________
```

**Role 2:**
```
Title: _________________________________
Organization: _________________________________
Dates: ______ - ______
Achievement 1: _________________________________
Achievement 2: _________________________________
Achievement 3: _________________________________
```

(Repeat for Roles 3-4)

### Code to Update

```html
<div class="experience-card">
    <div class="experience-header">
        <h3>YOUR JOB TITLE</h3>
        <span class="experience-dates">START - END</span>
    </div>
    <p class="experience-company">Organization Name | Location</p>
    <ul class="experience-details">
        <li>Achievement or responsibility</li>
        <li>Another achievement</li>
        <li>One more achievement</li>
    </ul>
</div>
```

---

## 🛠️ TECHNICAL SKILLS

### Skill Categories

```
Category 1: Programming Languages
Skills: Python, C++, JavaScript, CUDA, SQL

Category 2: ML Frameworks
Skills: PyTorch, TensorFlow, JAX, Hugging Face, Scikit-learn

Category 3: Tools & Technologies
Skills: Git, Docker, Kubernetes, AWS/GCP, Jupyter

Category 4: Research Methods
Skills: Experimental Design, Statistical Analysis, Visualization, Benchmarking, Code Review
```

### Your Skills

**Category 1: [YOUR CATEGORY NAME]**
```
Skill 1: ____________________
Skill 2: ____________________
Skill 3: ____________________
Skill 4: ____________________
Skill 5: ____________________
```

(Create 4 categories)

### Code to Update

```html
<div class="skill-group">
    <h4>YOUR CATEGORY NAME</h4>
    <div class="skill-items">
        <span class="skill-item">Skill Name</span>
        <span class="skill-item">Skill Name</span>
        <span class="skill-item">Skill Name</span>
        <span class="skill-item">Skill Name</span>
        <span class="skill-item">Skill Name</span>
    </div>
</div>
```

---

## 🔗 SOCIAL & ACADEMIC LINKS

### Current Links

```
Email: alexandria.chen@stanford.edu
GitHub: https://github.com/
LinkedIn: https://linkedin.com/
Twitter: https://twitter.com/
Google Scholar: https://scholar.google.com/
ResearchGate: https://www.researchgate.net/
ORCID: https://orcid.org/
```

### Your Links

```
Email: _________________________________
GitHub: https://github.com/___________
LinkedIn: https://linkedin.com/in/_____
Twitter: https://twitter.com/___________
Google Scholar: https://scholar.google.com/citations?user=________
ResearchGate: https://www.researchgate.net/profile/________
ORCID: https://orcid.org/____-____-____-____
```

### Code to Update

Find Contact section and update all href attributes:

```html
<!-- Email -->
<a href="mailto:your-email@example.com">your-email@example.com</a>

<!-- Social Links -->
<a href="https://github.com/your-username" target="_blank">
    <span>💻</span> GitHub
</a>

<a href="https://linkedin.com/in/your-profile" target="_blank">
    <span>🔗</span> LinkedIn
</a>

<a href="https://twitter.com/your-handle" target="_blank">
    <span>𝕏</span> Twitter
</a>

<a href="https://scholar.google.com/citations?user=YOUR-ID" target="_blank">
    <span>🎓</span> Scholar
</a>
```

---

## 📧 CONTACT INFORMATION

### Current Contact

```
Email: alexandria.chen@stanford.edu
Phone: (Optional)
Address: (Optional)
```

### Your Contact

```
Email: _________________________________
Phone: _________________________________
Address: _________________________________
```

### Update in HTML

1. Email appears in:
   - Hero section subtitle (Contact button)
   - Contact section
   - Multiple times in form

2. Search for `alexandria.chen@stanford.edu` and replace all instances

---

## 📱 ABOUT SECTION INTRO

### Current Intro

```
"I'm a PhD candidate at Stanford University, specializing in deep learning 
and neural network interpretability. My research focuses on understanding 
how neural networks make decisions and developing methods to make AI 
systems more transparent and trustworthy.

With a strong foundation in computer science and mathematics, I combine 
theoretical insights with practical implementation to solve complex 
problems in machine learning and artificial intelligence."
```

### Your Intro

```
Paragraph 1:
_________________________________
_________________________________
_________________________________

Paragraph 2:
_________________________________
_________________________________
_________________________________
```

### Code to Update

Find About section and update both `<p>` tags in `.about-text` class

---

## 🎨 HERO SECTION DESCRIPTION

### Current

```
"Exploring the intersection of deep learning, neural network 
interpretability, and computational neuroscience. Passionate about 
creating AI systems that are transparent, efficient, and beneficial 
to society."
```

### Your Description

```
_________________________________
_________________________________
_________________________________
_________________________________
```

### Code to Update

Find `.hero-description` in HTML and replace the paragraph content

---

## ✅ CUSTOMIZATION CHECKLIST

- [ ] Changed name in hero title
- [ ] Updated email (3 places minimum)
- [ ] Updated university/institution
- [ ] Changed education timeline (3 entries)
- [ ] Updated research interests (6 cards)
- [ ] Added your projects (6 cards)
- [ ] Added your publications (6 cards)
- [ ] Updated experience (4 roles)
- [ ] Added technical skills (4 categories)
- [ ] Updated all social links
- [ ] Changed about section description
- [ ] Tested on mobile
- [ ] Tested all links work
- [ ] Deployed to GitHub Pages

---

## 🚀 BEFORE LAUNCHING

**Security Check:**
- [ ] No sensitive information exposed
- [ ] All email links are correct
- [ ] No demo/test links remaining
- [ ] All personal info is current

**Quality Check:**
- [ ] No typos or grammar errors
- [ ] All links work (test each one)
- [ ] Images load properly (if any)
- [ ] Mobile layout looks good
- [ ] All colors visible and professional

**Final Check:**
- [ ] Open in Chrome ✓
- [ ] Open in Firefox ✓
- [ ] Open on mobile ✓
- [ ] Share link with friend for feedback ✓

---

## 📊 DATA ORGANIZATION TEMPLATE

### All Your Data In One Place

```
PERSONAL
Name: _______________
Email: ______________
University: _________
Current Position: ___

DEGREES
Degree 1: ___, School, Years
Degree 2: ___, School, Years
Degree 3: ___, School, Years

RESEARCH TOPICS
1. _________________
2. _________________
3. _________________
4. _________________
5. _________________
6. _________________

PROJECTS
Project 1: [name, link, description, 4 techs]
Project 2: [name, link, description, 4 techs]
(etc × 6)

PUBLICATIONS
Paper 1: [title, authors, venue, year, arxiv]
Paper 2: [title, authors, venue, year, arxiv]
(etc × 6)

EXPERIENCE
Job 1: [title, org, dates, 3 achievements]
Job 2: [title, org, dates, 3 achievements]
(etc × 4)

SKILLS
Category 1: [5 skills]
Category 2: [5 skills]
Category 3: [5 skills]
Category 4: [5 skills]

SOCIAL LINKS
GitHub: https://github.com/...
LinkedIn: https://linkedin.com/...
(etc)
```

---

## 🎯 FINAL STEP

After filling out all the above information:

1. Open `index.html` in a text editor
2. Use Ctrl+F / Cmd+F to find each piece of dummy data
3. Replace with your information
4. Save the file
5. Open in browser to check
6. Deploy to GitHub Pages

**Your portfolio is ready! 🚀**

---

For detailed help, see:
- `README.md` - Full customization guide
- `QUICK_REFERENCE.md` - Quick lookup guide
