# Tailwind CSS v3 to v4 Migration Plan

## Project: Leadshook v3
**Date:** November 26, 2025  
**Current Version:** Tailwind CSS v3.4.1  
**Target Version:** Tailwind CSS v4.0.0 (Stable - Released January 21, 2025)

---

## Executive Summary

This document outlines the step-by-step migration plan for upgrading Tailwind CSS from v3.4.1 to v4.0.0 (stable) in the Leadshook v3 Next.js project. Tailwind v4 introduces significant architectural changes, including CSS-first configuration, improved performance, and a new design token system.

**Status Update:** Tailwind CSS v4.0.0 stable was released on January 21, 2025. This migration plan is ready for production use.

---

## Current Setup Analysis

### Dependencies
- **Tailwind CSS:** v3.4.1
- **PostCSS:** v8
- **Next.js:** v16.0.0
- **Related packages:**
  - `tailwindcss-animate`: v1.0.7
  - `tailwind-merge`: v3.3.1
  - `class-variance-authority`: v0.7.1

### Configuration Files
- `tailwind.config.ts` - TypeScript config with theme extensions
- `postcss.config.mjs` - Basic PostCSS setup
- `app/globals.css` - CSS variables and custom animations

### Key Features in Use
1. **CSS Variables** - Extensive use of HSL color tokens
2. **Dark Mode** - Class-based dark mode implementation
3. **Custom Animations** - aurora, gradient-x, accordion, scroll
4. **Theme Extensions** - Border radius, colors, keyframes
5. **shadcn/ui Integration** - Design system with CSS variables
6. **Custom Utilities** - scrollbar-hide, scroll-faster

---

## Breaking Changes in Tailwind v4

**Note:** The `@tailwindcss/upgrade` CLI tool automates most of these migrations.

### ⚠️ Browser Requirements (CRITICAL)
- **Minimum versions:** Safari 16.4+, Chrome 111+, Firefox 128+
- Requires modern CSS features: `@property`, `color-mix()`, cascade layers
- **If you need older browser support, stay on v3.4**
- **Action Required:** Check Google Analytics for browser usage before proceeding

### 1. Configuration Format
- ❌ **Removed:** `tailwind.config.js/ts` files (can still be used via `@config` for complex cases)
- ✅ **New:** CSS-first configuration in `@import` rules
- Theme customization moves to CSS custom properties
- **Manual config:** Use `@config "./tailwind.config.js"` directive if needed

### 2. PostCSS/Build Tool Changes
- ❌ **Removed:** `tailwindcss` PostCSS plugin
- ✅ **New:** `@tailwindcss/postcss` package for PostCSS
- ✅ **Vite:** Use dedicated `@tailwindcss/vite` plugin (recommended for better performance)
- ✅ **CLI:** Now in `@tailwindcss/cli` package
- **Can remove:** `postcss-import` and `autoprefixer` (now built-in)

### 3. Import Syntax
```css
/* v3 */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* v4 */
@import "tailwindcss";
```

### 4. Utility Class Renames (Auto-migrated)

The upgrade tool handles these automatically:

| v3 Class | v4 Class | Notes |
|----------|----------|-------|
| `shadow-sm` | `shadow-xs` | Shadow scale renamed |
| `shadow` | `shadow-sm` | Default shadow renamed |
| `blur-sm` | `blur-xs` | Blur scale renamed |
| `blur` | `blur-sm` | Default blur renamed |
| `rounded-sm` | `rounded-xs` | Radius scale renamed |
| `rounded` | `rounded-sm` | Default radius renamed |
| `outline-none` | `outline-hidden` | Clearer naming |
| `ring` | `ring-3` | Width now explicit |
| `flex-grow-*` | `grow-*` | Simplified |
| `flex-shrink-*` | `shrink-*` | Simplified |
| `overflow-ellipsis` | `text-ellipsis` | Consistent naming |

### 5. Default Value Changes ⚠️

These may affect existing styling:

- **Border color:** Now `currentColor` (was `gray-200`)
  - Upgrade tool adds compatibility CSS automatically
- **Ring width:** Now `1px` (was `3px`)
  - Use `ring-3` to preserve old behavior
- **Ring color:** Now `currentColor` (was `blue-500`)
- **Placeholder color:** 50% opacity of text (was `gray-400`)
- **Button cursor:** `default` (was `pointer`)

### 6. Syntax Changes

**Important Modifier Position:**
```html
<!-- v3 (still works but deprecated) -->
<div class="!flex hover:!bg-red-500">

<!-- v4 (recommended) -->
<div class="flex! hover:bg-red-500!">
```

