import React from "react";

const testimonials = [
  {
    name: "Rahim Ahmed",
    role: "Small Business Owner",
    quote:
      "This app makes product management super easy and fast. Clean UI and smooth experience!",
  },
  {
    name: "Nusrat Jahan",
    role: "Frontend Developer",
    quote:
      "Loved the simplicity. Perfect example of a clean Next.js project.",
  },
  {
    name: "Tanvir Hasan",
    role: "Startup Founder",
    quote:
      "Exactly what I needed to manage items without complexity.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Users Say
          </h2>
          <p className="mt-4 text-gray-600">
            Trusted by developers and businesses
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="backdrop-blur-lg bg-white/70 p-8 rounded-2xl border shadow hover:shadow-xl transition"
            >
              <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                “{item.quote}”
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">{item.name}</h4>
                <span className="text-xs text-gray-500">{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
