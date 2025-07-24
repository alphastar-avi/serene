# Deployment Guide for GitHub Pages

## 🚀 Quick Setup

### Step 1: Repository Setup
1. Create a new repository on GitHub
2. Push your code to the repository
3. Make sure your main branch is named `main` or `master`

### Step 2: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Click **Save**

### Step 3: Automatic Deployment
- The GitHub Action will automatically trigger on every push to the main branch
- Your site will be available at: `https://yourusername.github.io/repository-name/`

## 🔧 Configuration

### For Custom Repository Name
If your repository name is different from `yoga-wellness-website`, update the `basePath` in `next.config.mjs`:

\`\`\`javascript
basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
\`\`\`

### For Custom Domain
If you're using a custom domain, remove the basePath configuration:

\`\`\`javascript
// Remove or comment out these lines for custom domain
// basePath: process.env.NODE_ENV === 'production' ? '/yoga-wellness-website' : '',
// assetPrefix: process.env.NODE_ENV === 'production' ? '/yoga-wellness-website/' : '',
\`\`\`

## 🛠️ Manual Deployment (Alternative)

If you prefer to deploy manually:

1. **Install dependencies:**
   \`\`\`bash
   npm install
   \`\`\`

2. **Build the project:**
   \`\`\`bash
   npm run build
   \`\`\`

3. **Upload the `out` folder:**
   - The static files will be in the `out` directory
   - Upload these files to your web hosting service

## 🐛 Troubleshooting

### Common Issues:

1. **404 Error on Page Refresh:**
   - This is normal for GitHub Pages with client-side routing
   - The trailing slashes in URLs help mitigate this

2. **Images Not Loading:**
   - Make sure image paths are correct
   - Use the OptimizedImage component provided

3. **CSS Not Loading:**
   - Check that the basePath is correctly configured
   - Ensure the repository name matches the basePath

4. **Build Fails:**
   - Check the Actions tab in your GitHub repository
   - Look for error messages in the build logs

### Getting Help:
- Check the **Actions** tab in your GitHub repository for build logs
- Ensure all file paths use forward slashes (/)
- Make sure all imports are correctly cased

## 📁 File Structure for Deployment

\`\`\`
your-repo/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── app/                        # Next.js pages
├── components/                 # React components
├── public/                     # Static assets
├── next.config.mjs            # Next.js configuration
├── package.json               # Dependencies
├── tailwind.config.ts         # Tailwind configuration
└── README.md                  # Project documentation
\`\`\`

## ✅ Deployment Checklist

- [ ] Repository created on GitHub
- [ ] Code pushed to main/master branch
- [ ] GitHub Pages enabled with "GitHub Actions" source
- [ ] Repository name matches basePath in next.config.mjs
- [ ] All images are in the public folder
- [ ] All internal links use trailing slashes
- [ ] Build completes successfully in Actions tab

Your website should now be live on GitHub Pages! 🎉
