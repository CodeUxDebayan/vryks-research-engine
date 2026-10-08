import React from 'react';
import { ArrowRight, Bot, Cpu, Zap, Search, BarChart3, Database, PenTool } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-zinc-800/50">
        <div className="flex items-center gap-2">
          <Bot className="w-6 h-6 text-indigo-500" />
          <span className="font-semibold text-lg tracking-tight">Vryks AI Research</span>
        </div>
        <div className="flex items-center gap-6 text-sm text-zinc-400">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
          <button className="bg-white text-zinc-950 px-4 py-2 rounded-full font-medium hover:bg-zinc-200 transition-colors">
            Request Early Access
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-8 border border-indigo-500/20">
          <Zap className="w-4 h-4" />
          <span>Powered by Claude 3.5 Sonnet & Claude 3 Opus</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
          Automate your market intelligence <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            and strategic ideation.
          </span>
        </h1>
        
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Vryks AI Research is an intelligent engine that continuously monitors markets, analyzes competitors, and generates strategic briefs and content in seconds.
        </p>

        <div className="flex items-center justify-center gap-4">
          <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-all transform hover:scale-105">
            Start Free Trial
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
            View Documentation
          </button>
        </div>

        {/* Dashboard Preview Mockup */}
        <div className="mt-20 relative mx-auto max-w-4xl">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 pointer-events-none" />
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 shadow-2xl backdrop-blur-sm overflow-hidden">
            <div className="flex items-center gap-2 mb-4 px-2 border-b border-zinc-800 pb-3">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <div className="ml-4 text-xs font-mono text-zinc-500">app.vryks.com/research/report_429</div>
            </div>
            <div className="grid grid-cols-3 gap-4 h-64 opacity-70">
              <div className="col-span-1 border border-zinc-800/50 rounded-lg p-4 bg-zinc-900/80">
                <div className="w-full h-4 bg-zinc-800 rounded animate-pulse mb-3" />
                <div className="w-2/3 h-4 bg-zinc-800 rounded animate-pulse mb-6" />
                <div className="space-y-2">
                  <div className="w-full h-2 bg-zinc-800/50 rounded" />
                  <div className="w-full h-2 bg-zinc-800/50 rounded" />
                  <div className="w-4/5 h-2 bg-zinc-800/50 rounded" />
                </div>
              </div>
              <div className="col-span-2 border border-zinc-800/50 rounded-lg p-4 bg-zinc-900/80 flex flex-col">
                <div className="w-1/3 h-6 bg-zinc-800 rounded mb-4" />
                <div className="flex-1 border border-zinc-800/50 rounded bg-zinc-950/50 flex items-center justify-center p-4">
                  <div className="w-full space-y-3">
                    <div className="flex gap-3 items-center">
                      <div className="w-6 h-6 rounded-full bg-indigo-500/20" />
                      <div className="h-2 w-3/4 bg-zinc-800 rounded" />
                    </div>
                    <div className="flex gap-3 items-center">
                      <div className="w-6 h-6 rounded-full bg-indigo-500/20" />
                      <div className="h-2 w-1/2 bg-zinc-800 rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="border-t border-zinc-900 bg-zinc-950 py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Intelligence & Ideation at scale</h2>
            <p className="text-zinc-400">Our engine uses state-of-the-art LLMs to synthesize unstructured market data and generate high-quality strategic content.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/20">
              <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 text-indigo-400">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Deep Data Mining</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Connects to web endpoints, PDF reports, and news feeds to extract real-time strategic information automatically.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/20">
              <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6 text-cyan-400">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sonnet Synthesis</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Leverages Claude 3.5 Sonnet to rapidly summarize thousands of pages of text into concise, actionable strategic insights.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/20">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400">
                <PenTool className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Opus Ideation</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Utilizes Claude 3 Opus for deep strategic reasoning, producing comprehensive content architectures, campaigns, and high-fidelity copy based on research data.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/20">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-400">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Structured Outputs</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                Exports data into JSON, CSV, or direct API webhooks to pipe competitor intel directly into your CRM or internal tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-12 text-center text-zinc-500">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Bot className="w-5 h-5 text-zinc-600" />
            <span className="font-semibold text-zinc-400">Vryks AI Research</span>
          </div>
          <div className="text-sm">
            &copy; 2026 Vryks Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
