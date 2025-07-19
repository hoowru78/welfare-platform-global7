'use client'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Welcome message */}
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                Hello! 👋
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-600 mb-2">
                Welcome to Senior Welfare Guide
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 mb-2">
                For seniors aged 65+ living worldwide
              </p>
              <p className="text-lg md:text-xl text-gray-500">
                Personalized welfare program recommendation service
              </p>
            </div>

            {/* Feature illustration */}
            <div className="mb-12 flex justify-center">
              <div className="relative">
                <div className="w-32 h-32 md:w-48 md:h-48 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-6xl md:text-8xl">❤️</span>
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Action Cards */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Find Benefits Card */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-200 hover:scale-105">
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">👥</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Find Benefits That Match You
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Answer simple questions and receive personalized welfare program recommendations
                  </p>
                </div>
                <a
                  href="/recommendation"
                  className="inline-flex items-center gap-3 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 text-lg min-h-12"
                >
                  <span>Get Started</span>
                  <span>➡️</span>
                </a>
              </div>
            </div>

            {/* Browse Programs Card */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-xl transition-shadow duration-200 hover:scale-105">
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">📋</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Browse All Welfare Programs
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    View and search all welfare programs available in your region
                  </p>
                </div>
                <a
                  href="/programs"
                  className="inline-flex items-center gap-3 bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg border-2 border-blue-600 hover:bg-blue-50 text-lg min-h-12"
                >
                  <span>Browse Programs</span>
                  <span>➡️</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-blue-100">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                Safe and Trusted Service
              </h3>
              <p className="text-lg text-gray-600">
                A government-certified service that prioritizes privacy protection and accessibility.
                <br />
                You can use it safely anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Bar */}
      <section className="bg-red-50 border-t-4 border-red-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-red-800 mb-2">
              🚨 Emergency Contacts
            </h3>
            <div className="flex flex-wrap justify-center gap-4 text-red-700">
              <a href="tel:119" className="bg-red-100 border-2 border-red-300 text-red-700 hover:bg-red-200 font-semibold py-3 px-6 rounded-lg text-lg min-h-12">
                Fire/Medical: 119
              </a>
              <a href="tel:112" className="bg-red-100 border-2 border-red-300 text-red-700 hover:bg-red-200 font-semibold py-3 px-6 rounded-lg text-lg min-h-12">
                Police: 112
              </a>
              <a href="tel:055-860-8000" className="bg-red-100 border-2 border-red-300 text-red-700 hover:bg-red-200 font-semibold py-3 px-6 rounded-lg text-lg min-h-12">
                Local Welfare: 055-860-8000
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 