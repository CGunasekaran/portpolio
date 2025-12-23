"use client";

import { useState } from "react";

export default function MyApps() {
  const [hoveredApp, setHoveredApp] = useState<number | null>(null);

  const applications = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "Full-featured e-commerce application with modern UI and seamless shopping experience",
      url: "https://ecomm-966m.vercel.app",
      icon: "🛒",
      tech: ["Next.js", "React", "E-commerce"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "LLM Assistant",
      description:
        "AI-powered language model assistant with intelligent conversation capabilities",
      url: "https://my-llm-guna.vercel.app",
      icon: "🤖",
      tech: ["AI/ML", "LLM", "Next.js"],
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Calendar Application",
      description:
        "Smart calendar app with scheduling, reminders and productivity features",
      url: "https://guna-calendar.vercel.app",
      icon: "📅",
      tech: ["React", "Calendar", "Productivity"],
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "Professional portfolio showcasing projects, skills and professional experience",
      url: "https://gunasekaran-portfolio.vercel.app",
      icon: "👨‍💼",
      tech: ["Portfolio", "Next.js", "Tailwind"],
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "Resume Builder",
      description:
        "Professional resume builder with templates and customization options",
      url: "https://resume-builder-guna-nu.vercel.app/sign-in",
      icon: "📄",
      tech: ["Builder", "Templates", "PDF"],
      color: "from-indigo-500 to-blue-500",
    },
    {
      id: 6,
      title: "Video Chat App",
      description:
        "Real-time video chat application with WebRTC for seamless communication",
      url: "https://video-chat-465t.onrender.com/",
      icon: "📹",
      tech: ["WebRTC", "Real-time", "Video"],
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 7,
      title: "Chat Application",
      description:
        "Real-time messaging platform with instant communication and modern chat features",
      url: "https://chat-app-o97w.onrender.com/",
      icon: "💬",
      tech: ["Real-time", "Messaging", "Chat"],
      color: "from-teal-500 to-cyan-500",
    },
  ];

  const handleAppClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="myapps" className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-blue-50 to-purple-50 dark:from-neutral-950 dark:via-blue-950 dark:to-purple-950">
        <div className="absolute inset-0 bg-gradient-mesh opacity-20 dark:opacity-10"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full blur-sm animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full blur-sm animate-float animate-delay-300 opacity-40"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-green-400 rounded-full blur-sm animate-float animate-delay-500 opacity-50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-full border border-white/20 dark:border-neutral-700/50 mb-6">
            <span className="text-2xl">🚀</span>
            <span className="text-sm font-medium text-neutral-600 dark:text-neutral-300">
              My Applications
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Live Applications</span>
          </h2>

          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Explore my deployed applications - from e-commerce platforms to AI
            assistants. Each project showcases different technologies and
            solutions I've built.
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app) => (
            <div
              key={app.id}
              className="group relative"
              onMouseEnter={() => setHoveredApp(app.id)}
              onMouseLeave={() => setHoveredApp(null)}
            >
              {/* Card */}
              <div className="relative h-full p-8 bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-neutral-700/50 hover:border-white/40 dark:hover:border-neutral-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-neutral-200/50 dark:hover:shadow-neutral-900/50 transform hover:-translate-y-2">
                {/* Gradient Border Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${app.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${app.color} rounded-xl flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                  >
                    {app.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary-600 group-hover:to-accent-600 transition-all duration-500">
                    {app.title}
                  </h3>

                  <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
                    {app.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {app.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Launch Button */}
                  <button
                    onClick={() => handleAppClick(app.url)}
                    className="group/btn w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-primary-500/25 transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span>Launch App</span>
                    <svg
                      className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </button>
                </div>

                {/* Hover Effect Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${app.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}
                ></div>
              </div>

              {/* Floating Animation on Hover */}
              {hoveredApp === app.id && (
                <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl blur-xl animate-pulse pointer-events-none"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary-500/10 to-accent-500/10 backdrop-blur-sm rounded-2xl border border-primary-200 dark:border-primary-800">
            <span className="text-2xl">💡</span>
            <div>
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                Have an idea for collaboration?
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                Let's build something amazing together
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
