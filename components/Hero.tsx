import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Modern background with mesh gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-blue-50 to-indigo-50 dark:from-neutral-950 dark:via-blue-950 dark:to-indigo-950">
        <div className="absolute inset-0 bg-gradient-mesh opacity-30 dark:opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-purple-100/50 dark:from-blue-900/20 dark:to-purple-900/20"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary-400 rounded-full blur-sm animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-accent-400 rounded-full blur-sm animate-float animate-delay-300 opacity-40"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-purple-400 rounded-full blur-sm animate-float animate-delay-500 opacity-50"></div>
        <div className="absolute bottom-20 right-40 w-5 h-5 bg-pink-400 rounded-full blur-sm animate-float animate-delay-150 opacity-30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            {/* Greeting badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full border border-primary-200 dark:border-primary-800 animate-fade-in-down">
              <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
                👋 Welcome to my portfolio
              </span>
            </div>

            {/* Main heading with gradient text */}
            <div className="animate-fade-in-up animate-delay-150">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                <span className="block text-neutral-900 dark:text-neutral-100">
                  Hi, I'm
                </span>
                <span className="block gradient-text">Gunasekaran</span>
              </h1>
            </div>

            {/* Subtitle with modern styling */}
            <div className="animate-fade-in-up animate-delay-300">
              <p className="text-2xl sm:text-3xl font-semibold text-neutral-700 dark:text-neutral-300 mb-2">
                Technical Anchor
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto lg:mx-0"></div>
            </div>

            {/* Description with better typography */}
            <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl animate-fade-in-up animate-delay-500">
              Technical Anchor with{" "}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                10+ years
              </span>{" "}
              across diverse technical projects, now leading architecture and
              delivery for a{" "}
              <span className="font-semibold text-accent-600 dark:text-accent-400">
                global e-commerce platform
              </span>
              . Focused on frontend modernization, reliability{" "}
              <span className="text-green-600 dark:text-green-400 font-medium">
                (99.9% uptime)
              </span>
              , high test coverage{" "}
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                (~95)
              </span>
              , and measurable user-facing performance gains.
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animate-delay-700">
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-glow transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-accent-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a
                href="#contact"
                className="group px-8 py-4 bg-transparent border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 rounded-xl font-semibold hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-neutral-900 transform hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="flex items-center gap-2">
                  Contact Me
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </a>
            </div>

            {/* Stats or highlights */}
            <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-in-up animate-delay-1000">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                  10+
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600 dark:text-accent-400">
                  99.9%
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                  Uptime
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                  95%
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                  Test Coverage
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Profile Photo */}
          <div className="flex-1 flex justify-center animate-fade-in-right animate-delay-300">
            <div className="relative">
              {/* Animated background elements */}
              <div className="absolute -inset-4">
                <div className="w-full h-full bg-gradient-to-r from-primary-400 via-accent-400 to-purple-400 rounded-full blur-2xl opacity-30 animate-pulse-slow"></div>
              </div>
              <div className="absolute -inset-2">
                <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-20 animate-glow"></div>
              </div>

              {/* Main image container */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-112 lg:h-112">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-200 via-accent-200 to-purple-200 dark:from-primary-800 dark:via-accent-800 dark:to-purple-800 rounded-full animate-gradient opacity-50"></div>

                {/* Profile image */}
                <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white/50 dark:border-neutral-800/50 backdrop-blur-sm shadow-2xl">
                  <Image
                    src="/profile.jpg"
                    alt="Gunasekaran - Technical Anchor"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                    priority
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary-500 rounded-full animate-bounce-slow"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent-500 rounded-full animate-bounce-slow animate-delay-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
