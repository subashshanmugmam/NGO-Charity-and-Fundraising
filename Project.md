# Event Management / Conference Website - Master Frontend Project Prompt

Create a comprehensive, modern event management and conference website with 10 complete HTML pages. This is a fully functional frontend application for managing conferences, events, and attendee registrations with both user and admin interfaces.

## Core Requirements

### Technology Stack
- **HTML5** with semantic markup
- **Tailwind CSS** via CDN for styling (use only core utility classes - no custom config)
- **Vanilla JavaScript** for all interactions
- **Responsive Design** - Mobile-first approach
- **RTL Support** - Bidirectional language toggle
- **Modern UI/UX** - Contemporary design with smooth animations

### Design Principles
- Clean, professional conference/event aesthetic
- Vibrant accent colors (blues, purples, or oranges)
- Ample whitespace and clear typography
- Smooth transitions and micro-interactions
- Accessible color contrast ratios
- Modern card-based layouts
- Glassmorphism effects where appropriate

## Pages to Create

### 1. **index.html** - Main Landing Page
**Purpose:** Primary homepage showcasing the event/conference

**Sections:**
- Hero section with:
  - Event title and tagline
  - Date, time, and location
  - Prominent CTA buttons (Register Now, View Schedule)
  - Background video or animated gradient
