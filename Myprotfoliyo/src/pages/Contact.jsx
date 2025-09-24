import React from "react";
import style from "../App.css";

const MessageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="card-icon" fill="currentColor" viewBox="0 0 16 16">
    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.5.5 0 0 1-.921.073L5.462 8.441l-4.225-2.071a.5.5 0 0 1 .054-.919L15.319.105a.5.5 0 0 1 .535.041z"/>
  </svg>
);

const EnvelopeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="card-icon" fill="currentColor" viewBox="0 0 16 16">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105V5.383zm-.034 6.877L8.935 8.461 16 12.69V6.838l-.034 5.422zM1 11.105l4.708-2.825L1 5.383v5.722z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="card-icon" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2-.01.21.14.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="card-icon" fill="currentColor" viewBox="0 0 16 16">
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.352-.518 1.352-1.274-.004-.768-.535-1.278-1.351-1.278-.81-.005-1.352.508-1.352 1.271 0 .768.52 1.274 1.326 1.274h.016zm10.198 8.212h-2.4v-3.774c0-.95-.008-2.175-1.328-2.175-1.328 0-1.536 1.03-1.536 2.11v3.839h-2.399V6.169h2.3v1.07h.03c.32-.614 1.075-1.26 2.2-1.26 2.35 0 2.784 1.54 2.784 3.538v4.032z"/>
  </svg>
);

export default function Contact({ isDarkMode }) {
  return (
    <div className={`contact-page ${isDarkMode ? "dark-mode" : ""}`}>
      <main className="container py-5">
        <section className="contact-hero">
          <h1 className="get-call">Get In Touch</h1>
          <p className="text-muted">
            I'd love to hear from you! Whether you have a project in mind, want to collaborate, or just want to say hello, feel free to reach out.
          </p>
        </section>

        <section>
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="card">
                <h4 className="card-title">Send me a message</h4>
                <p className="text-muted">Fill out the form below and I'll get back to you as soon as possible.</p>
                <form>
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <label htmlFor="name" className="form-label">Name</label>
                      <input type="text" className="form-control" id="name" placeholder="Your name" />
                    </div>
                    <div className="col-md-6 form-group">
                      <label htmlFor="email" className="form-label">Email</label>
                      <input type="email" className="form-control" id="email" placeholder="your.email@example.com" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" className="form-control" id="subject" placeholder="What's this about?" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="4" placeholder="Tell me more about your project or inquiry..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    <MessageIcon /> Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="d-grid gap-4">
                <div className="card">
                  <h4 className="card-title">Let's connect</h4>
                  <p className="text-muted">You can also reach me through these platforms</p>
                  <ul className="list-unstyled">
                    <li>
                      <a href="https://etmdasuni@gmail.com" target="_blank" rel="noopener noreferrer">
                        <EnvelopeIcon /> etmdasuni@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/Dasuni789" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon /> @Dasuni789
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/dasuni-ekanayaka-2356432b8/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon /> dasuni-ekanayaka-2356432b8
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="card">
                  <h4 className="card-title">Response Time</h4>
                  <p className="text-card-title">
                    I typically respond to messages within 24-48 hours. For urgent inquiries, feel free to reach out via email directly.
                  </p>
                  <h4 className="card-title mt-3">Availability</h4>
                  <p className="text-card-title">
                    I'm currently available for freelance projects and collaboration opportunities. Let's discuss how we can work together!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
