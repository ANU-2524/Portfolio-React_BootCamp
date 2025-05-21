import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 6rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const AboutContent = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    background: linear-gradient(45deg, #00ff87, #60efff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #888;
    margin-bottom: 1.5rem;
  }
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
`;

const StatBox = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    font-size: 2rem;
    color: #00ff87;
    margin-bottom: 0.5rem;
  }

  p {
    color: #888;
    margin: 0;
  }
`;

const About = () => {
  const stats = [
    { number: '2+', text: 'Years Experience' },
    { number: '20+', text: 'Projects Completed' },
    { number: '15+', text: 'Happy Clients' },
    { number: '10+', text: 'Technologies' },
  ];

  return (
    <AboutSection id="about">
      <AboutContainer>
        <AboutContent>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
           <h3> 1st year student of B.Tech in Computer Science and Engineering from Chitkara University, Baddi , Himachal Pradesh.</h3>
            I'm a passionate Full Stack Developer with a keen eye for creating beautiful and functional web applications. My journey in web development started with a curiosity for building things that make a difference.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            I specialize in React, Node.js, and modern web technologies. I love solving complex problems and turning ideas into reality through elegant code.
          </motion.p> 
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About; 