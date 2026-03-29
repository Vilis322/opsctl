import { useState } from 'react';

const services = [
  {
    id: 'domctl',
    name: 'DomCtl',
    icon: 'D',
    url: 'https://domctl.opsctl.tech',
    color: '#2563eb',
    tagline: 'Domain Lifecycle Management',
    description: 'Automated domain registration, DNS management, and infrastructure deployment. Integrates with Namecheap, Spaceship, and Cloudflare APIs to handle the full domain lifecycle — from AI-powered name generation to bulk purchasing and SSL provisioning.',
    features: [
      'AI domain name generation (Claude API, SSE streaming)',
      'Multi-registrar support (Namecheap + Spaceship)',
      'Bulk domain purchasing with rate limiting and concurrency control',
      'Cloudflare DNS automation (zones, A records, DNSSEC)',
      'One-click deployment: NS → CF zone → A record → SSL',
      'Per-user encrypted credentials (AES-256)',
    ],
    stack: 'Express 4 · TypeScript · PostgreSQL · Redis · esbuild',
  },
  {
    id: 'financecrm',
    name: 'FinanceCRM',
    icon: 'F',
    url: 'https://financecrm.opsctl.tech',
    color: '#2563eb',
    tagline: 'Financial Operations CRM',
    description: 'Comprehensive financial management for advertising operations. Multi-wallet tracking, income/expense management with EAV categories, per-buyer ROI analytics, and real-time collaboration via WebSocket. Dynamic RBAC with 50+ permission nodes.',
    features: [
      'Multi-wallet financial tracking (crypto, fiat, payment processors)',
      'Income/expense management with audit trail',
      'Dynamic RBAC: 50+ permission nodes, per-user overrides',
      'Real-time updates via Socket.io',
      'Per-buyer and per-team ROI analytics',
      'EAV category system for flexible categorization',
    ],
    stack: 'React 18 · Express 5 · Prisma 7 · PostgreSQL · Redis · Socket.io',
  },
  {
    id: 'worknest',
    name: 'WorkNest',
    icon: 'W',
    url: 'https://worknest.opsctl.tech',
    color: '#2563eb',
    tagline: 'Task Management Platform',
    description: 'Kanban-based task management with department workflows, role-based access, and team collaboration. Drag-and-drop board with real-time updates, file attachments, comment threads, and rich text editor.',
    features: [
      'Kanban board with drag-and-drop (5 statuses)',
      'Department-based task organization',
      'Role-based access (10 roles)',
      'Rich text editor (TipTap) for descriptions',
      'File attachments and comment threads',
      'Internationalization (EN/RU/UA)',
    ],
    stack: 'Next.js 14 · Express 5 · Prisma 6 · PostgreSQL · Redis',
  },
  {
    id: 'leadctl',
    name: 'LeadCtl',
    icon: 'L',
    url: 'https://leadctl.opsctl.tech',
    color: '#2563eb',
    tagline: 'Leads CRM for Affiliate Marketing',
    description: 'Specialized CRM for managing advertising leads at scale. Lead intake, buyer routing, deal lifecycle tracking, and financial correlation with the broader OpsCtl ecosystem.',
    features: [
      'Lead management with status tracking',
      'Deal lifecycle (prospecting to closed)',
      'Per-buyer lead routing and filtering',
      'Campaign analytics and conversion tracking',
      'Dynamic RBAC with permission nodes',
      'Financial correlation with FinanceCRM',
    ],
    stack: 'React 18 · Express 5 · Prisma 7 · PostgreSQL · Redis · Socket.io',
  },
  {
    id: 'ai',
    name: 'AI Analytics',
    icon: 'A',
    url: 'https://github.com/Vilis322/opsctl-public',
    color: '#8b5cf6',
    tagline: 'ML/AI Analytics Platform',
    description: 'Machine learning service for predictive analytics, lead scoring, and automated reporting. Processes data from all OpsCtl services to generate insights and predictions. Currently in development — runs locally on MacBook with Ollama.',
    features: [
      'Lead scoring and quality prediction',
      'Financial anomaly detection',
      'Automated report generation',
      'Domain performance analytics',
      'RAG-powered knowledge base queries',
    ],
    stack: 'Python · FastAPI · Ollama · Llama · Claude API',
    planned: true,
  },
];

