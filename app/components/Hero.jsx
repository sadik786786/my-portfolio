"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { 
  ArrowRight, 
  Sparkles, 
  ChevronDown,
  Github,
  Linkedin,
  Mail,
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
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);
  const animationFrameRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  
  const roles = [
    "Full-Stack Developer",
    "UI/UX Designer",
    "Problem Solver",
    "Tech Enthusiast"
  ];

  useEffect(() => {
    setIsMounted(true);
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { value: "5+", label: "Projects", icon: Target, color: "from-blue-500 to-cyan-500" },
    { value: "2+", label: "Years Exp", icon: Calendar, color: "from-purple-500 to-pink-500" },
    { value: "99%", label: "Satisfaction", icon: Award, color: "from-green-500 to-emerald-500" },
    { value: "15+", label: "Technologies", icon: Cpu, color: "from-orange-500 to-yellow-500" },
  ];

  const techStack = [
    { name: "React", color: "bg-blue-500", icon: Code },
    { name: "Next.js", color: "bg-black", icon: Cpu },
    { name: "PostgreSQL", color: "bg-green-600", icon: Server },
    { name: "Tailwind", color: "bg-cyan-500", icon: Palette },
  ];

  // Memoize animations to prevent unnecessary recalculations
  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Reduced from 0.15
        delayChildren: 0.1 // Reduced from 0.2
      }
    }
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { y: 20, opacity: 0 }, // Reduced from 30
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12, // Increased damping for smoother motion
        mass: 0.5 // Reduced mass
      }
    }
  }), []);

  // Optimized background elements with reduced complexity
  const BackgroundElements = () => {
    if (isMobile) {
      return (
        <>
          {/* Simplified mobile background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
          </div>
        </>
      );
    }

    return (
      <>
        {/* Optimized moving grid with reduced updates */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.015]">
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px' // Increased size
            }}
          />
        </div>

        {/* Reduced number of gradient orbs */}
        <div className="absolute w-[600px] h-[600px] left-[5%] top-[10%] rounded-full blur-2xl bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-transparent pointer-events-none" />
        <div className="absolute w-[500px] h-[500px] right-[10%] bottom-[20%] rounded-full blur-2xl bg-gradient-to-br from-cyan-900/10 via-purple-900/10 to-transparent pointer-events-none" />

        {/* Static geometric shapes instead of animated */}
        <div className="absolute top-20 left-20 w-24 h-24 opacity-[0.03] backdrop-blur-sm border border-white/5" 
          style={{
            clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
          }}
        />
        <div className="absolute bottom-20 right-20 w-32 h-32 opacity-[0.03] backdrop-blur-sm border border-white/5 rotate-45"
          style={{
            clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
          }}
        />
      </>
    );
  };

  // Optimized profile picture component
  const ProfilePicture = () => (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, type: "spring" }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white/10 shadow-lg shadow-blue-500/5 cursor-pointer backdrop-blur-sm"
    >
      <div className="relative w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10">
        <Image
          src="/me.jpeg"
          alt="Ansari Sadik"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 190px, (max-width: 1024px) 192px, 224px"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>
      
      {/* Simplified hover effect */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent flex flex-col items-center justify-center">
          <Sparkles className="w-6 h-6 text-yellow-400 mb-1" />
          <p className="text-white text-xs font-medium text-center px-3">
            Hi there!
          </p>
        </div>
      )}
      
      {/* Static badge */}
      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg z-10">
        <Star className="w-3 h-3 text-white" />
      </div>
    </motion.div>
  );

  // Optimized tech stack badges
  const TechStackBadges = () => (
    <div className="flex flex-col gap-3">
      <h3 className="text-base font-semibold text-gray-300 text-center lg:text-left">
        Tech Stack
      </h3>
      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/20 transition-all duration-200"
          >
            <div className={`w-5 h-5 rounded ${tech.color} flex items-center justify-center`}>
              <tech.icon className="w-2.5 h-2.5 text-white" />
            </div>
            <span className="text-sm text-gray-300">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  // Optimized stats for desktop
  const DesktopStats = () => (
    <div className="grid grid-cols-2 gap-3">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="relative p-3 rounded-lg bg-white/5 border border-white/10"
        >
          <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-1.5`}>
            <stat.icon className="w-4 h-4 text-white" />
          </div>
          <div className="text-xl font-bold text-white">{stat.value}</div>
          <div className="text-xs text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
  );

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      {/* Optimized Background */}
      <BackgroundElements />

      {/* Main Content Container */}
      <motion.div
        style={{ opacity, scale }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto w-full"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
          
          {/* Left Content - Profile & Intro */}
          <div className="lg:w-1/3">
            <div className="flex flex-col items-center lg:items-start gap-6">
              <motion.div variants={itemVariants}>
                <ProfilePicture />
              </motion.div>

              <motion.div variants={itemVariants}>
                <TechStackBadges />
              </motion.div>

              {/* Desktop Stats */}
              <motion.div variants={itemVariants} className="hidden lg:block">
                <DesktopStats />
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
                <Rocket className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-sm text-gray-300">Welcome to my portfolio</span>
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
              </motion.div>

              {/* Main Heading */}
              <motion.div variants={itemVariants} className="space-y-3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                  <span className="text-white">Hi, I'm </span>
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Ansari Sadik
                  </span>
                </h1>
                
                {/* Animated Role Text */}
                <div className="relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-4 py-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span className="text-base sm:text-lg text-gray-200 font-medium">
                    {roles[textIndex]}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                variants={itemVariants}
                className="text-base text-gray-300 leading-relaxed max-w-2xl"
              >
                <div className="mb-2">
                  I'm a passionate developer who crafts{" "}
                  <span className="text-blue-400 font-medium">digital experiences</span>{" "}
                  that blend cutting-edge technology with elegant design.
                </div>
                <div>
                  Specializing in modern web applications, I transform complex problems into{" "}
                  <span className="text-cyan-400 font-medium">simple, beautiful solutions</span>.
                </div>
              </motion.div>

              {/* Mobile Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-2 gap-3 lg:hidden"
              >
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-lg bg-white/5 border border-white/10"
                  >
                    <div className="text-lg font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3 pt-2"
              >
                <a
                  href="/projects"
                  className="group relative px-6 py-2.5 rounded-lg overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold"
                >
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-200" />
                  <div className="relative flex items-center justify-center gap-2">
                    <span>View Projects</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>

                <a
                  href="/contact"
                  className="px-6 py-2.5 rounded-lg bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-200"
                >
                  Get in Touch
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator for Desktop */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-5 h-5 text-gray-400 animate-bounce" />
        </motion.div>
      )}
    </section>
  );
}