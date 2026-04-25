export default function About() {
  return (
    <section id="about" className="min-h-screen py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
          <span className="text-blue-400">01.</span>
          <span>About Me</span>
          <div className="h-px bg-slate-700 flex-1 ml-4" />
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 text-slate-400 leading-relaxed space-y-4">
            <p>
              Hello! I&apos;m Parth, a Senior Platform Engineer based in Auckland, New Zealand, 
              with a passion for building scalable, reliable infrastructure.
            </p>
            <p>
              Currently working at <span className="text-blue-400">Nintex</span>, 
              where I focus on service mesh architecture, GitOps, and cross-cloud platform operations.
            </p>
            <p>
              When I&apos;m not building infrastructure, I&apos;m a proud dad to a 4-week-old baby girl. 
              I love learning and trying new things, contributing to open source projects, and traveling 
              to explore new places.
            </p>
            <p>
              My technical focus includes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              <li>Service mesh architecture (Istio sidecar to ambient mode migrations)</li>
              <li>Network policy design with Cilium for mesh-aware workloads</li>
              <li>GitOps with ArgoCD & app-of-apps patterns with Helm</li>
              <li>Ingress and SSO with OAuth2-Proxy + Microsoft Entra ID</li>
              <li>Cross-cloud platform operations across Azure and GCP</li>
              <li>PowerShell and .NET automation</li>
            </ul>
            <p className="mt-6">
              <span className="text-blue-400">Favorite tool:</span> k9s &mdash; the terminal UI that sits on top of your 
              kubeconfig.
            </p>
          </div>
          <div className="md:col-span-1 flex justify-center">
            <div className="w-48 h-48 rounded-lg bg-slate-900 border-2 border-slate-700 p-2">
              <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-md flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}