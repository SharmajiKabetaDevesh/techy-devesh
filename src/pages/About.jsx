import PageTransition from '../components/Layout/PageTransition';
import { resumeData } from '../data/resumeData';
import { FaGraduationCap, FaBriefcase, FaCertificate, FaTrophy } from 'react-icons/fa';

const About = () => {
  const { education, experience, certifications, achievements } = resumeData;

  return (
    <PageTransition>
      <h1 className="font-serif text-4xl text-center mb-12 text-accent-gold">About Me</h1>

      <div className="space-y-12">
        {/* Experience Section */}
        <section>
          <h2 className="font-serif text-3xl flex items-center gap-3 mb-6"><FaBriefcase className="text-accent-red"/> Professional Experience</h2>
          {experience.map((exp, index) => (
            <div key={index} className="relative pl-8 before:absolute before:left-3 before:top-2 before:w-px before:h-full before:bg-steel-gray/50">
               <div className="absolute left-0 top-2 w-6 h-6 bg-secondary border-2 border-accent-red rounded-full"></div>
              <h3 className="font-bold text-xl">{exp.title}</h3>
              <p className="text-accent-gold">{exp.company} | {exp.start} - {exp.end}</p>
              <ul className="list-disc list-inside mt-2 text-steel-gray space-y-1">
                {exp.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
              </ul>
            </div>
          ))}
        </section>

        {/* Education Section */}
        <section>
          <h2 className="font-serif text-3xl flex items-center gap-3 mb-6"><FaGraduationCap className="text-accent-red"/> Education</h2>
          {education.map((edu, index) => (
             <div key={index} className="relative pl-8">
               <div className="absolute left-0 top-2 w-6 h-6 bg-secondary border-2 border-accent-red rounded-full"></div>
              <h3 className="font-bold text-xl">{edu.degree}</h3>
              <p className="text-accent-gold">{edu.school}</p>
              <p className="text-steel-gray">{edu.start} - {edu.end}</p>
              <p className="text-steel-gray">{edu.details}</p>
            </div>
          ))}
        </section>

         {/* Certifications Section */}
        <section>
            <h2 className="font-serif text-3xl flex items-center gap-3 mb-6"><FaCertificate className="text-accent-red"/> Certifications</h2>
            {certifications.map((cert, index) => (
                <div key={index}>
                    <h3 className="font-bold text-xl">{cert.name}</h3>
                    <p className="text-steel-gray">{cert.description}</p>
                </div>
            ))}
        </section>

        {/* Achievements Section */}
        <section>
            <h2 className="font-serif text-3xl flex items-center gap-3 mb-6"><FaTrophy className="text-accent-red"/> Achievements</h2>
            <ul className="list-disc list-inside text-steel-gray space-y-1">
                {achievements.map((ach, index) => (
                    <li key={index}>{ach.prize} at {ach.event} {ach.year && `(${ach.year})`}</li>
                ))}
            </ul>
        </section>
      </div>
    </PageTransition>
  );
};

export default About;