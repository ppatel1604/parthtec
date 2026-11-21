const EMAIL = "parth@parthtec.dev";
const LINKEDIN_URL = "https://www.linkedin.com/in/ppatel3";
const GITHUB_URL = "https://github.com/ppatel1604";

export default function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="wrap">
        <div className="grid">
          <h2>Looking for my next senior platform role.</h2>
          <div>
            <p className="contact-intro">
              If your team is scaling Kubernetes, taming a service mesh or trying to make the
              platform pay for itself, I&apos;d like to hear about it.
            </p>
            <div className="actions">
              <a className="btn primary" href={`mailto:${EMAIL}`}>
                Email me
              </a>
              <a className="btn ghost" href={LINKEDIN_URL}>
                LinkedIn
              </a>
              <a className="btn ghost" href={GITHUB_URL}>
                GitHub
              </a>
            </div>
            <p className="addr">{EMAIL}</p>
          </div>
        </div>
        <div className="fine">
          <span>© 2026 Parth Patel · Auckland, New Zealand</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
