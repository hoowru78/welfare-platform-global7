import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Global Senior Welfare Guide - Find Benefits & Services',
    template: '%s | Global Senior Welfare Guide'
  },
  description: 'Helping seniors worldwide access welfare programs and government services. Senior-friendly design with multi-language support.',
  keywords: ['seniors', 'welfare', 'benefits', 'accessibility', 'government services', 'elderly care'],
  authors: [{ name: 'Global Senior Welfare Initiative' }],
  creator: 'Global Senior Welfare Initiative',
  publisher: 'Global Senior Welfare Initiative',
  robots: {
    index: true,
    follow: true,
  },
  other: {
    'msapplication-TileColor': '#0ea5e9',
    'theme-color': '#0ea5e9',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({
  children
}: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Skip to main content link for screen readers */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
                     bg-blue-600 text-white px-4 py-2 rounded-md z-50 
                     text-lg font-medium"
        >
          Skip to main content
        </a>
        
        {/* Simple Navigation */}
        <nav className="bg-white shadow-lg border-b-2 border-blue-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20">
              <div className="flex items-center">
                <a href="/" className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">🏠</span>
                  </div>
                  <span className="text-xl font-bold text-gray-900 hidden sm:block">
                    Senior Welfare Guide
                  </span>
                </a>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <a href="/" className="text-lg font-medium text-gray-700 hover:text-blue-600 px-4 py-2">
                  🏠 Home
                </a>
                <a href="/recommendation" className="text-lg font-medium text-gray-700 hover:text-blue-600 px-4 py-2">
                  👥 Find Benefits
                </a>
                <a href="/programs" className="text-lg font-medium text-gray-700 hover:text-blue-600 px-4 py-2">
                  📋 All Programs
                </a>
                <a href="tel:055-860-8000" className="bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700">
                  📞 Emergency
                </a>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Main content */}
        <main 
          id="main-content" 
          className="min-h-screen bg-gray-50"
          role="main"
        >
          {children}
        </main>
        
        {/* Simple Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📞</span>
                    <a href="tel:055-860-8000" className="text-lg hover:text-blue-300">055-860-8000</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">✉️</span>
                    <a href="mailto:welfare@globalsenior.org" className="text-lg hover:text-blue-300">welfare@globalsenior.org</a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-red-300">🚨 Emergency</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-lg">Fire/Medical</span>
                    <a href="tel:119" className="text-xl font-bold text-red-300 hover:text-red-200">119</a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg">Police</span>
                    <a href="tel:112" className="text-xl font-bold text-red-300 hover:text-red-200">112</a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Accessibility</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">♿</span>
                    <span className="text-lg">WCAG 2.1 AA Compliant</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🌐</span>
                    <span className="text-lg">15 Languages Supported</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-lg text-gray-300">
                © 2024 Global Senior Welfare Initiative. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 