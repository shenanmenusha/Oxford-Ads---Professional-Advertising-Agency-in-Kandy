const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17H17.01M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
      </svg>
    ),
    title: "Printing Services",
    desc: "High-quality printing for banners, brochures, flyers, business cards, and more.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    title: "Advertising",
    desc: "Strategic advertising solutions tailored to your brand and target audience.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Design & Branding",
    desc: "Creative design work that communicates your brand identity effectively.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "Outdoor Signage",
    desc: "Eye-catching outdoor signage and displays to boost your visibility.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-4">About Us</p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Kandy's trusted advertising partner
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Located at <span className="text-gray-900 font-medium">100/5 Walala Rd, Menikhinna 20170</span>, Oxford Ads is your go-to destination for all printing and advertising needs in Kandy.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-6 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors">
                {s.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Mission banner */}
        <div className="relative bg-gray-950 rounded-3xl p-10 md:p-14 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl" />
          <div className="relative">
            <div className="text-blue-400 text-4xl mb-6">"</div>
            <p className="text-white text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
              Oxford Ads Advertising Agency strives to understand business before producing work.
            </p>
            <p className="mt-6 text-gray-500 text-sm font-medium tracking-wide uppercase">Our Mission</p>
          </div>
        </div>
      </div>
    </section>
  );
}
