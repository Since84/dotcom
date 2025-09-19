# Personal Career Web Application Monorepo

![CI](https://github.com/Since84/dotcom/actions/workflows/ci.yml/badge.svg)

This repository hosts a full‑stack portfolio and career development platform. It showcases engineering skill through real production‑style architecture, code quality, testing, and DevOps practices.

See `DevPlan.md` for the strategic product & feature roadmap.

## Structure

```
apps/
  web/                # Next.js (App Router) frontend
  api/                # NestJS backend (REST + GraphQL)
packages/
  ui/                 # Shared React components library
  config/             # Env/config loader utilities
infra/
  docker-compose.yml  # Local Postgres + Redis
  Dockerfile.web
  Dockerfile.api
DevPlan.md            # Product & feature roadmap
```

## Tech Stack

Frontend: Next.js, React, TailwindCSS, shadcn/ui
Backend: NestJS, GraphQL, REST, PostgreSQL, Redis
Tooling: TypeScript, ESLint, Prettier, Jest, Docker

## Getting Started (Monorepo)

1. Install Node.js (>= 20 LTS recommended) & Docker (optional for DB/cache).
2. Clone & install:

```bash
git clone <REPLACE_WITH_YOUR_REPO_URL>.git
cd <repo>
npm install
cp .env.example .env
```

3. (Optional) Start local dependencies (Postgres + Redis):

```bash
docker compose -f infra/docker-compose.yml up -d
```

4. Run both frontend & backend:

```bash
npm run dev
```

5. Visit:

```
Web: http://localhost:${WEB_PORT:-3000}
API Health: http://localhost:${API_PORT:-4000}/health
GraphQL Playground: http://localhost:${API_PORT:-4000}/graphql
```

## Scripts (Root)

| Script              | Purpose                             |
| ------------------- | ----------------------------------- |
| `npm run dev`       | (Will) run web & api in parallel    |
| `npm run dev:web`   | Dev server for Next.js app          |
| `npm run dev:api`   | Dev server for NestJS API           |
| `npm run build`     | Build all workspaces                |
| `npm test`          | Run all Jest tests                  |
| `npm run lint`      | ESLint across repo                  |
| `npm run format`    | Prettier write                      |
| `npm run typecheck` | TypeScript project references check |
| `npm run dev:web`   | Run only web app                    |
| `npm run dev:api`   | Run only API                        |

## Environment Variables

Copy `.env.example` to `.env` in the root (and/or each app) then adjust.

| Variable       | Description                                |
| -------------- | ------------------------------------------ | ------------ | ------ |
| `DATABASE_URL` | PostgreSQL connection string               |
| `REDIS_URL`    | Redis connection URL                       |
| `API_PORT`     | Port for NestJS API (default 4000)         |
| `WEB_PORT`     | Port for Next.js dev server (default 3000) |
| `NODE_ENV`     | `development`                              | `production` | `test` |

## Testing Strategy

- Unit tests colocated near code (e.g. `*.test.ts`).
- API integration tests (supertest) under `apps/api/test`.
- Frontend component tests (React Testing Library) under `apps/web/__tests__`.
- Code coverage aggregated at root (future: badge in README / CI).

Run all tests:

```bash
npm test
```

Watch mode (example):

```bash
npx jest apps/api --watch
```

## Roadmap Alignment

MVP scope to be delivered first:

- Interactive resume & portfolio
- Blog (Markdown)
- Secure contact form

Subsequent phases integrate analytics dashboards, booking system, and DevOps observability showcase.

## Conventions

- Commit messages: Conventional Commits (`feat:`, `fix:`, `chore:`, etc.).
- Branching: GitHub Flow (feature -> PR -> main).
- Import resolution: path aliases via `@api/*`, `@web/*`, `@ui/*`, `@config/*`.
- Absolute imports prefer stable shared packages over deep relative paths.

## Docker Production Build (Preview)

Build images (after code exists):

```bash
docker build -f infra/Dockerfile.api -t career-api:local .
docker build -f infra/Dockerfile.web -t career-web:local .
```

Run containers:

```bash
docker run --rm -p 4000:4000 --env-file .env career-api:local
docker run --rm -p 3000:3000 --env-file .env career-web:local
```

## Deprecation & Modernization Plan

This repository intentionally begins lean; several tooling choices will evolve.

| Area                    | Current                 | Issue / Risk                | Planned Action                                                     |
| ----------------------- | ----------------------- | --------------------------- | ------------------------------------------------------------------ |
| Task orchestration      | `npm-run-all`           | Legacy, no caching          | Migrate to `turbo` (preferred) or `concurrently` Q1 next iteration |
| Apollo Server           | v4 via `@nestjs/apollo` | v4 EOL Jan 2026             | Track Nest + Apollo v5 migration; upgrade before Q4 2025           |
| GraphQL Playground      | Enabled (legacy)        | Unmaintained                | Replace with Apollo Sandbox plugin soon                            |
| Env loading             | Ad hoc root `.env`      | Shell mismatch for scripts  | Introduce validated loader + per-app `.env.local` pattern          |
| Dockerfiles duplication | Separate build logic    | Repeated dependency install | Create shared base stage or multi-project builder                  |
| ESLint config (v8)      | Legacy style            | Flat config ecosystem shift | Migrate after core feature MVP (target: later phase)               |
| Missing DB layer        | None yet                | Hard to persist content     | Introduce Prisma + migrations for PostgreSQL early MVP             |
| No CI pipeline          | Manual only             | Risk of regressions         | Add GitHub Actions: lint → typecheck → test → build → docker       |

### Short-Term Enhancements

1. Add Prisma schema for `User`, `Project`, `BlogPost`.
2. Replace Playground with Apollo Sandbox.
3. Introduce `turbo.json` for pipeline caching.
4. CI workflow with matrix Node versions (18, 20).
5. Basic accessibility audit (Lighthouse) integrated into CI.

### Longer-Term

- Observability integration (OpenTelemetry traces → collector → backend).
- Production Docker multi-stage optimizing layer cache reuse.
- Analytics event pipeline (queue + aggregator service) once traffic instrumentation begins.

Create GitHub issues to track each item and reference this section for rationale.

## License

Proprietary © 2025 Damon Hastings. Select components may later be open‑sourced with notice.

---

Auto‑generated initial scaffold. Expand as code is added.
