import './App.css';
import profilePic from './assets/nicky.jpg';

function ProfilePic() {
  return (
    <img
      src={profilePic}
      alt="nicky"
      width={150}
      height={140}
      style={{ borderRadius: '50%' }}
      className="profile-pic"
    />
  );
}

function Experience1() {
  return (
    <div className="experience">
      <h2>Education</h2>
      <div className="education-row">
        <h4>Sigma School</h4>
        <span className="year">Nov 2024 - Present</span>
      </div>
      <ul>
        <li>Full time course on full stack web development</li>
      </ul>

      <div className="education-row">
        <h4>AIMST University</h4>
        <span className="year">Aug 2021 - May 2024</span>
      </div>
      <ul>
        <li>
          Full time degree student under BSc. (Hons) Management Information
          Systems
        </li>
      </ul>
    </div>
  );
}

function Experience2() {
  return (
    <div className="experience">
      <h2>Work Experience</h2>
      <div className="experience-row">
        <h4>Neptrix Sdn Bhd</h4>
        <span className="year">March 2024 - May 2024</span>
      </div>
      <h4 className="title">Intern - Software Engineer</h4>
      <ul>
        <li>Software Technical Service Support</li>
        <li>Software Development Project</li>
      </ul>
    </div>
  );
}

function Experience3() {
  return (
    <div className="experience">
      <h2>Skills & Language</h2>
      <h3>Skills</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>React.js</li>
        <li>JavaScript</li>
      </ul>

      <h3>Languages</h3>
      <ul>
        <li>English</li>
        <li>Chinese</li>
        <li>Malay</li>
        <li>Thai</li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div className="contact">
      <p>
        <a href="www.linkedin.com/in/nicky-yap-2925742a4">LinkedIn</a> |
        +6017-228 6939 |
        <a href="mailto: nickyyap2887@gmail.com"> nickyyap2887@gmail.com</a>
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <ProfilePic />
      <h1>Nicky Yap</h1>
      <h5>Software Developer</h5>
      <Contact />
      <Experience1 />
      <hr />
      <Experience2 />
      <hr />
      <Experience3 />
      <hr />
      <h2>Interests</h2>
      <p>
        <b>Interest:</b> Puzzle Enthusiast, Aquatic Sports
      </p>
    </div>
  );
}

export default App;
