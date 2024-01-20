
import Header from "./components/Header";
import Hero from "./components/Hero";
import Vector from "./components/Vector";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Hero />
        <Vector/>
      </main>
    </>
  );
}
