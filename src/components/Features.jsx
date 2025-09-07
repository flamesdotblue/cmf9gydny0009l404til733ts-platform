import React from 'react';
import { Shield, KeyRound, Fingerprint, Sparkles, Lock, ServerCog } from 'lucide-react';

const FEATURES = [
  {
    icon: Fingerprint,
    title: 'Passwordless & MFA',
    desc: 'Magic links, OTP, WebAuthn, and flexible multi-factor flows out of the box.'
  },
  {
    icon: KeyRound,
    title: 'OAuth & SSO',
    desc: 'Google, GitHub, Microsoft, SAML/SSO, and enterprise identity made easy.'
  },
  {
    icon: Shield,
    title: 'Roles & Permissions',
    desc: 'Granular RBAC/ABAC with organizations, teams, and policy-based access control.'
  },
  {
    icon: ServerCog,
    title: 'APIs & Webhooks',
    desc: 'Type-safe SDKs, admin APIs, and real-time webhooks for your workflows.'
  },
  {
    icon: Lock,
    title: 'Compliance & Security',
    desc: 'Audit trails, session management, encryption at rest and in transit.'
  },
  {
    icon: Sparkles,
    title: 'Developer-first DX',
    desc: 'CLI, local emulator, examples, and copy-paste templates to move fast.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative z-10 border-t border-gray-100 bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to ship secure auth
          </h2>
          <p className="mt-3 text-base text-gray-600 sm:text-lg">
            Beautiful components, secure defaults, and scalable infrastructure — all in one platform.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </div>

        <div id="get-started" className="mt-16 overflow-hidden rounded-2xl border border-rose-200 bg-rose-50 p-8 sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-semibold text-rose-900">Ready to build?</h3>
              <p className="mt-1 text-rose-900/80">Spin up a project, connect your app, and go live in minutes.</p>
            </div>
            <div className="flex items-center gap-3">
              <a href="#docs" className="inline-flex items-center justify-center rounded-full border border-rose-300 bg-white px-5 py-2.5 text-sm font-medium text-rose-700 hover:bg-rose-100">Read the docs</a>
              <a href="#signup" className="inline-flex items-center justify-center rounded-full bg-rose-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-rose-700">Create account</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-rose-100 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
      <div className="flex items-start gap-4">
        <div className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-rose-700">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-gray-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}
