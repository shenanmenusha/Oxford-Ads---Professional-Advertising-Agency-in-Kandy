export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gray-950 text-white overflow-hidden"
    >
      {/* Gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[80px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium mb-8 text-gray-300">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            Open Now · Menikhinna, Kandy
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.95] tracking-tight">
            Oxford{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Ads
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 font-light mb-4 leading-relaxed">
            Advertising Agency · Kandy, Sri Lanka
          </p>

          <p className="text-gray-500 text-lg mb-12 max-w-xl leading-relaxed">
            We strive to understand your business before producing work. Your trusted partner for printing and advertising solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-600/25 hover:-translate-y-0.5"
            >
              Get In Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="tel:0753344722"
              className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-xl transition-all"
            >
              <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              075 334 4722
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8">
            <div>
              <div className="flex items-center gap-1 text-yellow-400 text-lg mb-1">★★★★★</div>
              <p className="text-white font-bold text-2xl">5.0</p>
              <p className="text-gray-500 text-sm">Google Rating</p>
            </div>
            <div className="w-px bg-white/10 self-stretch" />
            <div>
              <p className="text-white font-bold text-2xl">4+</p>
              <p className="text-gray-500 text-sm">Verified Reviews</p>
            </div>
            <div className="w-px bg-white/10 self-stretch" />
            <div>
              <p className="text-white font-bold text-2xl">10+</p>
              <p className="text-gray-500 text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent" />
      </div>
    </section>
  );
}
