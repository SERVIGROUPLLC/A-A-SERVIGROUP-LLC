# A&A SERVIGROUP LLC - Corporate Website

## Project Overview

This repository contains the source code for the official website of A&A SERVIGROUP LLC, a company specializing in professional residential and commercial cleaning services. The website is designed to provide a comprehensive overview of services, service areas, and company information, serving as a primary digital touchpoint for client acquisition and engagement.

## Technical Architecture

The project is built using a modern, standards-based front-end stack, ensuring high performance, accessibility, and broad cross-browser compatibility without heavy dependencies.

### Technologies Used

- **HTML5**: Semantic markup layout for better SEO and accessibility structure.
- **CSS3**: Custom styling using CSS Variables (Custom Properties) for consistent theming.
  - **Layout Systems**: Extensive use of CSS Grid and Flexbox for responsive structural orchestration.
  - **Responsive Design**: Mobile-first approach with breakpoints optimized for mobile, tablet, and desktop viewports.
- **JavaScript (ES6+)**:
  - DOM manipulation for interactive elements (Mobile navigation, Modal/Lightbox).
  - Event handling for UI state management.
  - Native Intersection Observer API for scroll-based animations.

## Key Features

1.  **Responsive Layout**: Fully adaptive interface that scales seamlessly across devices, from mobile phones to large desktop screens.
    - _Mobile Landscape Optimization_: Specific media queries to handle landscape orientation on smaller devices.
2.  **Interactive Image Gallery**:
    - Custom Lightbox implementation allowing users to view high-resolution images.
    - Lazy loading enabled for performance optimization.
3.  **Service Promotions System**:
    - Unified horizontal layout for promotion visibility.
    - Integrated CSS-based styling for clean, divider-free presentation.
4.  **Client Communication**:
    - Integrated floating WhatsApp button for direct instant messaging.
    - Contact form integration capabilities.
5.  **SEO & Social Optimization**:
    - Open Graph (OG) meta tags configured for enhanced social media sharing.
    - Semantic document structure to support search engine indexing.

## Project Structure

- `index.html`: The primary entry point containing the document structure and content.
- `css/styles.css`: The central stylesheet containing all design rules, variables, and media queries.
- `js/main.js`: Contains logic for navigation toggling, scroll animations, and gallery interactions.
- `images/`: Directory storing optimized assets for the gallery, logo, and UI elements.

## Installation & Deployment

### Local Development

To run this project locally:

1.  Clone the repository to your local machine.
2.  Open the `index.html` file in any modern web browser.
3.  No build step or package manager (npm/yarn) is required for basic viewing.

### Deployment

The site is static and can be deployed to any static site host (Netlify, GitHub Pages, Vercel).

- **GitHub Pages**: Push to the `main` branch and enable GitHub Pages in repository settings.
- **Netlify**: Drag and drop the root folder or connect via Git.

## License

This project is licensed under the MIT License.
Copyright (c) 2026 SERVIGROUPLLC.
See the `LICENSE` file for details.
