import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <main className="space-y-16">
          {/* Hero Section */}
          <div className="text-center">
            <div className="flex justify-center">
              <Image
                className="dark:invert w-[200px] sm:w-[300px] md:w-[400px] h-auto"
                src="/statusneo.png"
                alt="StatusNeo Logo"
                width={400}
                height={80}
                priority
              />
            </div>
            <h1 className="mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Transform Your Enterprise with <span className="text-blue-600">AI Innovation</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Empower your organization with cutting-edge AI solutions that drive business value. Partner with StatusNeo to navigate your AI transformation journey.
            </p>
          </div>

          {/* State Dashboard Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">State Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">State Domain Code</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">PAM URL</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Dashboard URL</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">New Jersey</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">NJ</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400"><a href="https://pam.nj.example.com">pam.nj.example.com</a></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400"><a href="https://dashboard.nj.example.com">dashboard.nj.example.com</a></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">Pennsylvania</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">PA</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400"><a href="https://pam.pa.example.com">pam.pa.example.com</a></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400"><a href="https://dashboard.pa.example.com">dashboard.pa.example.com</a></td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">Michigan</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">MI</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400"><a href="https://pam.mi.example.com">pam.mi.example.com</a></td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400"><a href="https://dashboard.mi.example.com">dashboard.mi.example.com</a></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* DORA Metrics Dashboard */}
          <div className="overflow-x-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">DORA Metrics Dashboard</h2>
            <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Developer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Deployment Frequency</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Lead Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Change Failure Rate</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">MTTR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">John Doe</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">Daily</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">2.5 days</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">3%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">4 hours</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">Jane Smith</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">Multiple/day</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">1.8 days</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">2%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">3 hours</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">Mike Johnson</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">Weekly</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">3.2 days</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">5%</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">6 hours</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Value Proposition Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Strategic AI Implementation</h3>
              <p className="text-gray-600 dark:text-gray-300">Custom AI solutions aligned with your business objectives and ROI expectations.</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Enterprise AIOps</h3>
              <p className="text-gray-600 dark:text-gray-300">Optimize operations and reduce costs with AI-powered infrastructure management.</p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Data-Driven Insights</h3>
              <p className="text-gray-600 dark:text-gray-300">Transform raw data into actionable intelligence for informed decision-making.</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
            <a
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-sm sm:text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
              href="https://statusneo.com/schedule-consultation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a Consultation
            </a>
            <a
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-gray-300 dark:border-gray-600 text-sm sm:text-base font-medium rounded-full text-gray-900 dark:text-white bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
              href="https://statusneo.com/ai-ml-dataops/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore AI Solutions
            </a>
            <a
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-gray-300 dark:border-gray-600 text-sm sm:text-base font-medium rounded-full text-gray-900 dark:text-white bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300"
              href="https://statusneo.com/case-studies"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Success Stories
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
