import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-full border border-white/20 bg-white/60 backdrop-blur-xl shadow-sm">
          <div className="flex h-14 items-center justify-between px-4">
            <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-rose-600 text-white font-bold">A</span>
              <span className="text-gray-900">AUHT</span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <a href="#features" className="text-gray-700 hover:text-rose-600 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-rose-600 transition-colors">Pricing</a>
              <a href="#docs" className="text-gray-700 hover:text-rose-600 transition-colors">Docs</a>
            </nav>
            <div className="flex items-center gap-3">
              <a href="#login" className="hidden sm:inline-flex h-9 items-center rounded-full px-4 text-sm font-medium text-gray-700 hover:text-rose-600">Sign in</a>
              <a href="#get-started" className="inline-flex h-9 items-center justify-center rounded-full bg-rose-600 px-4 text-sm font-medium text-white hover:bg-rose-700 transition-colors">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
