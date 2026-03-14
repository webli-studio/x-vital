import Hero from "./heroSections/hero";
import ProblemSection from "./heroSections/problemSection.js";
import ProtocolSection from "./heroSections/protocolSection.js";
import TimelineSection from "./heroSections/timelineSection.js";
import ProgramsSection from "./heroSections/programsSection.js";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ProtocolSection />
      <TimelineSection />
      <ProgramsSection />
    </>
  );
}

