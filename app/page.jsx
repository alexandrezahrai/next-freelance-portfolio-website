import HeadingWithCards from "./components/HeadingWithCards";
import HeroWithImage from "./components/HeroWithImage";
import Skills from "./components/Skills";
import HeadingWithCopy from "./components/HeadingWithCopy";
import Testimonials from "./components/Testimonials";
import CtaWithButton from "./components/CtaWithButton";
import { services } from "./content/Services";
import { heroContent } from "./content/heroContent";
import { testimonials } from "./content/testimonials";
import { aboutContent } from "./content/aboutContent";
import { skillsContent } from "./content/skillsContent";
import { footerCtaContent } from "./content/footerCtaContent";

export default function Home() {
  return (
    <main id="primary">
      
      {/* Hero Section */}
      {heroContent ? (
        <HeroWithImage
          heading={heroContent.heading}
          fancyHeading={heroContent.fancyHeading}
          subheading={heroContent.copy}
        />
      ) : null}

      {/* Services Section */}
      {services ? (
        <HeadingWithCards
          array={services}
          bgColor="bg-gray-light"
          badgeLabel="Services"
        />
      ) : null}

      {/* Skills Section */}
      {skillsContent ? (
        <Skills heading={skillsContent.heading} copy={skillsContent.copy} />
      ) : null}

      {/* About Section */}
      {aboutContent ? (
        <HeadingWithCopy
          badgeLabel="About"
          heading={aboutContent.heading}
          copy={aboutContent.copy}
        />
      ) : null}

      {/* Testimonials Section */}
      {testimonials ? <Testimonials array={testimonials} /> : null}

      {/* Footer CTA Section */}
      {footerCtaContent ? (
        <CtaWithButton
          heading={footerCtaContent.heading}
          copy={footerCtaContent.copy}
          href="/"
          btnLabel="Contact"
        />
      ) : null}

    </main>
  );
}
