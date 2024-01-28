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
        heading="Style"
        fancyHeading="guide"
        subheading={`Odio tempor orci dapibus ultrices in iaculis nunc. Posuere morbi leo urna molestie at elementum.`}
      />

      <section className="relative py-20 bg-transparent text-gray-100">
        <div className="container">
          <BadgeDark label="Colors" />
          <div className="flex flex-col md:grid grid-cols-4 gap-4 mb-12">
            <div className="flex flex-col justify-center items-center rounded-2xl overflow-clip min-h-[150px] bg-blue-very-dark border border-white/10">
              <p>Blue Very Dark</p>
              <p className="text-[14px] leading-[1.625] text-gray-400">
                hsla(223, 49%, 8%, 1)
              </p>
            </div>
            <div className="flex flex-col justify-center items-center rounded-2xl overflow-clip min-h-[150px] bg-off-black border border-white/10">
              <p>Off Black</p>
              <p className="text-[14px] leading-[1.625] text-gray-400">
                hsla(240, 6%, 10%, 1)
              </p>
            </div>
            <div className="flex flex-col justify-center items-center rounded-2xl overflow-clip min-h-[150px] bg-blue-primary border border-white/10">
              <p>Blue Primary</p>
              <p className="text-[14px] leading-[1.625] text-gray-200">
                hsla(221, 100%, 50%, 1)
              </p>
            </div>
            <div className="flex flex-col justify-center items-center rounded-2xl overflow-clip min-h-[150px] bg-gray-light text-blue-very-dark border border-white/10">
              <p>Gray Light</p>
              <p className="text-[14px] leading-[1.625] text-gray-500">
                hsla(0, 0%, 98%, 1)
              </p>
            </div>
          </div>
          <BadgeDark label="Heading-1" />
          <h1 className="text-step-5 font-semibold tracking-[-0.017em] leading-tight font-mori text-transparent bg-clip-text bg-gradient-to-br from-[rgb(255,_255,_255)_30%] to-[rgba(255,_255,_255,_0.50)] mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <BadgeDark label="Heading-2" />
          <h2 className="text-step-4 leading-[1.25] tracking-[-0.017em] font-semibold font-mori text-transparent bg-clip-text bg-gradient-to-br from-[rgb(255,_255,_255)_30%] to-[rgba(255,_255,_255,_0.50)] mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <BadgeDark label="Heading-3" />
          <h3 className="text-step-3 leading-[1.25] tracking-[-0.017em] font-semibold font-mori text-transparent bg-clip-text bg-gradient-to-br from-[rgb(255,_255,_255)_30%] to-[rgba(255,_255,_255,_0.50)] mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h3>
          <BadgeDark label="Heading-4" />
          <h4 className="text-step-2 leading-[1.25] tracking-[-0.017em] font-semibold font-mori text-transparent bg-clip-text bg-gradient-to-br from-[rgb(255,_255,_255)_30%] to-[rgba(255,_255,_255,_0.50)] mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h4>
          <BadgeDark label="Body-L" />
          <p className="text-step-1 leading-[1.75] tracking-[-0.017em] text-gray-400 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <BadgeDark label="Body-M" />
          <p className="text-step-0 leading-[1.625] tracking-[-0.017em] text-gray-400 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <BadgeDark label="Body-S" />
          <p className="text-[14px] leading-[1.625] text-gray-400 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
          <BadgeDark label="Links" />
          <div className="text-[14px] leading-[1.625] p-8 bg-gray-light text-off-black rounded-2xl mb-8">
            <LinkBlue href="/style-guide" label="Link blue" />
          </div>
          <div className="text-[14px] leading-[1.625] p-8 mb-8">
            <LinkLight href="/style-guide" label="Link light" />
          </div>
        </div>
      </section>
    </main>
  );
}
