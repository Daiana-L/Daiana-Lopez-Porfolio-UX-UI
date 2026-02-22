import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Technologies } from "./components/Technologies";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#07091C",
        fontFamily: "inherit",
      }}
    >
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
