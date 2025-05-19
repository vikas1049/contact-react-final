import React, { useEffect } from 'react';
import { initTypewriter } from '../utils/typewriter';
import '../styles/contact.css';

export default function Contact() {
  useEffect(() => {
    initTypewriter('.typewriter', 'Secure contact interface online.');
  }, []);

  return (
    <div className="contact-page">
      <div className="return-link">
        <a
          href="../index.html"
          className="text-success text-decoration-underline"
        >
          ↩ return home
        </a>
      </div>

      <div className="header">$ whois --contact Vikas_Yadav</div>

      <div className="typewriter-wrapper text-center">
        <div className="typewriter">Initializing secure contact interface...</div>
      </div>

      <div className="terminal-box">
        <form action="https://api.web3forms.com/submit" method="POST">
          <input
            type="hidden"
            name="access_key"
            value="17486fc9-dc18-4496-9fb2-558c061ac90b"
          />

          <div className="mb-1">
            <label htmlFor="name" className="form-label">
              $ name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              $ email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              $ message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="form-control"
              placeholder="Type your message here..."
              required
            />
          </div>

          <button type="submit" className="btn btn-contact">
            Submit
          </button>
        </form>
      </div>

      <div
        className="socials"
        style={{ textAlign: 'center', marginTop: '2rem' }}
      >
        <p>$ connect --via email, linkedin, github</p>

        <a
          href="mailto:vikas1049@gmail.com"
          className="social-link"
          style={{ display: 'inline-block', padding: '0.5rem' }}
          aria-label="Email"
        >
          <i className="fa-solid fa-envelope" />
        </a>

        <a
          href="https://www.linkedin.com/in/vikas1049"
          target="_blank"
          rel="noreferrer"
          className="social-link"
          style={{ display: 'inline-block', padding: '0.5rem' }}
          aria-label="LinkedIn"
        >
          <i className="fa-brands fa-linkedin" />
        </a>

        <a
          href="https://github.com/vikas1049"
          target="_blank"
          rel="noreferrer"
          className="social-link"
          style={{ display: 'inline-block', padding: '0.5rem' }}
          aria-label="GitHub"
        >
          <i className="fa-brands fa-github" />
        </a>
      </div>
    </div>
  );
}
