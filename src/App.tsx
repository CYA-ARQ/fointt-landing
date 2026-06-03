import FinalCTA from "./components/FinalCTA";
import FloatingSearchCloud from "./components/FloatingSearchCloud";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HostsSection from "./components/HostsSection";
import HostForm from "./components/HostForm";
import HowItWorks from "./components/HowItWorks";
import SolutionSection from "./components/SolutionSection";
import SpacesGrid from "./components/SpacesGrid";

export default function App() {
  return (
    <main className="min-h-full overflow-hidden bg-black text-white">
      <Hero />
      <SolutionSection />
      <SpacesGrid />
      <HowItWorks />
      <HostForm />
      <HostsSection />
      <FinalCTA />
      <Footer />
      <FloatingSearchCloud />
    </main>
  );
}
