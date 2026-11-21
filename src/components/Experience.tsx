const ROLES = [
  { when: "Apr 2024 – now", role: "Senior Platform Engineer" },
  { when: "Jul 2021 – Apr 2024", role: "DevOps Engineer" },
  { when: "Jul 2020 – Jul 2021", role: "Associate DevOps Engineer" },
  { when: "Aug 2019 – Jul 2020", role: "Software Developer" },
  { when: "May 2018 – Jul 2019", role: "Associate Software Developer" },
];

const SKILLS = [
  { group: "Platform", items: "Kubernetes (AKS, EKS), Istio ambient & sidecar, Cilium, Karpenter, Kyverno" },
  { group: "Delivery", items: "ArgoCD, Helm, Terraform, GitHub Actions, Azure DevOps, Octopus, TeamCity" },
  { group: "Observability & access", items: "Prometheus, Grafana, OpenTelemetry, OAuth2-Proxy, Microsoft Entra ID" },
  { group: "Code", items: "Go, PowerShell, C# / .NET, TypeScript" },
];

export default function Experience() {
  return (
    <section className="block" id="experience" aria-labelledby="exp-h">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="exp-h">Experience</h2>
          <p>Nintex, May 2018 – present. Five roles, from software development into platform engineering.</p>
        </div>
        <ol className="timeline">
          {ROLES.map((r) => (
            <li key={r.role}>
              <span className="when">{r.when}</span>
              <span>
                <b>{r.role}</b>, Nintex
              </span>
            </li>
          ))}
          <li>
            <span className="when">2015 – 2018</span>
            <span className="earlier">
              Earlier: internships at Promapp Solutions, Absolute Analytics and Experieco
            </span>
          </li>
        </ol>

        <div className="skills">
          {SKILLS.map((s) => (
            <div key={s.group}>
              <h3>{s.group}</h3>
              <p>{s.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
