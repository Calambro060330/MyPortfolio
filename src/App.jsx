import React, { useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import TextType from './TextType';
import ProfileCard from './ProfileCard';


function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);



  return (
    <div className="portfolio">
      <header className="navbar">
        <div className="container nav-content">
          <div className="logo">Randolph.</div>
          <nav>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <section id="home" className="hero">
        <div className="container hero-grid">
          <div className="hero-text">
            <p className="greeting" data-aos="fade-in">Hello, I'm</p>
            <h1 data-aos="fade-in" data-aos-delay="100">Randolph Calambro</h1>
            <h2 className="role" data-aos="fade-in" data-aos-delay="200"><TextType text={["Full-stack Developer", "IT Student"]} typingSpeed={70} deletingSpeed={40} pauseDuration={2000} showCursor={true} cursorCharacter="|"variableSpeed={{min:40, max:100}}/></h2>
            <p className="description" data-aos="fade-in" data-aos-delay="200">
              I Design and develop complete web solutions from front-end interfaces to powerful back-end engines, creating smooth digital experiences.
            </p>
            <div className="social-pills" data-aos="fade-in" data-aos-delay="300">
              <a href="https://github.com/Calambro060330" target="_blank" rel="noreferrer" className="pill">
                <i className="fab fa-github"></i> Github
              </a>
              <a href="https://www.linkedin.com/in/randolph-calambro-7262a5400" target="_blank" rel="noreferrer" className="pill">
                <i className="fab fa-linkedin"></i> Linkedin
              </a>
              <a href="https://www.facebook.com/share/18CyrWGC3x/" target="_blank" rel="noreferrer" className="pill">
                <i className="fab fa-facebook"></i> Facebook
              </a>
            </div>
            <div className="cta-group" data-aos="fade-in" data-aos-delay="400">
              <a href="#contact" className="btn btn-primary">Contact Me</a>
              <a href="#projects" className="btn btn-secondary">View Projects</a>
            </div>
          </div>
          <div className="hero-image" data-aos="fade-in" data-aos-delay="100">
          <ProfileCard
          name="Randolph Calambro"
          title="Full-Stack Developer"
          handle="Calambro060330"
          avatarURL="/profile.png"
          status="Available for work"
          behindGlowEnabled={true}
          behindGlowColor="rgba(97, 218, 251, 0.4)"
          onContactClick={() => (window.location.href = '#contact')} />
          </div>
        </div>
      </section>



<section id="about" className="about" data-aos="fade-up" data-aos-delay="100">
        <div className="container">
          <div className="about-card">
            <div className="about-img">
              <img src="/p2.png" alt="Working" />
            </div>
            <div className="about-info">
              <h3>About Me</h3>
              <h4>Full-Stack Developer</h4>
              <p>I am a Full-Stack Developer with a knack for building beautiful and functional web applications. I create meaningful digital experiences through coding and technology.</p>
              <div className="stats">
    <div className="stat" data-aos="fade-up" data-aos-delay="200">
        <i className="fas fa-code"></i>
        <span>Adaptive</span>
        <p className="stat-desc">Building flexible designs that look perfect on any screen size, from mobile to desktop.</p>
    </div>
    <div className="stat" data-aos="fade-up" data-aos-delay="300">
        <i className="fas fa-bolt"></i>
        <span>Performance</span>
        <p className="stat-desc">Optimizing code and assets to ensure lightning-fast load times and smooth user interactions.</p>
    </div>
    <div className="stat" data-aos="fade-up" data-aos-delay="400">
        <i className="fas fa-lightbulb"></i>
        <span>Utility</span>
        <p className="stat-desc">Focusing on clean, functional solutions that solve real problems with intuitive user flows.</p>
    </div>
</div>
</div>
</div>
</div>
</section>



      <section id="skills" className="skills-section">
        <div className="container">
          <h2>Skills</h2>
          <p className="section-subtitle">A combination of my technical expertise and creative focus.</p>
          <div className="skills-grid">
            <div className="skill-card" data-aos="fade-up">
   <h3>Web Dev</h3>
 <p>Building responsive and modern websites using latest technologies.</p>
            </div>
            <div className="skill-card" data-aos="fade-up" data-aos-delay="100">
              <h3>Networking</h3>
              <p>Understanding of network protocols and infrastructure management.</p>
            </div>
            <div className="skill-card" data-aos="fade-up" data-aos-delay="200">
              <h3>UI/UX Design</h3>
              <p>Creating user-centric designs with a focus on usability and aesthetics.</p>
            </div>
          </div>
        </div>
      </section>



      <section className="tech">
        <div className="container">
          <h2>Tech Stack</h2>
          <div className="tech-grid">
            <div className="tech-card">
              <img src="/React.png" alt="React" />
              <p>React.js</p>
            </div>
            <div className="tech-card">
              <img src="/HTML5.png" alt="HTML" />
              <p>HTML</p>
            </div>
            <div className="tech-card">
              <img src="/CSS3.png" alt="CSS" />
              <p>CSS</p>
            </div>
            <div className="tech-card">
              <img src="/JavaScript.png" alt="JavaScript" />
              <p>JavaScript</p>
            </div>
            <div className="tech-card">
              <img src="/Python.png" alt="Python" />
              <p>Python</p>
            </div>
            <div className="tech-card">
              <img src="/GitHub.png" alt="GitHub" />
              <p>GitHub</p>
            </div>
            <div className="tech-card">
              <img src="/Postman.png" alt="Postman" />
              <p>Postman</p>
            </div>
            <div className="tech-card">
              <img src="/VS.png" alt="VS Code" />
              <p>VS Code</p>
            </div>
            <div className="tech-card">
              <img src="/Express.png" alt="Express" />
              <p>Express.js</p>
            </div>
            <div className="tech-card">
              <img src="/MongoDB.png" alt="MongoDB" />
              <p>MongoDB</p>
            </div>
            <div className="tech-card">
              <img src="/Node.js.png" alt="Node.js" />
              <p>Node.js</p>
            </div>
            <div className="tech-card">
              <img src="/Figma.png" alt="Figma" />
              <p>Figma</p>
            </div>
             <div className="tech-card">
              <img src="/Render.png" alt="Render" />
              <p>Render</p>
            </div>
             <div className="tech-card">
              <img src="/Vite.png" alt="Vite" />
              <p>Vite</p>
            </div>
              <div className="tech-card">
              <img src="/Cisco.png" alt="Cisco" />
              <p>Cisco Packet Tracer</p>
            </div>
            <div className="tech-card">
              <img src="/Reactbits.png" alt="Reactbits" />
              <p>React Bits</p>
            </div>
          </div>
        </div>
      </section>


      <section id="projects" className="projects">
        <div className="container">
          <h2 className="highlight2" data-aos="fade-down">Featured Projects</h2>
          <p className="section-desc" data-aos="fade-down" data-aos-delay="100">
            Selected works showcasing my development and design capabilities.
          </p>
          <div className="project-grid">
            <div className="project-card large" data-aos="fade-up">
              <img src="/commnect.png" alt="Commnect" />
              <div className="project-overlay">
                <h3>Commnect Web App</h3>
                <p>Community Support & Announcements</p>
                <a href="https://www.figma.com/design/ilQePnLsQ2UcLWBLGx0Sp6?node-id=0-1m" target="_blank" rel="noreferrer" className="btn-project">View </a>
              </div>
            </div>
            <div className="project-card small" data-aos="fade-up" data-aos-delay="100">
              <img src="/ui2.png" alt="Profile UI" />
              <div className="project-overlay">
                <h3>UI Challenge 1</h3>
                <p>Modern design.</p>
                <a href="https://www.figma.com/design/BT2CUDtMfKpzvtEBMl1xx5?node-id=" target="_blank" rel="noreferrer" className="btn-project">View</a>
              </div>
            </div>
            <div className="project-card small" data-aos="fade-up" data-aos-delay="200">
              <img src="/ui1.png" alt="Mobile UI" />
              <div className="project-overlay">
                <h3>UI Challenge 2</h3>
                <p>Clean and intuitive design.</p>
                <a href="https://www.figma.com/design/PcITKwDHBhQOc6XbmSO8Ze?node-id=" target="_blank" rel="noreferrer" className="btn-project">View</a>
              </div>
            </div>
            <div className="project-card wide" data-aos="fade-up" data-aos-delay="300">
              <img src="/Awesometodos.png" alt="Todos" />
              <div className="project-overlay">
                <h3>Awesome Todos</h3>
                <p>Task management system with real-time features.</p>
                <a href="https://awesometodoapp-dmz0.onrender.com/" target="_blank" rel="noreferrer" className="btn-project">View</a>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section id="contact" className="contact">
        <div className="container contact-flex">
          <div className="contact-text">
            <span className="label">Contact Me</span>
            <h2>Let's build something <span className="highlight">great</span> together.</h2>
            <p>Feel free to reach out for collaborations or just a friendly hello!</p>
            <ul className="contact-info">
              <li><i className="fas fa-envelope"></i> randolphcalambro@gmail.com</li>
              <li><i className="fas fa-location-dot"></i> Iloilo, Philippines</li>
            </ul>
            <div className="social-pills">
              <a href="https://github.com/Calambro060330" target="_blank" rel="noreferrer" className="pill">
                <i className="fab fa-github"></i> Github
              </a>
              <a href="https://www.linkedin.com/in/randolph-calambro-7262a5400" target="_blank" rel="noreferrer" className="pill">
                <i className="fab fa-linkedin"></i> Linkedin
              </a>
              <a href="https://www.facebook.com/share/18CyrWGC3x/" target="_blank" rel="noreferrer" className="pill">
                <i className="fab fa-facebook"></i> Facebook
              </a>
            </div>
          </div>
          <div className="contact-form-container">
            <form className="contact-form">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="email@example.com" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full">Send Message <i className="fas fa-paper-plane"></i></button>
            </form>
          </div>
        </div>
      </section>



      <footer>
        <div className="container">
          <p>&copy; 2024 Randolph Calambro. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;