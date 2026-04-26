"use client";

import { useState } from "react";

const EXPERIENCES = [
  {
    company: "Nintex",
    role: "Senior Platform Engineer",
    period: "May 2018 - Present",
    totalDuration: "8 years",
    location: "Auckland, New Zealand",
    description: "8-year journey from Associate Software Developer to Senior Platform Engineer on a multi-tenant Kubernetes platform serving multiple product engineering teams.",
    progression: [
      { role: "Senior Platform Engineer", period: "April 2024 - Present" },
      { role: "DevOps Engineer", period: "July 2021 - April 2024" },
      { role: "Associate DevOps Engineer", period: "July 2020 - July 2021" },
      { role: "Software Developer", period: "August 2019 - July 2020" },
      { role: "Associate Software Developer", period: "May 2018 - July 2019" },
    ],
    highlights: [
      "Service mesh architecture and migrations (Istio sidecar to ambient mode)",
      "Network policy design with Cilium for mesh-aware workloads",
      "GitOps with ArgoCD at scale with Helm charts",
      "OAuth2-Proxy + Microsoft Entra ID SSO integration",
      "Cross-cloud platform operations across Azure and GCP",
      ".NET and PowerShell automation for Azure workflows",
      "Built and maintained CI/CD pipelines and microservices",
    ],
  },
  {
    company: "Promapp Solutions",
    role: "Intern Software Developer",
    period: "December 2017 - May 2018",
    totalDuration: "6 months",
    location: "Auckland, New Zealand",
    description: "Designed and implemented new components using React, TypeScript, and CSS. Implemented functionality using ASP.NET, .NET Core, and MS-SQL.",
    highlights: ["React + TypeScript components", "ASP.NET Core development", "Unit testing"],
  },
  {
    company: "Absolute Analytics",
    role: "IT Intern",
    period: "July 2017 - December 2017",
    totalDuration: "6 months",
    location: "Auckland, New Zealand",
    description: "Developed a small app using ReactJS, JavaScript, HTML5, and CSS3. Integrated Google API to fetch and display data from accounts.",
    highlights: ["ReactJS development", "Google API integration", "Agile methodology"],
  },
  {
    company: "Experieco",
    role: "Intern",
    period: "February 2015 - July 2015",
    totalDuration: "6 months",
    location: "Auckland, New Zealand",
    description: "Designed web pages with user experience in mind. Developed components using C#, MVC and AngularJS.",
    highlights: ["AngularJS development", "C# MVC", "Object-oriented programming"],
  },
  {
    company: "iQAdemy",
    role: "Junior Tester",
    period: "August 2015",
    totalDuration: "1 month",
    location: "Wellington, New Zealand",
    description: "Performed functional and non-functional testing on websites and software. Created test plans and test cases.",
    highlights: ["Functional testing", "Test case design", "JIRA", "Selenium"],
  },
];

function ExperienceCard({ exp }: { exp: (typeof EXPERIENCES)[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-lg border transition-all duration-300 cursor-pointer ${
        isOpen
          ? "bg-slate-800 border-blue-500/50"
          : "bg-slate-900/50 border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/50"
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
            <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded">
              {exp.totalDuration}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-500">{exp.period}</span>
            <svg
              className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <p className="text-blue-400 font-medium mb-2">{exp.role}</p>
        <p className="text-slate-400">{exp.description}</p>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6">
          {exp.progression && (
            <div className="mb-4 p-4 bg-slate-900 rounded-lg">
              <h4 className="text-sm font-semibold text-slate-300 mb-3">Career Progression</h4>
              <div className="space-y-2">
                {exp.progression.map((pos, idx) => (
                  <div key={idx} className="flex justify-between text-sm">
                    <span className="text-slate-400">{pos.role}</span>
                    <span className="text-slate-500">{pos.period}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="space-y-2">
            {exp.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">▹</span>
                <span className="text-sm text-slate-400">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="text-blue-400">03.</span>
          <span>Where I&apos;ve Worked</span>
          <div className="h-px bg-slate-700 flex-1 ml-4" />
        </h2>
        <div className="space-y-6">
          {EXPERIENCES.map((exp, index) => (
            <ExperienceCard key={index} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
