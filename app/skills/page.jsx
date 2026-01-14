"use client";

import { useEffect, useState } from "react";
import Skills from "../components/Skills";
import { 
  Code, 
  Database, 
  Layout, 
  Globe, 
  Wrench, 
  Sparkles, 
  Zap,
  Target,
  ChevronDown,
  Brain,
  Rocket
} from "lucide-react";

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const [floatingElements, setFloatingElements] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setMounted(true);
    
    // Generate floating elements only on client side
    const elements = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${i * 0.2}s`,
      duration: `${3 + Math.random() * 4}s`
    }));
    setFloatingElements(elements);
  }, []);

  // Generate consistent animation delays for server and client
  const sparkleDelays = ['0s', '0.3s', '0.6s'];

  return (
    <>
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-20 animate-grid-pattern"></div>
        
        {/* Floating Elements - Only render on client */}
        {mounted && floatingElements.map((element) => (
          <div
            key={element.id}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
            style={{
              left: element.left,
              top: element.top,
              animationDelay: element.delay,
              animationDuration: element.duration
            }}
          />
        ))}
      </div>

      <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-4 sm:px-6 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section with Animation */}
          <div className="text-center mb-20 relative">
            {/* Animated Sparkles */}
            <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-4">
              {sparkleDelays.map((delay, i) => (
                <Sparkles
                  key={i}
                  className="absolute w-6 h-6 text-blue-500 animate-spin-slow"
                  style={{
                    left: `${i * 40 - 60}px`,
                    animationDelay: delay
                  }}
                />
              ))}
            </div>

            {/* Main Heading */}
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 mt-12 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
                Mastering the{" "}
              </span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-shift">
                  Digital Canvas
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full scale-x-0 animate-underline"></span>
              </span>
            </h1>

            {/* Subtitle with Typewriter Effect */}
            <p className={`text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              Technologies and tools I use to build{" "}
              <span className="text-blue-400 font-semibold">scalable</span>,{" "}
              <span className="text-cyan-400 font-semibold">performant</span>, and{" "}
              <span className="text-purple-400 font-semibold">user-friendly</span> web applications.
            </p>

            {/* Stats Bar */}
            <div className={`flex flex-wrap justify-center gap-6 mb-12 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}>
              {[
                { label: "Projects Built", value: "50+", icon: <Rocket className="w-4 h-4" /> },
                { label: "Tech Stack", value: "20+", icon: <Code className="w-4 h-4" /> },
                { label: "Experience", value: "2 Years", icon: <Target className="w-4 h-4" /> },
                { label: "Availability", value: "Open", icon: <Zap className="w-4 h-4" /> },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Component with Enhanced Container */}
          <div className={`transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="relative">
              {/* Container Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated Border - Fixed to prevent hydration mismatch */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-3xl p-[1px] animate-gradient-border opacity-20">
                  <div className="h-full w-full bg-gradient-to-br from-black via-gray-900 to-black rounded-3xl"></div>
                </div>
              </div>

              {/* Skills Component */}
              <div className="relative rounded-3xl overflow-hidden">
                <Skills />
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className={`mt-20 text-center transition-all duration-1000 delay-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Ready to Build Together?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Have a project in mind? Let&apos;s combine your vision with my technical expertise to create something extraordinary.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30"
                >
                  <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Start a Project
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </a>
                <a
                  href="/projects"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Custom Animations */}
        <style jsx global>{`
          @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-20px) translateX(10px); }
          }
          
          @keyframes gridPattern {
            0% { background-position: 0px 0px; }
            100% { background-position: 14px 24px; }
          }
          
          @keyframes spinSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes underline {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
          
          @keyframes gradientBorder {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          .animate-gradient-shift {
            background-size: 200% auto;
            animation: gradientShift 3s ease infinite;
          }
          
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          
          .animate-grid-pattern {
            animation: gridPattern 20s linear infinite;
          }
          
          .animate-spin-slow {
            animation: spinSlow 20s linear infinite;
          }
          
          .animate-underline {
            animation: underline 1s ease-out forwards;
            animation-delay: 0.5s;
          }
          
          .animate-gradient-border {
            background-size: 200% 200%;
            animation: gradientBorder 3s ease infinite;
          }
        `}</style>
      </section>
    </>
  );
}