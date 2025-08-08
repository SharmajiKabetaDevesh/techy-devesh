import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-secondary rounded-lg overflow-hidden shadow-lg shadow-black/50 border border-steel-gray/20"
      whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(180, 31, 31, 0.3), 0 4px 6px -2px rgba(180, 31, 31, 0.15)" }}
    >
      <div className="p-6">
        <h3 className="font-serif text-xl text-accent-gold mb-2">{project.title}</h3>
        <p className="text-steel-gray text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t, index) => (
            <span key={index} className="text-xs font-semibold bg-primary text-accent-gold px-2 py-1 rounded-full">
              {t}
            </span>
          ))}
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-accent-red hover:text-parchment transition-colors">
          View on GitHub <FaGithub className="ml-2" />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;