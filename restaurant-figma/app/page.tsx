
import About from "./components/About";
import ContainerImg from "./components/ContainerImg";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Kitchen from "./components/Kitchen";
import SectionModals from "./components/SectionModals";



export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <About />
        <Kitchen />
        <SectionModals />
        <ContainerImg />
        
      </main>
    </>
  );
}
