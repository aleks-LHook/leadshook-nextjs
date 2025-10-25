# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Running the Application
```bash
npm run dev          # Start development server with Turbopack on port 3000
npm run build        # Build production bundle
npm run start        # Start production server
npm run lint         # Run ESLint
```

**Important**: The dev server uses Turbopack for extremely fast hot module replacement. If port 3000 is occupied, Next.js will automatically use the next available port (e.g., 3001).

## Project Architecture

### Technology Stack
- **Next.js 16.0.0** with App Router and Turbopack
- **React 19.2.0** with React Compiler enabled (`reactCompiler: true` in next.config.ts)
- **TypeScript 5** for type safety
- **Tailwind CSS 3.4.1** with CSS variables for theming
- **Motion (Framer Motion)** for animations
- **tsParticles** for particle effects
- **Cobe** for 3D globe rendering

### Directory Structure
```
app/                     # Next.js App Router
├── layout.tsx          # Root layout with dark mode class
├── page.tsx            # Home page
└── globals.css         # Tailwind + CSS variables theming

components/
├── ui/                 # Reusable UI components
│   ├── cover.tsx              # Animated text with sparkles/beams
│   ├── sparkles.tsx           # Particle system
│   ├── resizable-navbar.tsx   # Responsive nav with scroll effects
│   └── glowing-effect.tsx     # Mouse-tracking border glow
├── navbar-wrapper.tsx         # Navbar state management
└── features-section-demo-*.tsx # Feature showcase sections

lib/
└── utils.ts            # cn() utility (clsx + tailwind-merge)
```

### Key Architectural Patterns

**1. Client Components for Interactivity**
All components using React hooks (useState, useEffect, useRef, useMemo) or animations must have `"use client"` directive at the top. Server components are the default in app directory.

**2. CSS Variable Theming**
Colors use CSS variables defined in `app/globals.css`:
- Light/dark modes with `--background`, `--foreground`, etc.
- Access via Tailwind classes: `bg-background`, `text-foreground`
- Dark mode is always active via `className="dark"` on `<html>` in layout.tsx

**3. Motion Animations**
- Import from `motion/react` (not `framer-motion`)
- Use `motion.div`, `motion.span`, `AnimatePresence` for animations
- Common patterns: scale, opacity, x/y transforms, spring physics

**4. Utility-First Styling**
- All styling via Tailwind classes
- Use `cn()` from `@/lib/utils` to merge classes safely
- Responsive: mobile-first with md:/lg:/xl: breakpoints
- Example: `cn("px-4", isActive && "bg-primary", className)`

**5. Hydration Safety**
Avoid `Math.random()` or `Date.now()` in render. Use `useMemo()` to stabilize random values:
```typescript
const rotations = useMemo(() =>
  items.map(() => Math.random() * 20 - 10),
[]); // Empty deps = stable across hydration
```

### Component Patterns

**Resizable Navbar** (`components/ui/resizable-navbar.tsx`):
- Exports: `Navbar`, `NavBody`, `NavItems`, `MobileNav`, `MobileNavHeader`, `MobileNavMenu`, `MobileNavToggle`, `NavbarLogo`, `NavbarButton`
- NavBody shrinks to 40% width on scroll (past 100px)
- Mobile uses AnimatePresence for menu transitions
- Always wrap in client component for state management

**Cover Component** (`components/ui/cover.tsx`):
- Wraps text with animated sparkles and beams on hover
- Uses SparklesCore (particle system) and Beam (SVG gradient)
- Example: `<Cover>warp speed</Cover>`

**Glowing Effect** (`components/ui/glowing-effect.tsx`):
- Add to any container for mouse-tracking border glow
- Props: `disabled={false}` to activate, `blur`, `spread`, `variant`
- Uses requestAnimationFrame for smooth tracking
- Example: `<GlowingEffect disabled={false} />`

