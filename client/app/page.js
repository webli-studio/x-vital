import Hero from "./heroSections/hero";
import ProblemSection from "./heroSections/problemSection";
import ProtocolSection from "./heroSections/protocolSection";
import TimelineSection from "./heroSections/timelineSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ProtocolSection />
      <TimelineSection />
    </>
  );
}

