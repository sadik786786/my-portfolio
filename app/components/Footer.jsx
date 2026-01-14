import Link from "next/link";
import { Github, Linkedin, Mail, ExternalLink, ChevronRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black pt-16 pb-8">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="group inline-flex items-center space-x-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur group-hover:blur-md transition-all duration-300" />
                  <div className="relative bg-black p-2 rounded-lg border border-gray-800">
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                      AS
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Ansari Sadik</h3>
                  <p className="text-sm text-blue-400">Full-Stack Developer</p>
                </div>
              </Link>
              
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Building modern, scalable web applications with clean UI and reliable backend solutions.
                Passionate about creating seamless user experiences.
              </p>
              
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://github.com/sadik786786"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-900/50 hover:bg-gray-800 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://linkedin.com/in/sadikansari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-900/50 hover:bg-gray-800 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="mailto:ansarisadik2006@gmail.com"
                  className="p-2 bg-gray-900/50 hover:bg-gray-800 rounded-lg border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-500 mr-2" />
                  Navigation
                </h4>
                <ul className="space-y-3">
                  {[
                    { name: "Home", href: "/" },
                    { name: "About", href: "/about" },
                    { name: "Projects", href: "/projects" },
                    { name: "Skills", href: "/skills" },
                    { name: "Contact", href: "/contact" },
                  ].map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group text-sm"
                      >
                        <span className="w-1 h-1 bg-blue-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.name}
                        <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-500 mr-2" />
                  Technologies
                </h4>
                <ul className="space-y-3">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Node.js",
                    "MongoDB",
                    "Tailwind CSS",
                  ].map((tech) => (
                    <li key={tech}>
                      <span className="text-gray-400 text-sm inline-flex items-center">
                        <span className="w-1 h-1 bg-blue-500 rounded-full mr-3" />
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <ChevronRight className="w-4 h-4 text-blue-500 mr-2" />
                  Contact
                </h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Email</p>
                    <a
                      href="mailto:your-email@example.com"
                      className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                    >
                      your-email@example.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="text-white text-sm">India</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Available for</p>
                    <p className="text-green-400 text-sm">Freelance & Full-time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative py-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-gradient-to-r from-transparent via-blue-500/20 to-transparent px-6 text-sm text-gray-500">
              ✨
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-500 text-sm">
            © {currentYear} Ansari Sadik. All rights reserved.
          </div>
          
          <div className="text-gray-500 text-sm">
            Built with{" "}
            <span className="text-red-400">❤️</span>
            {" "}using{" "}
            <span className="text-blue-400">Next.js</span>
            {" "}&{" "}
            <span className="text-cyan-400">Tailwind CSS</span>
          </div>
          
          <div className="text-gray-500 text-sm">
            <Link 
              href="/privacy" 
              className="hover:text-white transition-colors mr-4"
            >
              Privacy
            </Link>
            <Link 
              href="/terms" 
              className="hover:text-white transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}