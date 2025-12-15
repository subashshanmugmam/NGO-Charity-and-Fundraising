# TechSummit 2025 - Conference & Event Website

![TechSummit 2025](https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

A premium, high-performance HTML5 template designed for modern technology conferences, events, and summits. Built with scalability and user experience in mind, TechSummit 2025 offers a stunning visual design, seamless responsive layout, and integrated RTL support.

## 🚀 Key Features

*   **Premium UI/UX Design**: Modern aesthetics with glassmorphism effects, smooth animations, and tailored color palettes.
*   **Fully Responsive**: Optimized for all devices, from large desktop screens to mobile phones.
*   **Dual Home Versions**:
    *   **Home V1 (Light Mode)**: Clean, professional layout ideal for improved readability.
    *   **Home V2 (Dark Mode)**: Immersive, tech-centric dark theme with vibrant accents.
*   **Comprehensive Pages**:
    *   Event Details & Schedule
    *   User & Admin Dashboards
    *   Registration & Login (with demo credentials)
    *   Contact & Support
*   **Global RTL Support**: One-click Globe Icon toggle for Right-to-Left language support across the entire platform.
*   **Interactive Elements**:
    *   Dynamic Countdown Timer
    *   Filtering Systems for Schedule
    *   Tabs for structured content
    *   Form Validation
*   **Tech Stack**:
    *   HTML5 & CSS3
    *   **Tailwind CSS** (via CDN for instant deployment)
    *   Vanilla JavaScript (No heavy framework dependencies)
    *   Font Awesome Icons & Google Fonts

## 📂 Project Structure

```
/
├── index.html              # Home V1 (Light)
├── index2.html             # Home V2 (Dark)
├── event-details.html      # Event Info
├── schedule.html           # Conference Agenda
├── user-dashboard.html     # Attendee Dashboard
├── admin-dashboard.html    # Admin Control Panel
├── login.html              # Authentication
├── register.html           # Registration Flow
├── contact.html            # Contact Form
├── js/
│   ├── main.js             # Core Logic
│   └── rtl-toggle.js       # Language Direction Handler
└── event-conference-website/  # Subdirectory Implementation
```

## 🛠️ Setup & Usage

### 1. Requirements
This is a static HTML/CSS/JS project. You do not need a backend server to run it locally.
*   A modern web browser (Chrome, Firefox, Edge, Safari).
*   A code editor (VS Code recommended) for modifications.

### 2. running Locally
Simply open any `.html` file (e.g., `index.html`) in your browser.
or use a local server:
```bash
npx serve .
```

### 3. Deployment
This project is ready for deployment on any static hosting provider.

**Netlify / Vercel / GitHub Pages:**
1.  Upload the project folder.
2.  Set the build command to *empty* (or just copy files).
3.  Set the publish directory to `/`.

## 🌍 RTL Support
The project features a verified RTL (Right-to-Left) mode.
*   Click the **Globe Icon** in the navigation bar to toggle between LTR and RTL.
*   The preference is saved in `localStorage` for a persistent experience.

## 📱 Mobile Experience
*   Fully optimized mobile navigation with smooth transitions.
*   Ticket QR codes and schedules are easily accessible on small screens.

---
© 2025 TechSummit. All Rights Reserved.