const infrastructure = [
  { label: 'CI/CD', value: 'GitHub Actions — 4-environment matrix per service' },
  { label: 'Process', value: 'PM2 — cluster mode for prod, fork for stage' },
  { label: 'Reverse Proxy', value: 'Nginx — per-subdomain routing with SSL' },
  { label: 'DNS', value: 'Cloudflare — Flexible SSL, 5 managed zones' },
  { label: 'Automation', value: 'Ansible — server provisioning playbooks' },
  { label: 'Monitoring', value: 'Prometheus + Grafana + Loki (planned)' },
  { label: 'Event Bus', value: 'Apache Kafka (planned)' },
  { label: 'Containers', value: 'Docker — bots, infra services' },
  { label: 'Scale', value: '300+ servers, 1000+ domains, 600+ CF accounts' },
];

function StatusDot({ planned }: { planned?: boolean }) {
  return (
    <span className={`inline-block w-2 h-2 rounded-full ${planned ? 'bg-amber-400' : 'bg-green-400'}`} />
  );
}

function ServiceIcon({ icon, color }: { icon: string; color: string }) {
  return (
    <div className="w-8 h-8 rounded-md flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style={{ backgroundColor: color }}>
      {icon}
    </div>
  );
}

export default function App() {
  const [selected, setSelected] = useState('domctl');
  const [collapsed, setCollapsed] = useState(false);
  const service = services.find((s) => s.id === selected)!;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col transition-all duration-300 z-20 ${collapsed ? 'w-16' : 'w-60'}`}>
        <button onClick={() => setCollapsed(!collapsed)} className="absolute right-2 top-4 z-10 w-7 h-7 flex items-center justify-center rounded-md border border-gray-200 bg-white shadow-sm hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600">
          <svg className={`w-3.5 h-3.5 text-gray-600 dark:text-gray-300 transition-transform duration-300 ${collapsed ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className={`p-4 pt-5 ${collapsed ? 'opacity-0 pointer-events-none' : ''} transition-opacity duration-300`}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-gray-900 dark:bg-white flex items-center justify-center text-white dark:text-gray-900 text-sm font-bold">O</div>
            <div><h1 className="text-base font-bold text-gray-900 dark:text-white leading-tight">OpsCtl</h1><p className="text-xs text-gray-400">opsctl.tech</p></div>
          </div>
        </div>

        <nav className="flex-1 px-2 space-y-0.5 overflow-y-auto">
          {!collapsed && <div className="px-2 py-1.5 text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Services</div>}
          {services.map((s) => (
            <button key={s.id} onClick={() => setSelected(s.id)} className={`w-full flex items-center gap-3 px-2 py-2 rounded-lg text-sm transition-colors ${selected === s.id ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'} ${collapsed ? 'justify-center' : ''}`}>
              <ServiceIcon icon={s.icon} color={selected === s.id ? s.color : '#9ca3af'} />
              {!collapsed && <span className="font-medium truncate">{s.name}</span>}
              {!collapsed && <StatusDot planned={s.planned} />}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 transition-all duration-300" style={{ marginLeft: collapsed ? 64 : 240 }}>
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-4">
              <ServiceIcon icon={service.icon} color={service.color} />
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{service.name}</h1>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${service.planned ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'}`}>
                    {service.planned ? 'planned' : 'online'}
                  </span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 mt-0.5">{service.tagline}</p>
              </div>
            </div>
            <a href={service.url} target="_blank" rel="noopener" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center gap-2">
              {service.planned ? 'View Docs' : 'Open'} <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
            </a>
          </div>

          {/* Overview */}
          <section className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Overview</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
          </section>

          {/* Features */}
          <section className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Features</h2>
            <ul className="space-y-2">
              {service.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-gray-300">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Stack */}
          <section className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Tech Stack</h2>
            <p className="text-gray-600 dark:text-gray-300 font-mono text-sm">{service.stack}</p>
          </section>

          {/* Infrastructure */}
          <section className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Platform Infrastructure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {infrastructure.map((item) => (
                <div key={item.label} className="flex gap-3">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 w-28 flex-shrink-0">{item.label}</span>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{item.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Ecosystem grid */}
          <section className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Ecosystem</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {services.map((s) => (
                <a key={s.id} href={s.url} target="_blank" rel="noopener" className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <ServiceIcon icon={s.icon} color={s.color} />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">{s.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{s.tagline}</div>
                  </div>
                  <StatusDot planned={s.planned} />
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
