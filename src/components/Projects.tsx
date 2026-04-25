const PROJECTS = [
  {
    title: "External Secrets Operator",
    description: "Kubernetes operator for injecting secrets from AWS Secrets Manager, HashiCorp Vault, and other providers.",
    tech: ["Go", "Kubernetes", "AWS", "Terraform"],
    link: "https://github.com/ppatel1604/external-secrets",
  },
  {
    title: "Istio Ambient Preflight",
    description: "Validation script for Istio ambient mesh deployment configurations.",
    tech: ["PowerShell", "Kubernetes", "Istio"],
    link: "https://github.com/ppatel1604/istio-ambient-preflight",
  },
  {
    title: "Budget Tracker",
    description: "Full-stack personal finance tracking application with .NET backend and React frontend.",
    tech: ["React", ".NET", "Docker", "Cypress"],
    link: "https://github.com/ppatel1604/budget-tracker",
  },
  {
    title: "Kubernetes Multi-Cluster",
    description: "Multi-cluster Kubernetes deployment with Redis caching and Node.js API.",
    tech: ["Node.js", "Docker", "Kubernetes", "Redis"],
    link: "https://github.com/ppatel1604/multi-k8s",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="text-blue-400">04.</span>
          <span>Some Things I&apos;ve Built</span>
          <div className="h-px bg-slate-700 flex-1 ml-4" />
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <svg
                  className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
              <p className="text-slate-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-slate-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}