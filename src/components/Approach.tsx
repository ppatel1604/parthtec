const PRINCIPLES = [
  {
    title: "Prove it before I propose it",
    body: "Ambient mesh and Karpenter both started as proofs of concept I could demo, not slide decks.",
  },
  {
    title: "Migrate in slices, not big bangs",
    body: "Namespace-by-namespace rollouts with preflight checks: slower on paper, but zero downtime across 1,000+ workloads per cluster.",
  },
  {
    title: "Make teams self-sufficient",
    body: "I'd rather teach product teams to migrate their own services, and give them their own compliance dashboards, than become the bottleneck.",
  },
  {
    title: "Take the win where you can, fix the foundation where you can't",
    body: "Karpenter shipped on AWS first. On Azure, the blockers became the case for a cluster rebuild.",
  },
  {
    title: "Write it down",
    body: "Every PoC and proposal gets a design doc, so decisions outlive the meeting and the next engineer can pick them up.",
  },
  {
    title: "Grow the people around me",
    body: "Upskilling teammates during migrations, 1-on-1 mentoring that ended in two promotions, and hiring for the team.",
  },
];

export default function Approach() {
  return (
    <section className="block" id="approach" aria-labelledby="appr-h">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="appr-h">How I work</h2>
          <p>The habits behind the case studies above.</p>
        </div>
        <ol className="principles">
          {PRINCIPLES.map((p) => (
            <li key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
