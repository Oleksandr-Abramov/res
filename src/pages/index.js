import About from "@/components/About/About";
import Experience from "@/components/Experience/Experience";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Footer />
    </>
  );
}
