import React from "react";
import { UserPlus, PackagePlus, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: <UserPlus className="w-7 h-7" />,
    title: "Create Account",
    desc: "Login using a simple mock authentication system.",
  },
  {
    icon: <PackagePlus className="w-7 h-7" />,
    title: "Add Products",
    desc: "Add, update and manage your products easily.",
  },
  {
    icon: <BarChart3 className="w-7 h-7" />,
    title: "Track & Manage",
    desc: "View product lists and manage everything smoothly.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How It Works
          </h2>
          <p className="mt-4 text-gray-600">
            Get started in just three simple steps
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative p-8 rounded-2xl bg-gray-50 border hover:shadow-xl transition"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.desc}</p>

              <span className="absolute top-6 right-6 text-6xl font-bold text-gray-200">
                {i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
