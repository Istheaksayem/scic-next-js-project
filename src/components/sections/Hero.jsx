import React from 'react';

const Hero = () => {
    return (
         <section className="relative overflow-hidden min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white">
      
      {/* Decorative blurred shapes */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-400/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          Manage Your Products <br />
          <span className="text-yellow-300">Smart & Faster</span>
        </h1>

        <p className="text-lg md:text-xl text-blue-100 mb-8">
          A clean and powerful product management application built with
          <span className="font-semibold text-white"> Next.js & Tailwind CSS</span>.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="px-6 py-3 rounded-lg bg-white text-blue-700 font-semibold hover:bg-blue-100 transition">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-lg border border-white/60 text-white hover:bg-white/10 transition">
            View Products
          </button>
        </div>
      </div>
    </section>
    );
};

export default Hero;