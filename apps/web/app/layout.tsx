import './globals.css';
import React from 'react';

export const metadata = {
  title: 'Damon Hastings | Engineering Portfolio',
  description: 'Personal career platform showcasing engineering work.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-gray-50 text-gray-900">
      <body className="min-h-full antialiased">
        <header className="border-b bg-white/70 backdrop-blur sticky top-0 z-10">
          <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
            <span className="font-semibold tracking-tight">/damon</span>
            <nav className="space-x-6 text-sm">
              <a href="/" className="hover:text-blue-600">
                Home
              </a>
              <a href="/resume" className="hover:text-blue-600">
                Resume
              </a>
              <a href="/projects" className="hover:text-blue-600">
                Projects
              </a>
              <a href="/blog" className="hover:text-blue-600">
                Blog
              </a>
              <a href="/contact" className="hover:text-blue-600">
                Contact
              </a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>
        <footer className="border-t mt-20 py-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Damon Hastings
        </footer>
      </body>
    </html>
  );
}
