import About from "./components/About";
import ContainerImg from "./components/ContainerImg";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Kitchen from "./components/Kitchen";
import Reservation from "./components/Reservation";
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
        <Events />
        <Reservation />
      </main>
       {/* <footer>
        <Footer /> 
      </footer>  */}
    </>
  );
}
