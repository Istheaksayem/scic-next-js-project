import React from "react";
import { Facebook, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-gray-300 mt-20">
      
      {/* Top Gradient Line */}
      <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              MyApp
            </h2>
            <p className="text-sm leading-relaxed text-gray-400">
              A simple and modern product management application built with
              Next.js and Tailwind CSS.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition cursor-pointer">
                Home
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Products
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Login
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Dashboard
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white transition cursor-pointer">
                Documentation
              </li>
              <li className="hover:text-white transition cursor-pointer">
                API Reference
              </li>
              <li className="hover:text-white transition cursor-pointer">
                Support
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Connect
            </h3>
            <div className="flex gap-4">
              <a className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 transition">
                <Facebook className="w-5 h-5" />
              </a>
              <a className="p-2 rounded-full bg-gray-800 hover:bg-sky-500 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition">
                <Github className="w-5 h-5" />
              </a>
              <a className="p-2 rounded-full bg-gray-800 hover:bg-blue-700 transition">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
