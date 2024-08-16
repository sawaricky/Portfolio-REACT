import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';

const Home = () => (
  <div>
    <div className='intro'>
      {/* Introduction Section */}
      <div className="container">
        <div className="left">
          <p>Hello, I'm Akash</p>
          <h1>Web Developer</h1>
          <p>Based in Canada</p>
          <button className='download-button'>Download Resume</button>
        </div>
        <div className="right">
          <img src="/public/assets/me-image.png" alt="Akash Sharma" />
        </div>
      </div>
    </div>
    {/* About Me Section */}
    <div className="container-about">
      <h2 className='subheading'>About Me</h2>
      <p>
        Hi, I am Akash Sharma, a passionate web developer with over three years of experience crafting dynamic and user-friendly websites. I specialize in creating responsive, accessible, and aesthetically pleasing web applications using the latest frontend and backend technologies. My journey into web development began with a curiosity about how websites are built, which quickly turned into a full-blown passion. Over the years, I've honed my skills in HTML, CSS, JavaScript, and various frameworks like React.js and Node.js. I love tackling complex problems and turning ideas into fully functional digital experiences.
      </p>
    </div>

    {/* Work Experience Section */}
    <div className="container-work">
      <div className='work-title'>
      <h2 className='subheading'>Work Experience</h2>
      </div>
      <div className='container'>
        <div className="left">
          <img src="/public/assets/humber.jpg" alt="Work Image 1" />
          <p className='work-heading'>Humber College</p>
          <p><strong>Role:</strong>   Research Assistant</p>
          <p className='work-paragraph'>Developed a bootstrap, JavaScript, oriented website template for “BrickMMO” project for a dynamic Lego brick system. •	Simulated an interactive Lego city using Python including car navigation and elements around the Lego city. (simulating a real city) (Understanding behaviors of current life in a city) •	Simulated a small city with digital Lego blocks created navigation paths for cars and moving elements•	Programmed complex systems like navigation, news broadcasting such as a crash, traffic control, using python and Google Apis and achieving high level of simulation.
          </p>
        </div>
        <div className="right">
          <img src="/public/assets/logo.jpg" alt="Work Image 2" />
          <p className='work-heading'>Divikas Enterprises</p>
          <p> <strong>Role:</strong>  Web Developer</p>
          <p className='work-paragraph'>Transitioned the manual financial statement system to an automated system using Microsoft Excel. •	Designed and developed the front-end using HTML, CSS with Bootstrap, and JavaScript, and the back-end using PHP, following human-computer interaction principle •	Created digital posters for company products and initiated designs using wireframes for web development. •	Implemented a software development lifecycle using Scrum for marketing initiatives, including the company website.•	Provided project goals and managed realistic client timelines.
          </p>
        </div>
      </div>
    </div>

    {/* Education Section */}
    <div className="container-education">
      <div>
        <div>
          <h2 className='subheading'>Education</h2>
        </div>
      </div>
      <div className='container'>
        <div className="left">
          <h3>Bachelor of Science (Honors) in computing </h3>
          <p>University Of Greenwich (Graduated 2021)</p>
          <h3>Post graduate Diploma in Web Development</h3>
          <p>Humber College (2024 - Current)</p>
        </div>
        <div className="right">
          <img src="public/assets/project-image.png" alt="Education Image" />
        </div>
      </div>
    </div>
    {/* Contact Section */}
    <div className="container-contact">
      <div>
        <h2 className='subheading'>Contact</h2>
      </div>
      <div className='container'>
        <p className='contact-info'>I'd love to hear from you! For any inquiries, collaborations, or just to connect, feel free to email me at <a href="rickysharma3799@gmail.com">rickysharma3799@gmail.com</a> or connect with me on LinkedIn at <a href="https://www.linkedin.com/in/akash-sharma-916109a6/">Akash's LinkedIn</a>. Looking forward to connecting with you!</p>
      </div>

    </div>
  </div>
);

const App = () => {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectRes = await fetch('http://localhost:5000/projects');
        const skillRes = await fetch('http://localhost:5000/skills');
        setProjects(await projectRes.json());
        setSkills(await skillRes.json());
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={
            <section>
              <div className="title">
                <h2>Projects</h2>
              </div>
              {projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </section>
          } />
          <Route path="/skills" element={
            <section>      
            <div className="title">
              <h2 > Skills I have acquired</h2>
            </div>
              <div className="skill-card-wrapper">
                {skills.map((skill) => (
                  <SkillCard key={skill._id} skill={skill} />
                ))}
              </div>
            </section>
          } />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
