import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Platform from "@/components/Platform";
import CaseStudies from "@/components/CaseStudies";
import Approach from "@/components/Approach";
import Leadership from "@/components/Leadership";
import OpenSource from "@/components/OpenSource";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Platform />
        <CaseStudies />
        <Approach />
        <Leadership />
        <OpenSource />
        <Experience />
      </main>
      <Contact />
    </>
  );
}
