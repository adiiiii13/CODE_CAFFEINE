# Code Caffeine - Tech Community Website

<div align="center">
    <img src="public/logo.png" alt="Code Caffeine Logo" width="200"/>
    <h3>Where Code Meets Coffee ☕💻</h3>
</div>

## About

Code Caffeine is a dynamic tech community website built using modern web technologies. This platform serves as the digital hub for our tech club, fostering collaboration, learning, and innovation among tech enthusiasts.

### Features

- 🚀 Modern, responsive design with smooth animations
- 📱 Mobile-first approach
- 🎨 Dynamic UI components with Framer Motion
- 🌙 Dark theme optimized for developers
- ⚡ Built with performance in mind

## Tech Stack

- **Framework:** React with TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide Icons
- **Build Tool:** Vite
- **Package Manager:** npm/yarn

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/adiiiii13/CODE_CAFFEINE.git
cd CODE_CAFFEINE
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
CODE_CAFFEINE/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── App.tsx        # Main App component
│   └── main.tsx       # Entry point
├── public/            # Static assets
├── index.html         # HTML template
└── package.json       # Project dependencies and scripts
```

## Key Pages

- **Home:** Landing page with club introduction and features
- **Events:** Upcoming and past events showcase
- **Gallery:** Photo gallery of club activities
- **Members:** Team showcase and membership information
- **Projects:** Club projects and achievements

## Contributing

We welcome contributions! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Deployment

This project is ready to deploy on multiple platforms:

### Netlify (Recommended)
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Netlify will automatically detect the build settings from `netlify.toml`
4. Or deploy manually: `npm run deploy:netlify`

### Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the build settings from `vercel.json`
4. Or deploy manually: `npm run deploy:vercel`

### GitHub Pages
1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy to GitHub Pages
3. Enable GitHub Pages in repository settings

### Manual Deployment
```bash
# Build the project
npm run build

# The dist/ folder contains all static files ready for deployment
# Upload the contents of dist/ to any static hosting service
```

## Project Status
- ✅ Build system configured
- ✅ Dependencies resolved
- ✅ Deployment ready
- ✅ Multiple deployment options available

## Contact

- Website: [codeCaffeine.tech](https://codeCaffeine.tech)
- GitHub: [@adiiiii13](https://github.com/adiiiii13)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
    Made with ❤️ by Code Caffeine Team
</div>
