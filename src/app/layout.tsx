import type { Metadata } from "next";
// Fonts are self-hosted from npm so the build never has to download them
// from Google Fonts (that download failed intermittently on Cloudflare).
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parth Patel — Senior Platform Engineer",
  description:
    "Senior Platform Engineer in Auckland. Led an Istio ambient mesh migration that cut compute 30%, drove Karpenter adoption for 50% cost savings on AWS, and owns Kubernetes policy with Kyverno.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