**CSS Variables in Arbitrary Values:**
```html
<!-- v3 -->
<div class="bg-[--brand-color]">

<!-- v4 -->
<div class="bg-(--brand-color)">
```

**Custom Utilities:**
```css
/* v3 */
@layer utilities {
  .tab-4 { tab-size: 4; }
}

/* v4 */
@utility tab-4 {
  tab-size: 4;
}
```

### 7. Hover Behavior Change

- Now media-query based: `@media (hover: hover)`
- Touch devices no longer trigger hover on tap
- Override if needed: `@custom-variant hover (&:hover);`

### 8. Theme & Content Detection

- Theme values now CSS variables in `:root`
- Use `var(--color-red-500)` instead of `theme(colors.red.500)`
- Automatic content detection (no `content` array needed)
- `@source` directive for custom patterns

### 9. CSS Preprocessors ⚠️ NOT SUPPORTED

- **Sass, Less, Stylus not supported** in v4
- Tailwind CSS v4 IS your preprocessor
- Remove any `.scss/.sass/.less/.styl` files using Tailwind

---

## Pre-Migration Checklist

### Phase 0: Critical Prerequisite - Browser Support Analysis 🚨

**BEFORE proceeding with any migration steps:**

- [ ] **Check Google Analytics browser data**
  - Safari minimum support: **16.4+**
  - Chrome minimum support: **111+**
  - Firefox minimum support: **128+**
  
- [ ] **Analyze user impact**
  - What % of users are on older browsers?
  - Are key customer segments affected?
  - Can we afford to drop legacy browser support?

**If significant traffic on older browsers:** STOP - v4 migration may require additional polyfills or may not be suitable yet.

**If browser requirements met:** Proceed with Phase 1 below.

---

- [ ] **Backup current state**
  - Create git branch: `migration/tailwind-v4`
  - Document current functionality
  - Take screenshots of all pages

- [ ] **Audit dependencies**
  - ✅ Check `tailwindcss-animate` v4 compatibility (CONFIRMED WORKING)
  - Verify `tailwind-merge` works with v4
  - Test `class-variance-authority` compatibility

- [ ] **Component inventory**
  - List all components using Tailwind classes
  - Document custom utilities and variants
  - Identify components with complex animations

- [ ] **Test coverage**
  - Ensure all pages render correctly
  - Test dark mode toggle
  - Verify responsive layouts

---

## Migration Steps

### Phase 1: Preparation (Week 1)

#### Step 1.1: Create Migration Branch
```bash
git checkout -b migration/tailwind-v4
git push -u origin migration/tailwind-v4
```

#### Step 1.2: Document Current State
- [ ] Screenshot all pages (light + dark mode)
- [ ] Export current `tailwind.config.ts` for reference
- [ ] List all custom animations and utilities
- [ ] Document color palette and design tokens

#### Step 1.3: Research Compatibility
- [x] ✅ Check Tailwind v4 documentation
- [x] ✅ Review `tailwindcss-animate` for v4 support - **[Complete research available](./TAILWIND_V4_ANIMATE_RESEARCH.md)**
- [ ] Test compatibility in isolated environment
- [ ] Review Next.js 16 + Tailwind v4 integration

### Phase 2: CSS Configuration Migration (Week 1-2)

#### Step 2.1: Update globals.css Structure
Transform `app/globals.css` to v4 syntax:

**Current Structure:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root { /* CSS variables */ }
}
```

**New v4 Structure:**
```css
@import "tailwindcss";

/* Theme configuration */
@theme {
  /* Move theme extensions here */
}

/* Design tokens remain in :root */
:root {
  /* Existing CSS variables */
}

/* Custom CSS */
@layer base {
  /* Custom base styles */
}
```

#### Step 2.1b: Add Border Compatibility CSS (Auto-generated)
The `@tailwindcss/upgrade` tool will automatically generate compatibility CSS:

```css
@layer base {
  *,
  ::after,
  ::before,
  ::backdrop,
  ::file-selector-button {
    border-color: var(--color-gray-200);
  }
}
```

**Decision:** Keep initially for safety, then gradually remove and migrate to explicit border colors or `currentColor` semantics.

#### Step 2.2: Convert Theme Configuration
Migrate `tailwind.config.ts` theme to CSS:

**From tailwind.config.ts:**
```typescript
theme: {
  extend: {
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    keyframes: { /* ... */ },
    animation: { /* ... */ }
  }
}
```

**To CSS (@theme block):**
```css
@theme {
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);
}
```

#### Step 2.3: Convert Dark Mode Configuration
```css
@media (prefers-color-scheme: dark) {
  :root {
    /* Dark theme variables */
  }
}

