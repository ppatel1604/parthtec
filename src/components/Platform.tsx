type Cloud = "az" | "aws";

const ENVIRONMENTS = [
  { name: "Dev", workload: "1 shared", split: "Azure" },
  { name: "Test", workload: "3 shared", split: "2 Azure · 1 AWS" },
  { name: "Performance", workload: "1 shared", split: "Azure" },
  { name: "Staging", workload: "2 shared", split: "1 Azure · 1 AWS" },
  { name: "Production", workload: "8 shared", split: "5 Azure · 3 AWS", prod: true },
  { name: "FedRAMP test", workload: "1 shared", split: "Azure" },
  { name: "FedRAMP production", workload: "1 shared", split: "Azure" },
];

function Chip({
  x,
  y,
  w,
  h,
  label,
  cloud,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  cloud: Cloud;
}) {
  // Text sits on the chip's horizontal centre, a fixed offset below its top edge.
  const textDy = h === 54 ? 39 : 36;
  return (
    <g>
      <rect className="chip" x={x} y={y} width={w} height={h} rx={8} />
      <circle className={cloud} cx={x + 12} cy={y + 13} r={4} />
      <text className="t-sm" x={x + w / 2} y={y + textDy} textAnchor="middle">
        {label}
      </text>
    </g>
  );
}

function HorizontalDiagram() {
  const azure = [0, 1, 2, 3, 4].map((i) => ({ x: 612 + i * 74, label: `aks-${i + 1}` }));
  const aws = [0, 1, 2].map((i) => ({ x: 612 + i * 74, label: `eks-${i + 1}` }));
  return (
    <svg className="h" viewBox="0 0 1000 400" role="img" aria-labelledby="topo-t topo-d">
      <title id="topo-t">Hub-and-spoke cluster layout</title>
      <desc id="topo-d">
        Git feeds a control cluster running ArgoCD and the Grafana stack. The control cluster syncs
        product workloads to shared clusters: in production, five on Azure and three on AWS.
      </desc>
      <defs>
        <marker id="ah" viewBox="0 0 10 10" refX={9} refY={5} markerWidth={8} markerHeight={8} orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="#7cc4ff" />
        </marker>
      </defs>

      <rect className="box" x={20} y={160} width={160} height={84} rx={12} />
      <text className="t-mono" x={40} y={188}>SOURCE</text>
      <text className="t-lg" x={40} y={214}>Git</text>
      <text className="t-sm" x={40} y={233}>Helm charts &amp; values</text>
      <path className="line" d="M180 202 H262" markerEnd="url(#ah)" />

      <rect className="hub" x={270} y={120} width={230} height={164} rx={14} />
      <text className="t-mono t-hub" x={292} y={150}>HUB · AZURE</text>
      <text className="t-lg" x={292} y={178}>Control cluster</text>
      <text className="t-sm" x={292} y={206}>ArgoCD (app-of-apps + Helm)</text>
      <text className="t-sm" x={292} y={228}>Full Grafana stack</text>
      <text className="t-sm" x={292} y={250}>1 per environment</text>

      <path className="line" d="M500 180 C 540 180, 540 110, 584 110" markerEnd="url(#ah)" />
      <path className="line" d="M500 226 C 540 226, 540 310, 584 310" markerEnd="url(#ah)" />
      <text className="lbl" x={512} y={206}>sync</text>

      <rect className="grp" x={590} y={30} width={390} height={160} rx={14} />
      <text className="t-md" x={612} y={62}>Azure · 5 shared clusters</text>
      {azure.map((c) => (
        <Chip key={c.label} x={c.x} y={92} w={62} h={54} label={c.label} cloud="az" />
      ))}

      <rect className="grp" x={590} y={230} width={390} height={150} rx={14} />
      <text className="t-md" x={612} y={262}>AWS · 3 shared clusters</text>
      {aws.map((c) => (
        <Chip key={c.label} x={c.x} y={290} w={62} h={54} label={c.label} cloud="aws" />
      ))}
    </svg>
  );
}