- Event highlights (4-6 key features in cards)
- Speaker showcase (grid of 6-8 featured speakers with photos)
- Event statistics counter (attendees, speakers, sessions, countries)
- Testimonials slider (3-5 testimonials)
- Sponsors/Partners section (logo grid)
- Newsletter signup form
- Footer with social links, Privacy Policy (#), Terms (#)

**Features:**
- Sticky navigation with transparency on scroll
- Smooth scroll to sections
- Animated counters
- Auto-playing testimonial carousel

---

### 2. **index2.html** - Alternative Landing Page
**Purpose:** Different design approach for A/B testing

**Sections:**
- Full-screen hero with split layout (content left, image/video right)
- "Why Attend" section with icons and descriptions
- Upcoming sessions preview (3 featured sessions)
- Interactive venue map or location info
- Pricing tiers (if applicable) or registration packages
- FAQ accordion (6-8 common questions)
- Call-to-action banner
- Footer

**Differences from index.html:**
- Different layout structure
- Alternative color scheme
- Different content hierarchy
- Unique interactive elements

---

### 3. **event-details.html** - Comprehensive Event Information
**Purpose:** Detailed information about the conference/event

**Sections:**
- Page hero with event image and key details
- Tabbed interface with sections:
  - **About:** Full event description, objectives, target audience
  - **Venue:** Location details, map embed (use placeholder), directions, accommodation
  - **Speakers:** Complete speaker list with bios (expandable cards)
  - **Tracks:** Different conference tracks/themes
  - **Sponsors:** Tiered sponsor showcase (Platinum, Gold, Silver)
- Event timeline/important dates
- Registration CTA sidebar (sticky on desktop)
- Related events section
- Footer

**Features:**
- Interactive tabs
- Expandable speaker bio cards
- Smooth transitions
- Sticky registration widget

---

### 4. **schedule.html** - Event Schedule/Agenda
**Purpose:** Complete session schedule and agenda

**Sections:**
- Schedule overview with date selector
- Filter options:
  - By track/theme
  - By speaker
  - By session type (keynote, workshop, panel)
- Multi-day schedule tabs
- Session cards displaying:
  - Time and duration
  - Session title and description
  - Speaker(s) with photo
  - Track/category badge
  - Room/location
  - "Add to Calendar" button
- Search functionality
- Export schedule button (PDF placeholder)
- Footer

**Features:**
- Active filters with visual feedback
- Real-time search filtering
- Session detail modal on click
- Calendar export option (button)
- Mobile-optimized timeline view

---

### 5. **contact.html** - Contact Page
**Purpose:** Contact information and inquiry form

**Sections:**
- Page hero
- Contact form with fields:
  - Name (required)
  - Email (required)
  - Phone
  - Subject dropdown (General Inquiry, Speaker Application, Sponsorship, Media)
  - Message (textarea, required)
  - Submit button
- Contact information cards:
  - Email address
  - Phone number
  - Office address with map
  - Social media links
- Office hours
- Team directory (3-4 key contacts with photos)
- Footer

**Features:**
- Form validation with error messages
- Success message after submission
- Interactive map placeholder
- Click-to-copy contact details

---

### 6. **register.html** - Attendee Registration
**Purpose:** Event registration form

**Sections:**
- Registration progress indicator (steps)
- Multi-step form:
  - **Step 1:** Personal Information
    - First Name, Last Name
    - Email, Phone
    - Company/Organization
    - Job Title
  - **Step 2:** Registration Type
    - Ticket type selection (cards with pricing)
    - Dietary restrictions
    - Accessibility requirements
  - **Step 3:** Additional Preferences
    - Session interests (checkboxes)
    - T-shirt size
    - Networking preferences
  - **Step 4:** Review & Payment
    - Summary of selections
    - Payment form placeholder
    - Terms acceptance checkbox
- Pricing summary sidebar (sticky)
- Footer

**Features:**
- Multi-step form with progress bar
- Form validation per step
- Back/Next navigation
- Data persistence in sessionStorage
- Success confirmation message
- Animated transitions between steps

---

### 7. **login.html** - User Authentication
**Purpose:** Login page for registered attendees and admins

**Sections:**
- Centered login card
- Login form:
  - Email/Username
  - Password
  - "Remember me" checkbox
  - Submit button
- "Forgot password?" link
- Social login options (Google, LinkedIn buttons - placeholders)
- "Don't have an account? Register" link
- Background with gradient or pattern
- Minimal footer

**Features:**
- Form validation
- Password visibility toggle
- Demo credentials display (for testing)
- Error message handling
- Redirect logic (admin → admin-dashboard, user → user-dashboard)

---

### 8. **admin-dashboard.html** - Admin Control Panel
**Purpose:** Event management dashboard for administrators

**Sections:**
- Sidebar navigation with icons:
  - Overview
  - Attendees
  - Speakers
  - Schedule
  - Tickets
  - Analytics
  - Settings
  - Logout
- Top header with:
  - Breadcrumb navigation
  - Search bar
  - Notifications bell
  - Admin profile dropdown
- Main content area (Overview selected by default):
  - KPI cards (Total Attendees, Revenue, Sessions, Speakers)
  - Attendance chart (line/bar chart placeholder or use Chart.js)
  - Recent registrations table
  - Upcoming sessions list
  - Quick actions buttons
- Footer

**Features:**
- Collapsible sidebar
- Tab-like navigation within main area
- Sortable data tables
- Mock data for all sections
- Responsive layout
- Chart visualizations
- Action buttons (Edit, Delete, View)

---

### 9. **user-dashboard.html** - Attendee Dashboard
**Purpose:** Personalized dashboard for registered attendees

**Sections:**
- User greeting with profile photo
- Quick stats cards:
  - Sessions registered
  - Networking connections
  - Days until event
- My Schedule section:
  - Upcoming sessions list
  - Calendar view toggle
- Networking section:
  - Suggested connections (attendee cards)
  - Meeting requests
- My Tickets:
  - QR code ticket display
  - Download ticket button
- Event updates feed
- Profile settings link
- Footer

**Features:**
- Editable profile information
- Add/remove sessions from schedule
- Download ticket as image
- Mock QR code generation
- Responsive cards
- Interactive calendar

---

### 10. **404.html** - Error Page
**Purpose:** User-friendly 404 error page

**Sections:**
- Large "404" typography with animation
- Error message: "Page Not Found"
- Helpful description
- Search bar to find content
- Quick links:
  - Back to Home
  - View Schedule
  - Register Now
  - Contact Us
- Illustration or animated graphic
- Minimal footer

**Features:**
- Animated 404 text
- Functional search bar (redirects to schedule with query)
- Engaging visual design
- Back button functionality

---

### 11. **coming-soon.html** - Coming Soon Page
**Purpose:** Pre-launch or feature announcement page

**Sections:**
- Full-screen centered layout
- Event/feature title
- Countdown timer (days, hours, minutes, seconds)
- Brief description
- Email notification signup form
- Social media links
- Background with parallax or video
- Minimal footer

**Features:**
- Live countdown timer using JavaScript
- Email validation
- Success message after signup
- Animated background
- Responsive design

---

## Shared Components

### Navigation Bar (All Pages)
- Logo (left)
- Menu items: Home, Event Details, Schedule, Register, Contact
- Language/RTL toggle button (icon)
- Login button (right)
- Mobile hamburger menu
- Sticky on scroll with background color change

### Footer (All Pages)
- Logo and brief description
- Quick links column
- Contact information column
- Social media icons (Facebook, Twitter, LinkedIn, Instagram, YouTube)
- Newsletter signup
- Footer bottom: Copyright, Privacy Policy (#), Terms of Service (#)

### Shared UI Components
- **Buttons:** Primary, secondary, outline variants
- **Cards:** Standard card component with hover effects
- **Modals:** For session details, confirmations
- **Form inputs:** Consistent styling with labels, placeholders, validation states
- **Badges:** For tracks, categories, status indicators
- **Loaders:** Spinner for form submissions
- **Toasts/Alerts:** Success, error, warning, info messages

---

## JavaScript Functionality (main.js)

### Required Features
1. **Mobile Navigation:**
   - Hamburger menu toggle
   - Smooth open/close animations
   - Close on outside click

2. **Smooth Scrolling:**
   - Anchor link smooth scroll
   - Scroll-to-top button (appears after scrolling)

3. **Form Validation:**
   - Real-time validation
   - Error message display
   - Success states
   - Prevent submission if invalid

4. **Multi-step Form (register.html):**
   - Step navigation
   - Progress indicator update
   - Form data in sessionStorage
   - Final submission handling

5. **Tabs/Accordions:**
   - Tab switching (event-details.html)
   - Accordion toggle (FAQ sections)
   - Active state management

6. **Search/Filter (schedule.html):**
   - Real-time session filtering
   - Multiple filter combinations
   - Clear filters option

7. **Countdown Timer (coming-soon.html):**
   - Calculate time until target date
   - Update every second
   - Display days, hours, minutes, seconds

8. **Dashboard Interactions:**
   - Sidebar collapse/expand
   - Tab navigation
   - Table sorting
   - Action button handlers

9. **Modals:**
   - Open/close functionality
   - Backdrop click to close
   - Escape key to close

10. **Animations:**
    - Scroll-triggered animations
    - Counter animations (statistics)
    - Carousel auto-play

---

## RTL Support (rtl-toggle.js)

### Functionality
- Toggle button in navigation
- Switch `dir` attribute on `<html>` element
- Save preference to localStorage
- Load saved preference on page load
- Update toggle button state
- Ensure all layouts work in both LTR and RTL

### Implementation Notes
- Use Tailwind's RTL utilities (rtl: variants)
- Test all interactive elements in both directions
- Ensure proper icon flipping where needed

---

## Styling Guidelines (Tailwind CSS)

### Color Palette
- **Primary:** Blue (#3B82F6) or Purple (#8B5CF6) or Orange (#F97316)
- **Secondary:** Complementary color
- **Accent:** Vibrant highlight color
- **Neutral:** Grays for text and backgrounds
- **Success:** Green
- **Error:** Red
- **Warning:** Yellow

### Typography
- **Headings:** Bold, large font sizes (text-4xl, text-5xl, text-6xl)
- **Body:** text-base or text-lg for readability
- **Font Family:** Default sans-serif or Google Fonts (Inter, Poppins, Montserrat)

### Spacing
- Consistent padding and margins using Tailwind scale
- Section padding: py-16 or py-20
- Container max-width: max-w-7xl mx-auto

### Components
- **Cards:** Rounded corners, shadow, hover lift effect
- **Buttons:** Rounded, padding, hover states, focus rings
- **Forms:** Consistent height, padding, border styling
- **Navigation:** Backdrop blur on scroll

### Responsive Breakpoints
- Mobile: default
- Tablet: md:
- Desktop: lg: and xl:

---

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge - last 2 versions)
- CSS Grid and Flexbox
- ES6+ JavaScript features
- No IE11 support required

---

## Performance Considerations
- Optimize images (use placeholder images with appropriate dimensions)
- Minimize DOM manipulation
- Use CSS transforms for animations
- Debounce search/filter functions
- Lazy load images where beneficial

---

## Accessibility
- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Focus visible styles
- Alt text for images
- Color contrast compliance (WCAG AA)
- Skip to main content link

---

## Assets Needed (Placeholders)

### Images
- Event hero images (1920x1080)
- Speaker photos (400x400, circular)
- Venue photos
- Sponsor logos (various sizes)
- Background patterns/textures
- Icons (use Heroicons or Font Awesome via CDN)

### Icons
- Navigation icons
- Social media icons
- Feature/benefit icons
- UI icons (search, filter, calendar, etc.)

---

## Special Instructions

1. **No localStorage/sessionStorage for persistent data** except for RTL preference and multi-step form data (session only)
2. **All forms use mock submission** - display success message without actual backend
3. **Demo credentials for login:**
   - Admin: admin@event.com / admin123
   - User: user@event.com / user123
4. **Use CDN links only** - no npm packages
5. **Single file per page** - all CSS inline via Tailwind, all JS either inline or in shared files
6. **Mobile-first approach** - design for mobile, enhance for desktop
7. **Print-friendly schedule page** (bonus)
8. **Consistent date/time format** throughout site

---

## Deliverable Structure

```
event-conference-website/
├── index.html
├── index2.html
├── event-details.html
├── schedule.html
├── contact.html
├── register.html
├── login.html
├── admin-dashboard.html
├── user-dashboard.html
├── 404.html
├── coming-soon.html
├── js/
│   ├── main.js
│   └── rtl-toggle.js
└── assets/
    └── images/
        └── (placeholder images)
```

---

## Final Notes

Create a cohesive, professional event management website that feels modern, trustworthy, and easy to navigate. The design should inspire confidence in attendees and provide powerful tools for administrators. Focus on clean layouts, smooth interactions, and delightful micro-animations. Every page should feel connected through consistent design language while serving its unique purpose effectively.

Make the website feel like a premium conference experience from start to finish.