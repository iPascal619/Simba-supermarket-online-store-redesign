# Contributing to Simba Supermarket Redesign

Thank you for your interest in contributing to the Simba Supermarket redesign project! This document provides guidelines and information for contributors.

## 🎯 Project Overview

This is a complete redesign of the existing Simba Supermarket online platform, built with modern web technologies to provide a world-class grocery shopping experience for customers in Rwanda.

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0.0 or higher
- npm, yarn, or pnpm
- Git
- Basic knowledge of React, Next.js, and TypeScript

### Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/simba-supermarket-redesign.git
   cd simba-supermarket-redesign
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   ```

5. **Set up the database**:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

6. **Start the development server**:
   ```bash
   npm run dev
   ```

## 🛠️ Development Guidelines

### Code Style
- **TypeScript**: Use TypeScript for all new code
- **Formatting**: Code is automatically formatted with Prettier
- **Linting**: Follow ESLint rules (run `npm run lint`)
- **Components**: Use functional components with hooks
- **Styling**: Use Tailwind CSS classes, avoid custom CSS when possible

### Naming Conventions
- **Files**: Use PascalCase for components (`ProductCard.tsx`)
- **Functions**: Use camelCase (`addToCart`)
- **Constants**: Use UPPER_SNAKE_CASE (`API_BASE_URL`)
- **CSS Classes**: Use kebab-case for custom classes

### Component Structure
```typescript
'use client' // If client component

import React from 'react'
import { useState } from 'react'

interface ComponentProps {
  // Define props here
}

export default function ComponentName({ prop1, prop2 }: ComponentProps) {
  // Component logic here
  
  return (
    <div className="tailwind-classes">
      {/* JSX here */}
    </div>
  )
}
```

### Git Workflow

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the guidelines above

3. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

4. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request** on GitHub

### Commit Message Format
We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation changes
- `style:` formatting, missing semicolons, etc.
- `refactor:` code restructuring
- `test:` adding tests
- `chore:` maintenance tasks

Examples:
```bash
feat: add product wishlist functionality
fix: resolve cart quantity update issue
docs: update API documentation
style: format header component
```

## 🧪 Testing

### Before Submitting
- [ ] Run `npm run build` to ensure the project builds
- [ ] Run `npm run lint` to check for linting errors
- [ ] Test your changes in different screen sizes
- [ ] Test authentication flows if applicable
- [ ] Verify cart and wishlist functionality

### Manual Testing Checklist
- [ ] Homepage loads correctly
- [ ] Navigation works on mobile and desktop
- [ ] Product catalog displays properly
- [ ] Cart functionality works (add/remove/update)
- [ ] Wishlist functionality works
- [ ] Authentication flows work
- [ ] Forms validate correctly
- [ ] Error states display appropriately

## 📝 Pull Request Guidelines

### Before Creating a PR
- Ensure your code follows the style guidelines
- Update documentation if needed
- Test your changes thoroughly
- Rebase your branch on the latest main branch

### PR Description Template
```markdown
## Description
Brief description of what this PR does.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Changes Made
- Change 1
- Change 2
- Change 3

## Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested authentication
- [ ] Tested cart functionality
- [ ] Tested wishlist functionality

## Screenshots (if applicable)
Add screenshots of UI changes.

## Additional Notes
Any additional information about the changes.
```

## 🐛 Bug Reports

When reporting bugs, please include:
- **Description**: Clear description of the issue
- **Steps to Reproduce**: Exact steps to reproduce the bug
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Screenshots**: If applicable
- **Environment**: Browser, OS, device type
- **Console Errors**: Any JavaScript errors in the console

## 💡 Feature Requests

When suggesting features:
- **Description**: Clear description of the feature
- **Use Case**: Why this feature would be useful
- **Mockups**: Visual mockups if applicable
- **Technical Considerations**: Any technical aspects to consider

## 📚 Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [NextAuth.js Documentation](https://next-auth.js.org)

### Design Resources
- [Figma Design System](link-to-figma) (if available)
- [Brand Guidelines](link-to-brand-guidelines) (if available)

## 📞 Getting Help

If you need help or have questions:
- **GitHub Issues**: Create an issue for bugs or feature requests
- **Discussions**: Use GitHub Discussions for general questions
- **Email**: tech@simbasupermarket.rw for direct communication

## 🙏 Recognition

Contributors will be recognized in:
- GitHub contributors list
- Project documentation
- Special mentions in release notes

Thank you for helping make Simba Supermarket's online platform better for everyone! 🛒✨
