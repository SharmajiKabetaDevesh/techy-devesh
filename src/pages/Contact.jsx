import PageTransition from '../components/Layout/PageTransition';
import { resumeData } from '../data/resumeData';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const { email, phone, github, linkedin } = resumeData.profile;

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl text-center mb-4 text-accent-gold">Get In Touch</h1>
        <p className="text-center text-steel-gray mb-12">I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.</p>
        
        <div className="bg-secondary p-8 rounded-lg border border-steel-gray/20">
          <div className="space-y-6">
            <a href={`mailto:${email}`} className="flex items-center gap-4 group">
              <FaEnvelope className="text-accent-red" size={24}/>
              <span className="text-parchment group-hover:text-accent-gold transition-colors">{email}</span>
            </a>
            {/* <div className="flex items-center gap-4">
              <FaPhone className="text-accent-red" size={24}/>
              <span className="text-parchment">{phone}</span>
            </div> */}
             <a href={`https://${linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <FaLinkedin className="text-accent-red" size={24}/>
              <span className="text-parchment group-hover:text-accent-gold transition-colors">LinkedIn Profile</span>
            </a>
             <a href={`https://${github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <FaGithub className="text-accent-red" size={24}/>
              <span className="text-parchment group-hover:text-accent-gold transition-colors">GitHub Profile</span>
            </a>
          </div>
        </div>

        {/* Note: A real contact form would require a backend or service like EmailJS. This is a static representation. */}
      </div>
    </PageTransition>
  );
};

export default Contact;