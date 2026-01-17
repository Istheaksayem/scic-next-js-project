"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@example.com" && password === "123456") {
      document.cookie = "auth=true; path=/";
      setError("");
      setSuccess(" Login successful! Redirecting...");

      setTimeout(() => {
        router.push("/items");
      }, 1500);
    } else {
      setSuccess("");
      setError("❌ Invalid email or password");
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <form
        onSubmit={handleLogin}
        className="bg-white/90 backdrop-blur p-8 rounded-2xl shadow-xl w-96 animate-fadeIn"
      >
        <h2 className="text-3xl font-bold text-center mb-2 text-indigo-700">
          Welcome Back 👋
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Login to manage your items
        </p>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}
        {success && (
          <p className="text-green-600 text-sm mb-4 text-center font-medium">
            {success}
          </p>
        )}


        {/* Email */}
        <div className="relative mb-4">
          <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type="email"
            placeholder="Email address"
            className="w-full border pl-10 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="relative mb-6">
          <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type={showPass ? "text" : "password"}
            placeholder="Password"
            className="w-full border pl-10 pr-10 p-3 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
          >
            {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all active:scale-95"
        >
          Login →
        </button>

        <p className="text-xs text-gray-500 mt-4 text-center">
          Demo login: admin@example.com / 123456
        </p>
      </form>
    </div>
  );
}
