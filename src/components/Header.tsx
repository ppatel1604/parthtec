const NAV_LINKS = [
  { href: "#platform", label: "Platform" },
  { href: "#work", label: "Case studies" },
  { href: "#approach", label: "How I work" },
  { href: "#leadership", label: "Leadership" },
  { href: "#oss", label: "Open source" },
  { href: "#experience", label: "Experience" },
];

export default function Header() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="top">
        <div className="wrap">
          <a className="brand" href="#top">
            Parth Patel
          </a>
          <nav aria-label="Primary">
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
              <li>
                <a className="cta" href="/Resume.pdf">
                  Résumé ↓
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
