'use client'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📞</span>
                <a href="tel:055-860-8000" className="text-lg hover:text-primary-300">
                  055-860-8000
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">✉️</span>
                <a href="mailto:welfare@globalsenior.org" className="text-lg hover:text-primary-300">
                  welfare@globalsenior.org
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-2xl">📍</span>
                <address className="text-lg not-italic">
                  Global Senior Welfare Initiative<br />
                  International Headquarters<br />
                  Accessible Services Division
                </address>
              </div>
            </div>
          </div>

          {/* Emergency Contacts */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-red-300">🚨 Emergency Contacts</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-lg">Fire/Medical</span>
                <a href="tel:119" className="text-xl font-bold text-red-300 hover:text-red-200">119</a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg">Police</span>
                <a href="tel:112" className="text-xl font-bold text-red-300 hover:text-red-200">112</a>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg">Local Support</span>
                <a href="tel:055-860-8000" className="text-xl font-bold text-blue-300 hover:text-blue-200">055-860-8000</a>
              </div>
            </div>
          </div>

          {/* Accessibility & Legal */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Accessibility & Certification</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">♿</span>
                <span className="text-lg">WCAG 2.1 AA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🔒</span>
                <span className="text-lg">Privacy Protected</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🌐</span>
                <span className="text-lg">15 Languages Supported</span>
              </div>
              <div className="mt-4">
                <button
                  onClick={() => {
                    const root = document.documentElement;
                    const currentSize = parseFloat(getComputedStyle(root).fontSize);
                    root.style.fontSize = Math.min(currentSize * 1.1, 24) + 'px';
                  }}
                  className="senior-button-secondary text-sm bg-gray-700 border-gray-600 hover:bg-gray-600"
                >
                  🔍+ Larger Text
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-lg text-gray-300">
                © 2024 Global Senior Welfare Initiative. All rights reserved.
              </p>
              <p className="text-sm text-gray-400 mt-1">
                Empowering seniors worldwide with accessible technology.
              </p>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="hover:text-primary-300">Privacy Policy</a>
              <a href="/terms" className="hover:text-primary-300">Terms of Service</a>
              <a href="/accessibility" className="hover:text-primary-300">Accessibility Policy</a>
            </div>
          </div>
        </div>

        {/* Screen Reader Information */}
        <div className="sr-only">
          <p>
            This website complies with WCAG 2.1 AA level web accessibility guidelines for people with visual, auditory, and physical disabilities.
            We support screen readers, keyboard navigation, and high contrast mode.
          </p>
        </div>
      </div>
    </footer>
  )
} 