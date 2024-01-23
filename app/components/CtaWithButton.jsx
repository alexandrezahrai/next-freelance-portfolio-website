import ButtonBlack from "./partials/ButtonBlack";

export default function CtaWithButton({ heading, copy, href, btnLabel }) {
  return (
    <section className="bg-gradient-to-b from-white via-gray-light to-gray-medium py-20">
      <div className="container text-center">
        {/* Image */}
        <div className="w-20 h-20 p-2 bg-white shadow-lg rounded-xl inline-flex items-center justify-center relative mb-8">
          <img
            src="https://preview.cruip.com/gray/images/logo-02.png"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Heading + Subheading */}
          <h2 className="balance-text text-[32px] md:text-[40px] leading-[1.25] tracking-[-0.017em] font-bold text-center font-interTight mb-4">
            {heading}
          </h2>
          <p className="text-[18px] text-center leading-[1.5] tracking-[-0.017em] text-gray-text">
            {copy}
          </p>

          {/* Button */}
          <div className="md:grid place-content-center place-items-center mt-8">
            <ButtonBlack href={href} label={btnLabel} />
          </div>
        </div>
      </div>
    </section>
  );
}
