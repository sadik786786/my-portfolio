export default function ContactCTA() {
  return (
    <section className="py-24 px-6 bg-neutral-950 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let’s Work <span className="text-blue-500">Together</span>
        </h2>

        <p className="text-gray-400 mb-6">
          I’m <span className="text-white font-medium">Ansari Sadik</span>, a
          Full-Stack Developer based in India.  
          I build modern, scalable web applications using Next.js and
          clean UI principles.
        </p>

        <p className="text-gray-500 mb-10 text-sm">
          Available for freelance projects, internships, and full-time
          opportunities.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contact"
            className="px-8 py-3 bg-blue-500 text-black font-semibold rounded-lg hover:bg-blue-400 transition"
          >
            Contact Me
          </a>

          <a
            href="mailto:ansarisadik2006@gmail.com"
            className="px-8 py-3 border border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500 hover:text-black transition"
          >
           ansarisadik2006@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
