import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <main className="space-y-16">
          {/* Hero Section */}
          <div className="text-center">
            <div className="flex justify-center">
              <Image
                className="dark:invert"
                src="/statusneo.png"
                alt="StatusNeo Enterprise Solutions"
                width={500}
                height={100}
                priority
              />
            </div>
            <h1 className="mt-8 text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              DORA Metrics Dashboard
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Key DevOps performance indicators tracking deployment frequency, lead time, MTTR, and change failure rate
            </p>
          </div>

          {/* DORA Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Deployment Frequency</h3>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">24.5/day</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Elite Performance</p>
              <div className="mt-4 h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-green-500 rounded-full" style={{width: '95%'}}></div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Lead Time for Changes</h3>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">2.4 hours</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Elite Performance</p>
              <div className="mt-4 h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-green-500 rounded-full" style={{width: '90%'}}></div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Mean Time to Recovery</h3>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">1.2 hours</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">High Performance</p>
              <div className="mt-4 h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-yellow-500 rounded-full" style={{width: '75%'}}></div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Change Failure Rate</h3>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">2.5%</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Elite Performance</p>
              <div className="mt-4 h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-green-500 rounded-full" style={{width: '92%'}}></div>
              </div>
            </div>
          </div>

          {/* Trend Chart Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Performance Trends</h2>
            <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 dark:text-gray-400">Trend visualization coming soon</p>
            </div>
          </div>

          {/* Action Items */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              className="rounded-full bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center text-white gap-2 font-semibold text-lg px-8 py-4 w-full sm:w-auto"
              href="https://statusneo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="StatusNeo logo"
                width={24}
                height={24}
              />
              View Detailed Metrics
            </a>
            <a
              className="rounded-full border-2 border-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center text-blue-600 dark:text-blue-400 font-semibold text-lg px-8 py-4 w-full sm:w-auto"
              href="https://statusneo.com/ai-ml-dataops/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Performance Insights
            </a>
            <a
              className="rounded-full border-2 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center justify-center text-gray-700 dark:text-gray-300 font-semibold text-lg px-8 py-4 w-full sm:w-auto"
              href="https://backstage.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Improvement Plans
            </a>
          </div>

          {/* Additional Information */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Understanding DORA Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Performance Benchmarks</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our metrics are benchmarked against industry standards defined by the DORA research program, helping identify areas of excellence and improvement.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Continuous Improvement</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Regular monitoring and analysis of these metrics drive our DevOps evolution and help maintain high-performance delivery standards.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
