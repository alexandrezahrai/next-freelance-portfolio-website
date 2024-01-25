import BadgeLight from "./partials/BadgeLight";
import {
  SiNextdotjs,
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiSanity,
  SiFigma,
} from "react-icons/si";

export default function Skills({ heading, copy }) {
  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <div className="grid place-content-center place-items-center">
            <BadgeLight label="Tools & Technologies" />
          </div>
          {/* Heading + Subheading */}
          <h2 className="balance-text text-step-4 leading-[1.25] tracking-[-0.017em] font-bold text-center font-interTight mb-4">
            {heading}
          </h2>
          <p className="text-step-0 text-center leading-[1.5] tracking-[-0.017em] text-gray-text">
            {copy}
          </p>
        </div>

        {/* Grid */}
        <div className="inline-flex justify-center items-center w-full flex-wrap md:flex-nowrap gap-4 mt-12">
          <div className="group p-5 chrome-border-gray border border-transparent rounded-lg">
            <span className="sr-only">Next.js</span>
            <SiNextdotjs
              className="text-[#A1A1AA] group-hover:text-off-black transition-colors duration-150 ease-in-out"
              size={30}
            />
          </div>
          <div className="group p-5 chrome-border-gray border border-transparent rounded-lg">
            <span className="sr-only">React.js</span>
            <SiReact
              className="text-[#A1A1AA] group-hover:text-[#63D8FD] transition-colors duration-150 ease-in-out"
              size={30}
            />
          </div>
          <div className="group p-5 chrome-border-gray border border-transparent rounded-lg">
            <span className="sr-only">Javascript</span>
            <SiJavascript
              className="text-[#A1A1AA] group-hover:text-[#FED602] transition-colors duration-150 ease-in-out"
              size={30}
            />
          </div>
          <div className="group p-5 chrome-border-gray border border-transparent rounded-lg">
            <span className="sr-only">Tailwind CSS</span>
            <SiTailwindcss
              className="text-[#A1A1AA] group-hover:text-[#4AB1B4] transition-colors duration-150 ease-in-out"
              size={30}
            />
          </div>
          <div className="group p-5 chrome-border-gray border border-transparent rounded-lg">
            <span className="sr-only">Figma</span>
            <SiFigma
              className="text-[#A1A1AA] group-hover:text-[#A259FF] transition-colors duration-150 ease-in-out"
              size={30}
            />
          </div>
          <div className="group p-5 chrome-border-gray border border-transparent rounded-lg">
            <span className="sr-only">Sanity CMS + Studio</span>
            <SiSanity
              className="text-[#A1A1AA] group-hover:text-[#EF3E2E] transition-colors duration-150 ease-in-out"
              size={30}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
