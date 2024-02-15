import React, { useState } from "react";
import "./App.css";
import IpLookupComponent from "./components/IpLookupComponent";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`landing-page ${darkMode ? "dark-mode" : ""}`}>
      <header className="header">
        <h1 className="logo">Riley Sklar</h1>
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <main className="main">
        <section className="hero">
          <h2>Creating Innovative Solutions with Technology</h2>
          <IpLookupComponent />
          <p>
            As a dedicated software developer based in Austin, Texas, I
            specialize in crafting custom software solutions that meet the
            unique needs of your business. Let's bring your ideas to life.
          </p>
          <a href="#contact-form" className="order-now-button">
            Contact Me
          </a>
        </section>
        <section className="about">
          <h3>About Riley Sklar</h3>
          <p>
            With years of experience in the tech industry, I've developed a
            passion for solving complex problems with simple, elegant software
            solutions. My expertise spans across full-stack development, cloud
            services, and mobile app development.
          </p>
          <p>
            I'm committed to delivering high-quality, scalable software that
            drives business growth and enhances user experiences.
          </p>
        </section>
        <section className="options" style={{ display: "none" }}>
          {/* Hide or remove the options section if it's not relevant */}
        </section>
        <section className="form" id="contact-form">
          <h3>Get In Touch</h3>
          <form action="#" method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </section>
      </main>
      <footer className="footer">
        <p>© 2024 Riley Sklar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
