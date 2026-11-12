import { useState } from "react";
import {
  Menu,
  X,
  GraduationCap,
  BookOpen,
  MapPin,
  Flower2,
  Mail,
} from "lucide-react";

import { FaLinkedinIn } from "react-icons/fa";
import { portfolio } from "./data/portfolio";


const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <a href="#home" className="logo">
          rashmita<span>.</span>
        </a>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-copy">
          <h1>
            Hey, I'm
            <br />
            <span>Rashmita!</span>
          </h1>

          <p className="hero-subtitle">
            Finance graduate with an interest in
            <br />
            foreign affairs.
          </p>

          <p className="hero-description">
            {portfolio.introduction}
          </p>
        </div>

        <div className="hero-art">
          <div className="photo-background" />

          <div className="photo-wrapper">
            <img
              src="/images/rashmita.png"
              alt="Rashmita Karki"
            />
          </div>

          <div className="floating-note note-top">
            <BookOpen size={16} />
            Always learning
          </div>

          <div className="floating-note note-bottom">
            <MapPin size={16} />
            Based in Kathmandu
          </div>

          <div className="decorative-star">
            <Flower2 size={54} strokeWidth={1.4} />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="content-section about-section" id="about">
      <div className="section-container">
        <h2>More than just <em>a degree.</em></h2>
        <p>{portfolio.about}</p>
        <div className="interest-tags">
          {portfolio.interests.map((interest) => (
            <span key={interest}>{interest}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="content-section" id="experience">
      <div className="section-container">
        <h2>Things I've <em>done.</em></h2>

        <div className="experience-list">
          {portfolio.experiences.map((item) => (
            <article
              className="experience-card"
              key={`${item.organization}-${item.role}`}
            >
              <div>
                <h3>{item.role}</h3>
                <strong>{item.organization}</strong>
                <p>{item.description}</p>
              </div>
              <span className="experience-period">{item.period}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="content-section education-section" id="education">
      <div className="section-container">
        <h2>My learning <em>journey.</em></h2>

        <div className="education-grid">
          {portfolio.education.map((item) => (
            <article
              className="education-card"
              key={`${item.institution}-${item.degree}`}
            >
              <div className="education-icon">
                <GraduationCap size={32} strokeWidth={1.8} />
              </div>
              <span className="education-period">{item.period}</span>
              <h3>{item.degree}</h3>
              <p>{item.institution}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="section-container contact-layout">
        <div className="contact-info">
          <h2>
            Let's <em>connect.</em>
          </h2>

          <div className="contact-links">
          <a
            href={portfolio.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedinIn size={22} />
          </a>

          <a
            href={`mailto:${portfolio.links.email}`}
            aria-label="Email"
            title="Email"
          >
            <Mail size={22} strokeWidth={2} />
          </a>
        </div>
        </div>

        <form
          className="contact-form"
          action="https://formcarry.com/s/UefbrqAVB1"
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="Your name"
              autoComplete="name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="Your email address"
              autoComplete="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Write your message..."
              rows="5"
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}



export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer className="footer">
        <span>© {new Date().getFullYear()} Rashmita Karki</span>
      </footer>
    </>
  );
}
