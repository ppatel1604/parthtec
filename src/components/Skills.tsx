const SKILLS = {
  "Platform & Orchestration": ["Kubernetes", "Istio", "ArgoCD", "Flux", "Docker", "Helm"],
  "Cloud & Infrastructure": ["Azure", "AWS", "GCP", "Terraform", "Pulumi"],
  "Languages & Tools": ["Go", "Python", "PowerShell", ".NET", "C#", "TypeScript"],
  "DevOps & Observability": ["GitHub Actions", "Jenkins", "Prometheus", "Grafana", "ELK Stack", "OAuth2-Proxy"],
};

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="text-blue-400">03.</span>
          <span>Skills & Technologies</span>
          <div className="h-px bg-slate-700 flex-1 ml-4" />
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(SKILLS).map(([category, skills]) => (
            <div
              key={category}
              className="bg-slate-900/50 border border-slate-800 rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm hover:bg-blue-500/20 hover:text-blue-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}