import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { resumeData } from '../../data/resumeData';

const Footer = () => {
  const { github, linkedin } = resumeData.profile;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-steel-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; {currentYear} {resumeData.profile.name}. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href={`https://${github}`} target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold transition-colors">
            <FaGithub size={24} />
          </a>
          <a href={`https://${linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold transition-colors">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;