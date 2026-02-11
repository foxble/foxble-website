# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based marketing/landing page website for "FOXBLE" built with Create React App. The project uses React Router for navigation and Semantic UI React for UI components.

## Development Commands

All commands should be run from the `website/` directory:

```bash
# Install dependencies (required before first run)
npm install

# Start development server (runs on localhost:3000)
npm start

# Build for production
npm build

# Run tests
npm test
```

## Architecture

### Routing Structure

The application uses `react-router-dom` v5 with client-side routing defined in `src/App.js`. All routes are wrapped in a shared `Layout` component that provides the MenuBar and Footer.

Routes:
- `/` - Home page
- `/About` - About page
- `/Contact` - Contact page (uses emailjs-com for contact form)
- `/Faqs` - FAQ page
- `/Support` - Support page
- `/Policies` - Policies page

### Component Organization

Components are organized into two categories:

- `src/components/navigations/` - Navigation components (MenuBar, Footer, Header)
- `src/components/pages/` - Page components (Home, About, Contact, Faqs, Support, Policies)

### Shared Layout

`src/layout/Layout.js` wraps all pages with:
- MenuBar (top navigation)
- Main content area (where page components render)
- Footer

Each component has a corresponding CSS file in the same directory for styling.

### Key Dependencies

- React Router DOM v5 - Client-side routing
- Semantic UI React - UI component library
- Material-UI Core - Additional UI components
- emailjs-com - Email service integration for contact forms
- sweetalert2 - Alert/modal dialogs

### Styling Approach

The project uses component-scoped CSS files (one CSS file per component). Semantic UI CSS is imported globally in `src/index.js`.
