const EXPERIENCES = [
  {
    company: "Nintex",
    role: "Senior Platform Engineer",
    period: "2024 - Present",
    location: "Auckland, New Zealand",
    description: "Building scalable platform infrastructure with focus on service mesh architecture (Istio ambient mode), GitOps with ArgoCD, and cross-cloud operations across Azure and GCP.",
  },
  {
    company: "Promapp Solutions",
    role: "DevOps Engineer",
    period: "Jul 2021 - Apr 2024",
    location: "Auckland, New Zealand",
    description: "Built and maintained CI/CD pipelines, implemented microservices with .NET and MS-SQL, containerized applications with Docker, and improved API resiliency using Polly.",
  },
  {
    company: "Absolute Analytics",
    role: "Software Engineering Intern",
    period: "2020 - 2021",
    location: "Auckland, New Zealand",
    description: "Developed web applications using React, JavaScript, and CSS. Created components integrating with Google API to fetch and display data. Worked in agile teams, preparing documentation and presentations.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="text-blue-400">02.</span>
          <span>Where I&apos;ve Worked</span>
          <div className="h-px bg-slate-700 flex-1 ml-4" />
        </h2>
        <div className="space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-slate-800 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                <span className="text-sm text-slate-500">{exp.period}</span>
              </div>
              <p className="text-blue-400 font-medium mb-2">{exp.role}</p>
              <p className="text-slate-400">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}