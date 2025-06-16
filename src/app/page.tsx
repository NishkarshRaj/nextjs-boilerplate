import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] dark:from-[#181c23] dark:to-[#23272f] flex flex-col">
      {/* Header */}
      <header className="w-full flex items-center justify-between px-10 py-6 bg-white/80 dark:bg-[#23272f]/80 shadow-md backdrop-blur-md z-10">
        <div className="flex items-center gap-4">
          <Image
            src="/statusneo.png"
            alt="StatusNeo Logo"
            width={180}
            height={40}
            className="h-10 w-auto"
            priority
          />
          <span className="text-2xl font-bold tracking-tight text-[#1a237e] dark:text-white ml-2">
            RDS Cost Optimizer
          </span>
        </div>
        <nav className="flex gap-6">
          <a
            href="https://statusneo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-semibold text-[#1a237e] dark:text-white hover:text-[#3949ab] dark:hover:text-[#90caf9] transition"
          >
            Home
          </a>
          <a
            href="https://statusneo.com/ai-ml-dataops/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-semibold text-[#1a237e] dark:text-white hover:text-[#3949ab] dark:hover:text-[#90caf9] transition"
          >
            AIOps Services
          </a>
          <a
            href="https://backstage.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-semibold text-[#1a237e] dark:text-white hover:text-[#3949ab] dark:hover:text-[#90caf9] transition"
          >
            Backstage
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <section className="max-w-3xl w-full bg-white/90 dark:bg-[#23272f]/90 rounded-3xl shadow-2xl p-10 flex flex-col items-center gap-8 border border-[#e3e6ee] dark:border-[#23272f]">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-[#1a237e] dark:text-white leading-tight mb-2">
            Enterprise RDS Cost Optimization
          </h1>
          <p className="text-lg sm:text-xl text-center text-[#374151] dark:text-[#b0bec5] max-w-2xl">
            Unlock <span className="font-bold text-[#388e3c] dark:text-[#81c784]">$1M+</span> in annual savings with actionable insights for your AWS RDS estate. 
            <br />
            <span className="text-[#1976d2] dark:text-[#90caf9] font-semibold">Executive-grade dashboards</span> and <span className="text-[#d32f2f] dark:text-[#ef9a9a] font-semibold">CXO-ready reports</span> for confident, data-driven decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
            <a
              href="mailto:info@statusneo.com"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#1a237e] to-[#3949ab] text-white font-semibold rounded-full px-8 py-3 text-lg shadow-lg hover:from-[#3949ab] hover:to-[#1a237e] transition"
            >
              <Image
                src="/window.svg"
                alt="Contact Icon"
                width={22}
                height={22}
                className="invert dark:invert-0"
              />
              Contact Enterprise Team
            </a>
            <a
              href="https://statusneo.com/ai-ml-dataops/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-[#1a237e] dark:border-[#90caf9] text-[#1a237e] dark:text-[#90caf9] font-semibold rounded-full px-8 py-3 text-lg hover:bg-[#e3e6ee] dark:hover:bg-[#23272f] transition"
            >
              Explore AIOps
            </a>
            <a
              href="https://backstage.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border-2 border-[#1a237e] dark:border-[#90caf9] text-[#1a237e] dark:text-[#90caf9] font-semibold rounded-full px-8 py-3 text-lg hover:bg-[#e3e6ee] dark:hover:bg-[#23272f] transition"
            >
              Backstage Platform
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-8 flex items-center justify-between bg-white/80 dark:bg-[#23272f]/80 border-t border-[#e3e6ee] dark:border-[#23272f]">
        <span className="text-sm text-[#757575] dark:text-[#b0bec5]">
          &copy; {new Date().getFullYear()} StatusNeo. All rights reserved.
        </span>
        <span className="text-sm text-[#757575] dark:text-[#b0bec5]">
          Enterprise Cloud | Data | AI
        </span>
      </footer>
    </div>
  );
}
