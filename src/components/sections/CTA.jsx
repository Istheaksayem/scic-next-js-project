import React from "react";

const CTA = () => {
  return (
    <section className="relative py-24 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Ready to Manage Your Products Smarter?
        </h2>
        <p className="text-blue-100 mb-8 text-lg">
          Start using our simple and powerful product management system today.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="px-8 py-4 rounded-xl bg-white text-blue-700 font-semibold hover:bg-blue-100 transition">
            Get Started Now
          </button>
          <button className="px-8 py-4 rounded-xl border border-white/70 hover:bg-white/10 transition">
            View Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
