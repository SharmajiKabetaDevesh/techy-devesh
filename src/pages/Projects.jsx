import PageTransition from '../components/Layout/PageTransition';
import ProjectCard from '../components/Layout/ProjectCard';
import { resumeData } from '../data/resumeData';

const Projects = () => {
  return (
    <PageTransition>
      <h1 className="font-serif text-4xl text-center mb-12 text-accent-gold">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resumeData.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </PageTransition>
  );
};

export default Projects;