"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2,
  Filter,
  Zap,
  TrendingUp,
  Sparkles,
  Star,
  Palette,
  Server
} from "lucide-react";
import { useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects", icon: Sparkles, count: projects.length },
    { id: "frontend", label: "Frontend", icon: Palette, count: projects.filter(p => p.category === "frontend").length },
    { id: "fullstack", label: "Full Stack", icon: Code2, count: projects.filter(p => p.category === "fullstack").length },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

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

  return (
    <section 
      ref={ref}
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }} />
        </div>
        
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
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
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-500" />
            <div className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium text-blue-400 tracking-widest uppercase">
                Portfolio
              </span>
            </div>
            <div className="w-12 h-px bg-gradient-to-r from-blue-500 to-transparent" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
              Featured{" "}
            </span>
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent"
            >
              Projects
            </motion.span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            A collection of my recent work, showcasing innovative solutions and technical expertise
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              variants={itemVariants}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                  : "bg-white/5 text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              <filter.icon className="w-4 h-4" />
              <span className="font-medium">{filter.label}</span>
              <span className={`px-2 py-0.5 text-xs rounded-full ${
                activeFilter === filter.id
                  ? "bg-white/20"
                  : "bg-white/5"
              }`}>
                {filter.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id || index} // Use project.id if available, otherwise fall back to index
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center mx-auto mb-6">
              <Filter className="w-12 h-12 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">No projects found</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              No projects match your current filter. Try selecting a different category.
            </p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-3 h-3 rounded-full bg-blue-500"
            />
            <span className="text-lg text-blue-400">
              Interested in seeing more? Check out my GitHub for additional projects
            </span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-3 h-3 rounded-full bg-cyan-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}