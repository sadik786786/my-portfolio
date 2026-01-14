"use client";

import { color, motion } from "framer-motion";
import { 
  Code2,
  Server,
  Database,
  Wrench,
  Cpu,
  Palette,
  Globe,
  Terminal,
  GitBranch,
  Layers,
  Zap,
  Sparkles
} from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      technologies: [
        { name: "React", level: 95, icon: "⚛️" },
        { name: "Next.js", level: 90, icon: "▲" },
        { name: "Bootstrap", level: 88, icon: "TS" },
        { name: "Tailwind CSS", level: 92, icon: "🎨" },
        { name: "JavaScript", level: 95, icon: "JS" },
        { name: "HTML5/CSS3", level: 98, icon: "🌐" },
      ],
      description: "Creating responsive, interactive UIs with modern frameworks"
    },
    {
      icon: Server,
      title: "Backend Development",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      technologies: [
        { name: "Next.js", level: 90, icon: "⚙️" },
        { name: "PHP", level: 85, icon: "🚂" },
        { name: "Python", level: 45, icon: "🐍" },
        { name: "REST APIs", level: 92, icon: "🔗" },
        { name: "Authentication", level: 88, icon: "🔐" },
        { name: "Microservices", level: 75, icon: "🧩" },
      ],
      description: "Building scalable server-side applications and APIs"
    },
    {
      icon: Database,
      title: "Database & Storage",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      technologies: [
        { name: "MongoDB", level: 85, icon: "🍃" },
        { name: "PostgreSQL", level: 82, icon: "🐘" },
        { name: "MySQL", level: 80, icon: "🐬" },
        { name: "Redis", level: 75, icon: "🔴" },
        { name: "Firebase", level: 78, icon: "🔥" },
        { name: "Prisma", level: 85, icon: "⚡" },
      ],
      description: "Designing and optimizing database architectures"
    },
    {
      icon: Wrench,
      title: "Tools & DevOps",
      color: "from-orange-500 to-yellow-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
      technologies: [
        { name: "Git & GitHub", level: 95, icon: "📚" },
        { name: "Postman", level: 80, icon: "🐳" },
        { name: "AWS", level: 75, icon: "☁️" },
        { name: "CI/CD", level: 82, icon: "🔄" },
        { name: "VS Code", level: 98, icon: "💻" },
        { name: "Vercel", level: 90, icon: "▲" },
      ],
      description: "Streamlining development workflow and deployment"
    },
    {
      icon: Cpu,
      title: "Performance & Testing",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
      technologies: [
        { name: "Jest", level: 85, icon: "🎯" },
        { name: "React Testing", level: 82, icon: "🧪" },
        { name: "Web Vitals", level: 88, icon: "⚡" },
        { name: "Lighthouse", level: 85, icon: "🏮" },
        { name: "Webpack", level: 80, icon: "📦" },
        { name: "Optimization", level: 90, icon: "🚀" },
      ],
      description: "Ensuring high performance and reliability"
    },
    {
      icon: Palette,
      title: "UI/UX & Design",
      color: "from-pink-500 to-purple-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/30",
      technologies: [
        { name: "Figma", level: 85, icon: "🎨" },
        { name: "Framer Motion", level: 90, icon: "✨" },
        { name: "Responsive Design", level: 95, icon: "📱" },
        { name: "User Research", level: 80, icon: "🔍" },
        { name: "Prototyping", level: 82, icon: "🧑‍💻" },
        { name: "Design Systems", level: 78, icon: "🎯" },
      ],
      description: "Creating intuitive and beautiful user experiences"
    },
  ];

 const featuredSkills = [
  { name: "React", level: 95, color: "#3B82F6" },
  { name: "Next.js", level: 90, color: "#ffffff" },
  { name: "JavaScript", level: 88, color: "#2563EB" },
  { name: "PHP", level: 90, color: "#22C55E" },
  { name: "Tailwind", level: 92, color: "#06B6D4" },
  { name: "PostgreSQL", level: 85, color: "#10B981" },
];

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

  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (custom) => ({
      width: `${custom}%`,
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    })
  };

  return (
    <section 
      ref={ref}
      className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Animated Orbs - Hidden on mobile for performance */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="hidden sm:block absolute top-1/3 left-1/4 w-48 md:w-64 h-48 md:h-64 bg-blue-500/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="hidden sm:block absolute bottom-1/3 right-1/4 w-48 md:w-64 h-48 md:h-64 bg-purple-500/5 rounded-full blur-3xl"
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5 md:opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent to-blue-500" />
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
              <span className="text-xs md:text-sm font-medium text-blue-400 tracking-widest uppercase">
                Expertise
              </span>
            </div>
            <div className="w-8 md:w-12 h-px bg-gradient-to-r from-blue-500 to-transparent" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
              Skills &{" "}
            </span>
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent"
            >
              Technologies
            </motion.span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto px-4"
          >
            A comprehensive overview of my technical expertise and proficiency across different domains
          </motion.p>
        </motion.div>

        {/* Featured Skills Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4 }}
          className="mb-8 md:mb-12"
        >
          <div className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10 border border-white/10 backdrop-blur-sm">
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 text-center flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
              Core Proficiencies
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
              {featuredSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="relative h-20 sm:h-24 md:h-32 mb-3 md:mb-4">
                    {/* Circular Progress */}
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      {/* Background Circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="8"
                      />
                      {/* Progress Circle */}
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke={skill.color.replace('bg-', '').replace('500', '400')}
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={`${2 * Math.PI * 45}`}
                        strokeDashoffset={2 * Math.PI * 45 * (1 - skill.level / 100)}
                        initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                        animate={isInView ? { strokeDashoffset: 2 * Math.PI * 45 * (1 - skill.level / 100) } : { strokeDashoffset: 2 * Math.PI * 45 }}
                        transition={{ duration: 2, delay: 0.5 + index * 0.1 }}
                      />
                    </svg>
                    
                    {/* Skill Name */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-white font-semibold text-sm md:text-base">{skill.name}</span>
                      <span className="text-xs md:text-sm text-gray-400">{skill.level}%</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className="group relative"
            >
              {/* Card */}
              <div className={`p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border ${skill.borderColor} backdrop-blur-sm h-full`}>
                {/* Card Background Glow */}
                <div className={`absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`} />
                
                {/* Header */}
                <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center flex-shrink-0`}>
                    <skill.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 truncate">{skill.title}</h3>
                    <p className="text-xs md:text-sm text-gray-400 line-clamp-2">{skill.description}</p>
                  </div>
                </div>

                {/* Technology List */}
                <div className="space-y-3 md:space-y-4">
                  {skill.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="space-y-1 md:space-y-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1 md:gap-2 truncate">
                          <span className="text-xs md:text-sm">{tech.icon}</span>
                          <span className="text-gray-300 text-xs md:text-sm truncate">{tech.name}</span>
                        </div>
                        <span className="text-blue-400 text-xs md:text-sm font-medium whitespace-nowrap ml-2">{tech.level}%</span>
                      </div>
                      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          custom={tech.level}
                          variants={progressBarVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                          className={`h-full bg-gradient-to-r ${skill.color}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="mt-4 md:mt-6 flex flex-wrap gap-1 md:gap-2">
                  {skill.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs ${skill.bgColor} border ${skill.borderColor} text-gray-300 truncate`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
          className="mt-12 md:mt-16"
        >
          <div className="p-4 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-cyan-900/20 border border-white/10">
            <h3 className="text-lg md:text-2xl font-bold text-white mb-4 md:mb-6 text-center">Additional Expertise</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {[
                { icon: GitBranch, name: "Git Flow", level: "Advanced" },
                { icon: Layers, name: "Architecture", level: "Intermediate" },
                { icon: Terminal, name: "CLI Tools", level: "Advanced" },
                { icon: Globe, name: "Web Performance", level: "Expert" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-3 md:p-4 rounded-lg md:rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mx-auto mb-2 md:mb-3">
                    <item.icon className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                  </div>
                  <h4 className="text-white font-medium text-sm md:text-base mb-1 truncate">{item.name}</h4>
                  <span className="text-xs md:text-sm text-blue-400 truncate block">{item.level}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}