import BadgeDark from "./partials/BadgeDark";
import Gradient from "@/public/media/svgs/Gradient";
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
    <section className="py-20 relative">
      <div className="absolute inset-0 blur-3xl">
        <Gradient
          fillColor="hsla(222, 92%, 29%, 0.7)"
          className="w-full h-full object-cover object-center absolute inset-0"
        />
      </div>
      <div className="container relative">
        <div className="max-w-2xl mx-auto">
          <div className="grid place-content-center place-items-center">
            <BadgeDark label="Tools & Technologies" />
          </div>
          {/* Heading + Subheading */}
          <h2 className="balance-text text-step-4 leading-[1.25] tracking-[-0.017em] font-semibold text-center font-mori text-transparent bg-clip-text bg-gradient-to-br from-[rgb(255,_255,_255)_30%] to-[rgba(255,_255,_255,_0.50)] mb-4">
            {heading}
          </h2>
          <p className="text-step-0 text-center leading-[1.625] tracking-[-0.017em] text-gray-400">
            {copy}
          </p>
        </div>

        {/* Grid */}
        <div className="inline-flex justify-center items-center w-full flex-wrap md:flex-nowrap gap-2 mt-12">
          <div className="group p-5 bg-[hsl(231,47%,3%)] border border-white/10 rounded-2xl">
            <span className="sr-only">Next.js</span>
            <SiNextdotjs
              className="text-[#A1A1AA] group-hover:text-gray-100 transition-colors duration-150 ease-in-out"
              size={30}
            />
          </div>
          <div className="group p-5 bg-[hsl(231,47%,3%)] border border-white/10 rounded-2xl">
            <span className="sr-only">React.js</span>
            <SiReact
              className="text-[#A1A1AA] group-hover:text-[#63D8FD] transition-colors duration-150 ease-in-out"
              size={30}
            />
          </div>
          <div className="group p-5 bg-[hsl(231,47%,3%)] border border-white/10 rounded-2xl">
            <span className="sr-only">Javascript</span>
            <SiJavascript
              className="text-[#A1A1AA] group-hover:text-[#FED602] transition-colors duration-150 ease-in-out"
              size={30}
            />
          </div>
          <div className="group p-5 bg-[hsl(231,47%,3%)] border border-white/10 rounded-2xl">
            <span className="sr-only">Tailwind CSS</span>
            <SiTailwindcss
              className="text-[#A1A1AA] group-hover:text-[#4AB1B4] transition-colors duration-150 ease-in-out"
              size={30}
            />
          </div>
          <div className="group p-5 bg-[hsl(231,47%,3%)] border border-white/10 rounded-2xl">
            <span className="sr-only">Figma</span>
            <SiFigma
              className="text-[#A1A1AA] group-hover:text-[#A259FF] transition-colors duration-150 ease-in-out"
              size={30}
            />
          </div>
          <div className="group p-5 bg-[hsl(231,47%,3%)] border border-white/10 rounded-2xl">
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
