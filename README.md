# Modern Professional Portfolio Website

A stunning, fully responsive portfolio website built with React.js, TypeScript, and Tailwind CSS. Features a warm, minimalist design with coral accents, dark/light mode toggle, smooth animations, contact form with validation, and Firebase hosting configuration.

![Portfolio Website](https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200)

## 🚀 Features

- **Modern Minimalist Design**: Clean, professional aesthetic with warm coral accents and subtle background shapes
- **Responsive Layout**: Mobile-first design that works perfectly on all devices
- **Dark/Light Mode**: Theme toggle with localStorage persistence
- **Smooth Scrolling**: Seamless navigation between sections
- **Contact Form**: Fully functional contact form with validation and success feedback
- **SEO Optimized**: Meta tags, semantic HTML, and optimized performance
- **Firebase Ready**: configured for Firebase hosting deployment
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets

## 🎨 Design System

### Color Palette
- **Background**: `#FFFFFF` - Clean white background
- **Accent Coral**: `#F28C38` - Coral/orange for buttons and highlights
- **Text Black**: `#000000` - Black for primary text

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600

## 🛠️ Technologies Used

- **Frontend**: React.js 18, TypeScript, Tailwind CSS
- **Animations**: Framer Motion, CSS Transitions
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Firebase Hosting
- **Styling**: Tailwind CSS with custom color palette

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 21.0 or higher)
- npm or yarn
- Firebase CLI (for deployment)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/modern-portfolio-website.git
cd modern-portfolio-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Copy the example environment file and add your configuration:

```bash
cp .env.example .env
```

Edit the `.env` file with your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_firebase_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
# ... other Firebase config values
```

### 4. Start Development Server

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🚀 Deployment

### Firebase Hosting

1. **Install Firebase CLI**:
```bash
npm install -g firebase-tools
```

2. **Login to Firebase**:
```bash
firebase login
```

3. **Initialize Firebase Project**:
```bash
firebase init hosting
```

4. **Build the Project**:
```bash
npm run build
```

5. **Deploy to Firebase**:
```bash
firebase deploy
```

### Alternative Deployment Options

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use GitHub Actions for automated deployment

## 📊 Performance Optimization

The website includes several performance optimizations:

- **Code Splitting**: Components are loaded on demand
- **Image Optimization**: Lazy loading and optimized formats
- **Caching**: Static assets cached for 1 year
- **Minification**: CSS and JavaScript are minified
- **Compression**: Gzip compression enabled

## 🔧 Development

### Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Projects showcase
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Dark/light mode
├── App.tsx            # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## 🎯 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Optimized images with alt text
- Fast loading times
- Mobile-friendly design
- Structured data markup

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Pexels](https://pexels.com) for stock images
- [Lucide](https://lucide.dev) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com) for utility-first CSS
- [Framer Motion](https://framer.com/motion) for smooth animations

## 📞 Support

If you have any questions or need help with setup, feel free to:
- Open an issue on GitHub
- Contact me at varunjha.dev@gmail.com
- Connect with me on [LinkedIn](https://www.linkedin.com/in/varunjha-dev/)

---

Built with ❤️ and lots of coffee ☕