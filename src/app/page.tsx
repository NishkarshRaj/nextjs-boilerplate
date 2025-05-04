"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Enterprise Digital Transformation",
      subtitle: "Accelerate your business with cutting-edge AI, ML, and DevOps solutions",
      features: [
        { title: "Enterprise Security", description: "Industry-leading security practices and compliance standards" },
        { title: "24/7 Support", description: "Dedicated enterprise support team available round the clock" },
        { title: "Scalable Solutions", description: "Built to scale with your enterprise needs and growth" }
      ]
    },
    {
      title: "Cloud Native Solutions", 
      subtitle: "Modern cloud architecture for scalable and resilient applications",
      features: [
        { title: "Kubernetes Expertise", description: "Enterprise-grade container orchestration and management" },
        { title: "Cloud Migration", description: "Seamless transition to cloud-native infrastructure" },
        { title: "Microservices", description: "Modular architecture for improved scalability and maintenance" }
      ]
    },
    {
      title: "Data Analytics & AI",
      subtitle: "Transform your data into actionable insights",
      features: [
        { title: "Machine Learning", description: "Custom ML models for your specific business needs" },
        { title: "Big Data Processing", description: "Efficient handling of large-scale data operations" },
        { title: "Predictive Analytics", description: "Data-driven decision making and forecasting" }
      ]
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <main className="flex flex-col items-center space-y-12">
          <div className="text-center">
            <Image
              className="mx-auto dark:invert"
              src="/statusneo.png"
              alt="StatusNeo Enterprise Solutions"
              width={600}
              height={120}
              priority
              quality={100}
            />
            <div className="overflow-hidden">
              <div 
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <div className="flex">
                  {slides.map((slide, index) => (
                    <div key={index} className="min-w-full">
                      <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl md:text-6xl">
                        {slide.title}
                      </h1>
                      <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400">
                        {slide.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 w-full max-w-3xl justify-center items-center">
            <a
              className="group relative w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 ease-in-out"
              href="https://statusneo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center gap-3">
                <Image
                  className="dark:invert"
                  src="/vercel.svg"
                  alt="Enterprise Solutions"
                  width={24}
                  height={24}
                />
                <span>Schedule a Consultation</span>
              </div>
            </a>
            <a
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-gray-900 dark:text-white bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700"
              href="https://statusneo.com/ai-ml-dataops/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 7H7v6h6V7z" />
                  <path fillRule="evenodd" d="M7 2a1 1 0 012 0v1h2V2a1 1 0 112 0v1h2a2 2 0 012 2v2h1a1 1 0 110 2h-1v2h1a1 1 0 110 2h-1v2a2 2 0 01-2 2h-2v1a1 1 0 11-2 0v-1H9v1a1 1 0 11-2 0v-1H5a2 2 0 01-2-2v-2H2a1 1 0 110-2h1V9H2a1 1 0 010-2h1V5a2 2 0 012-2h2V2zM5 5h10v10H5V5z" clipRule="evenodd" />
                </svg>
                <span>AI & ML Solutions</span>
              </div>
            </a>
            <a
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-gray-900 dark:text-white bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-700"
              href="https://backstage.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                </svg>
                <span>Developer Platform</span>
              </div>
            </a>
          </div>

          <div className="overflow-hidden w-full">
            <div 
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <div className="flex">
                {slides.map((slide, index) => (
                  <div key={index} className="min-w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
                      {slide.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                          <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentSlide === index 
                    ? 'bg-blue-600' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>

          <div className="w-full mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Trusted By Industry Leaders
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-12">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbjrKQk1qVkrl_acfmFs_y1bT3r-E9m-bYjw&s"
                alt="Caesars Entertainment"
                width={200}
                height={80}
                className="dark:invert"
              />
              <Image
                src="https://images.roi-nj.com/wp-content/uploads/2023/04/Kenvue-logo-crop.jpg"
                alt="Kenvue"
                width={200}
                height={80}
                className="dark:invert"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
