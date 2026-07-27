import { AICommandCenter } from '@/components/sections/ai-command-center';
import { CaseStudyStory } from '@/components/sections/case-study-story';
import { DigitalLab } from '@/components/sections/digital-lab';
import { FinalConversion } from '@/components/sections/final-conversion';
import { GrowthOS } from '@/components/sections/growth-os';
import { HeroEngine } from '@/components/sections/hero-engine';
import { ServicesRebuild } from '@/components/sections/services-rebuild';
import { TrustExperience } from '@/components/sections/trust-experience';
import { WhyMagnify } from '@/components/sections/why-magnify';

export default function Home() {
  return (
    <main>
      <HeroEngine />
      <TrustExperience />
      <GrowthOS />
      <ServicesRebuild />
      <AICommandCenter />
      <CaseStudyStory />
      <DigitalLab />
      <WhyMagnify />
      <FinalConversion />
    </main>
  );
}
