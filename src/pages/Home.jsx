import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import PageTransition from '../components/Layout/PageTransition';
import { Link } from 'react-router-dom';

const Home = () => {
  const { name, title, summary } = resumeData.profile || {};
  const { skills = [] } = resumeData || {};

  const imageUrl = "/profileimage.jpg";

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill.name); // only keep names
    return acc;
  }, {});

  return (
    <PageTransition>
      {/* PROFILE IMAGE + NAME */}
      <div className="bg-primary text-center py-12 px-4">
        <motion.div
          className="relative inline-block mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Red pulsing ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-accent-red"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [1, 0.6, 1],
              boxShadow: [
                '0 0 10px rgba(255,0,0,0.8)',
                '0 0 25px rgba(255,0,0,1)',
                '0 0 10px rgba(255,0,0,0.8)'
              ]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />

          {/* Profile image */}
          <motion.img
            src={imageUrl}
            alt="Profile"
            className="w-40 h-40 object-cover rounded-full border-4 border-transparent relative z-10"
            animate={{
              filter: [
                'brightness(1)',
                'brightness(1.3)',
                'brightness(1)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </motion.div>

        {/* Name & Title */}
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-parchment mb-4">{name}</h1>
        <h2 className="text-2xl md:text-3xl text-accent-gold mb-8">{title}</h2>

        {/* Summary */}
        <p className="max-w-3xl mx-auto text-steel-gray mb-10">{summary}</p>

        {/* Skills Section */}
        <div className="max-w-4xl mx-auto text-left mt-10">
          <h2 className="text-3xl font-bold text-parchment mb-6 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(groupedSkills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold mb-2 text-accent-gold">{category}</h3>
                <ul className="list-disc list-inside text-parchment">
                  {items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-12">
          <Link
            to="/projects"
            className="bg-accent-red hover:bg-muted-red text-parchment font-bold py-3 px-8 rounded-sm transition-colors"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="bg-transparent border-2 border-steel-gray hover:border-accent-gold text-parchment hover:text-accent-gold font-bold py-3 px-8 rounded-sm transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
