# Deployment Guide for TechSummit 2025

This project is a static HTML/CSS/JS website, which makes it extremely easy and cost-effective to deploy.

## Option 1: Netlify (Recommended)

1.  **Drag & Drop**:
    *   Go to [app.netlify.com](https://app.netlify.com).
    *   Log in or Sign up.
    *   Drag your entire project folder onto the "Sites" area.
    *   Netlify will automatically deploy it.

2.  **Git Integration** (for continuous deployment):
    *   Push your code to GitHub/GitLab/Bitbucket.
    *   In Netlify, click "New site from Git".
    *   Select your repository.
    *   **Build settings**: Leave empty (it's a static site).
    *   **Publish directory**: `/` (or leave empty).
    *   Click "Deploy site".

## Option 2: Vercel

1.  **CLI**:
    *   Install Vercel CLI: `npm i -g vercel`
    *   Run `vercel` in your project folder.
    *   Follow the prompts (defaults are usually correct).

2.  **Git Integration**:
    *   Go to [vercel.com](https://vercel.com).
    *   Click "Add New..." -> "Project".
    *   Import your Git repository.
    *   Framework Preset: "Other".
    *   Click "Deploy".

## Option 3: GitHub Pages

1.  Go to your GitHub repository details.
2.  Click **Settings** -> **Pages**.
3.  Under **Source**, select `Deploy from a branch`.
4.  Select your `main` branch and `/` (root) folder.
5.  Click **Save**.

## Pre-Deployment Checklist

*   [ ] **Check Images**: Ensure all `src` attributes are correct and images load.
*   [ ] **Test RTL**: Verify the Globe icon toggles direction correctly on mobile and desktop.
*   [ ] **Links**: Click all navigation links to ensure they work (`index.html`, `index2.html`, etc.).
*   [ ] **Mobile View**: Open Chrome DevTools (F12) -> Toggle Device Toolbar to check responsiveness.
*   [ ] **Console Errors**: Check the browser console for any JavaScript errors.
