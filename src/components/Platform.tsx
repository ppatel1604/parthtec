type Cloud = "az" | "aws";

// Illustrative only: the diagram shows the pattern, not the real cluster count.
const AZURE_CHIPS = ["aks-1", "aks-2", "aks-3", "aks-n"];
const AWS_CHIPS = ["eks-1", "eks-2", "eks-n"];

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
  return (
    <svg className="h" viewBox="0 0 1000 400" role="img" aria-labelledby="topo-t topo-d">
      <title id="topo-t">Hub-and-spoke cluster layout</title>
      <desc id="topo-d">
        Git feeds a control cluster running ArgoCD and the Grafana stack. The control cluster syncs
        product workloads to shared clusters on Azure and AWS.
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
      <text className="t-mono t-hub" x={292} y={150}>HUB</text>
      <text className="t-lg" x={292} y={178}>Control cluster</text>
      <text className="t-sm" x={292} y={206}>ArgoCD (app-of-apps + Helm)</text>
      <text className="t-sm" x={292} y={228}>Full Grafana stack</text>
      <text className="t-sm" x={292} y={250}>1 per environment</text>

      <path className="line" d="M500 180 C 540 180, 540 110, 584 110" markerEnd="url(#ah)" />
      <path className="line" d="M500 226 C 540 226, 540 310, 584 310" markerEnd="url(#ah)" />
      <text className="lbl" x={512} y={206}>sync</text>

      <rect className="grp" x={590} y={30} width={390} height={160} rx={14} />
      <text className="t-md" x={612} y={62}>Azure · shared clusters</text>
      {AZURE_CHIPS.map((label, i) => (
        <Chip key={label} x={612 + i * 74} y={92} w={62} h={54} label={label} cloud="az" />
      ))}

      <rect className="grp" x={590} y={230} width={390} height={150} rx={14} />
      <text className="t-md" x={612} y={262}>AWS · shared clusters</text>
      {AWS_CHIPS.map((label, i) => (
        <Chip key={label} x={612 + i * 74} y={290} w={62} h={54} label={label} cloud="aws" />
      ))}
    </svg>
  );
}

function VerticalDiagram() {
  const col = (i: number) => 36 + (i % 3) * 96;
  return (
    <svg className="v" viewBox="0 0 340 700" role="img" aria-labelledby="topo-tv topo-dv">
      <title id="topo-tv">Hub-and-spoke cluster layout</title>
      <desc id="topo-dv">
        Git feeds a control cluster running ArgoCD and the Grafana stack, which syncs workloads to
        shared clusters on Azure and AWS.
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
      <text className="t-mono t-hub" x={40} y={158}>HUB</text>
      <text className="t-lg" x={40} y={186}>Control cluster</text>
      <text className="t-sm" x={40} y={212}>ArgoCD (app-of-apps + Helm)</text>
      <text className="t-sm" x={40} y={234}>Full Grafana stack</text>
      <text className="t-sm" x={40} y={256}>1 per environment</text>

      <path className="line" d="M170 280 V318" markerEnd="url(#ahv)" />
      <text className="lbl" x={182} y={304}>sync</text>

      <rect className="grp" x={20} y={326} width={300} height={200} rx={14} />
      <text className="t-md" x={40} y={358}>Azure · shared clusters</text>
      {AZURE_CHIPS.map((label, i) => (
        <Chip key={label} x={col(i)} y={i < 3 ? 380 : 442} w={84} h={50} label={label} cloud="az" />
      ))}

      <rect className="grp" x={20} y={546} width={300} height={140} rx={14} />
      <text className="t-md" x={40} y={578}>AWS · shared clusters</text>
      {AWS_CHIPS.map((label, i) => (
        <Chip key={label} x={col(i)} y={600} w={84} h={50} label={label} cloud="aws" />
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
            A multi-cloud Kubernetes platform, roughly 80% Azure and 20% AWS, from dev through
            regulated production, in a hub-and-spoke layout that repeats in every environment. Alongside it, I&apos;m
            retiring the legacy estate it replaces.
          </p>
        </div>

        <figure className="topo">
          <HorizontalDiagram />
          <VerticalDiagram />
          <figcaption>
            The pattern, simplified. Every environment has one control cluster that manages a set of
            shared clusters for product workloads.
          </figcaption>
        </figure>

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
            <div className="big">Shared clusters</div>
            <h3>for product teams</h3>
            <p>
              Where product teams&apos; workloads run, spread across Azure and AWS and all delivered
              by ArgoCD.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
