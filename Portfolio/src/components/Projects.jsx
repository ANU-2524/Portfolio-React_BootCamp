import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectsSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
`;

const ProjectsContainer = styled.div`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: #2d2d2d;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;

  h3 {
    font-size: 1.5rem;
    color: white;
    margin-bottom: 1rem;
  }

  p {
    color: #888;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  span {
    background: rgba(0, 255, 135, 0.1);
    color: #00ff87;
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.9rem;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: white;
    font-size: 1.2rem;
    transition: color 0.3s ease;

    &:hover {
      color: #00ff87;
    }
  }
`;

const Projects = () => {
  const projects = [
    {
      title: 'Truth N Dare',
      description: 'A fun, interactive web-based game built using **HTML**, **CSS**, and **JavaScript**, powered by a free API! Just enter your name, and get served a random Truth or Dare to spice up your mood!',
      // image: 'https://via.placeholder.com/400x200',
      tech: ['HTML', 'CSS', 'JavaScript', 'API'],
      github: 'https://github.com/ANU-2524/Truth_N_Dare',
      live: 'https://truth-n-dare-enjoygame.vercel.app',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      image: 'https://via.placeholder.com/400x200',
      tech: ['React', 'Firebase', 'Material-UI'],
      github: 'https://github.com/yourusername/project2',
      live: 'https://project2.com',
    },
    
  ];

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </SectionTitle>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <ProjectImage>
                <img src={project.image} alt={project.title} />
              </ProjectImage>
              <ProjectContent>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <TechStack>
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects; 