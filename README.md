# 💻 Professional Portfolio

> A professional portfolio inspired by social media platforms, where visitors can explore my profile, posts, projects, professional experience, recommendations, and contact information.

![React](https://img.shields.io/badge/React-007ec6?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ec6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-007ec6?style=for-the-badge&logo=vite&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-007ec6?style=for-the-badge&logo=css3&logoColor=white)
![Lucide React](https://img.shields.io/badge/Lucide_React-007ec6?style=for-the-badge&logo=lucide&logoColor=white)

🚧 **Status:** Under development.

---

## 📚 Table of Contents

- [Useful Links](#-useful-links)
- [About the Project](#-about-the-project)
- [How to Navigate](#️-how-to-navigate)
- [Main Features](#-main-features)
- [Technologies](#-technologies)
- [Architecture](#-architecture)
- [Installation and Setup](#-installation-and-setup)
- [Project Structure](#-project-structure)
- [Screenshots](#-screenshots)
- [Documentation](#-documentation)
- [Author](#-author)
- [License](#-license)

---

## 🔗 Useful Links

- 🌐 **Live Demo:** [Coming soon](#)
- 📦 **Repository:** [GitHub Repository](#)
- 💼 **LinkedIn:** [My LinkedIn Profile](#)

---

## 📝 About the Project

This project is my personal professional portfolio, designed to present my background, technical skills, projects, and professional experience in an interactive and organized way.

Instead of following the structure of a traditional portfolio website, the interface is inspired by **social media platforms**. Visitors can explore my profile, browse posts, learn about my projects and experience, read recommendations, and find ways to contact me.

The application is designed to provide recruiters, developers, and other visitors with a straightforward way to learn about my professional journey and technical interests.

The project also includes a multilingual interface and a dark/light theme switcher, providing a more flexible browsing experience.

---

## 🖱️ How to Navigate

The website is organized into sections accessible through the navigation sidebar.

| Section | Description |
| :--- | :--- |
| **Home** | Displays the main feed with my posts and updates. |
| **Profile** | Presents my background, education, technical skills, and interests. |
| **Projects** | Showcases selected projects, their descriptions, and related resources. |
| **Experience** | Provides an overview of my professional experience and responsibilities. |
| **Reviews** | Displays recommendations and testimonials. |
| **Contact** | Provides ways to get in touch with me. |

Visitors can also switch between available languages and choose between dark and light themes.

---

## ✨ Main Features

- 🏠 **Social Media-Inspired Feed:** A home page focused on posts and professional updates.
- 👤 **Professional Profile:** Information about my background, education, skills, and interests.
- 💻 **Projects Showcase:** A dedicated section for presenting software projects.
- 💼 **Professional Experience:** An overview of my work experience and responsibilities.
- 💬 **Recommendations:** A section for displaying professional feedback and testimonials.
- 📩 **Contact Section:** A dedicated space for contact information and communication.
- 🌐 **Multilingual Interface:** Support for multiple languages.
- 🌓 **Dark and Light Themes:** A theme switcher for different viewing preferences.
- 📱 **Responsive Design:** An interface adapted to different screen sizes.
- 🧩 **Reusable Components:** A modular structure to improve maintainability and consistency.

---

## 🛠️ Technologies

### 💻 Front-end

- **Library:** [React](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vite.dev/)
- **Styling:** CSS
- **Icons:** [Lucide React](https://lucide.dev/)

### 🗄️ Data and Services

The application organizes portfolio content into dedicated data and service modules.

- **Data Modules:** Manage structured information displayed throughout the website.
- **Services:** Separate external service communication from the presentation layer.
- **[Supabase](https://supabase.com/):** Used for data persistence where configured.
- **[EmailJS](https://www.emailjs.com/):** Used for email sendings.

### ⚙️ Development Tools

<!--- - * **Hospedagem:** [Vercel](https://vercel.com/) -->
- **Version Control:** [Git](https://git-scm.com/)
- **Repository Hosting:** [GitHub](https://github.com/)
- **Package Manager:** npm
- **Code Editor:** [Visual Studio Code](https://code.visualstudio.com/)
- **Prototypes:** [Figma](https://www.figma.com/)

---

## 🏗️ Architecture

### Overview

The application is a **Single Page Application (SPA)** built with React, TypeScript, and Vite.

Its structure separates pages, reusable components, data, services, and styling to make the codebase easier to understand and maintain.

### Main Components

- **src/pages:** Represent the main sections of the portfolio, such as Home, Profile, Projects, Experience, Reviews, and Contact.
- **src/components:** Contain reusable interface elements shared across different sections.
- **src/data:** Organizes structured content used throughout the application.
- **src/services:** Handle communication with external services when needed.
- **src/types:** Keep visual rules organized and support consistent styling.
- **public:** Store images and other static resources used by the interface.

### Architectural Decisions

- **No custom back-end:** The website relies on ready-made services for database storage and email delivery, avoiding the need to build and maintain a dedicated back-end.
- **Static content stored in the codebase:** Projects and professional experiences change infrequently, so they remain version-controlled within the project instead of being stored in a database.
- **Database-level 'Reviews' security:** Access rules (RLS) and input length restrictions are enforced directly by Supabase, rather than relying solely on browser-side validation. Since the public Supabase key is necessarily exposed in the client, security depends on properly configured database policies.
- **Public keys on the front end:** Only public `VITE_*` environment variables are used in the client-side application. Secret keys, such as the Supabase `service_role` key and the private EmailJS key, are never included.
<!-- - **Docker for local development only:** Vercel builds and deploys the website without requiring containers. -->
<!-- - **Short, skippable boot screen:** The startup animation reinforces the operating-system concept without unnecessarily delaying visitors. -->

### Trade-offs

- **Deployment required for content updates:** Updating a project or professional experience requires a new deployment.
- **Manual 'reviews' moderation:** Inappropriate messages must be deleted through the Supabase dashboard. Submission cooldowns and a honeypot field discourage casual abuse, but direct API requests can bypass these client-side measures.
- **Duplicated translated content:** Content is stored separately for each supported language, increasing duplication but ensuring that both translations are explicitly defined.

---

## 🔧 Installation and Setup

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- npm
- [Git](https://git-scm.com/)

### 📦 Installation

Clone the repository:

```bash
git clone <https://github.com/T0RR35/MyPortfolio>
```

Install the dependencies:

```bash
npm install
```

### ⚡ Running the Application

Start the development server:

```bash
npm run dev
```

Vite will display a local URL in the terminal. Open that URL in your browser to explore the application.

### 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server. |
| `npm run build` | Builds the application for production. |
| `npm run preview` | Runs a local preview of the production build. |

Additional scripts may be available depending on the project's `package.json`.

---

## 📂 Project Structure

The following structure illustrates the main organization of the application. Adjust it to match the actual repository.

```text
portfolio/
├── public/                  # Public static assets
├── src/
│   ├── utils/               # Functions and other resources
│   ├── components/          # Reusable UI components
│   ├── data/                # Structured portfolio content
│   ├── pages/               # Main application pages
│   ├── services/            # External service integrations
│   ├── types/               # Data types
│   ├── App.tsx              # Root application component
│   └── main.tsx             # Application entry point
├── index.html               # HTML entry point
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── README.md                # Project documentation
```

---
<!--
## 🎨 Screenshots

Screenshots of the application will be added here as development progresses.

| Home | Profile |
| :---: | :---: |
| ![Home page](docs/images/home.png) | ![Profile page](docs/images/profile.png) |

| Projects | Experience |
| :---: | :---: |
| ![Projects page](docs/images/projects.png) | ![Experience page](docs/images/experience.png) |

| Reviews | Contact |
| :---: | :---: |
| ![Reviews page](docs/images/reviews.png) | ![Contact page](docs/images/contact.png) |
-->
---

## 📖 Documentation

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vite.dev/guide/)
- [Lucide React Documentation](https://lucide.dev/guide/packages/lucide-react)
- [MDN Web Docs — CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Git Documentation](https://git-scm.com/doc)

---

## 👤 Author

**Rafael Torres**

- **GitHub:** [T0RR35](https://github.com/T0RR35)
- **LinkedIn:** [My LinkedIn Profile](www.linkedin.com/in/rafaeltorresmodesto)

Software Engineering student at PUC Minas, interested in software development, particularly back-end development and client-server applications.

---

## 📄 License

The licensing terms for this project have not yet been specified.