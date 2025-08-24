# Uratuj Smartfona Website

### Technology Stack

- **Next.js 13** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **React 18** - UI library
- **Framer Motion** - Animation library
- **Embla Carousel** - Touch-friendly carousel
- **Radix UI** - Accessible UI primitives
- **CSS Modules** - Component-scoped styling
- **Iconify** - Icon library

### Features

- **Responsive Design** - Mobile-first approach
- **Modern Animations** - Smooth transitions and micro-interactions
- **Auto-scrolling Carousel** - For accessories showcase
- **Floating Contact Button** - Easy access to contact
- **Promotion Dialog** - Engaging popup for special offers
- **Intersection Observer** - Smart visibility controls
- **SEO Optimized** - Meta tags and structured content

### Development

1. Run `npm install` or `npm ci`
2. Run development server: `npm run dev`
3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build

```bash
npm run build
npm start
```

### Project Structure

```
components/
├── Accessories/          # Auto-scrolling carousel
├── FloatingButton/       # Base floating button component
├── FloatingContact/      # Scroll-based visibility
├── FloatingMap/         # Map navigation button
├── Header/              # Navigation with smooth scroll
├── Hero/                # Video background section
├── PromotionDialog/     # Modal with animations
├── Services/            # Pricing cards
├── Steps/               # Process explanation
└── Footer/              # Contact information
```

### Description

Modern, professional website for "Uratuj Smartfona" - a smartphone repair service in Olsztyn, Poland. Features a clean design with focus on user experience and conversion optimization.

### Live Site

https://uratuj-smartfona.pl

### Design System

- **Fonts**: Poppins (headings), Inter (body text)
- **Colors**: HSL-based color palette with accent turquoise
- **Layout**: 100vh sections with smooth transitions
- **Components**: Reusable, accessible UI components

### Semantic Versioning

This project uses semantic versioning with automated releases via semantic-release.

#### Commit Message Format

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

#### Commit Types

- **feat**: New features (minor version bump)
- **fix**: Bug fixes (patch version bump)
- **docs**: Documentation changes (patch version bump)
- **style**: Code style changes (patch version bump)
- **refactor**: Code refactoring (patch version bump)
- **perf**: Performance improvements (patch version bump)
- **test**: Adding or updating tests (patch version bump)
- **chore**: Maintenance tasks (patch version bump)

#### Release Process

1. Make commits following the conventional format
2. Push to main branch
3. Run `npm run release` to trigger semantic-release
4. Automatic version bump, changelog generation, and GitHub release

#### Example Commits

```bash
git commit -m "feat: add floating contact button"
git commit -m "fix: resolve mobile menu positioning issue"
git commit -m "docs: update README with new features"
git commit -m "style: improve button hover animations"
```
