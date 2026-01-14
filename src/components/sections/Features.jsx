import React from "react";
import { Package, ShieldCheck, Zap, LayoutDashboard, Cloud, Users } from "lucide-react";

const features = [
  {
    icon: <Package className="w-8 h-8" />,
    title: "Product Management",
    desc: "Easily add, edit, and organize your products in one place.",
  },
  {
    icon: <LayoutDashboard className="w-8 h-8" />,
    title: "Clean Dashboard",
    desc: "Simple and intuitive dashboard for faster control.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Fast Performance",
    desc: "Built with Next.js for blazing fast loading speed.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Secure System",
    desc: "Basic authentication and protected routes support.",
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Ready",
    desc: "Deploy easily on Vercel or any modern cloud platform.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "User Friendly",
    desc: "Designed with usability and accessibility in mind.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Powerful Features
          </h2>
          <p className="mt-4 text-gray-600">
            Everything you need to manage products efficiently and smartly.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition"
            >
              {/* Gradient Hover Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition"></div>
              <div className="absolute inset-[1px] rounded-2xl bg-white"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6 group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-500 group-hover:text-white transition">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
