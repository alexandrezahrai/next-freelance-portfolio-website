import Link from "next/link";
import HeroWithImage from "../components/HeroWithImage";
import Abstract from "@/public/media/svgs/Abstract";
import BadgeDark from "../components/partials/BadgeDark";
import LinkBlue from "../components/partials/LinkBlue";
import LinkLight from "../components/partials/LinkLight";

export default function Page() {
  return (
    <main id="primary">
      <div className="absolute inset-0 blur-3xl">
        <Abstract
          fillColor="hsla(222, 92%, 29%, 0.8)"
          className="w-full h-full object-cover object-center absolute inset-0"
        />
      </div>

      <HeroWithImage
        heading="Get in"
        fancyHeading="touch"
        subheading={`Get in touch with me for tailored web development solutions to elevate your online presence.`}
      />

      <section className="relative py-20 bg-transparent text-gray-100">
        <div className="container">The contact form goes here...</div>
      </section>
    </main>
  );
}
