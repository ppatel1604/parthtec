const ITEMS = [
  {
    big: "2 / 2",
    title: "Mentoring",
    body: "Mentored two engineers 1-on-1. Both were promoted to intermediate platform engineer and are still going strong.",
  },
  {
    big: "4 / 5",
    title: "Hiring",
    body: "Of the five candidates I've interviewed, four were hired: two joined my team and two joined other teams.",
  },
  {
    big: "SME",
    title: "Go-to person",
    body: "The subject-matter expert for Istio, cluster networking and Kyverno across the platform org.",
  },
  {
    big: "Docs",
    title: "Design docs",
    body: "Every PoC and proposal I run is written up, including Istio mesh management, the ambient migration, service resiliency and failover, and Kyverno.",
  },
];

export default function Leadership() {
  return (
    <section className="block" id="leadership" aria-labelledby="lead-h">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="lead-h">Beyond the code</h2>
          <p>The part of the job that doesn&apos;t show up in a pull request.</p>
        </div>
        <div className="lead-grid">
          {ITEMS.map((item) => (
            <div className="card" key={item.title}>
              <div className="big">{item.big}</div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
