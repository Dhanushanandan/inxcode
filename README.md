
# Inxcode Startup Website

![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)

---

## Overview

Inxcode Startup Website is a modern, minimalist landing page built with **React**, **TypeScript**, and **Tailwind CSS**. Designed to showcase a startup's profile, it includes sections for navigation, hero content, about information, services, portfolio, contact form, and footer.

---

## Features

- **Responsive Design:** Mobile-first layout with smooth scrolling.
- **Component-Based Architecture:** Built using React functional components.
- **Styling:** Utilizes Tailwind CSS for rapid, responsive styling.
- **Form Validation:** Basic client-side validation for the contact form.
- **Code Quality:** ESLint and Prettier configured for consistent formatting.

---

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Dhanushanandan/Inxcode_site.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd Inxcode_site
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   ```

5. **Open the app:**

   Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## Folder Structure

```plaintext
Inxcode_site/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Deployment

To deploy the app:

1. **Install Vercel CLI:**

   ```bash
   npm install -g vercel
   ```

2. **Deploy the project:**

   ```bash
   vercel
   ```

