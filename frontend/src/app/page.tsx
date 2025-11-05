import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Navigation */}
      <nav className="border-b bg-white/50 backdrop-blur-sm dark:bg-gray-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-blue-600"></div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                FreeTun
              </span>
            </div>
            <div className="flex gap-4">
              <a
                href="#features"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300"
              >
                Features
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-300"
              >
                About
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-20 text-center sm:py-32">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Freelance Marketplace
            <br />
            <span className="text-blue-600">Made for Tunisia 🇹🇳</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            Connect with local talents and opportunities. Fair pricing, secure
            payments with Flouci & D17, and built for the Tunisian market.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <a
              href="#"
              className="rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Get Started
            </a>
            <a
              href="#features"
              className="rounded-lg border border-gray-300 px-8 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="py-20">
          <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white">
            Why Choose FreeTun?
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                Tunisian Payments
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Support for D17, Flouci, and local payment methods. No
                international barriers.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                Secure Escrow
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your money is protected until work is completed. Fair for both
                parties.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                French & Arabic
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fully localized interface. Work in the language you prefer.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                Fair Commission
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Only 5% for freelancers, 2% for clients. No hidden fees.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                Real-time Chat
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Communicate directly with clients and freelancers instantly.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="rounded-lg border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                Local First
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Built specifically for the Tunisian market and ecosystem.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="rounded-2xl bg-blue-600 px-8 py-16 text-center">
            <h2 className="text-3xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-blue-100">
              Join hundreds of Tunisian freelancers and businesses. Start your
              journey today.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="#"
                className="rounded-lg bg-white px-8 py-3 text-sm font-semibold text-blue-600 hover:bg-gray-100"
              >
                Sign Up as Freelancer
              </a>
              <a
                href="#"
                className="rounded-lg border-2 border-white px-8 py-3 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Post a Project
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2025 FreeTun. Built with ❤️ for Tunisia 🇹🇳
            </p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-500">
              Coming Soon - Currently in Development
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
