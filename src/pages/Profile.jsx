import Header from '../components/Header';
import Cursor from '../components/Cursor';

const skills = {
  languages: ['JavaScript', 'TypeScript', 'PHP', 'C#', 'Golang'],
  frontend: ['Angular', 'React', 'Next.js', 'HTML5/CSS3'],
  backend: ['Node.js', 'NestJS', 'Express', 'Golang (Gin, Chi)', 'MongoDB', 'PostgreSQL', 'MSSQL', 'Redis'],
  fintech: ['Webhook Integration', 'Payment Gateway APIs', 'POS Systems', 'Cross-border Payments', 'Merchant Management'],
  devops: ['AWS', 'Docker', 'Dokploy', 'Google Cloud', 'CI/CD Pipelines', 'VPS Deployment'],
  tools: ['Git/GitHub', 'Postman', 'Jira', 'Slack'],
};

const experience = [
  {
    title: 'Full-Stack Developer',
    company: 'M-r International NIG. LTD',
    period: 'January 2019 - Present',
    location: 'Port Harcourt, Nigeria',
    points: [
      'Lead Developer for Exploration and Production Information Management System',
      'Built scalable frontend solutions using Angular, NgRx, and Nx with NestJS REST APIs',
      'Project Lead for Computer-Based Testing (CBT) platform using MEAN Stack',
    ],
  },
  {
    title: 'Backend Developer',
    company: 'AppiaWave',
    period: 'November 2023 - February 2024',
    location: 'Remote',
    points: [
      'Built robust Node.js backend for high-volume payment requests',
      'Architected Appia NG and Appia SA for Nigeria-South Africa transactions',
      'Integrated POS systems and physical card processing',
    ],
  },
  {
    title: 'Backend Developer',
    company: 'FountainPay',
    period: 'June 2022 - December 2024',
    location: 'Remote',
    points: [
      'Developed scalable fintech payment solutions using NestJS and Node.js',
      'Implemented secure Webhook handlers for real-time transaction updates',
      'Engineered Subaccounts, Merchant Management, Payment Links, and Modals',
    ],
  },
  {
    title: 'Full-Stack Developer',
    company: 'Accelerar Inc.',
    period: 'September 2017 - January 2019',
    location: 'Port Harcourt, Nigeria',
    points: [
      'Developed Non-Traditional Banking Fintech platform with marketplace',
      'Built cross-platform mobile app using Angular and NativeScript',
      'Implemented USSD Platform for mobile-first transactions',
    ],
  },
];

export default function Profile() {
  return (
    <>
      <Cursor />
      <Header />
      <main className="profile-page">
        <section className="profile-header">
          <h1>ELVIS IRIA</h1>
          <p className="subtitle">Software Developer</p>
          <div className="contact-info">
            <span>elviscoly2017@gmail.com</span>
            <span>•</span>
            <span>+2347034897268</span>
            <span>•</span>
            <span>Port Harcourt, Nigeria</span>
          </div>
          <p className="mission">Passionate about using technology to enhance human sustainability</p>
        </section>

        <section className="section">
          <h2>Professional Summary</h2>
          <p>Experienced Full-Stack Developer with 9+ years in software development, specializing in enterprise applications, fintech solutions, and oil & gas industry systems.</p>
        </section>

        <section className="section">
          <h2>Work Experience</h2>
          {experience.map((job, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h3>{job.title}</h3>
                <span className="period">{job.period}</span>
              </div>
              <p className="company">{job.company} | {job.location}</p>
              <ul>
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="section">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <div className="skill-tags">
                {skills.languages.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Frontend Technologies</h3>
              <div className="skill-tags">
                {skills.frontend.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend & Databases</h3>
              <div className="skill-tags">
                {skills.backend.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Payment & Fintech</h3>
              <div className="skill-tags">
                {skills.fintech.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Cloud & DevOps</h3>
              <div className="skill-tags">
                {skills.devops.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Development Tools</h3>
              <div className="skill-tags">
                {skills.tools.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Education</h2>
          <div className="education-item">
            <h3>Higher National Diploma (HND) - Computer Science</h3>
            <p className="school">Auchi Polytechnic | Edo State, Nigeria</p>
            <p className="coursework">Core Coursework: Data Structures & Algorithms, Software Engineering Principles, AI Concepts, OOP, Database Management</p>
          </div>
        </section>
      </main>
    </>
  );
}
