# 🚀 AI-Powered Website Builder

[![Live Demo](https://img.shields.io/badge/Live_Demo-Visit_Site-0070F3?style=for-the-badge&logo=vercel&logoColor=white)](https://groov-builder-client.vercel.app)
[![Author](https://img.shields.io/badge/Author-Ayush_Pandey-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/groov33)
[![Tech Stack](https://img.shields.io/badge/Stack-React_19_|_TypeScript_|_Prisma_|_PostgreSQL_|_Express_|_OpenRouter-6366F1?style=for-the-badge)](https://github.com/groov33/groov-ai-builder)

> A full-stack AI web application generator that transforms natural language prompts into responsive, production-ready web applications with live preview, version control, and instant browser code editing.

---

## 🌐 Live Demo
* **Frontend Application:** [https://groov-builder-client.vercel.app](https://groov-builder-client.vercel.app)
* **API Server:** [https://groov-builder-server.vercel.app](https://groov-builder-server.vercel.app)

---

## 📌 Project Overview
Built as a flagship resume project demonstrating full-stack engineering, AI prompt orchestration, and modern cloud deployment architectures. The platform empowers users to describe any website idea in plain English and automatically generates complete, stylized, interactive web applications styled with Tailwind CSS.

### ✨ Key Features
- **Prompt Enhancement Pipeline:** Automatically analyzes user input and enriches prompts with technical layout requirements, color harmony, typography, and responsive specifications prior to code generation.
- **AI-Powered Code Generation:** Leverages advanced LLM coding models via OpenRouter to output clean, standards-compliant single-page and multi-section web applications with interactive scripts.
- **Interactive Live Preview & In-Browser Code Editing:** Real-time responsive iframe sandbox rendering the generated code with instant updates and live code persistence.
- **Version History & Rollback System:** Automated version tracking on every AI revision, allowing users to inspect past revisions and perform one-click rollbacks to previous stable versions.
- **Production-Grade Authentication:** Powered by **Better-Auth** with secure HTTP-only cookies, session persistence, and cross-site protection.
- **PostgreSQL Database via Prisma ORM:** Enterprise data modeling with Neon Serverless Postgres handling users, accounts, website projects, conversation histories, and versions.
- **Credits & Project Management System:** Automated credit allocation per user (20 credits on signup) with usage quotas for project creation and revisions.

---

## 🛠️ Architecture & Tech Stack

### Frontend (`client/`)
- **Framework:** React 19, TypeScript, Vite
- **Styling:** Tailwind CSS v4, Lucide React icons, tw-animate-css
- **Authentication:** Better-Auth Client (`@daveyplate/better-auth-ui`)
- **State & Networking:** Axios, React Router v7, Sonner (Toasts)
- **Deployment:** Vercel

### Backend (`server/`)
- **Runtime & Server:** Node.js, Express 5, TypeScript (`tsx` / `tsc`)
- **ORM & Database:** Prisma 7 (`@prisma/adapter-pg`) with Neon Serverless PostgreSQL
- **AI Integration:** OpenAI SDK connected to OpenRouter API (`deepseek/deepseek-chat`)
- **Auth Engine:** Better-Auth with Prisma PostgreSQL adapter
- **Deployment:** Vercel Serverless Functions (`@vercel/node`)

---

## 📁 Repository Structure
```
groov-ai-builder/
├── client/                     # Vite + React 19 Frontend
│   ├── src/
│   │   ├── components/         # Navbar, Footer, EditorPanel, ProjectPreview, Sidebar
│   │   ├── pages/              # Home, Projects, Community, Preview, Pricing, Auth
│   │   ├── configs/            # Axios instance with credentials
│   │   ├── lib/                # Better-auth client & utilities
│   │   └── assets/             # Branding, schemas, dummy project mockups
│   ├── package.json
│   └── vercel.json
│
└── server/                     # Express + TypeScript Backend
    ├── controllers/            # userController, projectController, stripeWebhook
    ├── routes/                 # userRoutes, projectRoutes
    ├── lib/                    # Prisma client, Better-Auth initialization
    ├── configs/                # OpenRouter / OpenAI SDK client
    ├── prisma/                 # schema.prisma, PostgreSQL migrations
    ├── server.ts               # Express entry point
    ├── package.json
    └── vercel.json
```

---

## ⚙️ Environment Variables

### Backend (`server/.env`)
```env
NODE_ENV="production"
PORT=3000
DATABASE_URL="postgresql://<user>:<password>@<host>/neondb?sslmode=require"
BETTER_AUTH_SECRET="your-better-auth-secret"
BETTER_AUTH_URL="https://groov-builder-server.vercel.app"
TRUSTED_ORIGINS="https://groov-builder-client.vercel.app,http://localhost:5173"
AI_API_KEY="sk-or-v1-your-openrouter-key"
AI_MODEL="deepseek/deepseek-chat"
```

### Frontend (`client/.env`)
```env
VITE_BASEURL="https://groov-builder-server.vercel.app"
```

---

## 🚀 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/groov33/groov-ai-builder.git
   cd groov-ai-builder
   ```

2. **Setup Server:**
   ```bash
   cd server
   npm install
   npx prisma migrate dev --name init
   npm run start
   ```

3. **Setup Client:**
   ```bash
   cd ../client
   npm install
   npm run dev
   ```

---

## 👤 Author
**Ayush Pandey**  
*National Institute of Technology, Tiruchirappalli (NIT Trichy)*  
* **Email:** [realayush44@gmail.com](mailto:realayush44@gmail.com)  
* **GitHub:** [@groov33](https://github.com/groov33)  
* **LinkedIn:** [Ayush Pandey](https://linkedin.com)
