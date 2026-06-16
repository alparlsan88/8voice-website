import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { WidgetShowcase } from "./components/WidgetShowcase";
import { HowItWorks } from "./components/HowItWorks";
import { Privacy } from "./components/Privacy";
import { Providers } from "./components/Providers";
import { TechStack } from "./components/TechStack";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Nav />
      <main>
        <Hero />
        <WidgetShowcase />
        <Features />
        <HowItWorks />
        <Privacy />
        <Providers />
        <TechStack />
      </main>
      <Footer />
    </div>
  );
}
