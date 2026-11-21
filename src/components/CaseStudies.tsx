import type { ReactNode } from "react";

type CaseStudy = {
  id: string;
  num: string;
  title: string;
  role: string;
  tags: string;
  problem: ReactNode;
  did: ReactNode[];
  decision: ReactNode;
  results: { value: string; label: string }[];
};

const CASES: CaseStudy[] = [
  {
    id: "c1",
    num: "01",
    title: "Migrating Istio from sidecars to ambient mesh",
    role: "Technical lead",
    tags: "Istio · Kubernetes · AKS · EKS · PowerShell",
    problem:
      "Our sidecar-based Istio mesh was eating a large share of cluster resources. With more than 1,000 workloads in each cluster, every pod was paying for its own proxy.",
    did: [
      "Started researching ambient mode as soon as it reached beta: how it works, what it would save, where the risks were.",
      "Built a proof of concept, presented it to the team and wrote the migration proposal.",
      <>
        Built an{" "}
        <a href="https://github.com/ppatel1604/istio-ambient-preflight">ambient preflight validator</a>{" "}
        to check readiness before each move.
      </>,
      "Documented the process and upskilled teammates, who then helped drive the migration.",
    ],
    decision:
      "Migrate namespace by namespace, and teach product teams to move their own services, rather than run a central big-bang cutover. Teams could self-serve on their own schedule, and nothing went down.",
    results: [
      { value: "30%", label: "compute saved overall, same workloads" },
      { value: "80%+", label: "of workloads now on ambient" },
      { value: "0", label: "downtime during migration" },
    ],
  },
  {
    id: "c2",
    num: "02",
    title: "Karpenter, and the cluster rebuild it led to",
    role: "Proposed & led PoC",
    tags: "Karpenter · Node auto-provisioning · EKS · AKS",
    problem: "Static node pools meant we paid for capacity we weren't using.",
    did: [
      "Built the Karpenter proof of concept and proposed it for both clouds (node auto-provisioning on Azure).",
      "Moved AWS first, where the path was simplest, to prove the savings.",
      "On Azure, our cluster architecture blocked node auto-provisioning. I took that finding and turned it into the case for a full cluster rebuild.",
      "Proposed several design changes for the rebuild that were accepted, including moving the Kubernetes API server into its own subnet.",
    ],
    decision:
      "Don't force it where the architecture fights back. Take the win on AWS, then fix the foundation on Azure, so the rebuilt clusters can run thousands more workloads than today.",
    results: [
      { value: "50%", label: "cost saving on AWS after Karpenter" },
      { value: "30%", label: "lower running cost from the dedicated API-server subnet" },
      { value: "1,000s", label: "more workloads the rebuilt clusters are designed for" },
    ],
  },
  {
    id: "c3",
    num: "03",
    title: "Policy-as-code for every cluster with Kyverno",
    role: "Owner & SME",
    tags: "Kyverno · Policy Reporter · Prometheus · Grafana",
    problem:
      "Security best practice lived in docs and code reviews, so nothing stopped a workload from shipping without a securityContext or landing in the default namespace.",
    did: [
      "Introduced Kyverno and wrote the first set of policies, such as requiring securityContext and blocking workloads in the default namespace.",
      "Wrote the documentation so other engineers could add policies themselves. The policy set has grown well beyond that first set.",
      "Added Kyverno Policy Reporter to export metrics, which teams now use in their own dashboards to track violations and compliance.",
    ],
    decision:
      "Make compliance visible to the teams who own the workloads, not just to the platform team, so fixes happen where the code lives.",
    results: [
      { value: "Admission", label: "baseline security enforced before workloads run" },
      { value: "Self-serve", label: "compliance dashboards for product teams" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section className="block" id="work" aria-labelledby="work-h">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="work-h">Case studies</h2>
          <p>
            Three initiatives I proposed or led end to end: the problem, the call I made, and what
            changed.
          </p>
        </div>

        {CASES.map((c) => (
          <article className="case" aria-labelledby={c.id} key={c.id}>
            <div>
              <div className="case-num" aria-hidden="true">
                {c.num}
              </div>
              <h3 id={c.id}>{c.title}</h3>
              <span className="role">{c.role}</span>
              <div className="tags">{c.tags}</div>
            </div>
            <dl>
              <div>
                <dt>Problem</dt>
                <dd>{c.problem}</dd>
              </div>
              <div>
                <dt>What I did</dt>
                <dd>
                  <ul>
                    {c.did.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div>
                <dt>Key decision</dt>
                <dd>{c.decision}</dd>
              </div>
              <div>
                <dt>Results</dt>
                <dd>
                  <div className="results">
                    {c.results.map((r) => (
                      <div key={r.value}>
                        <b>{r.value}</b>
                        <small>{r.label}</small>
                      </div>
                    ))}
                  </div>
                </dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
