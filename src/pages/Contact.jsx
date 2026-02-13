import Header from '../components/Header';
import Cursor from '../components/Cursor';

export default function Contact() {
  return (
    <>
      <Cursor />
      <Header />
      <main className="profile-page">
        <section className="profile-header">
          <h1>Get In Touch</h1>
          <p className="subtitle">Let's work together</p>
        </section>

        <section className="section">
          <div className="contact-card">
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <a href="mailto:elviscoly2017@gmail.com" className="contact-value">elviscoly2017@gmail.com</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Phone</span>
              <a href="tel:+2347034897268" className="contact-value">+2347034897268</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Location</span>
              <span className="contact-value">Port Harcourt, Nigeria</span>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Areas of Interest</h2>
          <div className="interests-grid">
            {['Fintech & Payment Systems', 'Golang Development', 'Microservices Architecture', 'Mobile Development', 'Web Technologies', 'IoT', 'AI/ML', 'Open Source'].map((interest) => (
              <span key={interest} className="interest-tag">{interest}</span>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
