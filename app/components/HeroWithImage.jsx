import Image from "next/image";
import Underline from "@/public/media/svgs/Underline";
import ButtonBlue from "./partials/ButtonBlue";
import Abstract from "@/public/media/svgs/Abstract";
import Gradient from "@/public/media/svgs/Gradient";

export default function HeroWithImage({
  heading,
  fancyHeading,
  headingCont,
  subheading,
  buttonLink,
  buttonLabel,
}) {
  return (
    // bg-[#0f172a]
    <section className="bg-transparent relative">
      {/* <div className="absolute inset-0 blur-3xl">
        <Abstract
          fillColor="#063090"
          className="w-full h-full object-cover object-center absolute inset-0"
        />
        <Gradient
          fillColor="hsla(222, 92%, 59%, 0.97)"
          className="w-full h-full object-cover object-center absolute inset-0"
        />
      </div> */}
      <div className="container relative pb-20 pt-[calc(5rem_+_88px)] lg:pt-[calc(5rem_+_104px)]">
        <div className="max-w-2xl mx-auto">
          {heading ? (
            <h1 className="text-step-5 font-semibold text-center tracking-[-0.017em] leading-tight font-mori text-transparent bg-clip-text bg-gradient-to-br from-[rgb(255,_255,_255)_30%] to-[hsla(221,100%,75%,1)]">
              {heading + " "}
              {fancyHeading ? (
                <div className="relative inline-flex justify-center items-end z-10">
                  <span className="z-10 bg-gradient-to-br from-[rgb(255,_255,_255)_30%] to-[hsla(221,100%,75%,1)] bg-clip-text">
                    {fancyHeading}
                  </span>
                  <Underline
                    className="absolute bottom-0 !-z-10 w-[calc(100%+1rem)]"
                    fillColor="#004fff"
                  />
                </div>
              ) : null}
              {headingCont ? " " + headingCont : null}
            </h1>
          ) : null}

          {subheading ? (
            <p className="text-step-1 text-center leading-[1.75] tracking-[-0.017em] text-gray-400 mt-6">
              {subheading}
            </p>
          ) : null}

          {buttonLink ? (
            <div className="md:grid place-content-center place-items-center mt-8">
              <ButtonBlue href={buttonLink} label={buttonLabel} />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
