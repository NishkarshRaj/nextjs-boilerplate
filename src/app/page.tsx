import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <main className="space-y-16">
          {/* DORA Metrics Widget */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Developer DORA Metrics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <p className="text-sm text-slate-600 dark:text-slate-300">Deployment Frequency</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">4.2/day</p>
                <p className="text-xs text-green-600 dark:text-green-400">↑ 12% from last month</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <p className="text-sm text-slate-600 dark:text-slate-300">Lead Time for Changes</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">2.5 days</p>
                <p className="text-xs text-red-600 dark:text-red-400">↓ 8% from last month</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <p className="text-sm text-slate-600 dark:text-slate-300">Time to Restore Service</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">45 mins</p>
                <p className="text-xs text-green-600 dark:text-green-400">↑ 25% from last month</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
                <p className="text-sm text-slate-600 dark:text-slate-300">Change Failure Rate</p>
                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">3.8%</p>
                <p className="text-xs text-green-600 dark:text-green-400">↑ 15% from last month</p>
              </div>
            </div>
          </div>

          {/* Hero Section */}
          <div className="text-center">
            <div className="flex justify-center">
              <Image
                className="dark:invert w-full max-w-[500px]"
                src="/statusneo.png"
                alt="StatusNeo Enterprise Solutions"
                width={500}
                height={100}
                priority
              />
            </div>
            <h1 className="mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white">
              Accelerate Your Digital Transformation
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Leverage AI-powered solutions to optimize your software development lifecycle and drive innovation at enterprise scale.
            </p>
          </div>

          {/* Executive Summary Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-slate-800 rounded-lg overflow-hidden">
              <thead className="bg-slate-100 dark:bg-slate-700">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">State Name</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">State Domain Code</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">PAM Login URL</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">SportsBook URL</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 dark:text-white">On-Prem BE Healthcheck</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-800 dark:text-slate-200">New Jersey</td>
                  <td className="px-6 py-4 text-sm text-slate-800 dark:text-slate-200">NJ</td>
                  <td className="px-6 py-4 text-sm text-slate-800 dark:text-slate-200">pam.nj.example.com</td>
                  <td className="px-6 py-4 text-sm text-slate-800 dark:text-slate-200">sb.nj.example.com</td>
                  <td className="px-6 py-4 text-sm text-green-600 dark:text-green-400">✓</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-800 dark:text-slate-200">Pennsylvania</td>
                  <td className="px-6 py-4 text-sm text-slate-800 dark:text-slate-200">PA</td>
                  <td className="px-6 py-4 text-sm text-slate-800 dark:text-slate-200">pam.pa.example.com</td>
                  <td className="px-6 py-4 text-sm text-slate-800 dark:text-slate-200">sb.pa.example.com</td>
                  <td className="px-6 py-4 text-sm text-red-600 dark:text-red-400">✗</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-slate-800 dark:text-slate-200">Michigan</td>
                  <td className="px-6 py-4 text-sm text-slate-800 dark:text-slate-200">MI</td>
                  <td className="px-6 py-4 text-sm text-slate-800 dark:text-slate-200">pam.mi.example.com</td>
                  <td className="px-6 py-4 text-sm text-slate-800 dark:text-slate-200">sb.mi.example.com</td>
                  <td className="px-6 py-4 text-sm text-green-600 dark:text-green-400">✓</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <a
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
              href="https://statusneo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="StatusNeo Enterprise"
                width={24}
                height={24}
              />
              Schedule Executive Consultation
              <span className="absolute right-4 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </a>

            <a
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-500 text-slate-800 dark:text-white transition-all duration-300 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800"
              href="https://statusneo.com/ai-ml-dataops/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore AI Solutions
            </a>

            <a
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg border-2 border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-500 text-slate-800 dark:text-white transition-all duration-300 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-800"
              href="https://backstage.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Developer Platform
            </a>
          </div>

          {/* Value Proposition */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-4 sm:p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-3 sm:mb-4">Accelerate Time-to-Market</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">Streamline your SDLC with AI-powered automation and intelligent workflows.</p>
            </div>
            <div className="p-4 sm:p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-3 sm:mb-4">Enhance Quality</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">Leverage predictive analytics and automated testing to ensure enterprise-grade reliability.</p>
            </div>
            <div className="p-4 sm:p-6 rounded-xl bg-white dark:bg-slate-800 shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-3 sm:mb-4">Optimize Costs</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">Reduce operational overhead with intelligent resource allocation and predictive maintenance.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
