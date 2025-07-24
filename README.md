# Serene Spirit - Yoga & Wellness Website

A modern, elegant yoga and wellness website built with Next.js and optimized for GitHub Pages.

## 🌟 Features

- **Modern Design**: Clean, elegant interface with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Static Export**: Optimized for GitHub Pages deployment
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🚀 Quick Start

### Local Development

1. Clone the repository:
\`\`\`bash
git clone https://github.com/yourusername/yoga-wellness-website.git
cd yoga-wellness-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### GitHub Pages Deployment

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Click "Save"

2. **Deploy the website**:
\`\`\`bash
npm run deploy
\`\`\`

3. **Access your website**:
   - Your site will be available at: `https://yourusername.github.io/yoga-wellness-website/`

### Manual Deployment

If you prefer manual deployment:

1. Build the static files:
\`\`\`bash
npm run build
\`\`\`

2. The static files will be generated in the `out` folder
3. Upload the contents of the `out` folder to your web server

## 📁 Project Structure

\`\`\`
yoga-wellness-website/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # UI components
│   ├── header.tsx        # Site header
│   ├── footer.tsx        # Site footer
│   ├── hero.tsx          # Hero section
│   └── ...               # Other components
├── public/               # Static assets
├── next.config.mjs       # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── package.json          # Dependencies and scripts
\`\`\`

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.ts`:
- **Cream**: `#FAF7F2` - Background color
- **Sage**: `#87A96B` - Primary accent color
- **Charcoal**: `#2C3E50` - Text color
- **Dusty Rose**: `#D4A574` - Secondary accent

### Typography
- **Headings**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)

### Images
Replace placeholder images in the `/public` folder with your own high-quality images.

## 🛠️ Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons
- **GitHub Pages**: Free static site hosting

## 📱 Pages Included

1. **Home**: Hero section, services overview, testimonials
2. **About Us**: Company story and philosophy
3. **Services**: Detailed service descriptions (Yoga, Acupuncture, Aromatherapy, Holistic Healing, Sound Healing, Counselling)
4. **Blog**: Article listings and individual blog posts
5. **Contact**: Contact form and business information

## 🔧 Configuration

The website is pre-configured for GitHub Pages with:
- Static export enabled
- Trailing slashes for proper routing
- Unoptimized images for static hosting
- Base path configuration for subdirectory deployment

## 📞 Support

If you need help with customization or deployment, please create an issue in the repository.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