**Feature Sections**:
- `features-section-demo-1.tsx`: Grid cards with pattern backgrounds
- `features-section-demo-2.tsx`: Icon-based grid with hover effects
- `features-section-demo-3.tsx`: Bento grid with globe, images, video preview
  - Uses GlowingEffect on each card
  - SkeletonFour renders 3D globe with Cobe
  - SkeletonTwo uses useMemo for stable image rotations

### React Compiler & Turbopack

**React Compiler**:
- Enabled in `next.config.ts`
- Automatically memoizes components and callbacks
- Reduces need for manual `useMemo`/`useCallback`
- No code changes required

**Turbopack**:
- Activated via `--turbopack` flag in dev script
- 700x faster HMR than Webpack
- Shows "Next.js 16.0.0 (Turbopack)" on startup
- Compiles on-demand for faster initial load

### Import Aliases
Use `@/*` for all imports from project root:
```typescript
import { cn } from "@/lib/utils";
import { Cover } from "@/components/ui/cover";
import NavbarWrapper from "@/components/navbar-wrapper";
```

### Animation Libraries

**Motion Library**:
- Use `animate={{ }}` for target states
- Use `initial={{ }}` for starting states
- Use `transition={{ }}` for timing/easing
- Spring physics: `type: "spring", stiffness: 200, damping: 50`
- Linear: `ease: "linear", duration: 2`

**tsParticles**:
- Async initialization: `await initParticlesEngine()`
- Configure via `options` prop
- Common settings: particleDensity, minSize, maxSize, particleColor

**Cobe Globe**:
- Requires canvas ref: `useRef<HTMLCanvasElement>(null)`
- Configure in useEffect with `createGlobe()`
- Animate via `onRender` callback updating `phi`
- Cleanup: `globe.destroy()` in useEffect return

### MCP Integration
`.mcp.json` configures Chrome DevTools MCP server:
- Enables AI-assisted debugging
- Run via `npx chrome-devtools-mcp@latest`
- Activated when `enableAllProjectMcpServers: true` in `.claude/settings.local.json`

### Common Patterns

**Adding New UI Components**:
1. Create in `components/ui/[name].tsx` with `"use client"` if interactive
2. Export main component and sub-components
3. Use TypeScript interfaces for props
4. Style with Tailwind + cn() utility
5. Import in page/component: `import { Component } from "@/components/ui/[name]"`

**Adding New Pages**:
1. Create `app/[route]/page.tsx`
2. Export default function component
3. Add metadata export if needed
4. Use existing layout.tsx (shared across routes)

**Handling Forms/State**:
- Use `useState` for local state
- Client component required (`"use client"`)
- Form validation: consider react-hook-form (not installed yet)

**Working with Images**:
- Use Next.js `<Image>` from `next/image` for optimization
- Or standard `<img>` for external URLs (as in current code)
- Place static images in `/public` directory

### TypeScript Configuration
- Strict mode enabled
- Import paths: `@/*` resolves to project root
- Target: ES2017 with ESNext modules
- Include Next.js plugin for route types
- JSX mode: preserve (handled by Next.js)

### Tailwind Configuration
- Dark mode via class selector (always active)
- Container: centered, 2rem padding, 1400px max
- Custom animations: accordion-down, accordion-up
- Plugin: tailwindcss-animate
- Border radius variables: `rounded-lg/md/sm`

### Performance Considerations
- React Compiler handles most memoization
- Use `useMemo` only for expensive computations or hydration stability
- Lazy load heavy components with `dynamic()` from `next/dynamic`
- Images: always specify width/height to prevent layout shift
- Animations: prefer GPU-accelerated properties (transform, opacity)

### Debugging with Chrome DevTools MCP
After configuring `.mcp.json`, you can:
- Analyze performance metrics (LCP, FID, CLS)
- Run Lighthouse audits
- Inspect network requests
- Monitor console output
- Access via AI assistant commands
