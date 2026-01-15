"use client";

import { useState, useEffect, useMemo, useCallback ,useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { 
  ArrowRight, 
  Sparkles,
  Star,
  Code,
  Server,
  Cpu,
  Palette,
  Target,
  Rocket,
  Calendar,
  Award
} from "lucide-react";

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  
  const roles = useMemo(() => [
    "Full-Stack Developer",
    "UI/UX Designer",
    "Problem Solver",
    "Tech Enthusiast",
    "Creative Coder"
  ], []);

  // Check mobile on mount
  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Role text animation - optimized
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex(prev => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const stats = useMemo(() => [
    { value: "5+", label: "Projects", icon: Target, color: "from-blue-500 to-cyan-500" },
    { value: "2+", label: "Years Exp", icon: Calendar, color: "from-purple-500 to-pink-500" },
    { value: "99%", label: "Satisfaction", icon: Award, color: "from-green-500 to-emerald-500" },
    { value: "15+", label: "Technologies", icon: Cpu, color: "from-orange-500 to-yellow-500" },
  ], []);

  const techStack = useMemo(() => [
    { name: "React", color: "bg-blue-500", icon: Code },
    { name: "Next.js", color: "bg-black", icon: Cpu },
    { name: "PostgreSQL", color: "bg-green-600", icon: Server },
    { name: "Tailwind", color: "bg-cyan-500", icon: Palette },
  ], []);

  // Static container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  // Static background - no animations
  const StaticBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      
      {/* Static gradient orbs */}
      <div 
        className="absolute w-[600px] h-[600px] left-[5%] top-[10%] rounded-full blur-2xl bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-transparent" 
        style={{ opacity: 0.3 }}
      />
      <div 
        className="absolute w-[500px] h-[500px] right-[10%] bottom-[20%] rounded-full blur-2xl bg-gradient-to-br from-cyan-900/10 via-purple-900/10 to-transparent" 
        style={{ opacity: 0.3 }}
      />
      
      {/* Simple static grid */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(180deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          opacity: 0.1
        }}
      />
      
      {/* Center glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 blur-2xl" />
    </div>
  );

  // Profile picture with optimized hover
  const ProfilePicture = useCallback(() => (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white/10 shadow-lg">
        <Image
          src="/me.jpeg"
          alt="Ansari Sadik"
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority
          sizes="(max-width: 768px) 190px, (max-width: 1024px) 192px, 224px"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        
        {/* Hover effect */}
        {isHovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col items-center justify-center transition-opacity duration-200">
            <Sparkles className="w-6 h-6 text-yellow-400 mb-2" />
            <p className="text-white text-sm font-medium">Hi there! 👋</p>
          </div>
        )}
        
        {/* Static badge */}
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg z-10">
          <Star className="w-4 h-4 text-white" />
        </div>
      </div>
    </motion.div>
  ), [isHovered]);

  // Tech stack badges
  const TechStackBadges = useCallback(() => (
    <div className="flex flex-col gap-3">
      <h3 className="text-base font-semibold text-gray-300 text-center lg:text-left">
        Tech Stack
      </h3>
      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/20 transition-all duration-150"
          >
            <div className={`w-5 h-5 rounded ${tech.color} flex items-center justify-center`}>
              <tech.icon className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm text-gray-300">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  ), [techStack]);

  // Stats grid
  const StatsGrid = useCallback(({ isDesktop = false }) => (
    <div className={`grid grid-cols-2 gap-3 ${isDesktop ? 'hidden lg:grid' : 'lg:hidden'}`}>
      {stats.map((stat, index) => (
        <div
          key={index}
          className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-150"
        >
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-1.5`}>
            <stat.icon className="w-4 h-4 text-white" />
          </div>
          <div className="text-xl font-bold text-white">{stat.value}</div>
          <div className="text-xs text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
  ), [stats]);

  // Role text component
  const RoleText = useCallback(() => (
    <motion.div
      key={textIndex}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-full px-4 py-2"
    >
      <div className="w-2 h-2 rounded-full bg-blue-500" />
      <span className="text-base sm:text-lg text-gray-200 font-medium">
        {roles[textIndex]}
      </span>
      <div className="w-2 h-2 rounded-full bg-cyan-500" />
    </motion.div>
  ), [textIndex, roles]);

  // CTA Buttons
  const CTAButtons = useCallback(() => (
    <div className="flex flex-wrap gap-3">
      <a
        href="/projects"
        className="group relative px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold overflow-hidden"
      >
        <span className="relative flex items-center gap-2">
          View Projects
          <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </span>
      </a>

      <a
        href="/contact"
        className="px-6 py-3 rounded-lg bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-200"
      >
        Get in Touch
      </a>
    </div>
  ), []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Static Background */}
      <StaticBackground />

      {/* Main Content Container */}
      <motion.div
        style={{ opacity, scale }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto w-full"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Content - Profile & Intro */}
          <div className="lg:w-1/3">
            <div className="flex flex-col items-center lg:items-start gap-8">
              <motion.div variants={itemVariants}>
                <ProfilePicture />
              </motion.div>

              <motion.div variants={itemVariants}>
                <TechStackBadges />
              </motion.div>

              {/* Desktop Stats */}
              <motion.div variants={itemVariants} className="hidden lg:block">
                <StatsGrid isDesktop />
              </motion.div>
            </div>
          </div>

          {/* Right Content - Main Info */}
          <div className="lg:w-2/3">
            <div className="space-y-6">
              {/* Badge */}
              <motion.div
                variants={itemVariants}
                className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10"
              >
                <Rocket className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">Welcome to my portfolio</span>
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-3">
                <motion.h1 
                  variants={itemVariants}
                  className="text-3xl sm:text-4xl md:text-5xl font-bold"
                >
                  <span className="text-white">Hi, I'm </span>
                  <span className="hero-gradient-text">
                    Ansari Sadik
                  </span>
                </motion.h1>
                
                {/* Animated Role Text */}
                <motion.div variants={itemVariants}>
                  <RoleText />
                </motion.div>
              </div>

              {/* Description */}
              <motion.div
                variants={itemVariants}
                className="text-base text-gray-300 leading-relaxed max-w-2xl"
              >
                <p className="mb-3">
                  I'm a passionate developer who crafts{" "}
                  <span className="text-blue-400 font-medium">digital experiences</span>{" "}
                  that blend cutting-edge technology with elegant design.
                </p>
                <p>
                  Specializing in modern web applications, I transform complex problems into{" "}
                  <span className="text-cyan-400 font-medium">simple, beautiful solutions</span>.
                </p>
              </motion.div>

              {/* Mobile Stats */}
              <motion.div variants={itemVariants} className="lg:hidden">
                <StatsGrid />
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="pt-4">
                <CTAButtons />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-5 h-5 text-gray-400 bounce-animation">
            <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      )}

      {/* Add minimal CSS animations */}
      <style jsx>{`
        @keyframes gradientMove {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .hero-gradient-text {
          background: linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientMove 3s ease-in-out infinite;
        }
        
        .bounce-animation {
          animation: bounce 1.5s ease-in-out infinite;
        }
        
        /* GPU acceleration for smooth animations */
        .gpu-accelerated {
          transform: translateZ(0);
          backface-visibility: hidden;
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}