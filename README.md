# OpsCtl

Unified SaaS platform for business operations management — domain lifecycle, financial tracking, task management, and lead CRM under one roof.

**Live:** [opsctl.tech](https://opsctl.tech)

---

## Ecosystem

### DomCtl — Domain Lifecycle Management

Automated domain registration, DNS management, and infrastructure deployment. Three registrar integrations (Namecheap, Spaceship, Dynadot) with AI-powered domain name generation, bulk purchasing with SSE streaming, and Cloudflare DNS automation.

| | |
|---|---|
| **Demo** | [domctl.opsctl.tech](https://domctl.opsctl.tech) |
| **Docs** | [domctl-public](https://github.com/Vilis322/domctl-public) |
| **Stack** | Express 4 · TypeScript · PostgreSQL · Redis · Claude API |
| **Version** | v1.2.0 |

---

### FinanceCRM — Financial Operations CRM

Multi-wallet financial tracking, income/expense management with EAV categories, per-buyer ROI analytics, and real-time collaboration via WebSocket. Dynamic RBAC with 50+ permission nodes and per-user overrides.

| | |
|---|---|
| **Demo** | [financecrm.opsctl.tech](https://financecrm.opsctl.tech) |
| **Docs** | [financecrm-public](https://github.com/Vilis322/financecrm-public) |
| **Stack** | React 18 · Express 5 · Prisma 7 · PostgreSQL · Redis · Socket.io |
| **Version** | v2.16.0 |

---

### WorkNest — Task Management Platform

Kanban-based task management with department workflows, role-based access, and team collaboration. Drag-and-drop board, file attachments, comment threads, rich text editor, and i18n (EN/RU/UA).

| | |
|---|---|
| **Demo** | [worknest.opsctl.tech](https://worknest.opsctl.tech) |
| **Docs** | [worknest-public](https://github.com/Vilis322/worknest-public) |
| **Stack** | Next.js 14 · Express 5 · Prisma 6 · PostgreSQL · Redis |
| **Version** | v1.0.0 |

---

### LeadCtl — Leads CRM for Affiliate Marketing

Lead intake, buyer routing, deal lifecycle tracking, and campaign analytics. Separated from FinanceCRM as a standalone service with leads-focused UI and independent permission nodes.

| | |
|---|---|
| **Demo** | [leadctl.opsctl.tech](https://leadctl.opsctl.tech) |
| **Docs** | [leadctl-public](https://github.com/Vilis322/leadctl-public) |
| **Stack** | React 18 · Express 5 · Prisma 7 · PostgreSQL · Redis · Socket.io |
| **Version** | v1.0.0 |

---

### AI Analytics — ML/AI Platform

Predictive analytics, lead scoring, and automated reporting. Processes data from all ecosystem services. Currently in active development.

| | |
|---|---|
| **Status** | In Development |
| **Docs** | [ai-opsctl](https://github.com/Vilis322/ai-opsctl) |
| **Stack** | Python · FastAPI · Ollama · Llama · Claude API |

---

## Infrastructure

| Component | Technology |
|---|---|
| CI/CD | GitHub Actions — per-service pipeline with health checks |
| Process | PM2 — cluster mode (2 instances) for production |
| Reverse Proxy | Nginx — per-subdomain routing |
| DNS | Cloudflare — Flexible SSL |
| Automation | Ansible — server provisioning playbooks |
| Monitoring | Prometheus + Grafana + Loki |
| Containers | Docker — bots, monitoring stack |

**Infrastructure repo:** [opsctl-infra](https://github.com/Vilis322/opsctl-infra) — Ansible playbooks, Docker monitoring stack, deployment scripts.

## Author

**Kyrylo Pryiomyshev** — [GitHub](https://github.com/Vilis322)
