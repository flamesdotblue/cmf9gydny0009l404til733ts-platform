import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white"></div>
      </div>
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
        <div className="mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 px-3 py-1 text-xs font-medium text-rose-700 shadow-sm backdrop-blur">
            Modern, secure, delightful
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Seamless Authentication for Modern Apps
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            AUHT brings passwordless sign-in, robust access control, and developer-first tools into a single, elegant platform. Ship secure auth in minutes.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#get-started" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-rose-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-rose-600/20 transition hover:bg-rose-700">
              Start for free
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#features" className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:border-rose-300 hover:text-rose-700">
              Explore features
            </a>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-6 opacity-90 sm:grid-cols-4">
          <Badge text="SOC 2 Ready" />
          <Badge text="GDPR Compliant" />
          <Badge text="99.99% Uptime" />
          <Badge text="Global Edge" />
        </div>
      </div>
    </section>
  );
}

function Badge({ text }) {
  return (
    <div className="rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur">
      {text}
    </div>
  );
}
