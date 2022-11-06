import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import SkillsSection from "./components/SkillsSection";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <SkillsSection />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
