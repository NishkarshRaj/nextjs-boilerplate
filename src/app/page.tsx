import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <main className="flex flex-col items-center space-y-12">
          <div className="text-center">
            <Image
              className="mx-auto dark:invert transform hover:scale-105 transition-transform duration-300"
              src="/statusneo.png"
              alt="StatusNeo Enterprise Logo"
              width={600}
              height={120}
              priority
              quality={100}
            />
            <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Enterprise Solutions
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
              Empowering businesses with cutting-edge technology solutions
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-3xl justify-center items-center">
            <a
              className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              href="https://statusneo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="mr-2 dark:invert group-hover:rotate-12 transition-transform duration-200"
                src="/vercel.svg"
                alt="Contact Icon"
                width={24}
                height={24}
              />
              Contact Us
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-white transform -translate-x-1/2 group-hover:w-full transition-all duration-200"></span>
            </a>
            
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-gray-700 dark:text-white bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg"
              href="https://statusneo.com/ai-ml-dataops/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
                AIOps Services
              </span>
            </a>
            
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-gray-700 dark:text-white bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-md hover:shadow-lg"
              href="https://backstage.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path>
                </svg>
                Backstage
              </span>
            </a>
          </div>

          <div className="w-full max-w-4xl p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">DORA Metrics Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Deployment Frequency</h3>
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">4.2/day</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Per Developer</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Lead Time</h3>
                <p className="text-3xl font-bold text-green-600 dark:text-green-400">2.5 hrs</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Average</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Change Failure Rate</h3>
                <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">1.8%</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Last 30 Days</p>
              </div>
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">MTTR</h3>
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">45 min</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Mean Time to Recovery</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
