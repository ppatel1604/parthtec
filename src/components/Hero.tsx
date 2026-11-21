const IMPACT = [
  { value: "80/20", label: "Azure / AWS split of the Kubernetes platform I run, dev to regulated production" },
  { value: "30%", label: "less compute for the same workloads after the Istio ambient migration" },
  { value: "50%", label: "cost saving on AWS after moving node provisioning to Karpenter" },
  { value: "80%+", label: "of workloads moved to ambient mesh, with zero downtime" },
  { value: "2", label: "engineers I mentored 1-on-1, both promoted" },
];

export default function Hero() {
  return (
    <>
      <section className="hero" id="top">
        <div className="wrap">
          <p className="eyebrow">Senior Platform Engineer · Nintex · Auckland, NZ</p>
          <h1>I lead platform changes that make Kubernetes cheaper, safer and easier to run.</h1>
          <p className="lede">
            Eight years at Nintex, from software developer to senior platform engineer. I take ideas
            from proof of concept to production across Azure and AWS, and I bring the rest of the
            engineering org along with me. I run a multi-cloud Kubernetes platform, roughly 80% Azure
            and 20% AWS, from dev through regulated production, while retiring the legacy estate.
            I&apos;m the subject-matter expert for Istio, cluster networking and Kyverno.
          </p>
          <div className="actions">
            <a className="btn primary" href="#work">
              Read the case studies
            </a>
            <a className="btn ghost" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="impact" role="list" aria-label="Headline results">
          {IMPACT.map((item) => (
            <div role="listitem" key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
