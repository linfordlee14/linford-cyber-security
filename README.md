# Linfy Cyber Security - Cybersecurity Portfolio

Professional cybersecurity portfolio for Linford Musiyambodza showcasing ethical audits, training, labs, and secure web development.

## 🚀 Tech Stack

- **Next.js 15** (App Router)
- **React 18+**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)

## 📦 Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

1. **Clone repository**
   \`\`\`bash
   cd linfy-cyber-security
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run development server**
   \`\`\`bash
   npm run dev
   \`\`\`

   Open [http://localhost:3000](http://localhost:3000)

## 🌐 Deploy to Vercel

### Method 1: GitHub + Vercel Dashboard

\`\`\`bash
git init
git add .
git commit -m "Initial commit: Linfy Cyber portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/linfy-cyber-security.git
git push -u origin main
\`\`\`

Then:
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project" → Import GitHub repo
3. Vercel auto-detects Next.js
4. Click "Deploy"

### Method 2: Vercel CLI

\`\`\`bash
npm i -g vercel
vercel
\`\`\`

## 🎨 Customization

### Update Services

Edit `/components/Services.tsx` to modify service descriptions, pricing, and process steps.

### Update Case Studies

Edit `/components/CaseStudies.tsx` to add real project details and metrics.

### Update Labs

Edit `/app/labs/page.tsx` to add more labs or update existing lab descriptions.

## 📝 Environment Variables

Create `.env.local`:

\`\`\`
NEXT_PUBLIC_GA_ID=your_google_analytics_id
\`\`\`

## 🧪 Safe Lab Guidelines

All labs and demos are:
- ✅ Educational and defensive only
- ✅ For authorized testing environments
- ✅ Non-malicious and sandboxed
- ✅ Legal and ethical

**NEVER use labs for unauthorized access or testing on systems you don't own.**

See our [Responsible Disclosure Policy](/app/responsible-disclosure/page.tsx)

## 📚 Resources

Downloadable resources include:
- Security Audit Checklist
- Incident Response Playbook
- Security Policy Template
- Phishing Awareness Training Module

Place downloadable files in `/public/downloads/`

## 🔒 Security Best Practices

- Never hardcode API keys in code
- Use environment variables for secrets
- Sanitize all user inputs
- Follow OWASP guidelines
- Keep dependencies updated
- Implement HTTPS everywhere

## 🛠️ Build & Production

Build for production:
\`\`\`bash
npm run build
\`\`\`

Test production build:
\`\`\`bash
npm start
\`\`\`

## 📱 SEO Optimization

Meta tags pre-configured in:
- `app/layout.tsx` (global)
- Each page (page-specific)

## 📊 Analytics

Add Google Analytics ID to `.env.local` and it will automatically track.

## 🐛 Troubleshooting

### Port in use
\`\`\`bash
npx kill-port 3000
npm run dev
\`\`\`

### Build errors
\`\`\`bash
rm -rf .next node_modules package-lock.json
npm install
npm run build
\`\`\`

## 📄 License

MIT License - Educational and professional use.

## 🤝 Support

Questions? Contact:
- Email: linfordlee14@gmail.com
- LinkedIn: [linkedin.com/in/linfordlee14](https://linkedin.com/in/linfordlee14)
- GitHub: [@linfordlee14](https://github.com/linfordlee14)

---

Built with ❤️ for ethical cybersecurity by Linford Musiyambodza
