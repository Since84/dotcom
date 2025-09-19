# Personal Career Web Application

A full-stack portfolio and career development platform built to showcase my engineering skills, experience, and creative work.  
The app serves as both a **professional marketing site** and a **live demonstration of enterprise-level engineering practices**.

---

## 🚀 Features

### Phase 1 – MVP

- Interactive resume (filterable, PDF/JSON export).
- Portfolio projects with case studies (problem → solution → results).
- Blog with Markdown support.
- Secure contact form with email notifications.

### Phase 2 – Growth

- Case studies with embedded code snippets & diagrams.
- Skills explorer with interactive data visualization.
- Testimonials & social proof (LinkedIn, GitHub).
- Consultation & availability booking system.

### Phase 3 – Enterprise Polish

- Analytics dashboard (traffic, engagement, content reach).
- CI/CD & DevOps showcase with live build/test/deploy status.
- Monitoring/observability (Grafana/Datadog dashboards).
- Video & media showcase for project walkthroughs.

---

## 🏗️ Tech Stack

**Frontend**

- Next.js (React, SSR for SEO)
- TailwindCSS + shadcn/ui
- D3.js / Recharts (visualizations)

**Backend**

- NestJS (TypeScript, modular services)
- GraphQL + REST hybrid API
- PostgreSQL (data persistence)
- Redis (sessions, caching, job queues)

**Infrastructure**

- Vercel/Netlify (frontend hosting)
- AWS/GCP (backend services)
- Docker (containerization, future Kubernetes)
- GitHub Actions / CircleCI (CI/CD)
- Datadog / Grafana (monitoring)

---

## 📂 Data Model (Initial)

- **User** – Admin profile (availability, bio)
- **Resume** – Experience, skills, education
- **Project** – Title, description, media, case study content
- **BlogPost** – Markdown body, tags, publish date
- **Testimonial** – Source, author, quote
- **AnalyticsEvent** – Page views, referral data
- **Booking** – Date, duration, client info

---

## 🔒 Security

- HTTPS with TLS (auto via hosting)
- JWT auth for admin endpoints
- Input validation & sanitization
- Privacy-first analytics (no third-party tracking without consent)

---

## 🛠️ Development

```bash
# Clone repo
git clone https://github.com/<your-username>/<repo>.git
cd <repo>

# Install dependencies
npm install

# Run dev server
npm run dev
📦 Deployment
Branching model: GitHub Flow (feature branch → PR → main)

Environments: Dev (local), Staging (preview), Production

CI/CD Pipeline:

Run unit & integration tests

Build Docker images

Deploy automatically on merge to main

📅 Roadmap
MVP → Resume, projects, blog, contact form

Growth → Skills explorer, testimonials, booking system

Polish → Analytics, DevOps showcase, video/media hub

📄 License
Proprietary © 2025 Damon Hastings
Open-source contributions may be selectively integrated and will be marked accordingly.
```
