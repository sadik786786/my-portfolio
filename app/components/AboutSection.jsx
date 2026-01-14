"use client";

import { motion } from "framer-motion";
import { 
  Code, 
  Database, 
  Server, 
  Palette,
  Cpu,
  Globe,
  Zap,
  User,
  Award,
  Briefcase,
  TrendingUp
} from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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

  const stats = [
    { icon: Award, value: "2+", label: "Years Experience", color: "from-yellow-500 to-orange-500" },
    { icon: Briefcase, value: "6+", label: "Projects", color: "from-blue-500 to-cyan-500" },
    { icon: TrendingUp, value: "99%", label: "Client Satisfaction", color: "from-green-500 to-emerald-500" },
    { icon: User, value: "∞", label: "Learning Passion", color: "from-purple-500 to-pink-500" },
  ];

  const technologies = [
    { icon: Code, name: "Frontend", tech: "HTML, CSS, Javascript, React, Next.js", color: "blue" },
    { icon: Server, name: "Backend", tech: "Next.js, PHP", color: "green" },
    { icon: Database, name: "Database", tech: "MySQL, PostgreSQL", color: "purple" },
    { icon: Cpu, name: "DevOps", tech: "Docker, AWS, CI/CD", color: "orange" },
    { icon: Palette, name: "Design", tech: "Figma, Tailwind, Framer", color: "pink" },
    { icon: Globe, name: "Other", tech: "Git, REST APIs, Testing", color: "cyan" },
  ];

  const softSkills = [
    { name: "Problem Solving", level: 95 },
    { name: "Communication", level: 90 },
    { name: "Team Collaboration", level: 92 },
    { name: "Time Management", level: 88 },
  ];

  return (
    <section 
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
            />
            <span className="text-sm font-medium text-blue-400 tracking-widest uppercase">
              About Me
            </span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
            />
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
              Crafting Digital{" "}
            </span>
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent"
            >
              Experiences
            </motion.span>
          </h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "200px" } : { width: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"
          />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Left Column - Introduction */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center"
                >
                  <Zap className="w-6 h-6 text-blue-400" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">My Philosophy</h3>
                  <p className="text-gray-400 leading-relaxed">
                    I believe great digital products are born at the intersection of 
                    <span className="text-blue-400 font-medium"> innovative technology </span>
                    and 
                    <span className="text-cyan-400 font-medium"> human-centered design</span>. 
                    Every pixel, every line of code should serve a purpose and create value.
                  </p>
                </div>
              </div>

              <motion.div variants={itemVariants} className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Who I Am</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  I'm a passionate Full-Stack Developer with a strong focus on creating 
                  scalable, performant web applications. With expertise across the entire 
                  development stack, I bridge the gap between beautiful design and 
                  powerful functionality.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  My journey in tech started with curiosity and has evolved into a 
                  dedicated craft. I thrive on solving complex problems and transforming 
                  ideas into seamless digital experiences that users love.
                </p>
              </motion.div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Core Strengths</h3>
              <div className="space-y-4">
                {softSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400 font-medium">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                        className={`h-full bg-gradient-to-r from-blue-500 to-cyan-500`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats & Tech */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-12"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} mb-4 flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                  
                  {/* Hover Glow */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`} />
                </motion.div>
              ))}
            </div>

            {/* Technology Stack */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Technology Stack</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    whileHover={{ y: -3 }}
                    className="group p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-${tech.color}-500/20 border border-${tech.color}-500/30 flex items-center justify-center mb-3`}>
                      <tech.icon className={`w-5 h-5 text-${tech.color}-400`} />
                    </div>
                    <h4 className="text-white font-medium ">{tech.name}</h4>
                    <p className="text-sm text-gray-400">{tech.tech}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}