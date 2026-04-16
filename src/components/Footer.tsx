export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                OA
              </div>
              <span className="text-white font-bold text-lg">Oxford Ads</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Your trusted advertising agency in Kandy, Sri Lanka. Best place for all your printing and advertising options.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-gray-500">Open Mon–Sat · 8:30 AM – 5:00 PM</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Navigation</h4>
            <ul className="flex flex-col gap-3 text-sm">
              {["Home", "About", "Hours", "Reviews", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-500 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">Contact</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li className="leading-relaxed">100/5 Walala Rd,<br />Menikhinna 20170</li>
              <li>
                <a href="tel:0753344722" className="hover:text-white transition-colors">
                  075 334 4722
                </a>
              </li>
              <li className="text-gray-600">Plus Code: 8M9V+XQ</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {year} Oxford Ads. All rights reserved.</p>
          <p>Menikhinna, Kandy, Sri Lanka</p>
        </div>
      </div>
    </footer>
  );
}
