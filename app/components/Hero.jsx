"use client";

import { useState, useEffect, useRef } from "react";
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);
  
  const roles = [
    "Full-Stack Developer",
    "UI/UX Designer",
    "Problem Solver",
    "Tech Enthusiast",
    "Creative Coder"
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isMounted) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      setMousePosition({ x, y });
    };

    if (isMounted) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [isMounted]);

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  // Predefined positions and values to avoid Math.random() during SSR
  const particlePositions = Array.from({ length: 25 }, (_, i) => ({
    left: `${(i * 4) % 100}%`,
    top: `${(i * 3) % 100}%`,
    color: i % 2 === 0 ? 'rgba(59, 130, 246, 0.3)' : 'rgba(6, 182, 212, 0.3)',
    shadow: i % 2 === 0 ? 'rgba(59, 130, 246, 0.4)' : 'rgba(6, 182, 212, 0.4)',
    x: i % 2 === 0 ? 15 : -15,
    duration: 15 + (i * 0.3)
  }));

  // Subtle floating particles - Fixed values for hydration
  const FloatingParticle = ({ index, position, color, shadow, x, duration }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0, 0.15, 0],
        y: [0, -30, 0],
        x: [0, x, 0]
      }}
      transition={{
        duration: duration,
        delay: index * 0.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute w-2 h-2 rounded-full"
      style={{
        left: position.left,
        top: position.top,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        boxShadow: `0 0 15px ${shadow}`
      }}
    />
  );

  // Gentle wave effect - Fixed values
  const GentleWave = ({ delay, size, color }) => (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ 
        scale: [0.8, 1.2, 0.8],
        opacity: [0, 0.1, 0]
      }}
      transition={{
        duration: 20,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border ${color} ${size}`}
    />
  );

  // Subtle geometric shapes - Fixed rotations
  const GeometricShape = ({ delay, position, size, color, rotate = 0, duration = 40 }) => (
    <motion.div
      initial={{ opacity: 0, rotate: rotate }}
      animate={{ 
        opacity: [0.05, 0.1, 0.05],
        rotate: [rotate, rotate + 180, rotate + 360],
        y: [0, -10, 0]
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`absolute ${position} ${size} ${color} backdrop-blur-sm border border-white/5`}
      style={{
        clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
      }}
    />
  );

  // Slow moving grid - Fixed animation
  const MovingGrid = () => (
    <div className="absolute inset-0 overflow-hidden opacity-[0.02]">
      <motion.div
        animate={{
          backgroundPosition: ['0px 0px', '100px 100px']
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      {/* Beautiful Calm Background */}
      <div className="absolute inset-0">
        {/* Moving Grid */}
        <MovingGrid />

        {/* Large gradient orbs - Fixed positions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.02, 0.05, 0.02],
            scale: [1, 1.1, 1],
            x: [0, 5, 0],
            y: [0, -5, 0]
          }}
          transition={{
            duration: 30,
            delay: 0,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-[800px] h-[800px] left-[5%] top-[10%] rounded-full blur-3xl bg-gradient-to-br from-blue-900/20 via-purple-900/15 to-transparent"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.02, 0.05, 0.02],
            scale: [1, 1.1, 1],
            x: [0, -5, 0],
            y: [0, 5, 0]
          }}
          transition={{
            duration: 35,
            delay: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-[700px] h-[700px] right-[10%] bottom-[20%] rounded-full blur-3xl bg-gradient-to-br from-cyan-900/15 via-purple-900/10 to-transparent"
        />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.02, 0.05, 0.02],
            scale: [1, 1.1, 1],
            x: [0, 5, 0],
            y: [0, 5, 0]
          }}
          transition={{
            duration: 40,
            delay: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute w-[600px] h-[600px] left-[40%] top-[60%] rounded-full blur-3xl bg-gradient-to-br from-purple-900/15 via-blue-900/10 to-transparent"
        />

        {/* Gentle waves */}
        <GentleWave 
          delay={0}
          size="w-[min(100vh,100vw)] h-[min(100vh,100vw)]"
          color="border-blue-500/10"
        />
        <GentleWave 
          delay={5}
          size="w-[min(90vh,90vw)] h-[min(90vh,90vw)]"
          color="border-cyan-500/10"
        />
        <GentleWave 
          delay={10}
          size="w-[min(80vh,80vw)] h-[min(80vh,80vw)]"
          color="border-purple-500/10"
        />

        {/* Subtle geometric shapes - Fixed durations */}
        <GeometricShape 
          delay={0}
          position="top-20 left-20"
          size="w-32 h-32"
          color="bg-blue-500/5"
          rotate={0}
          duration={40}
        />
        <GeometricShape 
          delay={8}
          position="bottom-20 right-20"
          size="w-40 h-40"
          color="bg-cyan-500/5"
          rotate={45}
          duration={48}
        />
        <GeometricShape 
          delay={16}
          position="top-1/3 right-1/4"
          size="w-24 h-24"
          color="bg-purple-500/5"
          rotate={90}
          duration={44}
        />
        <GeometricShape 
          delay={24}
          position="bottom-1/3 left-1/4"
          size="w-28 h-28"
          color="bg-green-500/5"
          rotate={135}
          duration={52}
        />

        {/* Floating particles - Using predefined positions */}
        {isMounted && particlePositions.map((pos, index) => (
          <FloatingParticle 
            key={index} 
            index={index}
            position={{ left: pos.left, top: pos.top }}
            color={pos.color}
            shadow={pos.shadow}
            x={pos.x}
            duration={pos.duration}
          />
        ))}

        {/* Very subtle center gradient */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 blur-3xl" />

        {/* Soft glow effect */}
        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5"
        />
      </div>

      {/* Main Content Container */}
      <motion.div
        style={{ opacity, scale }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto w-full"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          
          {/* Left Content - Profile & Intro */}
          <div className="lg:w-1/3">
            <motion.div 
              variants={itemVariants}
              className="flex flex-col items-center lg:items-start gap-8"
            >
              {/* Profile Picture Container */}
              <div className="relative group">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, type: "spring" }}
                  whileHover={{ scale: 1.02 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-blue-500/10 cursor-pointer backdrop-blur-sm"
                  style={{
                    transform: isMounted ? `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)` : 'translate(0px, 0px)'
                  }}
                >
                  {/* Profile Image */}
                  <div className="relative w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-cyan-500/20">
                    <Image
                      src="/me.jpeg"
                      alt="Ansari Sadik"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 190px, (max-width: 1024px) 192px, 224px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  
                  {/* Soft glow effect */}
                  <motion.div
                    animate={{
                      opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-transparent to-cyan-400/10"
                  />
                  
                  {/* Hover Overlay */}
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col items-center justify-center"
                    >
                      <Sparkles className="w-8 h-8 text-yellow-400 mb-2" />
                      <p className="text-white text-sm font-medium text-center px-4">
                        Hi there! 👋
                      </p>
                    </motion.div>
                  )}
                  
                  {/* Very slow border ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-blue-400/30 border-r-cyan-400/30 animate-spin-slow" />
                  
                  {/* Subtle floating badge */}
                  <motion.div
                    animate={{ 
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg z-10"
                  >
                    <Star className="w-4 h-4 text-white" />
                  </motion.div>
                </motion.div>
              </div>

              {/* Tech Stack Badges */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-4"
              >
                <h3 className="text-lg font-semibold text-gray-300 text-center lg:text-left">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      whileHover={{ y: -2, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative overflow-hidden group/tech"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300" />
                      <div className="relative flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 group-hover/tech:border-blue-500/20 transition-all duration-300">
                        <div className={`w-6 h-6 rounded ${tech.color} flex items-center justify-center`}>
                          <tech.icon className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-gray-300 group-hover/tech:text-white transition-colors">
                          {tech.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                variants={itemVariants}
                className="hidden lg:block"
              >
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ y: -2 }}
                      className="relative overflow-hidden group/stat"
                    >
                      <motion.div
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%']
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover/stat:opacity-10 transition-opacity duration-300`}
                      />
                      <div className="relative p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover/stat:border-white/20 transition-all">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-2`}>
                          <stat.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="text-2xl font-bold text-white">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Main Info */}
          <div className="lg:w-2/3">
            <motion.div variants={containerVariants} className="space-y-8">
              {/* Badge */}
              <motion.div
                variants={itemVariants}
                className="relative inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden group/badge"
              >
                <motion.div
                  animate={{
                    x: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"
                />
                <Rocket className="w-4 h-4 text-blue-400 relative z-10" />
                <span className="text-sm text-gray-300 relative z-10">Welcome to my portfolio</span>
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse relative z-10" />
              </motion.div>

              {/* Main Heading */}
              <motion.div variants={itemVariants} className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                  <span className="text-white">Hi, I'm </span>
                  <motion.span
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_auto]"
                  >
                    Ansari Sadik
                  </motion.span>
                </h1>
                
                {/* Animated Role Text */}
                <motion.div
                  key={textIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-6 py-3 overflow-hidden"
                >
                  <motion.div
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%']
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10"
                  />
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-lg sm:text-xl text-gray-200 font-medium relative">
                    {roles[textIndex]}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                </motion.div>
              </motion.div>

              {/* Description */}
              <motion.div
                variants={itemVariants}
                className="text-lg text-gray-300 leading-relaxed max-w-2xl space-y-2"
              >
                <div className="mb-2">
                  I'm a passionate developer who crafts{" "}
                  <span className="relative inline-block">
                    <span className="text-blue-400 font-medium relative z-10">digital experiences</span>
                    <motion.div
                      animate={{
                        width: ['0%', '100%', '0%'],
                        left: ['0%', '0%', '100%']
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute bottom-0 h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"
                    />
                  </span>{" "}
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
                className="grid grid-cols-2 gap-4 lg:hidden"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                    className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                  >
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/projects"
                  className="group relative px-8 py-3 rounded-lg overflow-hidden"
                >
                  <motion.div
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_auto]"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center gap-2 text-white font-semibold">
                    <span>View Projects</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/contact"
                  className="relative px-8 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/20 text-white font-semibold overflow-hidden group"
                >
                  <motion.div
                    animate={{
                      x: ['-100%', '100%']
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  />
                  <span className="relative">Get in Touch</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 40s linear infinite;
        }
      `}</style>
    </section>
  );
}