"use client";

import { useRef } from "react";
import grainImage from "@/assets/images/grain.jpg";

export const Hackathon = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const hackathons = [
    {
      name: "KakushIn 9.0",
      position: "Top 10",
      date: "June 2025",
      mode: "Online at IIIT Pune",
      platform: "Nomura",
      about: "A GenAI-Driven Approach to Sustainable Beach Cleanups and Community Engagement.",
      stack: "MERN, ML, GenAI",
      contribution: "Designed the frontend and integrated machine learning models for waste detection and volunteer coordination.",
      outcome: "Built an AI-driven platform for clean-up coordination and impact tracking.",
    },
    {
      name: "Adobe India Hackathon 2025",
      position: "Reached Round 2",
      date: "July 2025",
      mode: "Online",
      platform: "Unstop",
      about: "Reimagined PDF reading using intelligent document analysis and personalization.",
      stack: "Python, PyMuPDF, OpenAI, Docker",
      contribution: "Developed frontend and integrated ML for document analysis and persona-driven insights.",
      outcome: "Learned NLP structuring and built a GenAI research assistant.",
    },
    {
      name: "Ada Lovelace Hackathon",
      position: "Round-2",
      date: "October 2024",
      mode: "Offline at IIIT Pune",
      platform: "Citi India",
      about: "Built an AI-powered personal finance assistant to deliver insights, savings goals, and investment tips using open APIs and LLMs.",
      stack: "React.js, Flask, OpenAI API, Pandas, NumPy",
      contribution: "Developed frontend and integrated financial analytics using AI models.",
      outcome: "Delivered a smart, user-centric tool to simplify financial decision-making.",
    },
    {
      name: "SIH Internal Selection",
      position: "Selected Finalist",
      date: "October 2024",
      mode: "Offline at IIIT Pune",
      platform: "Government",
      about: "Built a secure, automated document verification system using blockchain, AI, and OCR.",
      stack: "MERN, Solidity, Tesseract, Llama, Filecoin, TensorFlow",
      contribution: "Developed end-to-end system integrating OCR, fraud detection, and blockchain-based verification.",
      outcome: "Delivered a scalable and tamper-proof document verification solution for both digital and physical records.",
    },
    {
      name: "Ideathon Contest",
      position: "Selected Finalist",
      date: "May 2024",
      mode: "Offline at IIIT Pune",
      platform: "Nokia",
      about: "Explored 5G use cases across rural connectivity, drone networks, eHealth, and traffic management to bridge the digital divide and envision India’s leap into 6G.",
      stack: "Python, Edge Computing, IoT, Network Planning",
      contribution: "Designed drone survey system and scalable 5G/6G use case models.",
      outcome: "Delivered an affordable roadmap for high-impact network deployment.",
    },
  ];

  return (
    <section className="w-full lg:min-h-screen bg-antialiased text-white antialiased py-10 md:py-12 lg:py-20">
      <div className="top-0 z-10 py-20">
        <div className="flex justify-center">
          <p className="font-semibold uppercase tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Real-world Projects
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Hackathons and Achievements
        </h2>
        <div className="flex justify-center">
          <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
            See my hackathons here
          </p>
        </div>

        {/* 👇 Scroll hint arrow for mobile */}
        <div className="flex justify-center md:hidden mt-4">
          <div className="animate-bounce text-white/60 text-xs flex items-center gap-1">
            <span>Swipe right</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Scrollable cards container */}
      <div
        ref={containerRef}
        className="w-full overflow-x-auto px-10 py-12"
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
        }}
      >
        <div className="flex gap-8 w-max">
          {hackathons.map((hack, index) => (
            <div
              key={index}
              className="relative w-[300px] md:w-[400px] shrink-0 rounded-3xl bg-[#1e1e1e]/30 p-6 border border-white/20 overflow-hidden z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none"
            >
              {/* Background grain */}
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>

              <h3 className="text-xl font-semibold text-white mb-2">{hack.name}</h3>
              <p className="text-sm text-emerald-300 mb-1">
                {hack.position} • {hack.date}
              </p>
              <p className="text-sm text-gray-400 mb-2">
                {hack.mode} via {hack.platform}
              </p>
              <p className="text-sm text-white mb-3">{hack.about}</p>
              <ul className="list-disc pl-4 text-sm space-y-1 text-white">
                <li>
                  <span className="text-sky-400">Tech Stack:</span> {hack.stack}
                </li>
                <li>
                  <span className="text-sky-400">Contribution:</span> {hack.contribution}
                </li>
                <li>
                  <span className="text-sky-400">Outcome:</span> {hack.outcome}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
