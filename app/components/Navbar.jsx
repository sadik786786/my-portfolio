"use client";

import { useState, useEffect, useCallback, memo, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, X, ChevronRight, Home, User, FolderKanban, 
  Code, Mail, Sparkles, Moon, Sun, ExternalLink,
  Calendar, Phone, MapPin, Github, Linkedin, Instagram
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Memoized components
const MemoizedLink = memo(({ 
  href, 
  children, 
  isActive, 
  onClick,
  icon: Icon 
}) => (
  <Link
    href={href}
    onClick={onClick}
    className="relative group"
  >
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200"
    >
      {Icon && (
        <motion.div 
          className={`p-2 rounded-lg ${isActive ? 'bg-blue-500/20' : 'bg-white/5'}`}
          whileHover={{ rotate: 5, scale: 1.1 }}
        >
          <Icon className="w-4 h-4" />
        </motion.div>
      )}
      <span className={`text-base font-medium transition-colors ${
        isActive 
          ? "text-white" 
          : "text-gray-300 group-hover:text-white"
      }`}>
        {children}
      </span>
    </motion.div>
    
    {isActive && (
      <motion.div
        layoutId="activeNavIndicator"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 rounded-full bg-gradient-to-b from-blue-500 to-cyan-500"
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    )}
  </Link>
));

MemoizedLink.displayName = "MemoizedLink";

// Original Logo for Desktop
const Logo = memo(() => (
  <Link 
    href="/" 
    className="flex items-center gap-3 group"
  >
    <motion.div
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-900 to-black border-2 border-white/10 flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30"
        animate={{
          x: ['0%', '200%'],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "linear"
        }}
      />
      
      <span className="z-10 font-bold text-white text-xl">AS</span>
      
      {/* Glowing effect */}
      <motion.div
        className="absolute -inset-1 rounded-2xl"
        animate={{
          boxShadow: [
            "inset 0 0 20px rgba(59, 130, 246, 0)",
            "inset 0 0 30px rgba(59, 130, 246, 0.3)",
            "inset 0 0 20px rgba(59, 130, 246, 0)",
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
    
    <div className="flex flex-col">
      <motion.span 
        className="text-xl font-bold text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
        whileHover={{ x: 3 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        Ansari Sadik
      </motion.span>
      <span className="text-xs text-gray-400 font-medium">Full-Stack Developer</span>
    </div>
  </Link>
));

Logo.displayName = "Logo";

// Compact Logo for Mobile Menu
const CompactLogo = memo(() => (
  <Link 
    href="/" 
    className="flex items-center gap-3 group"
    onClick={(e) => e.stopPropagation()}
  >
    <motion.div
      whileHover={{ rotate: 360 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-gray-900 to-black border-2 border-white/10 flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-blue-500/30"
        animate={{
          x: ['0%', '200%'],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "linear"
        }}
      />
      
      <span className="z-10 font-bold text-white text-sm">AS</span>
    </motion.div>
    
    <div className="flex flex-col">
      <span className="text-sm font-bold text-white">Ansari Sadik</span>
      <span className="text-[10px] text-gray-400">Full-Stack Dev</span>
    </div>
  </Link>
));

CompactLogo.displayName = "CompactLogo";

const MobileMenuButton = memo(({ isOpen, onClick }) => {
  const [hover, setHover] = useState(false);
  
  return (
    <motion.button
      onClick={onClick}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className="md:hidden relative w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10"
        animate={{
          scale: hover ? 1.1 : 1,
          opacity: hover ? 1 : 0.5,
        }}
        transition={{ duration: 0.2 }}
      />
      
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative z-10"
          >
            <X className="w-5 h-5 text-white" />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative z-10"
          >
            <Menu className="w-5 h-5 text-white" />
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Pulsing ring effect */}
      <motion.div
        className="absolute inset-0 rounded-xl border border-blue-500/30"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.button>
  );
});

MobileMenuButton.displayName = "MobileMenuButton";

const CTAButton = memo(() => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.3 }}
  >
    <motion.a
      href="/contact"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative overflow-hidden inline-block"
    >
      {/* Gradient glow background */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundSize: '200% 200%',
        }}
      />
      
      {/* Main button */}
      <motion.button
        className="relative px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl text-white font-semibold text-sm flex items-center gap-2 overflow-hidden shadow-lg"
        whileHover={{
          background: 'linear-gradient(to right, #2563eb, #06b6d4, #2563eb)',
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          boxShadow: [
            '0 4px 20px rgba(59, 130, 246, 0.3)',
            '0 6px 30px rgba(59, 130, 246, 0.5)',
            '0 4px 20px rgba(59, 130, 246, 0.3)',
          ]
        }}
        transition={{
          backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" },
          boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "linear",
            delay: 0.5
          }}
        />
        
        <span className="relative z-10">Get in Touch</span>
        <motion.span
          animate={{ x: [0, 5, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative z-10"
        >
          <ChevronRight className="w-4 h-4" />
        </motion.span>
      </motion.button>
    </motion.a>
  </motion.div>
));

CTAButton.displayName = "CTAButton";

const navItems = [
  { name: "Home", href: "/", icon: Home, id: "home" },
  { name: "About", href: "/about", icon: User, id: "about" },
  { name: "Projects", href: "/projects", icon: FolderKanban, id: "projects" },
  { name: "Skills", href: "/skills", icon: Code, id: "skills" },
  { name: "Contact", href: "/contact", icon: Mail, id: "contact" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/sadik786786", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/sadikansari", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/epsilon_code", label: "Instagram" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef(null);

  // Debounced scroll handler
  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 20;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  }, [scrolled]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        handleCloseMenu();
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleCloseMenu();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleCloseMenu = useCallback(() => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsAnimating(false);
    }, 300);
  }, []);

  const handleToggleMenu = useCallback(() => {
    if (isAnimating) return;
    setIsOpen(!isOpen);
  }, [isOpen, isAnimating]);

  return (
    <>
      {/* Floating particles background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            animate={{
              y: [0, -30, 0],
              x: [0, (i % 2 === 0 ? 15 : -15), 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${15 + i * 20}%`,
              top: '5%',
            }}
          />
        ))}
      </div>

      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 100, 
          damping: 20,
          delay: 0.1 
        }}
      >
        {/* Glass effect background */}
        <motion.div
          className="absolute inset-0 bg-black/95 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: scrolled ? 1 : 0.9 }}
          transition={{ duration: 0.4 }}
        />
        
        {/* Animated bottom border */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrolled ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />

        <nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <motion.div
              className="hidden md:flex items-center gap-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {navItems.map((item) => (
                <MemoizedLink
                  key={item.id}
                  href={item.href}
                  icon={item.icon}
                  isActive={pathname === item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </MemoizedLink>
              ))}
            </motion.div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <CTAButton />
            </div>

            {/* Mobile Menu Button */}
            <MobileMenuButton 
              isOpen={isOpen} 
              onClick={handleToggleMenu}
            />
          </div>

          {/* Enhanced Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <>
                {/* Overlay with gradient */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={handleCloseMenu}
                  className="fixed inset-0 md:hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
                  <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />
                </motion.div>
                
                {/* Main Menu Panel */}
                <motion.div
                  ref={mobileMenuRef}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 20 
                  }}
                  className="fixed top-0 left-0 right-0 bottom-0 md:hidden overflow-y-auto z-50"
                >
                  <div className="min-h-screen relative">
                    {/* Animated Background Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                      <motion.div
                        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
                        animate={{
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                      <motion.div
                        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"
                        animate={{
                          scale: [1.2, 1, 1.2],
                          rotate: [360, 180, 0],
                        }}
                        transition={{
                          duration: 25,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    </div>

                    {/* Header Section - Fixed with proper spacing */}
                    <div className="relative pt-8 px-6">
                      <div className="flex items-center justify-between mb-10">
                        {/* Use CompactLogo for mobile menu */}
                        <CompactLogo />
                        
                        <div className="ml-4">
                          <MobileMenuButton 
                            isOpen={isOpen} 
                            onClick={handleCloseMenu}
                          />
                        </div>
                      </div>

                      {/* Navigation Items with better spacing */}
                      <div className="space-y-3 mb-10">
                        {navItems.map((item, index) => (
                          <motion.div
                            key={item.id}
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 + index * 0.1 }}
                            whileHover={{ x: 5 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Link
                              href={item.href}
                              onClick={handleCloseMenu}
                              className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${
                                pathname === item.href
                                  ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-white border border-blue-500/30"
                                  : "text-gray-300 hover:text-white hover:bg-white/5"
                              }`}
                            >
                              <motion.div 
                                className={`p-2 rounded-xl ${pathname === item.href ? 'bg-blue-500/30' : 'bg-white/10'}`}
                                whileHover={{ rotate: 10, scale: 1.1 }}
                              >
                                <item.icon className="w-5 h-5" />
                              </motion.div>
                              <span className="text-lg font-semibold flex-1">{item.name}</span>
                              {pathname === item.href && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="w-2 h-2 rounded-full bg-blue-500 mr-2"
                                />
                              )}
                              <ChevronRight className="w-4 h-4 text-gray-500" />
                            </Link>
                          </motion.div>
                        ))}
                      </div>

                      {/* Quick Contact Section */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mb-10"
                      >
                        <h3 className="text-sm font-medium text-gray-400 mb-4 px-4">Quick Contact</h3>
                        <div className="space-y-3">
                          <a 
                            href="mailto:ansarisadik2006@gmail.com"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all group"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Mail className="w-4 h-4 text-blue-400" />
                            <span className="text-gray-300 group-hover:text-white text-sm">ansarisadik2006@gmail.com</span>
                          </a>
                          <a 
                            href="https://wa.me/916353811919"
                            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all group"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Phone className="w-4 h-4 text-green-400" />
                            <span className="text-gray-300 group-hover:text-white text-sm">+91 63538 11919</span>
                          </a>
                          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5">
                            <MapPin className="w-4 h-4 text-purple-400" />
                            <span className="text-gray-300 text-sm">Based in India</span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Social Links */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="mb-10"
                      >
                        <h3 className="text-sm font-medium text-gray-400 mb-4 px-4">Connect With Me</h3>
                        <div className="flex gap-3 px-4">
                          {socialLinks.map((social, index) => (
                            <motion.a
                              key={social.label}
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ delay: 0.8 + index * 0.1 }}
                              whileHover={{ y: -5, scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all group flex-1 flex justify-center"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white" />
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>

                      {/* Status & CTA Section */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="px-4"
                      >
                        {/* Status */}
                        <div className="flex items-center justify-center gap-3 mb-6 p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10 border border-white/10">
                          <div className="relative">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-green-500 rounded-full"></div>
                          </div>
                          <div className="text-center">
                            <div className="text-white font-semibold text-sm">Available for Work</div>
                            <div className="text-xs text-gray-400">Open to new opportunities</div>
                          </div>
                        </div>

                        {/* Main CTA Button */}
                        <motion.a
                          href="/contact"
                          onClick={handleCloseMenu}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="block w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl text-center font-semibold text-white relative overflow-hidden shadow-2xl mb-4"
                        >
                          {/* Shine effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{
                              x: ['-100%', '100%'],
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 2,
                              ease: "linear"
                            }}
                          />
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            Start a Project
                            <ExternalLink className="w-4 h-4" />
                          </span>
                        </motion.a>

                        {/* Close prompt */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.2 }}
                          className="text-center mt-8 pt-6 border-t border-white/10"
                        >
                          <p className="text-xs text-gray-500">
                            Tap anywhere outside to close menu
                          </p>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>

      {/* Add padding to prevent content from hiding under navbar */}
      <div className="h-20 md:h-24" />
    </>
  );
}