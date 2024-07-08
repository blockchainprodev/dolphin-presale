import React from 'react';
import { Presale } from './presalePart';
import { UnleashSection } from './UnleashSection';
import { SupplySection } from './supplySection';
import { HowWorks } from './howWorks';
import { AboutUs } from './AboutUs';
import { OurTeam } from './OurTeam';
import { ComingSoon } from './comingSoon';
import { Tokenomics } from './Tokenomics';
import { Roadmap } from './Roadmap';
import { Faq } from './Faq';
import { Footer } from './footer';

export const Main = () => {
  return (
    <div>
      <div id="home">
        <Presale />
      </div>
      <div id="partnership">
        <UnleashSection />
      </div>
      <div id="sales">
        <SupplySection />
      </div>
      <div id="about">
        <HowWorks />
        <AboutUs />
      </div>
      <div id="team">
        <OurTeam />
      </div>
      <div id="buy">
        <ComingSoon />
      </div>
      <div id="tokenomics">
        <Tokenomics />
      </div>
      <div id="roadmap">
        <Roadmap />
      </div>
      <div id="faq">
        <Faq />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};
