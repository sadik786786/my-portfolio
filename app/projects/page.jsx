import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
export default function ProjectsPage() {
  return (
    <section className="min-h-screen px-6 py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto">

        {/* Page Heading */}
        <div className="mb-14">
          <h1 className="text-4xl md:text-5xl font-bold">
            My <span className="text-blue-500">Projects</span>
          </h1>
          <p className="mt-4 text-gray-400 max-w-3xl">
            A selection of real-world projects showcasing my skills in
            full-stack development, API integration, and business-focused
            website design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
