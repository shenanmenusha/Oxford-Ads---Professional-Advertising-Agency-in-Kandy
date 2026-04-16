import { ArrowRight, Star, Users, BookOpen } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const stats = [
  { icon: Star, value: '50+', label: 'Expert Tips' },
  { icon: Users, value: 'Boys & Girls', label: 'For Everyone' },
  { icon: BookOpen, value: '8', label: 'Categories' },
];

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-rose-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose-100 rounded-full opacity-40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-100 rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-50 rounded-full opacity-30 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-rose-50 text-rose-600 text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-rose-100">
              <span className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
              Your Transformation Starts Here
            </div>

            <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
              The Ultimate
              <span className="block bg-gradient-to-r from-rose-500 to-amber-500 bg-clip-text text-transparent">
                Glow Up Guide
              </span>
              for Boys & Girls
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              Science-backed tips, daily habits, and step-by-step routines to transform your skin, body, style, and mindset. Your best self is closer than you think.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => onNavigate('girls')}
                className="flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-rose-200 hover:shadow-rose-300 hover:-translate-y-0.5"
              >
                Tips for Girls <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('boys')}
                className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-sky-200 hover:shadow-sky-300 hover:-translate-y-0.5"
              >
                Tips for Boys <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('quick-wins')}
                className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-800 font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 border border-gray-200 hover:-translate-y-0.5"
              >
                Quick Wins
              </button>
            </div>

            <div className="flex flex-wrap gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-rose-500" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg leading-tight">{stat.value}</div>
                    <div className="text-gray-500 text-xs">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:flex justify-center hidden">
            <div className="relative w-full max-w-sm">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-100 rounded-2xl rotate-12 opacity-60" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-rose-100 rounded-full opacity-60" />
              <img
                src="https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Glow up transformation"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
                <div className="text-2xl font-black text-gray-900">30 Days</div>
                <div className="text-sm text-gray-500">to noticeable change</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-3 border border-gray-100 flex items-center gap-2">
                <div className="w-8 h-8 bg-rose-50 rounded-full flex items-center justify-center text-lg">✨</div>
                <div className="text-sm font-semibold text-gray-800">Glow Up!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
