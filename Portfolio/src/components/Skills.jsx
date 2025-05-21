import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaDocker, FaAws } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMongodb, SiRedux, SiNextdotjs } from 'react-icons/si';

const SkillsSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%);
`;

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 4rem;
  background: linear-gradient(45deg, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  svg {
    font-size: 3rem;
    color: #00ff87;
  }

  h3 {
    font-size: 1.5rem;
    color: white;
  }

  p {
    color: #888;
    line-height: 1.6;
  }
`;

const Skills = () => {
  const skills = [
    {
      icon: <FaReact />,
      title: 'React',
      description: 'Building modern, responsive user interfaces with React and its ecosystem.',
    },
    {
      icon: <SiJavascript />,
      title: 'JavaScript',
      description: 'Expert in modern JavaScript (ES6+) and its best practices.',
    }, 
    {
      icon: <FaNodeJs />,
      title: 'Node.js',
      description: 'Developing scalable backend services and RESTful APIs.',
    },
    {
      icon: <FaDatabase />,
      title: 'Databases',
      description: 'Working with SQL and NoSQL databases for optimal data management.',
    },
    {
      icon: <SiMongodb />,
      title: 'MongoDB',
      description: 'Designing and implementing MongoDB schemas and queries.',
    },
    {
      icon: <SiRedux />,
      title: 'Redux',
      description: 'Managing complex application state with Redux and Redux Toolkit.',
    },
    
    {
      icon: <FaGitAlt />,
      title: 'Git',
      description: 'Version control and collaborative development workflows.',
    },
    {
      icon: <FaDocker />,
      title: 'Docker',
      description: 'Containerizing applications for consistent deployment.',
    }, 
  ];

  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Skills & Technologies
        </SectionTitle>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              {skill.icon}
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills; 