function VerticalDiagram() {
  const col = (i: number) => 36 + (i % 3) * 96;
  const azure = [0, 1, 2, 3, 4].map((i) => ({
    x: col(i),
    y: i < 3 ? 380 : 442,
    label: `aks-${i + 1}`,
  }));
  const aws = [0, 1, 2].map((i) => ({ x: col(i), y: 600, label: `eks-${i + 1}` }));
  return (
    <svg className="v" viewBox="0 0 340 700" role="img" aria-labelledby="topo-tv topo-dv">
      <title id="topo-tv">Hub-and-spoke cluster layout</title>
      <desc id="topo-dv">
        Git feeds a control cluster running ArgoCD and the Grafana stack, which syncs workloads to
        five Azure and three AWS shared clusters in production.
      </desc>
      <defs>
        <marker id="ahv" viewBox="0 0 10 10" refX={9} refY={5} markerWidth={8} markerHeight={8} orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="#7cc4ff" />
        </marker>
      </defs>

      <rect className="box" x={20} y={10} width={300} height={80} rx={12} />
      <text className="t-mono" x={40} y={36}>SOURCE</text>
      <text className="t-lg" x={40} y={62}>Git</text>
      <text className="t-sm" x={40} y={80}>Helm charts &amp; values</text>
      <path className="line" d="M170 90 V122" markerEnd="url(#ahv)" />

      <rect className="hub" x={20} y={130} width={300} height={150} rx={14} />
      <text className="t-mono t-hub" x={40} y={158}>HUB · AZURE</text>
      <text className="t-lg" x={40} y={186}>Control cluster</text>
      <text className="t-sm" x={40} y={212}>ArgoCD (app-of-apps + Helm)</text>
      <text className="t-sm" x={40} y={234}>Full Grafana stack</text>
      <text className="t-sm" x={40} y={256}>1 per environment</text>

      <path className="line" d="M170 280 V318" markerEnd="url(#ahv)" />
      <text className="lbl" x={182} y={304}>sync</text>

      <rect className="grp" x={20} y={326} width={300} height={200} rx={14} />
      <text className="t-md" x={40} y={358}>Azure · 5 shared</text>
      {azure.map((c) => (
        <Chip key={c.label} x={c.x} y={c.y} w={84} h={50} label={c.label} cloud="az" />
      ))}

      <rect className="grp" x={20} y={546} width={300} height={140} rx={14} />
      <text className="t-md" x={40} y={578}>AWS · 3 shared</text>
      {aws.map((c) => (
        <Chip key={c.label} x={c.x} y={c.y} w={84} h={50} label={c.label} cloud="aws" />
      ))}
    </svg>
  );
}

export default function Platform() {
  return (
    <section className="block" id="platform" aria-labelledby="plat-h">
      <div className="wrap">
        <div className="sec-head">
          <h2 id="plat-h">The platform I run</h2>
          <p>
            24 clusters across Azure and AWS in seven environments, in a hub-and-spoke layout that
            repeats in each one, FedRAMP included. About 10 legacy clusters are being retired
            alongside it.
          </p>
        </div>

        <figure className="topo">
          <HorizontalDiagram />
          <VerticalDiagram />
          <figcaption>
            Production shown. Every environment follows the same pattern: one control cluster, plus
            one to eight shared clusters for product workloads.
          </figcaption>
        </figure>

        <div className="plat">
          <div className="plat-cards">
            <div className="card">
              <div className="big">1 control cluster</div>
              <h3>per environment</h3>
              <p>
                Runs ArgoCD and the full Grafana stack, and manages every workload cluster in that
                environment.
              </p>
            </div>
            <div className="card">
              <div className="big">1 to 8 shared clusters</div>
              <h3>per environment</h3>
              <p>
                Where product teams&apos; workloads run, all delivered by ArgoCD. Production alone
                has eight: five on Azure, three on AWS.
              </p>
            </div>
          </div>

          <div className="envt-scroll">
            <table className="envt">
              <caption className="sr">Clusters per environment</caption>
              <thead>
                <tr>
                  <th scope="col">Environment</th>
                  <th scope="col">Control cluster</th>
                  <th scope="col">Workload clusters</th>
                  <th scope="col">Cloud split</th>
                </tr>
              </thead>
              <tbody>
                {ENVIRONMENTS.map((env) => (
                  <tr key={env.name} className={env.prod ? "prod" : undefined}>
                    <th scope="row">{env.name}</th>
                    <td>1</td>
                    <td>{env.workload}</td>
                    <td>{env.split}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