/* Class-based dark mode */
.dark {
  /* Dark theme variables */
}
```

### Phase 3: Package Updates (Week 2)

#### Step 3.1: Update package.json
```json
{
  "devDependencies": {
    "tailwindcss": "^4.0.0",
    "postcss": "^8.4.0",
    "@tailwindcss/upgrade": "^4.0.0"
  },
  "dependencies": {
    "tailwindcss-animate": "^1.0.7", // Works with v4 via compatibility layer
    "tailwind-merge": "^3.3.1" // Verify compatibility
  }
}
```

#### Step 3.2: Install Dependencies
```bash
npm install tailwindcss@latest
npm install @tailwindcss/upgrade@latest
npm install
```

#### Step 3.3: Update PostCSS Config
**Simplify `postcss.config.mjs`:**
```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // Tailwind v4 handles most processing internally
    '@tailwindcss/postcss': {},
  },
};

export default config;
```

### Phase 4: Configuration File Cleanup (Week 2)

#### Step 4.1: Archive Old Config
```bash
# Rename for reference
mv tailwind.config.ts tailwind.config.ts.v3.backup
```

#### Step 4.2: Create Minimal v4 Config (if needed)
Only create `tailwind.config.ts` if you need JavaScript-based configuration:

```typescript
import type { Config } from "tailwindcss";

export default {
  // v4 mostly uses CSS config
  // Keep only non-CSS configurable options here
} satisfies Config;
```

### Phase 5: Animation & Plugin Migration (Week 2-3)

#### Step 5.1: Migrate Custom Animations
Convert keyframes and animations to CSS-native approach:

```css
@keyframes accordion-down {
  from { height: 0; }
  to { height: var(--radix-accordion-content-height); }
}

/* Use with animation property */
.animate-accordion-down {
  animation: accordion-down 0.2s ease-out;
}
```

#### Step 5.2: Handle tailwindcss-animate
**✅ GOOD NEWS:** Plugin works with v4 through compatibility layer!

Options (in priority order):
1. **Use with v4 compatibility layer** (recommended, proven working)
   - Add `@plugin 'tailwindcss-animate'` to CSS
   - See [detailed compatibility research](./TAILWIND_V4_ANIMATE_RESEARCH.md)
2. **Migrate to native CSS** (future-proof, only 3 instances)
   - Complete migration guide in research doc
3. **Use Motion/Framer** (already a dependency)

#### Step 5.3: Update Custom Utilities
**BREAKING CHANGE:** Custom utilities now use `@utility` directive instead of `@layer utilities`:

```css
/* Before (v3) */
@layer utilities {
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
}

