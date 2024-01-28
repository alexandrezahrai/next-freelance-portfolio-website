import Gradient from "@/public/media/svgs/Gradient";
import Abstract from "@/public/media/svgs/Abstract";
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
      <div className="absolute inset-0 blur-3xl">
        <Abstract
          fillColor="hsla(222, 92%, 29%, 0.8)"
          className="w-full h-full object-cover object-center absolute inset-0"
        />
        {/* <Gradient
          fillColor="hsla(222, 92%, 59%, 0.97)"
          className="w-full h-full object-cover object-center absolute inset-0"
        /> */}
      </div>

      {/* Hero Section */}
      {heroContent ? (
        <HeroWithImage
          heading={heroContent.heading}
          fancyHeading={heroContent.fancyHeading}
          headingCont={heroContent.headingCont}
          subheading={heroContent.copy}
          buttonLink="/contact"
          buttonLabel="Learn more"
        />
      ) : null}

      {/* Services Section */}
      {services ? (
        <HeadingWithCards
          array={services}
          bgColor="bg-transparent"
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
          bgColor="bg-transparent"
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
          href="/contact"
          btnLabel="Contact"
        />
      ) : null}
    </main>
  );
}
