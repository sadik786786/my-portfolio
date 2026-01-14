"use client";

import { ExternalLink, Github, Eye, Zap, ArrowRight, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Define color based on category
  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case 'frontend':
        return { bg: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/30', text: 'text-blue-400' };
      case 'backend':
        return { bg: 'from-green-500/20 to-emerald-500/20', border: 'border-green-500/30', text: 'text-green-400' };
      case 'fullstack':
        return { bg: 'from-purple-500/20 to-pink-500/20', border: 'border-purple-500/30', text: 'text-purple-400' };
      default:
        return { bg: 'from-gray-500/20 to-gray-400/20', border: 'border-gray-500/30', text: 'text-gray-400' };
    }
  };

  const categoryColors = getCategoryColor(project.category);

  // Animation variants
  const cardVariants = {
    initial: { scale: 1, y: 0 },
    hover: { 
      scale: 1.02, 
      y: -8,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const imageVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.9 }
  };

  const tagVariants = {
    initial: { opacity: 0, y: 10 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1
      }
    })
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative h-full"
    >
      {/* Background Glow Effect */}
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${categoryColors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        animate={{ scale: isHovered ? 1 : 0.95 }}
      />

      {/* Main Card */}
      <div className="relative h-full rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm overflow-hidden">
        {/* Project Image */}
        <div className="relative h-48 overflow-hidden">
          {/* Loading Skeleton */}
          {!imageLoaded && (
            <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors.bg} animate-pulse`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  variants={imageVariants}
                  className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl"
                >
                  <Zap className="w-10 h-10 text-white" />
                </motion.div>
              </div>
            </div>
          )}

          {/* Actual Image */}
          {project.image && (
            <motion.div
              variants={fadeInVariants}
              initial="hidden"
              animate={imageLoaded ? "visible" : "hidden"}
              className="relative w-full h-full"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                onLoad={() => setImageLoaded(true)}
                priority={project.featured}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors.text} bg-black/50 backdrop-blur-sm border ${categoryColors.border}`}>
                  {project.category}
                </span>
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* Fallback if no image */}
          {!project.image && (
            <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors.bg}`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  variants={imageVariants}
                  className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl"
                >
                  <Zap className="w-10 h-10 text-white" />
                </motion.div>
              </div>
              
              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors.text} bg-black/50 backdrop-blur-sm border ${categoryColors.border}`}>
                  {project.category}
                </span>
              </div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-medium">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-6 w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-300">View Project</span>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-400" />
              </div>
              
              {/* Performance Stats */}
              {project.stats && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-3 gap-4 mt-4"
                >
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{project.stats.performance}%</div>
                    <div className="text-xs text-gray-400">Performance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{project.stats.accessibility}%</div>
                    <div className="text-xs text-gray-400">Accessibility</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">{project.stats.bestPractices}%</div>
                    <div className="text-xs text-gray-400">Best Practices</div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Title */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Features List */}
          {project.features && (
            <div className="mb-4">
              <ul className="space-y-2">
                {project.features.slice(0, 3).map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </motion.li>
                ))}
                {project.features.length > 3 && (
                  <li className="text-sm text-gray-400 italic">
                    +{project.features.length - 3} more features
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* Technology Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.slice(0, 5).map((tech, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={tagVariants}
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-3 py-1.5 rounded-lg text-xs bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-all duration-200"
              >
                {tech}
              </motion.span>
            ))}
            {project.tech.length > 5 && (
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="px-3 py-1.5 rounded-lg text-xs bg-white/5 border border-white/10 text-gray-400"
              >
                +{project.tech.length - 5}
              </motion.span>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex gap-3">
              <motion.a
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-shadow"
              >
                <ExternalLink size={16} />
                Live Demo
              </motion.a>
              
              <motion.a
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/10 hover:text-white transition-all"
              >
                <Github size={16} />
                Source
              </motion.a>
            </div>
          </div>
        </div>

        {/* Interactive Border */}
        <div className={`absolute inset-0 rounded-2xl border-2 ${categoryColors.border} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
      </div>
    </motion.div>
  );
}