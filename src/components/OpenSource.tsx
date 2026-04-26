"use client";

import { useState } from "react";

const OSS_CONTRIBUTIONS = [
  {
    title: "feat(azure): add contentType support for PushSecret",
    repo: "external-secrets/external-secrets",
    description: "Added contentType support for Azure Key Vault PushSecret metadata. Allows users to set Azure secret ContentType without parse errors.",
    tech: ["Go", "Kubernetes", "Azure"],
    status: "open",
    url: "https://github.com/external-secrets/external-secrets/pull/6249",
    date: "2026-04-20",
  },
  {
    title: "fix(docs): hide Scarf tracking pixel to remove page whitespace",
    repo: "external-secrets/external-secrets",
    description: "Hidden the Scarf tracking pixel from docs to fix unwanted whitespace at the bottom of pages.",
    tech: ["Docs", "HTML"],
    status: "merged",
    url: "https://github.com/external-secrets/external-secrets/pull/6209",
    date: "2026-04-12",
  },
  {
    title: "feat(opentelemetry-collector): add automountServiceAccountToken param for sa",
    repo: "open-telemetry/opentelemetry-helm-charts",
    description: "Added automountServiceAccountToken parameter to OpenTelemetry Collector Helm chart for service account configuration.",
    tech: ["Helm", "Kubernetes", "OpenTelemetry"],
    status: "merged",
    url: "https://github.com/open-telemetry/opentelemetry-helm-charts/pull/1707",
    date: "2025-06-06",
  },
  {
    title: "Fixed docs nav bar and a couple of broken links",
    repo: "external-secrets/external-secrets",
    description: "Fixed documentation navigation bar and resolved broken links in the docs.",
    tech: ["Docs", "HTML"],
    status: "merged",
    url: "https://github.com/external-secrets/external-secrets/pull/3445",
    date: "2024-05-03",
  },
  {
    title: "Implemented `updatePolicy: IfNotExists` for AWS Secret Store",
    repo: "external-secrets/external-secrets",
    description: "Added IfNotExists policy update strategy for AWS Secret Store, allowing conditional secret store creation.",
    tech: ["Go", "AWS", "Kubernetes"],
    status: "merged",
    url: "https://github.com/external-secrets/external-secrets/pull/3438",
    date: "2024-04-30",
  },
  {
    title: "Fix Azure Container Registry Generator invalid YAML",
    repo: "external-secrets/external-secrets",
    description: "Fixed Azure ACR Generator to produce valid YAML output, fixing interpolation issues.",
    tech: ["Go", "Azure", "YAML"],
    status: "merged",
    url: "https://github.com/external-secrets/external-secrets/pull/3414",
    date: "2024-04-25",
  },
  {
    title: "feat/ready condition early",
    repo: "external-secrets/external-secrets",
    description: "Implemented early ready condition for External Secrets, improving reconciliation startup time.",
    tech: ["Go", "Kubernetes"],
    status: "merged",
    url: "https://github.com/external-secrets/external-secrets/pull/3077",
    date: "2024-01-25",
  },
  {
    title: "Fix: add GitHub repository collaborators when repository name contains the org name",
    repo: "integrations/terraform-provider-github",
    description: "Fixed Terraform provider to properly handle GitHub repository collaborators when repository name contains the organization name.",
    tech: ["Go", "Terraform", "GitHub API"],
    status: "merged",
    url: "https://github.com/integrations/terraform-provider-github/pull/2013",
    date: "2023-11-11",
  },
  {
    title: "feat: Updated ServiceMonitor check to include APIVersions check for helm charts",
    repo: "external-secrets/external-secrets",
    description: "Enhanced ServiceMonitor validation to include APIVersions check for Helm chart deployments.",
    tech: ["Go", "Kubernetes", "Helm"],
    status: "merged",
    url: "https://github.com/external-secrets/external-secrets/pull/2683",
    date: "2023-09-08",
  },
  {
    title: "Fix: Replaced selectorLabels with labels",
    repo: "external-secrets/external-secrets",
    description: "Fixed Kubernetes secret sync to use labels instead of selectorLabels for better compatibility.",
    tech: ["Go", "Kubernetes"],
    status: "merged",
    url: "https://github.com/external-secrets/external-secrets/pull/2672",
    date: "2023-09-01",
  },
];

function ContributionCard({ contribution }: { contribution: (typeof OSS_CONTRIBUTIONS)[0] }) {
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
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div
            className={`px-2 py-0.5 text-xs font-medium rounded ${
              contribution.status === "merged"
                ? "bg-green-500/20 text-green-400"
                : "bg-yellow-500/20 text-yellow-400"
            }`}
          >
            {contribution.status === "merged" ? "Merged" : "Open"}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500">{contribution.date}</span>
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
        <h3 className="text-lg font-semibold text-white line-clamp-2">{contribution.title}</h3>
        <p className="text-xs text-slate-500 mt-1">{contribution.repo}</p>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 pb-5">
          <p className="text-sm text-slate-400 mb-4">{contribution.description}</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {contribution.tech.map((tech) => (
              <span key={tech} className="text-xs text-slate-500">
                {tech}
              </span>
            ))}
          </div>
          <a
            href={contribution.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300"
          >
            View PR
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function OpenSource() {
  return (
    <section id="opensource" className="min-h-screen py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="text-blue-400">02.</span>
          <span>Open Source Contributions</span>
          <div className="h-px bg-slate-700 flex-1 ml-4" />
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {OSS_CONTRIBUTIONS.map((pr, index) => (
            <ContributionCard key={index} contribution={pr} />
          ))}
        </div>
      </div>
    </section>
  );
}