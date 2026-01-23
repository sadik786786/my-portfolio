"use client";

import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Instagram,
  Send,
  MessageSquare,
  Sparkles,
  Zap,
  ArrowRight,
  Copy,
  Check,
  Globe,
  Clock,
  Heart,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration errors by only running on client
  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("ansarisadik2006@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Static particle positions to avoid Math.random() in JSX
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
      {/* Optimized Background Elements for Mobile */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        {/* Gradient Orbs - Smaller on Mobile */}
        <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-purple-500/5 rounded-full blur-lg sm:blur-xl md:blur-3xl animate-pulse delay-500" />
        
        {/* Grid Pattern - Lighter on Mobile */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:20px_35px] md:bg-[size:14px_24px] opacity-10 md:opacity-20"></div>
        
        {/* Floating Particles - Less on Mobile */}
        {mounted && (
          <>
            {staticParticlePositions.slice(0, isMobile ? 5 : 10).map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400/30 rounded-full"
                animate={{
                  y: [0, -20, 0],
                  x: [0, (i % 2 === 0 ? 1 : -1) * 15, 0],
                  opacity: [0.3, 0.8, 0.3],
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
          </>
        )}
      </div>

      <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-3 sm:px-4 md:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Responsive Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 relative">
            {/* Floating Particles - Optimized for Mobile */}
            {mounted && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6 sm:-translate-y-8 md:-translate-y-10">
                {[...Array(isMobile ? 2 : 3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full animate-float"
                    style={{
                      left: `${i * (isMobile ? 30 : 40) - (isMobile ? 30 : 40)}px`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: '3s'
                    }}
                  />
                ))}
              </div>
            )}

            <div className="inline-block relative mb-6 sm:mb-8">
              <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-blue-500 animate-spin-slow absolute -top-4 -right-4 sm:-top-5 sm:-right-5 md:-top-6 md:-right-6" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 mt-6 sm:mt-8">
                Let&apos;s{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
                    Connect
                  </span>
                  <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full animate-underline"></span>
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
              Building bridges between ideas and reality. Let&apos;s collaborate on something{" "}
              <span className="text-blue-400 font-semibold">extraordinary</span>.
            </p>

            {/* Enhanced CTA Indicator */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mt-8 sm:mt-10 md:mt-12"
            >
              <div className="inline-flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-blue-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 animate-pulse" />
                <span className="text-sm sm:text-base md:text-lg text-blue-300 font-medium">
                  Open for collaborations
                </span>
              </div>
            </motion.div>

            {/* Mobile Contact Stats */}
            {mounted && isMobile && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6"
              >
                <div className="flex justify-center items-center gap-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-400">24h</div>
                    <div className="text-xs text-gray-400">Response Time</div>
                  </div>
                  <div className="h-8 w-px bg-gray-700"></div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-400">100%</div>
                    <div className="text-xs text-gray-400">Available</div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Enhanced Responsive Contact Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20 md:mb-24">
            {contactData.map((item, index) => (
              <EnhancedContactCard
                key={index}
                {...item}
                index={index}
                isHovered={hoveredCard === index}
                onHover={() => setHoveredCard(index)}
                onLeave={() => setHoveredCard(null)}
                copyAction={item.title === "Email" ? copyEmail : null}
                copied={item.title === "Email" && copiedEmail}
                isMobile={mounted ? isMobile : false}
              />
            ))}
          </div>

          {/* Enhanced Interactive CTA Section */}
          <div className="relative">
            {/* Animated Border */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-2xl sm:rounded-3xl animate-gradient-border blur opacity-30 md:opacity-50"></div>
            
            <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 backdrop-blur-sm sm:backdrop-blur-md lg:backdrop-blur-xl">
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-400 animate-pulse" />
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold">Start a Conversation</span>
                </div>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 leading-relaxed">
                  Have a project in mind? Let&apos;s schedule a call and discuss how we can bring your vision to life.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                  <motion.a
                    href="mailto:ansarisadik2006@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative w-full sm:w-auto overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center gap-2 sm:gap-3">
                      <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
                      <span className="text-sm sm:text-base md:text-lg">Send Message</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all" />
                    </div>
                  </motion.a>

                  <motion.button
                    onClick={copyEmail}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative w-full sm:w-auto overflow-hidden bg-gray-800/50 border border-gray-700 text-white font-bold px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl transition-all duration-300 hover:border-blue-500 hover:bg-gray-800/80"
                  >
                    <div className="flex items-center justify-center gap-2 sm:gap-3">
                      <AnimatePresence mode="wait">
                        {copiedEmail ? (
                          <motion.div
                            key="copied"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="flex items-center gap-2 sm:gap-3"
                          >
                            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                            <span className="text-sm sm:text-base md:text-lg text-green-400">Copied!</span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="copy"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="flex items-center gap-2 sm:gap-3"
                          >
                            <Copy className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-45 transition-transform" />
                            <span className="text-sm sm:text-base md:text-lg">Copy Email</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.button>
                </div>

                {/* Enhanced Response Time Indicator */}
                <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-gray-800">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                      <span className="text-green-400 font-medium text-sm sm:text-base">Active Now</span>
                    </div>
                    
                    {mounted && !isMobile && <div className="h-6 w-px bg-gray-700 hidden sm:block"></div>}
                    
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-400" />
                      <div className="text-gray-400 text-sm sm:text-base">
                        Avg. response: <span className="text-white font-semibold">2 hours</span>
                      </div>
                    </div>
                    
                    {mounted && !isMobile && <div className="h-6 w-px bg-gray-700 hidden sm:block"></div>}
                    
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-cyan-400" />
                      <div className="text-gray-400 text-sm sm:text-base">
                        Timezone: <span className="text-white font-semibold">IST</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Contact Info for Mobile */}
                {mounted && isMobile && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 pt-6 border-t border-gray-800"
                  >
                    <p className="text-xs text-gray-500 mb-2">Prefer another method?</p>
                    <div className="flex justify-center gap-4">
                      <a
                        href="https://wa.me/916353811919"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-green-400 text-sm hover:text-green-300 transition-colors"
                      >
                        <Phone className="w-4 h-4" />
                        WhatsApp
                      </a>
                      <a
                        href="https://github.com/sadik786786"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>

          {/* Social Proof Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 sm:mt-16 text-center"
          >
            <p className="text-gray-500 text-xs sm:text-sm flex items-center justify-center gap-2">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 fill-red-400" />
              Connect with me across platforms
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 fill-red-400" />
            </p>
          </motion.div>
        </div>
      </section>

      {/* Custom Animations in Style Tag */}
      <style jsx global>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes underline {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        
        @keyframes gradientBorder {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes buttonPulse {
          0%, 100% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.2); }
          50% { box-shadow: 0 0 25px rgba(59, 130, 246, 0.4); }
        }
        
        .animate-gradient-shift {
          background-size: 200% auto;
          animation: gradientShift 3s ease infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spinSlow 20s linear infinite;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-underline {
          animation: underline 0.8s ease-out forwards;
        }
        
        .animate-gradient-border {
          background-size: 200% 200%;
          animation: gradientBorder 3s ease infinite;
        }
        
        .animate-button-pulse {
          animation: buttonPulse 2s ease-in-out infinite;
        }
        
        /* Improved touch targets for mobile */
        @media (max-width: 640px) {
          a, button {
            min-height: 44px;
            min-width: 44px;
          }
          
          /* Better text readability on mobile */
          .text-base {
            line-height: 1.6;
          }
        }
      `}</style>
    </>
  );
}

const contactData = [
  {
    icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Email",
    value: "ansarisadik2006@gmail.com",
    link: "mailto:ansarisadik2006@gmail.com",
    color: "from-blue-500 to-cyan-500",
    gradient: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    copyable: true,
  },
  {
    icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "WhatsApp",
    value: "+91 63538 11919",
    link: "https://wa.me/916353811919",
    color: "from-green-500 to-emerald-500",
    gradient: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
    copyable: true,
  },
  {
    icon: <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Instagram",
    value: "@epsilon_code",
    link: "https://instagram.com/epsilon_code",
    color: "from-pink-500 to-purple-500",
    gradient: "bg-gradient-to-br from-pink-500/20 to-purple-500/20",
    copyable: false,
  },
  {
    icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "GitHub",
    value: "sadik786786",
    link: "https://github.com/sadik786786",
    color: "from-gray-700 to-gray-900",
    gradient: "bg-gradient-to-br from-gray-700/20 to-gray-900/20",
    copyable: false,
  },
  {
    icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "LinkedIn",
    value: "sadikansari",
    link: "https://www.linkedin.com/in/sadik-ansari-239b5733b",
    color: "from-blue-700 to-blue-900",
    gradient: "bg-gradient-to-br from-blue-700/20 to-blue-900/20",
    copyable: false,
  },
  {
    icon: <Send className="w-5 h-5 sm:w-6 sm:h-6" />,
    title: "Quick Connect",
    value: "Start a conversation",
    link: "#contact-form",
    color: "from-purple-500 to-pink-500",
    gradient: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    copyable: false,
  },
];

function EnhancedContactCard({
  icon,
  title,
  value,
  link,
  color,
  gradient,
  index,
  isHovered,
  onHover,
  onLeave,
  copyAction,
  copied,
  isMobile,
  copyable = false,
}) {
  const handleClick = (e) => {
    if (copyAction) {
      e.preventDefault();
      e.stopPropagation();
      copyAction();
    }
  };

  return (
    <motion.a
      href={link}
      target={link.startsWith("http") ? "_blank" : "_self"}
      rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: isMobile ? 0.98 : 1 }}
      className={`group relative overflow-hidden bg-gray-900/30 border border-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 transition-all duration-300 hover:border-blue-500/50 backdrop-blur-sm`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={copyAction ? handleClick : undefined}
    >
      {/* Animated Background Glow */}
      <div className={`absolute inset-0 ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
      
      {/* Mobile Tap Effect */}
      {isMobile && (
        <div className="absolute inset-0 bg-white/5 opacity-0 group-active:opacity-20 transition-opacity duration-150"></div>
      )}

      <div className="relative z-10">
        {/* Header with Icon and Copy Button */}
        <div className="flex items-start justify-between mb-4 sm:mb-6 md:mb-8">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
              {icon}
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-white/90 transition-colors">
              {title}
            </h3>
          </div>
          
          {copyable && (
            <motion.button
              onClick={handleClick}
              whileTap={{ scale: 0.9 }}
              className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all flex-shrink-0 ${
                copied
                  ? "bg-green-500/20 text-green-400"
                  : "bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              {copied ? (
                <Check className="w-3 h-3 sm:w-4 sm:h-4" />
              ) : (
                <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
              )}
            </motion.button>
          )}
        </div>

        {/* Content */}
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors font-mono text-sm sm:text-base md:text-lg break-all">
            {value}
          </p>
          
          {/* Action Indicator */}
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
              {copyable ? "Click to copy" : "Click to connect"}
            </span>
            <motion.div
              animate={{ x: isHovered || isMobile ? 0 : 5 }}
              className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full border flex items-center justify-center transition-all ${
                isHovered || isMobile
                  ? "border-blue-500 bg-blue-500/10"
                  : "border-gray-700"
              }`}
            >
              <ArrowRight className={`w-3 h-3 sm:w-4 sm:h-4 transition-all duration-300 ${
                isHovered || isMobile ? "text-blue-400 rotate-45" : "text-gray-400"
              }`} />
            </motion.div>
          </div>
        </div>

        {/* Progress Bar Animation */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>

      {/* Floating Particles on Desktop Hover - Only render on client */}
      {typeof window !== 'undefined' && !isMobile && isHovered && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 bg-gradient-to-br ${color} rounded-full`}
              initial={{ y: 0, x: 0, opacity: 0 }}
              animate={{ 
                y: [-20, -40, -20],
                x: [0, (i % 2 === 0 ? 1 : -1) * 10, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              style={{
                left: `${20 + i * 30}%`,
                bottom: '10%',
              }}
            />
          ))}
        </>
      )}
    </motion.a>
  );
}