import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/lang/Nav";
import { Hero } from "@/components/lang/Hero";
import { TrustBar } from "@/components/lang/TrustBar";
import { Pillars } from "@/components/lang/Pillars";
import { Specialties } from "@/components/lang/Specialties";
import { CaseStudies } from "@/components/lang/CaseStudies";
import { QuoteForm } from "@/components/lang/QuoteForm";
import { Footer } from "@/components/lang/Footer";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="relative w-full max-w-full min-h-screen overflow-x-hidden bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Pillars />
        <Specialties />
        <CaseStudies />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}
