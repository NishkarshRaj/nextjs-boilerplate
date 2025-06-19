import Image from "next/image";

const doraMetrics = [
  {
    name: "Deployment Frequency",
    description:
      "How often an organization successfully releases to production.",
    value: "Daily",
    benchmark: "Elite",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <rect width="32" height="32" rx="16" fill="#38bdf8" />
        <path d="M10 22V10h2v10h8v2H10z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "Lead Time for Changes",
    description:
      "The amount of time it takes a commit to get into production.",
    value: "1 hour",
    benchmark: "Elite",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <rect width="32" height="32" rx="16" fill="#0ea5e9" />
        <path
          d="M16 8v8l6 3"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Change Failure Rate",
    description:
      "The percentage of deployments causing a failure in production.",
    value: "2%",
    benchmark: "Elite",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <rect width="32" height="32" rx="16" fill="#f59e42" />
        <path
          d="M16 10v6m0 4h.01"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Mean Time to Recovery",
    description:
      "How long it takes to restore service after a production failure.",
    value: "30 min",
    benchmark: "Elite",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
        <rect width="32" height="32" rx="16" fill="#22d3ee" />
        <path
          d="M16 8a8 8 0 1 1-8 8"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 16h8v8"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

function DoraMetricWidget({ metric }: { metric: typeof doraMetrics[0] }) {
  return (
    <div className="flex flex-col items-center bg-slate-800/80 rounded-xl p-6 shadow-lg w-full max-w-xs min-w-[220px]">
      <div className="mb-3">{metric.icon}</div>
      <div className="text-xl font-bold text-white mb-1">{metric.name}</div>
      <div className="text-3xl font-extrabold text-[#38bdf8] mb-1">{metric.value}</div>
      <div className="text-xs text-slate-400 mb-2">({metric.benchmark} Performer)</div>
      <div className="text-slate-300 text-sm">{metric.description}</div>
    </div>
  );
}

function DoraPlaybook() {
  return (
    <section className="w-full max-w-5xl mx-auto mt-12 mb-16 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 text-center drop-shadow">
        DORA Metrics Playbook
      </h2>
      <p className="text-slate-200 text-lg mb-8 text-center max-w-2xl mx-auto">
        DORA (DevOps Research and Assessment) metrics are the gold standard for measuring software delivery performance. Use this playbook to understand, track, and improve your organization's DevOps capabilities.
      </p>
      <div className="flex flex-wrap gap-8 justify-center mb-12">
        {doraMetrics.map((metric) => (
          <DoraMetricWidget key={metric.name} metric={metric} />
        ))}
      </div>
      <div className="bg-slate-900/80 rounded-2xl p-8 shadow-xl border border-slate-700 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-[#38bdf8] mb-4">How to Improve Your DORA Metrics</h3>
        <ol className="list-decimal list-inside text-slate-200 space-y-2 text-lg">
          <li>
            <span className="font-semibold text-white">Automate deployments:</span> Use CI/CD pipelines to increase deployment frequency and reduce manual errors.
          </li>
          <li>
            <span className="font-semibold text-white">Shorten lead time:</span> Break work into small, manageable pieces and automate testing to speed up delivery.
          </li>
          <li>
            <span className="font-semibold text-white">Reduce change failure rate:</span> Implement robust code reviews, automated testing, and canary releases.
          </li>
          <li>
            <span className="font-semibold text-white">Improve recovery time:</span> Invest in monitoring, alerting, and automated rollback strategies.
          </li>
        </ol>
        <div className="mt-6 text-slate-400 text-sm">
          <span className="font-semibold text-white">Tip:</span> Regularly review your DORA metrics and foster a culture of continuous improvement.
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] flex flex-col">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-10 py-8 bg-opacity-80 backdrop-blur-md border-b border-slate-800">
        <div className="flex items-center gap-4">
          <Image
            src="/statusneo.png"
            alt="StatusNeo Logo"
            width={180}
            height={40}
            className="object-contain"
            priority
          />
          <span className="text-xl font-bold text-white tracking-wide hidden md:inline">
            Enterprise AI & DataOps
          </span>
        </div>
        <nav className="flex gap-8">
          <a
            href="https://statusneo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-200 hover:text-white font-medium text-lg transition-colors"
          >
            Home
          </a>
          <a
            href="https://statusneo.com/ai-ml-dataops/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-200 hover:text-white font-medium text-lg transition-colors"
          >
            AIOps
          </a>
          <a
            href="https://backstage.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-200 hover:text-white font-medium text-lg transition-colors"
          >
            Backstage
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            Accelerate Your Enterprise Transformation
          </h1>
          <p className="text-lg md:text-2xl text-slate-200 mb-10 font-light">
            Unlock the power of AI, DataOps, and Platform Engineering with StatusNeo. 
            Trusted by CXOs and global enterprises to deliver innovation, resilience, and business value at scale.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://statusneo.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#2563eb] to-[#0ea5e9] text-white font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all"
            >
              <Image
                src="/vercel.svg"
                alt="Contact"
                width={24}
                height={24}
                className="dark:invert"
              />
              Contact Us
            </a>
            <a
              href="https://statusneo.com/ai-ml-dataops/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-full border-2 border-[#38bdf8] text-[#38bdf8] font-semibold text-lg bg-transparent hover:bg-[#0ea5e9]/10 transition-all shadow"
            >
              AIOps Services
            </a>
            <a
              href="https://backstage.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 rounded-full border-2 border-slate-400 text-slate-200 font-semibold text-lg bg-transparent hover:bg-slate-700/30 transition-all shadow"
            >
              Backstage
            </a>
          </div>
        </div>
        {/* DORA Metrics Playbook and Widgets */}
        <DoraPlaybook />
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-8 flex flex-col md:flex-row items-center justify-between bg-slate-900 bg-opacity-80 border-t border-slate-800">
        <span className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} StatusNeo. All rights reserved.
        </span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a
            href="https://www.linkedin.com/company/statusneo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/>
            </svg>
          </a>
          <a
            href="https://twitter.com/statusneo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482c-4.086-.205-7.713-2.164-10.141-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.012 10.012 0 0 0 2.457-2.548z"/>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
