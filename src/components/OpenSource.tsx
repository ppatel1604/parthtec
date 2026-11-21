type Contribution = {
  title: string;
  repo: string;
  status: "open" | "merged";
  url: string;
  date: string;
  docs?: boolean;
};

// Keep `status` and `date` in sync with the real PR state on GitHub (see AGENTS.md).
const OSS_CONTRIBUTIONS: Contribution[] = [
  {
    title: "Add Azure Key Vault contentType support to PushSecret",
    repo: "external-secrets/external-secrets",
    status: "merged",
    url: "https://github.com/external-secrets/external-secrets/pull/6249",
    date: "2026-04-26",
  },
  {
    title: "Hide the Scarf tracking pixel to remove page whitespace",
    repo: "external-secrets/external-secrets",
    status: "merged",
    url: "https://github.com/external-secrets/external-secrets/pull/6209",
    date: "2026-04-12",
    docs: true,
  },
  {
    title: "Add automountServiceAccountToken parameter to the Collector chart",
    repo: "open-telemetry/opentelemetry-helm-charts",
    status: "merged",
    url: "https://github.com/open-telemetry/opentelemetry-helm-charts/pull/1707",
    date: "2025-06-06",
  },
  {
    title: "Fix the docs nav bar and broken links",
    repo: "external-secrets/external-secrets",
    status: "merged",
    url: "https://github.com/external-secrets/external-secrets/pull/3445",
    date: "2024-05-03",
    docs: true,
  },
  {
    title: "Implement updatePolicy: IfNotExists for the AWS Secret Store",
    repo: "external-secrets/external-secrets",
    status: "merged",
    url: "https://github.com/external-secrets/external-secrets/pull/3438",
    date: "2024-04-30",
  },
  {
    title: "Fix invalid YAML from the Azure Container Registry generator",
    repo: "external-secrets/external-secrets",
    status: "merged",
    url: "https://github.com/external-secrets/external-secrets/pull/3414",
    date: "2024-04-25",
  },
  {
    title: "Set the ready condition earlier so reconciliation starts faster",
    repo: "external-secrets/external-secrets",
    status: "merged",
    url: "https://github.com/external-secrets/external-secrets/pull/3077",
    date: "2024-01-25",
  },
  {
    title: "Fix repository collaborators when the repo name contains the org name",
    repo: "integrations/terraform-provider-github",
    status: "merged",
    url: "https://github.com/integrations/terraform-provider-github/pull/2013",
    date: "2023-11-11",
  },
  {
    title: "Check API versions for ServiceMonitor in the Helm chart",
    repo: "external-secrets/external-secrets",
    status: "merged",
    url: "https://github.com/external-secrets/external-secrets/pull/2683",
    date: "2023-09-08",
  },
  {
    title: "Use labels instead of selectorLabels",
    repo: "external-secrets/external-secrets",
    status: "merged",
    url: "https://github.com/external-secrets/external-secrets/pull/2672",
    date: "2023-09-01",
  },
];

function formatMonth(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

function prNumber(url: string) {
  return url.split("/").pop();
}

export default function OpenSource() {
  const mergedCount = OSS_CONTRIBUTIONS.filter((c) => c.status === "merged").length;
  const main = OSS_CONTRIBUTIONS.filter((c) => !c.docs);
  const docs = OSS_CONTRIBUTIONS.filter((c) => c.docs);

  return (
    <section className="block" id="oss" aria-labelledby="oss-h">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="oss-h">Open source</h2>
          <p>
            {mergedCount} merged pull requests across External Secrets Operator, the OpenTelemetry
            Helm charts and the Terraform GitHub provider, 2023–2026.
          </p>
        </div>
        <ul className="oss-list">
          {main.map((c) => (
            <li key={c.url}>
              <a href={c.url}>
                {c.title}
                {c.status === "open" ? " (open)" : ""}
              </a>
              <span className="date">{formatMonth(c.date)}</span>
              <span className="repo">{c.repo.split("/")[1]}</span>
            </li>
          ))}
        </ul>
        {docs.length > 0 && (
          <p className="oss-note">
            Plus {docs.length === 2 ? "two" : docs.length} documentation fixes to external-secrets (
            {docs.map((c, i) => (
              <span key={c.url}>
                {i > 0 && ", "}
                <a href={c.url}>#{prNumber(c.url)}</a>
              </span>
            ))}
            ).
          </p>
        )}
      </div>
    </section>
  );
}
