import ButtonBlue from "./partials/ButtonBlue";

export default function CtaWithButton({ heading, copy, href, btnLabel }) {
  return (
    <section className="bg-transparent py-20 relative">
      <div className="container text-center">
        <div className="max-w-2xl mx-auto">
          {/* Heading + Subheading */}
          <h2 className="balance-text text-step-4 leading-[1.25] tracking-[-0.017em] font-semibold text-center font-mori text-transparent bg-clip-text bg-gradient-to-br from-[rgb(255,_255,_255)_30%] to-[rgba(255,_255,_255,_0.50)] mb-4">
            {heading}
          </h2>
          <p className="text-step-0 text-center leading-[1.625] tracking-[-0.017em] text-gray-400">
            {copy}
          </p>

          {/* Button */}
          {href ? (
            <div className="md:grid place-content-center place-items-center mt-8">
              <ButtonBlue href={href} label={btnLabel} />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
