const schedule = [
  { day: "Monday", hours: "8:30 AM – 5:00 PM", open: true },
  { day: "Tuesday", hours: "8:30 AM – 5:00 PM", open: true },
  { day: "Wednesday", hours: "8:30 AM – 5:00 PM", open: true },
  { day: "Thursday", hours: "8:30 AM – 5:00 PM", open: true },
  { day: "Friday", hours: "8:30 AM – 5:00 PM", open: true },
  { day: "Saturday", hours: "8:30 AM – 5:00 PM", open: true },
  { day: "Sunday", hours: "Closed", open: false },
];

function getTodayName() {
  return new Date().toLocaleDateString("en-US", { weekday: "long" });
}

export default function Hours() {
  const today = getTodayName();
  const todayEntry = schedule.find((s) => s.day === today);
  const isOpenNow = todayEntry?.open ?? false;

  return (
    <section id="hours" className="py-28 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-blue-600 font-semibold text-sm tracking-widest uppercase mb-4">Hours</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Business Hours
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              We're here to serve you Monday through Saturday. Drop by or give us a call.
            </p>

            {/* Status card */}
            <div className={`inline-flex items-center gap-3 px-5 py-3 rounded-2xl border ${
              isOpenNow
                ? "bg-emerald-50 border-emerald-100 text-emerald-700"
                : "bg-red-50 border-red-100 text-red-600"
            }`}>
              <span className={`w-2 h-2 rounded-full ${isOpenNow ? "bg-emerald-500 animate-pulse" : "bg-red-400"}`} />
              <span className="font-semibold text-sm">
                {isOpenNow ? "Open Now · Closes at 5:00 PM" : "Closed Today"}
              </span>
            </div>

            {/* Contact quick links */}
            <div className="mt-10 flex flex-col gap-3">
              <a
                href="tel:0753344722"
                className="inline-flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center group-hover:border-blue-200 group-hover:bg-blue-50 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="font-medium text-sm">075 334 4722</span>
              </a>
              <div className="inline-flex items-center gap-3 text-gray-500">
                <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-sm">100/5 Walala Rd, Menikhinna 20170</span>
              </div>
            </div>
          </div>

          {/* Right – Schedule */}
          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
            {schedule.map((item, i) => {
              const isToday = item.day === today;
              return (
                <div
                  key={item.day}
                  className={`flex justify-between items-center px-6 py-4 ${
                    isToday ? "bg-blue-600 text-white" : i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  } ${i !== schedule.length - 1 ? "border-b border-gray-100" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-semibold text-sm ${isToday ? "text-white" : "text-gray-800"}`}>
                      {item.day}
                    </span>
                    {isToday && (
                      <span className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full font-medium">
                        Today
                      </span>
                    )}
                  </div>
                  <span className={`text-sm font-medium ${
                    isToday ? "text-blue-100" : item.open ? "text-gray-600" : "text-red-400"
                  }`}>
                    {item.hours}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
