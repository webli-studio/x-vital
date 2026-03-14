import Hero from "./heroSections/hero";
import ProblemSection from "./heroSections/problemSection.js";
import ProtocolSection from "./heroSections/protocolSection.js";
import TimelineSection from "./heroSections/timelineSection.js";
import ProgramsSection from "./heroSections/programsSection.js";
import LifestyleGallery from "./heroSections/lifestyleGallery.js";
import ExpertSection from "./heroSections/expertSection.js";
import ConsultationSection from "./heroSections/consultationSection.js";
import SupplementsSection from "./heroSections/supplementsSection.js";
import FinalCTA from "./heroSections/FinalCTA.js";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ProtocolSection />
      <TimelineSection />
      <ProgramsSection />
      <LifestyleGallery />
      <ExpertSection />
      <ConsultationSection />
      <SupplementsSection />
      <FinalCTA />
    </>
  );
}

