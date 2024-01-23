import ButtonBlue from "./partials/ButtonBlue";

export default function HeroWithImage({ heading, fancyHeading, subheading }) {
  return (
    <section className="py-20 bg-[#0f172a] overflow-clip relative">
      <div className="absolute inset-0 blur-3xl">
        <img src="https://preview.cruip.com/quoty/images/bg-illustration.svg" alt="pattern" className="w-full h-full object-cover object-center" />
      </div>
      <div className="container relative">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-[40px] md:text-[52px] font-bold text-center tracking-[-0.017em] leading-tight font-interTight text-white">
            {heading + " "}
            <span className="relative inline-flex justify-center items-end z-10">
              {fancyHeading + "."}
              <svg
                className="absolute -z-10 w-[calc(100%+1rem)] fill-[#3b82f6]"
                xmlns="http://www.w3.org/2000/svg"
                width={120}
                height={10}
                viewBox="0 0 120 10"
                aria-hidden="true"
                preserveAspectRatio="none"
              >
                <path d="M118.273 6.09C79.243 4.558 40.297 5.459 1.305 9.034c-1.507.13-1.742-1.521-.199-1.81C39.81-.228 79.647-1.568 118.443 4.2c1.63.233 1.377 1.943-.17 1.89Z" />
              </svg>
            </span>
          </h1>

          <p className="text-[18px] md:text-[20px] text-center leading-[1.5] tracking-[-0.017em] text-gray-400 mt-4">
            {subheading}
          </p>

          <div className="md:grid place-content-center place-items-center mt-8">
            <ButtonBlue href="/" label="Learn More" />
          </div>
        </div>

        {/* <div className="md:px-6 pt-12 md:pt-16">
          <div className="relative bg-gradient-to-b from-[#8338ec] via-[#fb5607] to-white border border-white w-full lg:h-[620px] rounded-lg overflow-clip aspect-video shadow-custom">
            <span className="sr-only">hero image placeholder</span>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-white to-transparent to-40%"></div>
            <img
              src="https://images.unsplash.com/photo-1537884944318-390069bb8665?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="placeholder"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}
