import { ArrowRight } from 'lucide-react';
import { categories } from '../data/tips';

interface HomeOverviewProps {
  onNavigate: (section: string) => void;
}

const pillars = [
  {
    title: 'For Girls',
    subtitle: 'Skincare, style, fitness & mindset',
    image: 'https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=400',
    action: 'girls',
    gradient: 'from-rose-400 to-pink-600',
    badge: 'bg-rose-100 text-rose-700',
  },
  {
    title: 'For Boys',
    subtitle: 'Grooming, training, fashion & confidence',
    image: 'https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=400',
    action: 'boys',
    gradient: 'from-sky-400 to-teal-600',
    badge: 'bg-sky-100 text-sky-700',
  },
];

export default function HomeOverview({ onNavigate }: HomeOverviewProps) {
  return (
    <div>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black text-gray-900 mb-4">Choose Your Path</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Personalized glow up guidance tailored specifically for boys and girls.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {pillars.map((pillar) => (
              <div
                key={pillar.action}
                className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                onClick={() => onNavigate(pillar.action)}
              >
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${pillar.gradient} opacity-60 group-hover:opacity-70 transition-opacity`} />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className={`inline-flex w-fit items-center px-3 py-1 rounded-full text-xs font-bold mb-3 ${pillar.badge} bg-opacity-90`}>
                    {pillar.title}
                  </div>
                  <h3 className="text-3xl font-black text-white mb-1">{pillar.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{pillar.subtitle}</p>
                  <div className="flex items-center gap-2 text-white font-semibold text-sm">
                    View Tips <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-gray-900 mb-3">8 Areas of Your Glow Up</h2>
            <p className="text-gray-500 max-w-lg mx-auto">
              A true glow up covers every dimension of yourself. Explore tips across all categories.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onNavigate('all-tips')}
                className={`flex flex-col items-center gap-3 p-5 rounded-2xl border border-transparent hover:border-gray-200 transition-all hover:-translate-y-1 ${cat.bgColor} group`}
              >
                <span className="text-3xl group-hover:scale-110 transition-transform">{cat.icon}</span>
                <span className={`text-sm font-bold ${cat.color}`}>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-black mb-4">The Glow Up Mindset</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Real transformation is built on consistent habits, not overnight miracles. Here is what separates people who actually glow up from those who stay stuck.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Consistency Over Perfection',
                desc: 'Doing your skincare routine 90% of the time beats doing it perfectly twice. Small daily actions compound into dramatic results over weeks and months.',
              },
              {
                number: '02',
                title: 'Attack Multiple Areas at Once',
                desc: 'The biggest glow ups happen when someone improves their skin, fitness, style, and mindset simultaneously. Everything reinforces everything else.',
              },
              {
                number: '03',
                title: 'Your Environment Shapes You',
                desc: 'Clean your space, curate your social media feed, choose friends who inspire you. Who and what you surround yourself with determines who you become.',
              },
            ].map((item) => (
              <div key={item.number} className="bg-white/5 rounded-2xl p-7 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="text-4xl font-black text-rose-400 mb-4 opacity-80">{item.number}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
