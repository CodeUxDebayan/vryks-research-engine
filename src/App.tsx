import { useState } from 'react';
import {
  ArrowRight, Cpu, Zap, Search, BarChart3, PenTool,
  X, Mail, User, Building2, MessageSquare, FileText, Shield,
  Workflow, ChevronRight, Sparkles
} from 'lucide-react';

/* ─── Modal Backdrop ─── */
function Modal({ open, onClose, children }: { open: boolean; onClose: () => void; children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors">
          <X className="w-5 h-5" />
        </button>
        {children}
      </div>
    </div>
  );
}

function App() {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [showDocs, setShowDocs] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>

      {/* ══════════ NAV ══════════ */}
      <nav className="sticky top-0 z-40 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2.5">
            <span className="font-bold text-lg tracking-tight">Vryks AI Research</span>
            <span className="ml-2 text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">Beta</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
            <a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a>
            <button onClick={() => setShowWaitlist(true)} className="bg-white text-zinc-950 px-5 py-2 rounded-full font-semibold hover:bg-zinc-200 transition-colors text-sm">
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* ══════════ HERO ══════════ */}
      <header className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-8 border border-indigo-500/20">
          <Zap className="w-4 h-4" />
          <span>Built on Claude 5.5 Sonnet & Claude 5.5 Opus</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
          Automate your market<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">
            intelligence & ideation.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Vryks AI Research is an intelligent engine that monitors markets, analyzes competitors, and generates strategic briefs and content — all powered by Anthropic's Claude API.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onClick={() => setShowWaitlist(true)} className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-indigo-500/25">
            Request Early Access
            <ArrowRight className="w-4 h-4" />
          </button>
          <button onClick={() => setShowDocs(true)} className="bg-zinc-800/80 hover:bg-zinc-700 text-white px-8 py-3.5 rounded-full font-semibold transition-colors border border-zinc-700/50">
            View Documentation
          </button>
        </div>

        <p className="mt-4 text-xs text-zinc-600">Currently in private beta · Launching Q1 2027</p>

        {/* Dashboard Mockup */}
        <div className="mt-16 relative mx-auto max-w-4xl">
          <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 via-blue-500/10 to-cyan-500/10 rounded-2xl blur-3xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 pointer-events-none" />
          <div className="relative rounded-xl border border-zinc-800 bg-zinc-900/80 p-4 shadow-2xl backdrop-blur-sm overflow-hidden">
            <div className="flex items-center gap-2 mb-4 px-2 border-b border-zinc-800 pb-3">
              <div className="w-3 h-3 rounded-full bg-zinc-700" />
              <div className="w-3 h-3 rounded-full bg-zinc-700" />
              <div className="w-3 h-3 rounded-full bg-zinc-700" />
              <div className="ml-4 text-xs font-mono text-zinc-600">app.vryksresearch.com/dashboard</div>
            </div>
            <div className="grid grid-cols-4 gap-3 mb-3">
              {[{ l: 'Reports Generated', v: '1,247' }, { l: 'Markets Tracked', v: '38' }, { l: 'Competitors', v: '156' }, { l: 'Content Pieces', v: '892' }].map((s, i) => (
                <div key={i} className="border border-zinc-800/50 rounded-lg p-3 bg-zinc-950/50">
                  <div className="text-[10px] text-zinc-600 uppercase tracking-wider mb-1">{s.l}</div>
                  <div className="text-lg font-bold text-zinc-300">{s.v}</div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3 h-48">
              <div className="col-span-1 border border-zinc-800/50 rounded-lg p-3 bg-zinc-950/50 space-y-2">
                <div className="text-[10px] text-zinc-600 uppercase tracking-wider">Active Agents</div>
                {['Market Scanner', 'Competitor Tracker', 'Content Generator'].map((a, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs text-zinc-500">{a}</span>
                  </div>
                ))}
              </div>
              <div className="col-span-2 border border-zinc-800/50 rounded-lg p-3 bg-zinc-950/50">
                <div className="text-[10px] text-zinc-600 uppercase tracking-wider mb-2">Latest Research Output</div>
                <div className="space-y-2">
                  {[85, 60, 45, 70, 55].map((w, i) => (
                    <div key={i} className="h-2 bg-zinc-800/50 rounded overflow-hidden">
                      <div className="h-full bg-indigo-500/30 rounded" style={{ width: `${w}%` }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ══════════ BUILDING BANNER ══════════ */}
      <section className="border-y border-zinc-800/50 bg-zinc-900/30 py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-2 text-amber-400">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold text-sm">Actively in Development</span>
          </div>
          <span className="text-sm text-zinc-500">We're building Vryks AI Research in public. Our core engine is functional and we're onboarding beta users.</span>
        </div>
      </section>

      {/* ══════════ FEATURES ══════════ */}
      <section id="features" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-4 block">Core Capabilities</span>
            <h2 className="text-4xl font-bold mb-4">Intelligence & ideation at scale</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">Multi-model architecture using Claude 5.5 Sonnet for speed and Opus for depth — each model handles what it does best.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Search, color: 'indigo', title: 'Deep Data Mining', desc: 'Connects to web endpoints, PDF reports, and news feeds to extract real-time strategic information automatically.' },
              { icon: Cpu, color: 'cyan', title: 'Sonnet Synthesis', desc: 'Claude 5.5 Sonnet rapidly summarizes thousands of pages into concise, actionable strategic insights in seconds.' },
              { icon: PenTool, color: 'purple', title: 'Opus Ideation', desc: 'Claude 5.5 Opus performs deep strategic reasoning — producing content architectures, campaign strategies, and high-fidelity copy.' },
              { icon: BarChart3, color: 'emerald', title: 'Structured Outputs', desc: 'Exports to JSON, CSV, or direct API webhooks to pipe competitor intel into your CRM or internal tools.' },
            ].map(({ icon: Icon, color, title, desc }, i) => (
              <div key={i} className="p-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors group">
                <div className={`w-12 h-12 rounded-xl bg-${color}-500/10 flex items-center justify-center mb-5 text-${color}-400 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-zinc-500 leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ HOW IT WORKS ══════════ */}
      <section id="how-it-works" className="border-t border-zinc-800/50 py-24 bg-zinc-900/10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-4 block">How It Works</span>
            <h2 className="text-4xl font-bold mb-4">From query to strategic brief in minutes</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', icon: Search, title: 'Define your scope', desc: 'Set your market, competitors, and the type of intelligence you need. Our agent crawls and indexes the data landscape.' },
              { step: '02', icon: Workflow, title: 'AI processes & synthesizes', desc: 'Claude 5.5 Sonnet ingests and summarizes raw data. Opus then reasons over the synthesis to generate strategic insights and content.' },
              { step: '03', icon: FileText, title: 'Export & act', desc: 'Receive structured reports, competitor matrices, content briefs, and campaign copy — exported via dashboard, API, or webhook.' },
            ].map(({ step, icon: Icon, title, desc }, i) => (
              <div key={i} className="relative p-8 rounded-2xl border border-zinc-800/50 bg-zinc-900/20">
                <div className="text-5xl font-black text-zinc-800/50 absolute top-4 right-6">{step}</div>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-6 text-indigo-400">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ ROADMAP ══════════ */}
      <section id="roadmap" className="border-t border-zinc-800/50 py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-indigo-400 mb-4 block">Product Roadmap</span>
            <h2 className="text-4xl font-bold mb-4">Where we're headed</h2>
          </div>
          <div className="space-y-6">
            {[
              { phase: 'Now', status: 'live', title: 'Core Research Engine', desc: 'Claude-powered data mining, synthesis pipeline, and structured report generation.', color: 'emerald' },
              { phase: 'Q4 2026', status: 'building', title: 'Content Ideation System', desc: 'Opus-driven campaign strategy, content calendar generation, and multi-format copy output.', color: 'amber' },
              { phase: 'Q1 2027', status: 'planned', title: 'Dashboard & API', desc: 'Self-serve dashboard, REST API, webhook integrations, and team collaboration features.', color: 'zinc' },
              { phase: 'Q2 2027', status: 'planned', title: 'Public Launch', desc: 'Open access, tiered pricing, enterprise plans, and third-party integrations (Slack, Notion, HubSpot).', color: 'zinc' },
            ].map(({ phase, status, title, desc, color }, i) => (
              <div key={i} className="flex gap-6 items-start p-6 rounded-xl border border-zinc-800/50 bg-zinc-900/20">
                <div className="flex-shrink-0 w-20 text-center">
                  <div className="text-xs font-semibold text-zinc-500 uppercase">{phase}</div>
                  <div className={`mt-1 text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-${color}-500/10 text-${color}-400 border border-${color}-500/20 inline-block`}>
                    {status}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-sm text-zinc-500">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ CTA ══════════ */}
      <section className="border-t border-zinc-800/50 py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to automate your research?</h2>
          <p className="text-zinc-400 mb-8">Join the waitlist to get early access when we launch. We're currently onboarding a limited number of beta users.</p>
          <button onClick={() => setShowWaitlist(true)} className="bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-4 rounded-full font-semibold text-lg flex items-center gap-2 mx-auto transition-all hover:shadow-lg hover:shadow-indigo-500/25">
            Join the Waitlist
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="border-t border-zinc-800/50 py-12 bg-zinc-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="font-bold text-lg">Vryks AI Research</span>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed max-w-sm">
                AI-powered market intelligence and content ideation engine. Built on Anthropic's Claude API by Vryks Media LLP, Kolkata.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-4 text-zinc-300">Product</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a></li>
                <li><button onClick={() => setShowDocs(true)} className="hover:text-white transition-colors">Documentation</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-4 text-zinc-300">Legal</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li><button onClick={() => setShowPrivacy(true)} className="hover:text-white transition-colors">Privacy Policy</button></li>
                <li><button onClick={() => setShowTerms(true)} className="hover:text-white transition-colors">Terms of Service</button></li>
                <li><a href="mailto:contact@vryks.com" className="hover:text-white transition-colors">contact@vryks.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800/50 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-zinc-600">&copy; 2026 Vryks Media LLP. All rights reserved. CIN: AAW-XXXX</p>
            <p className="text-xs text-zinc-600">Built with Anthropic Claude API · Kolkata, India</p>
          </div>
        </div>
      </footer>

      {/* ══════════ WAITLIST MODAL ══════════ */}
      <Modal open={showWaitlist} onClose={() => { setShowWaitlist(false); setSubmitted(false); }}>
        <div className="p-8">
          {!submitted ? (
            <>
              <h3 className="text-2xl font-bold mb-2">Join the Waitlist</h3>
              <p className="text-sm text-zinc-400 mb-6">We're onboarding beta users in batches. Leave your details and we'll reach out when your spot is ready.</p>
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <div>
                  <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider block mb-1.5">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                    <input required type="text" placeholder="Your name" className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg pl-10 pr-4 py-2.5 text-sm placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider block mb-1.5">Work Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                    <input required type="email" placeholder="you@company.com" className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg pl-10 pr-4 py-2.5 text-sm placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider block mb-1.5">Company</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
                    <input type="text" placeholder="Acme Corp (optional)" className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg pl-10 pr-4 py-2.5 text-sm placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-zinc-400 uppercase tracking-wider block mb-1.5">What would you use this for?</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-zinc-600" />
                    <textarea placeholder="Tell us about your use case..." rows={3} className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg pl-10 pr-4 py-2.5 text-sm placeholder-zinc-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/25 resize-none" />
                  </div>
                </div>
                <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                  Request Access <ChevronRight className="w-4 h-4" />
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
              <p className="text-sm text-zinc-400">We'll reach out to your email when your beta access is ready. Thanks for your interest in Vryks AI Research.</p>
            </div>
          )}
        </div>
      </Modal>

      {/* ══════════ DOCS MODAL ══════════ */}
      <Modal open={showDocs} onClose={() => setShowDocs(false)}>
        <div className="p-8">
          <div className="flex items-center gap-2 mb-6">
            <FileText className="w-5 h-5 text-indigo-400" />
            <h3 className="text-2xl font-bold">Documentation</h3>
          </div>
          <div className="space-y-6 text-sm text-zinc-400 leading-relaxed">
            <div>
              <h4 className="font-semibold text-white mb-2">Overview</h4>
              <p>Vryks AI Research is a B2B SaaS platform that automates competitive intelligence, market analysis, and strategic content generation. The platform uses a multi-model architecture built on Anthropic's Claude API.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Architecture</h4>
              <p className="mb-2">Our engine uses a two-model pipeline:</p>
              <ul className="list-disc list-inside space-y-1 text-zinc-500">
                <li><strong className="text-zinc-300">Claude 5.5 Sonnet</strong> — High-speed data ingestion, summarization, and structured extraction from web sources, PDFs, and feeds.</li>
                <li><strong className="text-zinc-300">Claude 5.5 Opus</strong> — Deep strategic reasoning for content ideation, campaign architecture, messaging frameworks, and long-form copy generation.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">API Reference</h4>
              <p>Full REST API documentation will be published at <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-indigo-400 text-xs">docs.vryksresearch.com</code> upon public launch in Q1 2027. Beta users will receive API keys and sandbox access.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-2">Stack</h4>
              <p>Next.js · TypeScript · Supabase · PostgreSQL · Anthropic Claude API · Vercel</p>
            </div>
          </div>
        </div>
      </Modal>

      {/* ══════════ PRIVACY POLICY MODAL ══════════ */}
      <Modal open={showPrivacy} onClose={() => setShowPrivacy(false)}>
        <div className="p-8">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="w-5 h-5 text-indigo-400" />
            <h3 className="text-2xl font-bold">Privacy Policy</h3>
          </div>
          <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
            <p className="text-xs text-zinc-600">Last updated: October 8, 2026</p>
            <div>
              <h4 className="font-semibold text-white mb-1">1. Information We Collect</h4>
              <p>When you join our waitlist or use our platform, we collect your name, email address, company name, and usage data. We do not sell your personal information to third parties.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">2. How We Use Your Data</h4>
              <p>Your data is used to provide and improve our services, communicate product updates, and process your requests. Research queries submitted to the platform are processed via Anthropic's Claude API and are subject to Anthropic's usage policies.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">3. Data Storage & Security</h4>
              <p>All data is stored on encrypted servers via Supabase (backed by AWS). We implement industry-standard security practices including encryption at rest and in transit.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">4. Third-Party Services</h4>
              <p>We use Anthropic's Claude API for AI processing, Vercel for hosting, and Supabase for data storage. Each service has its own privacy policy.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">5. Your Rights</h4>
              <p>You may request deletion of your data at any time by emailing <a href="mailto:privacy@vryks.com" className="text-indigo-400 hover:underline">privacy@vryks.com</a>.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">6. Contact</h4>
              <p>Vryks Media LLP, Kolkata, India · <a href="mailto:contact@vryks.com" className="text-indigo-400 hover:underline">contact@vryks.com</a></p>
            </div>
          </div>
        </div>
      </Modal>

      {/* ══════════ TERMS OF SERVICE MODAL ══════════ */}
      <Modal open={showTerms} onClose={() => setShowTerms(false)}>
        <div className="p-8">
          <div className="flex items-center gap-2 mb-6">
            <FileText className="w-5 h-5 text-indigo-400" />
            <h3 className="text-2xl font-bold">Terms of Service</h3>
          </div>
          <div className="space-y-4 text-sm text-zinc-400 leading-relaxed">
            <p className="text-xs text-zinc-600">Last updated: October 8, 2026</p>
            <div>
              <h4 className="font-semibold text-white mb-1">1. Acceptance of Terms</h4>
              <p>By accessing or using Vryks AI Research ("the Service"), you agree to be bound by these Terms of Service. The Service is operated by Vryks Media LLP ("the Company").</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">2. Service Description</h4>
              <p>Vryks AI Research is a SaaS platform that provides automated market intelligence and content ideation services powered by artificial intelligence. The platform is currently in beta and features may change without prior notice.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">3. Acceptable Use</h4>
              <p>You agree not to use the Service for any unlawful purpose, to generate misleading or harmful content, or to circumvent any usage limits or restrictions. You are responsible for all content generated through your account.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">4. Intellectual Property</h4>
              <p>Content generated by the AI through your account is yours to use commercially. The platform itself, including its design, code, and branding, remains the intellectual property of Vryks Media LLP.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">5. Limitation of Liability</h4>
              <p>The Service is provided "as is" without warranties. AI-generated outputs should be reviewed before use. Vryks Media LLP is not liable for decisions made based on AI-generated content.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">6. Termination</h4>
              <p>We reserve the right to suspend or terminate your access at any time for violation of these terms.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-1">7. Governing Law</h4>
              <p>These terms are governed by the laws of India. Disputes shall be resolved in the courts of Kolkata, West Bengal.</p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
