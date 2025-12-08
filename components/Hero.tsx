import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Hi, I'm <span className="text-blue-600">Gunasekaran</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-6">
              Technical Anchor
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              Technical Anchor with 10+ years across diverse technical projects,
              now leading architecture and delivery for a global e commerce
              platform. Focused on frontend modernization, reliability (99.9%
              uptime), high test coverage (~90%), and measurable user facing
              performance gains.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-medium"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <Image
                src="/profile.jpg" // Your photo here
                alt="Gunasekaran"
                fill
                className="rounded-full object-cover border-8 border-white shadow-2xl relative z-10"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
