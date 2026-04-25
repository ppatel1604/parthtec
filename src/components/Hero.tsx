import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-blue-400 font-medium mb-4 tracking-wide uppercase text-sm animate-fadeIn">
          Hi, my name is
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fadeInUp">
          Parth Patel.
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold text-slate-400 mb-8 animate-fadeInUp delay-100">
          I build reliable infrastructure.
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-fadeInUp delay-200">
          I&apos;m a Senior Platform Engineer at Nintex specializing in Kubernetes, service mesh, 
          and GitOps. Currently focused on Istio ambient mode migrations and cross-cloud 
          operations across Azure and GCP.
        </p>
        <div className="flex gap-4 justify-center animate-fadeInUp delay-300">
          <Link
            href="#projects"
            className="px-6 py-3 border-2 border-blue-500 text-blue-400 rounded-lg font-medium hover:bg-blue-500/10 transition-colors"
          >
            Check out my work
          </Link>
          <Link
            href="#contact"
            className="px-6 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-200 transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}