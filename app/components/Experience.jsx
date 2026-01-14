"use client";

import { motion } from "framer-motion";
import { 
  Briefcase,
  Calendar,
  MapPin,
  Sparkles,
  ChevronRight
} from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const experiences = [
  {
    title: "Diploma in Information Communication and Technology",
    company: "Government Polytechnic",
    period: "2022 – 2025",
    location: "India",
    description:
      "Completed a diploma in Information Communication and Technology with strong focus on programming, web development, databases, and real-world projects.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "Java",
      "Bootstrap"
    ],
    achievements: [
      "Built multiple academic and personal projects",
      "Developed strong foundation in web & backend development",
      "Final year project focused on real-world problem solving"
    ],
    type: "Education",
    color: "purple"
  },
  {
    title: "Web Development Intern",
    company: "Tech Startup",
    period: "2025",
    location: "Remote",
    description:
      "Worked on developing and maintaining web applications while learning industry-level development practices.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
      "Bootstrap"
    ],
    achievements: [
      "Contributed to live web applications",
      "Improved frontend UI and responsiveness",
      "Gained experience with team-based development"
    ],
    type: "Internship",
    color: "green"
  },
  {
    title: "Full-Stack Developer",
    company: "Freelance",
    period: "2026 – Present",
    location: "Remote",
    description:
      "Building and deploying modern full-stack applications including dashboards, SaaS tools, and business websites.",
    technologies: [
      "React",
      "Next.js",
      "PostgreSQL",
      "MongoDB",
      "Tailwind CSS"
    ],
    achievements: [
      "Built projects like ClearBill, MeetWise, and News Dashboard",
      "Designed scalable and secure backend systems",
      "Delivered high-quality, production-ready applications"
    ],
    type: "Freelance",
    color: "blue"
  }
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
        damping: 25
      }
    }
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      id="experience"
      ref={ref}
      className="relative py-16 md:py-24 px-4 md:px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Briefcase className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-medium text-blue-400 tracking-widest uppercase">
              Experience
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Career </span>
            <span className="text-blue-400">Journey</span>
          </h2>
          
          <p className="text-gray-400 max-w-2xl mx-auto px-4">
            My professional growth through various roles and projects
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            variants={timelineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500"
            style={{ originY: 0 }}
          />

          {/* Experiences */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-4 h-4 rounded-full bg-gradient-to-br from-${exp.color}-500 to-${exp.color}-600 border-2 border-white/20`}
                  >
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                </div>

                {/* Experience Card */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className={`ml-12 md:ml-0 md:w-[48%] ${
                    index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                  }`}
                >
                  {/* Card */}
                  <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`flex-1 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${exp.color}-500/20 text-${exp.color}-400`}>
                            {exp.type}
                          </span>
                          <span className="text-xs text-gray-400">{exp.period}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-blue-400">
                          <span>{exp.company}</span>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-2">
                          <Sparkles className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-400">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5 }}
          className="mt-12 md:mt-16"
        >
          <div className="p-6 md:p-8 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
            <h3 className="text-xl font-bold text-white mb-4">Key Expertise</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 rounded-lg bg-white/5">
                <div className="text-2xl font-bold text-blue-400 mb-1">3+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/5">
                <div className="text-2xl font-bold text-blue-400 mb-1">50+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/5">
                <div className="text-2xl font-bold text-blue-400 mb-1">100%</div>
                <div className="text-sm text-gray-400">Satisfaction</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/5">
                <div className="text-2xl font-bold text-blue-400 mb-1">15+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}