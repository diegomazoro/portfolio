import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="border-t border-[#27272a]" />
        <About />
        <div className="border-t border-[#27272a]" />
        <Projects />
        <div className="border-t border-[#27272a]" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
