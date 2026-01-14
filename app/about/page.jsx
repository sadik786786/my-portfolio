"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  User, 
  Code2, 
  Briefcase, 
  MapPin, 
  Calendar,
  Rocket,
  Target,
  Sparkles,
  ChevronRight,
  Globe,
  Cpu,
  Layers,
  Award,
  BookOpen,
  Coffee,
  Heart
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const containerRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skills = [
    { name: "Next.js", level: 90, color: "from-white to-black" },
    { name: "React", level: 90, color: "from-blue-600 to-cyan-500" },
    { name: "JavaScript", level: 85, color: "from-blue-700 to-blue-500" },
    { name: "Tailwind CSS", level: 92, color: "from-cyan-500 to-teal-400" },
    { name: "PHP", level: 88, color: "from-green-600 to-emerald-400" },
    { name: "PostgreSQL", level: 82, color: "from-blue-500 to-blue-700" },
  ];

  const timeline = [
    {
      year: "2025",
      title: "Web Development",
      company: "Learning & Exploration (Internship)",
      description: "Mastering modern web technologies and best practices",
      icon: <Rocket className="w-5 h-5" />,
      color: "border-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      year: "2026",
      title: "Open for Opportunities",
      company: "Available for Projects",
      description: "Looking for challenging full-stack development roles",
      icon: <Target className="w-5 h-5" />,
      color: "border-green-500",
      bgColor: "bg-green-500/10"
    }
  ];

  const personalTraits = [
    { icon: <BookOpen className="w-5 h-5" />, title: "Quick Learner", description: "Adapts rapidly to new technologies" },
    { icon: <Target className="w-5 h-5" />, title: "Problem Solver", description: "Loves tackling complex challenges" },
    { icon: <Coffee className="w-5 h-5" />, title: "Detail Oriented", description: "Focuses on quality and precision" },
    { icon: <Heart className="w-5 h-5" />, title: "Passionate", description: "Deeply committed to craft" },
  ];

  // Static particle positions to avoid Math.random()
  const staticParticlePositions = [
    { left: 10, top: 20, delay: 0 },
    { left: 25, top: 60, delay: 0.3 },
    { left: 50, top: 30, delay: 0.6 },
    { left: 70, top: 80, delay: 0.9 },
    { left: 90, top: 40, delay: 1.2 },
    { left: 85, top: 15, delay: 1.5 },
    { left: 40, top: 90, delay: 1.8 },
    { left: 15, top: 70, delay: 2.1 },
    { left: 60, top: 10, delay: 2.4 },
    { left: 95, top: 65, delay: 2.7 },
  ];

  return (
    <>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500" />
        
        {/* Floating Particles - Only on client with static positions */}
        {mounted && staticParticlePositions.slice(0, 10).map((pos, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            animate={{
              y: [0, -30, 0],
              x: [0, (i % 2 === 0 ? 1 : -1) * 20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: pos.delay,
            }}
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
            }}
          />
        ))}
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-20"></div>
      </div>

      <section 
        ref={containerRef}
        className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          {/* Hero Header with Animation */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8 }}
            className="mb-12 lg:mb-20 relative"
          >
            {/* Animated Decoration */}
            <div className="absolute -top-4 left-0">
              <Sparkles className="w-8 h-8 text-blue-500 animate-pulse" />
            </div>

            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-blue-500"></div>
              <div className="flex items-center gap-2 text-sm text-blue-400 font-medium tracking-wider uppercase">
                <User className="w-4 h-4" />
                <span>Introduction</span>
              </div>
              <div className="w-8 h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
                About{" "}
              </span>
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-shift">
                Me
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl">
              Crafting digital experiences with code, creativity, and attention to detail
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid lg:grid-cols-3 gap-8 lg:gap-12"
          >
            {/* Left Column - Introduction with Profile Picture */}
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Animated Profile Card with Picture */}
              <div className="group relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm overflow-hidden">
                  {/* Profile Picture Section */}
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                    {/* Animated Profile Picture Container */}
                    <motion.div
                      initial={{ scale: 0.8, rotate: -5 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.05, rotate: 0 }}
                      className="relative group/picture"
                    >
                      {/* Glowing Border */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-2xl blur-md opacity-0 group-hover/picture:opacity-70 transition-opacity duration-500"></div>
                      
                      {/* Main Picture Container */}
                      <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-xl overflow-hidden border-4 border-gray-900 bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                        {/* Your Image */}
                        <div className="relative w-full h-full">
                          <Image
                            src="/me.jpeg"
                            alt="Ansari Sadik"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 180px, 192px"
                            priority
                          />
                        </div>
                        
                        {/* Floating Elements around picture - Only on client */}
                        {mounted && [...Array(4)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              rotate: [0, 360],
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 3 + i,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                            style={{
                              top: `${[10, 10, 85, 85][i]}%`,
                              left: `${[10, 85, 10, 85][i]}%`,
                            }}
                          />
                        ))}
                      </div>
                      
                      {/* Status Indicator */}
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 border-4 border-gray-900 flex items-center justify-center"
                      >
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </motion.div>
                    </motion.div>

                    {/* Name and Title */}
                    <div className="text-center sm:text-left flex-1">
                      <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2"
                      >
                        Ansari <span className="text-blue-400">Sadik</span>
                      </motion.h2>
                      <motion.p 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 text-base sm:text-lg mb-4"
                      >
                        Full-Stack Developer & Problem Solver
                      </motion.p>
                      
                      {/* Personal Traits */}
                      <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-4">
                        {personalTraits.map((trait, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20"
                          >
                            <div className="text-blue-400">
                              {trait.icon}
                            </div>
                            <span className="text-sm text-gray-300">{trait.title}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bio Section */}
                  <div className="space-y-5 text-gray-300 leading-relaxed">
                    <motion.p 
                      variants={fadeInUp}
                      className="text-base sm:text-lg"
                    >
                      I&apos;m a passionate <span className="text-white font-medium">Full-Stack Developer</span> with expertise in building modern, scalable web applications that deliver exceptional user experiences.
                    </motion.p>

                    <motion.p 
                      variants={fadeInUp}
                      transition={{ delay: 0.1 }}
                      className="text-base sm:text-lg"
                    >
                      My journey in web development blends technical proficiency with creative problem-solving. I specialize in the <span className="text-blue-400">React ecosystem</span>, particularly <span className="text-cyan-400">Next.js</span>, and enjoy architecting both beautiful interfaces and robust backend systems.
                    </motion.p>

                    <motion.p 
                      variants={fadeInUp}
                      transition={{ delay: 0.2 }}
                      className="text-base sm:text-lg"
                    >
                      Beyond code, I&apos;m focused on creating solutions that are performant, maintainable, and user-centric. Every project is an opportunity to learn, innovate, and push boundaries.
                    </motion.p>

                    <motion.p 
                      variants={fadeInUp}
                      transition={{ delay: 0.3 }}
                      className="text-base sm:text-lg"
                    >
                      Currently open to collaborating on challenging projects that require both technical depth and creative thinking.
                    </motion.p>
                  </div>
                </div>
              </div>

              {/* Skills Progress */}
              <motion.div
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-6 flex items-center gap-3">
                  <Cpu className="w-6 h-6 text-blue-400" />
                  Technical Proficiency
                </h3>
                
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-blue-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ delay: 0.6 + index * 0.1, duration: 1.5, ease: "easeOut" }}
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine"></div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Quick Info & Location */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Quick Info Card */}
              <div className="group relative">
                <div className="absolute -inset-4 bg-gradient-to-b from-blue-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
                  {/* Mini Profile in Quick Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl overflow-hidden border-2 border-blue-500/30">
                        <div className="relative w-full h-full">
                          <Image
                            src="/me.jpeg"
                            alt="Ansari Sadik"
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                        </div>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-gray-900"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-blue-400" />
                        Quick Info
                      </h3>
                      <p className="text-gray-400 text-sm">Personal Details</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <InfoItem 
                      icon={<User className="w-4 h-4" />}
                      label="Full Name"
                      value="Ansari Sadik"
                    />
                    <InfoItem 
                      icon={<Code2 className="w-4 h-4" />}
                      label="Specialization"
                      value="Full-Stack Dev"
                    />
                    <InfoItem 
                      icon={<Award className="w-4 h-4" />}
                      label="Experience"
                      value="2+ Years"
                    />
                    <InfoItem 
                      icon={<Layers className="w-4 h-4" />}
                      label="Tech Stack"
                      value="Next.js, React, Node.js"
                    />
                    <InfoItem 
                      icon={<Calendar className="w-4 h-4" />}
                      label="Availability"
                      value="Open for Opportunities"
                      highlight={true}
                    />
                  </div>
                </div>
              </div>

              {/* Location Card with Animation */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5"></div>
                
                <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Location</h3>
                      <p className="text-gray-400 text-sm">Based in India</p>
                    </div>
                  </div>

                  {/* Animated Map Visualization */}
                  <div className="relative h-48 rounded-xl overflow-hidden bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/20">
                    {/* Simple India Map Outline Animation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-32 h-32">
                        {/* Map outline animation */}
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, 0]
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute inset-0 border-2 border-blue-400/50 rounded-full"
                        />
                        <motion.div
                          animate={{
                            scale: [1.1, 1.2, 1.1],
                            opacity: [0.5, 0.8, 0.5]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute inset-4 border border-cyan-400/30 rounded-full"
                        />
                        
                        {/* Pulsing Location Dot */}
                        <motion.div
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        >
                          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/50"></div>
                        </motion.div>
                        
                        {/* Satellite rings - Only on client */}
                        {mounted && [...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              scale: [0.8, 1.2, 0.8],
                              opacity: [0.2, 0.5, 0.2]
                            }}
                            transition={{
                              duration: 3 + i,
                              repeat: Infinity,
                              ease: "linear",
                              delay: i * 0.5
                            }}
                            className="absolute border border-blue-400/20 rounded-full"
                            style={{ inset: `${(i + 1) * 16}px` }}
                          />
                        ))}
                      </div>
                    </div>
                    
                    {/* Connection Lines - Only on client */}
                    {mounted && (
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              rotate: [0, 360]
                            }}
                            transition={{
                              duration: 20,
                              repeat: Infinity,
                              ease: "linear"
                            }}
                            className="absolute"
                            style={{ transform: `rotate(${i * 45}deg)` }}
                          >
                            <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-gray-400 text-sm">
                      Available for <span className="text-blue-400">remote</span> and{" "}
                      <span className="text-cyan-400">onsite</span> opportunities worldwide
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Tech Stack Card */}
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-gray-800 rounded-2xl p-6 backdrop-blur-sm">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-400" />
                  Currently Working With
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "Tailwind", "PostgreSQL", "PHP"].map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-lg text-sm hover:bg-blue-500/20 transition-colors cursor-pointer"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 lg:mt-24"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                My <span className="text-blue-400">Journey</span>
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-cyan-500 to-transparent"></div>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-500 via-cyan-500 to-transparent"></div>

              <div className="space-y-8 lg:space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                    className={`relative flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''} items-center`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 lg:left-1/2 transform lg:-translate-x-1/2 z-10">
                      <div className={`w-8 h-8 rounded-full border-4 border-gray-900 ${item.color} flex items-center justify-center ${item.bgColor}`}>
                        {item.icon}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className={`lg:w-5/12 ml-12 lg:ml-0 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`p-6 rounded-2xl ${item.bgColor} border ${item.color} backdrop-blur-sm`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm text-blue-400 font-semibold">{item.year}</span>
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-300 mb-3">{item.company}</p>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 lg:mt-24 text-center"
          >
            <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Let&apos;s Build Something Amazing</h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                I&apos;m always excited to take on new challenges and collaborate on innovative projects.
              </p>
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30"
              >
                <span>Get In Touch</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Custom Animations */}
        <style jsx global>{`
          @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          
          @keyframes shine {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          
          .animate-gradient-shift {
            background-size: 200% auto;
            animation: gradientShift 3s ease infinite;
          }
          
          .animate-shine {
            animation: shine 2s ease-in-out infinite;
          }
        `}</style>
      </section>
    </>
  );
}

/* Enhanced InfoItem Component */
function InfoItem({ icon, label, value, highlight = false }) {
  return (
    <motion.div 
      whileHover={{ x: 5 }}
      className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group/item"
    >
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center group-hover/item:bg-blue-500/20 transition-colors">
          {icon}
        </div>
        <span className="text-gray-400">{label}</span>
      </div>
      <span className={`font-medium ${highlight ? 'text-blue-400' : 'text-white'}`}>
        {value}
      </span>
    </motion.div>
  );
}