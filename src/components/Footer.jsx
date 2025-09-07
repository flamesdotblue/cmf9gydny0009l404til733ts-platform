import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-rose-600 text-white font-bold">A</span>
            <span className="font-semibold tracking-tight text-gray-900">AUHT</span>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-600">
            <a href="#features" className="hover:text-rose-700">Features</a>
            <a href="#pricing" className="hover:text-rose-700">Pricing</a>
            <a href="#docs" className="hover:text-rose-700">Docs</a>
            <a href="#changelog" className="hover:text-rose-700">Changelog</a>
            <a href="#security" className="hover:text-rose-700">Security</a>
          </nav>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} AUHT, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
