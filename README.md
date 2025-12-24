# 👨‍💼 Gunasekaran's Portfolio

A modern, full-featured portfolio website built with Next.js 14, showcasing professional experience, projects, applications, and achievements. Features a beautiful dark/light theme, smooth animations, and responsive design.

🌐 **Live Demo:** [https://gunasekaran-portfolio.vercel.app](https://gunasekaran-portfolio.vercel.app)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations and transitions
- 🌓 **Dark/Light Mode** - Toggle between themes with persistent preference
- 📱 **Fully Responsive** - Optimized for all devices from mobile to desktop
- 🚀 **Fast Performance** - Built with Next.js 14 and optimized for speed
- 📧 **Contact Form** - Integrated email functionality for direct communication
- 🎯 **Interactive Sections** - Engaging hover effects and animations throughout
- ♿ **Accessible** - Built with accessibility best practices in mind

## 📋 Sections

### 🏠 Hero
Welcome section with professional introduction and role as Technical Anchor.

### 👤 About
Comprehensive overview of professional background, skills, and expertise.

### 🎓 Education
Academic background including degrees and institutions.

### 📜 Certifications
Professional certifications and completed courses demonstrating continuous learning.

### 🏆 Awards
Recognition and achievements earned throughout career.

### 💼 Projects
Showcase of key projects with descriptions, technologies used, and live links.

### 🚀 My Applications
Live deployed applications including:
- **E-Commerce Platform** - Full-featured shopping experience
- **LLM Assistant** - AI-powered language model assistant
- **Calendar Application** - Smart scheduling and productivity tool
- **Portfolio Website** - Professional portfolio showcase
- **Resume Builder** - Professional resume creation tool
- **Video Chat App** - Real-time WebRTC video communication
- **Chat Application** - Real-time messaging platform
- **Web Accessibility Checker** - WCAG compliance audit tool

### 🎯 Hobbies
Personal interests and activities outside of work.

### 📬 Contact
Get in touch section with contact form and social media links.

## 🛠️ Tech Stack

### Core
- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** React 18

### Features
- **Email Service:** API routes for contact form
- **Theme Management:** React Context API
- **Icons & Animations:** Custom CSS animations
- **Font Optimization:** Next.js font optimization with Geist

### Development Tools
- **Linting:** ESLint
- **Code Formatting:** Prettier (via ESLint)
- **Package Manager:** npm/yarn/pnpm/bun

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
my-portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── api/               # API routes
│   │   └── send-email/    # Email API endpoint
│   ├── contact/           # Contact page
│   └── projects/          # Projects page
├── components/            # React components
│   ├── About.tsx
│   ├── Awards.tsx
│   ├── Certifications.tsx
│   ├── ClientScripts.tsx
│   ├── Contact.tsx
│   ├── Education.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Hobbies.tsx
│   ├── MyApps.tsx
│   ├── Navbar.tsx
│   ├── PageLoader.tsx
│   ├── Projects.tsx
│   └── ThemeToggle.tsx
├── contexts/              # React contexts
│   └── ThemeContext.tsx   # Theme state management
├── public/                # Static assets
│   └── projects/          # Project images
├── styles/                # Additional styles
├── eslint.config.mjs      # ESLint configuration
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎨 Customization

### Update Personal Information
- Modify content in individual component files in the `components/` directory
- Update hero section in `components/Hero.tsx`
- Add/remove applications in `components/MyApps.tsx`

### Styling
- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Theme colors and gradients can be customized in Tailwind configuration

### Theme
- Theme logic is managed in `contexts/ThemeContext.tsx`
- Toggle component in `components/ThemeToggle.tsx`

## 📧 Contact Form Setup

The contact form uses an API route. To enable email functionality:

1. Configure your email service in `app/api/send-email/route.ts`
2. Add necessary environment variables for email service
3. Update the API endpoint as needed

## 🌐 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy this Next.js app:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings
4. Click Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/my-portfolio)

### Other Platforms

This portfolio can also be deployed on:
- **Netlify** - Great for static sites
- **AWS Amplify** - Full-stack deployments
- **Railway** - Simple deployments with databases
- **Cloudflare Pages** - Fast global distribution

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 📚 Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - interactive Next.js tutorial
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - utility-first CSS framework
- [TypeScript Documentation](https://www.typescriptlang.org/docs) - typed JavaScript
- [React Documentation](https://react.dev) - JavaScript library for building UIs

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Gunasekaran**
- Portfolio: [https://gunasekaran-portfolio.vercel.app](https://gunasekaran-portfolio.vercel.app)
- Role: Technical Anchor

---

⭐ If you like this portfolio, consider giving it a star on GitHub!