/* After (v4) */
@utility scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
}
```

**Note:** The `@tailwindcss/upgrade` tool should handle this conversion automatically.

### Phase 6: Component Testing (Week 3)

#### Step 6.1: Test Core Components

**Focus on breaking changes:**
- [ ] `resizable-navbar.tsx` - Check hover states (now media query based)
- [ ] `theme-toggle.tsx`
- [ ] `aurora-background.tsx` - Verify animations
- [ ] `google-gemini-effect.tsx` - Verify animations
- [ ] All section components
- [ ] **Border styling** - Default color changed to `currentColor`
- [ ] **Ring utilities** - Width changed from 3px to 1px
- [ ] **Shadow/blur classes** - Check for renamed utilities
- [ ] **Rounded corners** - Check for renamed utilities
- [ ] **Important modifiers** - Verify `!` position

#### Step 6.2: Test Pages
- [ ] `/` - Home page
- [ ] `/commander-clean` - Commander clean page
- [ ] `/experiment` - Experiment page
- [ ] `/parallax` - Parallax page
- [ ] `/skipper` - Skipper page

#### Step 6.3: Test Interactive Features
- [ ] Dark mode toggle
- [ ] Responsive layouts (mobile, tablet, desktop)
- [ ] Animations and transitions
- [ ] **Hover states** - Now require `@media (hover: hover)` for proper device detection
- [ ] Form inputs - Check placeholder colors (opacity changed)
- [ ] Focus rings - Verify default 1px width
- [ ] Outline utilities - Verify `outline-hidden` (was `outline-none`)

### Phase 7: Build & Performance Testing (Week 3-4)

#### Step 7.1: Development Build
```bash
npm run dev
```
- [ ] Verify no console errors
- [ ] Check HMR (Hot Module Replacement)
- [ ] Test Turbopack compatibility

#### Step 7.2: Production Build
```bash
npm run build
npm run start
```
- [ ] Check build time
- [ ] Verify CSS bundle size
- [ ] Test production performance

#### Step 7.3: Performance Benchmarks
Compare metrics:
- CSS file size (before vs after) - Expect **~20-30% reduction** with v4
- Build time - Expect **faster builds** with Lightning CSS engine
- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Cumulative Layout Shift (CLS)
- **Browser compatibility testing** - Safari 16.4+, Chrome 111+, Firefox 128+

### Phase 8: Netlify Deployment Testing (Week 4)

#### Step 8.1: Test Netlify Build
```bash
netlify build
```

#### Step 8.2: Deploy to Preview
```bash
netlify deploy --build
```

#### Step 8.3: Verify Production
- [ ] All styles render correctly
- [ ] Dark mode works
- [ ] Animations function properly
- [ ] No console errors

---

## Rollback Plan

### If Issues Arise:

1. **Immediate Rollback**
   ```bash
   git checkout main
   npm install
   ```

2. **Partial Rollback**
   - Revert specific commits
   - Keep working changes
   - Document blockers

3. **Incremental Approach**
   - Migrate one section at a time
   - Use feature flags if needed
   - Parallel v3/v4 testing

---

## Risk Assessment

### High Risk Items
1. ~~**tailwindcss-animate compatibility**~~ ✅ **MITIGATED** - [Research shows plugin works with v4](./TAILWIND_V4_ANIMATE_RESEARCH.md), only 3 usages
2. **Custom animations** - Need manual migration (low effort - already CSS-based)
3. **shadcn/ui components** - May need adjustments
4. **Build pipeline** - Netlify + Next.js 16 + Tailwind v4 integration

### Medium Risk Items
1. **Dark mode implementation** - Syntax changes
2. **CSS variable naming** - Potential conflicts
3. **Plugin ecosystem** - Limited v4 plugins initially

### Low Risk Items
1. **Basic utility classes** - Mostly backward compatible
2. **Color palette** - CSS variables remain unchanged
3. **Responsive design** - Breakpoints work the same

---

## Success Criteria

### Must Have ✅
- [ ] All pages render identically to v3
- [ ] No visual regressions
- [ ] Dark mode works perfectly
- [ ] Build succeeds without errors
- [ ] Production deployment works

### Nice to Have 🎯
- [ ] Improved build performance (>10% faster)
- [ ] Smaller CSS bundle size (>20% reduction)
- [ ] Better developer experience
- [ ] Cleaner configuration

---

## Timeline Estimate

| Phase | Duration | Dependencies |
|-------|----------|--------------|
| Phase 0: Automated Upgrade | 1-2 hours | None (run `@tailwindcss/upgrade`) |
| Phase 1: Preparation | 2-3 days | Phase 0 |
| Phase 2: CSS Migration | 1-2 days | Phase 1 (mostly automated) |
| Phase 3: Package Updates | 1 day | Phase 2 |
| Phase 4: Config Cleanup | 1 day | Phase 3 (mostly automated) |
| Phase 5: Animations | 1-2 days | Phase 4 (plugin works) |
| Phase 6: Testing | 5-7 days | Phase 5 |
| Phase 7: Performance | 2-3 days | Phase 6 |
| Phase 8: Deployment | 1-2 days | Phase 7 |
| **Total** | **2-3 weeks** | - (reduced with automation) |

---

## Resources & References

### Project Documentation
- 📋 **[tailwindcss-animate Compatibility Research](./TAILWIND_V4_ANIMATE_RESEARCH.md)** - Comprehensive analysis of plugin compatibility with v4

### Official Documentation
- [Tailwind CSS v4 Upgrade Guide](https://tailwindcss.com/docs/upgrade-guide)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Next.js + Tailwind CSS v4](https://nextjs.org/docs/app/building-your-application/styling/tailwind-css)

### Community Resources
- Tailwind CSS GitHub Discussions
- Next.js Discord community
- shadcn/ui migration guides

### Key Breaking Changes Reference
1. **Browser Requirements:** Safari 16.4+, Chrome 111+, Firefox 128+ minimum
2. **Utility Renames:** `shadow-sm`→`shadow-xs`, `ring`→`ring-3`, `outline-none`→`outline-hidden`, etc.
3. **Default Values:** Border color (`currentColor`), ring width (1px), placeholder color changes
4. **Syntax Changes:** Important modifier position, CSS variable syntax, custom utility directive
5. **CSS-first configuration:** `@import "tailwindcss"` replaces `@tailwind` directives
6. **Theme customization:** `@theme` block for CSS-based theme config
7. **Automatic content detection:** No more `content` array needed
8. **Hover behavior:** Media-query based (`@media (hover: hover)`)
9. **Updated plugin API:** v3 plugins work via compatibility layer

---

## Decision Log

| Date | Decision | Rationale | Owner |
|------|----------|-----------|-------|
| 2025-11-26 | Create migration plan | Prepare for v4 upgrade | Team |
| 2025-11-26 | ✅ Research tailwindcss-animate compatibility | [Plugin confirmed working with v4](./TAILWIND_V4_ANIMATE_RESEARCH.md) | Team |
| 2025-11-26 | ✅ Use v4 plugin compatibility layer | Proven working, minimal risk, only 3 usages | Team |
| TBD | Incremental migration strategy | Reduce risk | Team |

---

## Notes & Considerations

### Important Considerations:
1. **Browser Support:** ⚠️ **CRITICAL** - Requires Safari 16.4+, Chrome 111+, Firefox 128+ - verify analytics first
2. **CSS Preprocessors:** ⚠️ Sass/Less/Stylus NOT supported - ensure no files use them with Tailwind
3. **Timing:** ✅ Can proceed - tailwindcss-animate works with v4 ([see research](./TAILWIND_V4_ANIMATE_RESEARCH.md))
4. **Testing:** Extensive visual regression testing required (hover states, borders, rings changed behavior)
5. **Default Values:** Border color, ring width, placeholder color all changed - review carefully
6. **Documentation:** Update internal docs post-migration
7. **Training:** Team should review v4 syntax changes (important modifier, custom utilities)
8. **Monitoring:** Watch for production issues post-deployment

### Blockers to Resolve:
- [x] ~~tailwindcss-animate v4 compatibility status~~ ✅ **RESOLVED** - See [detailed research](./TAILWIND_V4_ANIMATE_RESEARCH.md)
- [ ] **CRITICAL:** Verify browser support requirements (Safari 16.4+, Chrome 111+, Firefox 128+) via analytics
- [ ] Check for any Sass/Less/Stylus files (NOT supported in v4)
- [ ] Review all custom `@layer utilities` → migrate to `@utility` syntax
- [ ] Next.js 16 fully compatible with Tailwind v4
- [ ] Netlify build plugin compatibility

### Open Questions:
1. ~~Should we wait for stable v4 release?~~ ✅ **ANSWERED** - v4.0.0 stable released January 21, 2025
2. Is there a codemod tool for automated migration? ✅ **YES** - `@tailwindcss/upgrade` package available
3. What's the shadcn/ui v4 migration story?
4. Do we need a staged rollout strategy?

---

## Conclusion

This migration plan provides a structured approach to upgrading Tailwind CSS from v3 to v4. The phased approach minimizes risk while ensuring thorough testing at each stage.

### Updated Assessment (Post-Research)

✅ **Major Risk Resolved:** tailwindcss-animate compatibility confirmed ([detailed research](./TAILWIND_V4_ANIMATE_RESEARCH.md))

Given the research findings and v4.0.0 stable release, we recommend:

1. ~~**Wait for ecosystem maturity**~~ ✅ **Ready to proceed** - v4.0.0 stable released, plugin compatibility confirmed
2. **Allocate 3-4 weeks** for the full migration (can use `@tailwindcss/upgrade` tool to automate much of it)
3. **Maintain v3 branch** until v4 is proven stable in production
4. **Consider feature flags** for gradual rollout (optional with stable release)

**Next Steps:**
1. Review and approve this plan
2. Create migration branch: `migration/tailwind-v4`
3. Run automated upgrade: `npx @tailwindcss/upgrade` (handles most migration automatically)
4. Test tailwindcss-animate in v4 environment (30 min validation)
5. Begin Phase 1 preparation
6. Set up testing environment

**Risk Level Updated:**
- **Before Research:** 🔴 HIGH (multiple unknown blockers)
- **After Research + Stable Release:** 🟢 LOW (v4.0.0 stable, automated tooling available, plugin compatibility confirmed)

---

**Document Version:** 1.0  
**Last Updated:** November 26, 2025  
**Status:** Ready for Review
