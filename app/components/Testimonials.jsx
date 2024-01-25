import BadgeDark from "./partials/BadgeDark";
import Card from "./partials/Card";

export default function Testimonials({ array }) {
  return (
    <section className="bg-[#0f172a] text-gray-medium py-20 overflow-clip relative">
      <div className="absolute inset-0 blur-3xl">
        <img
          src="https://preview.cruip.com/quoty/images/bg-illustration.svg"
          alt="pattern"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="container relative">
        <div className="max-w-2xl mx-auto">
          <div className="grid place-content-center place-items-center">
            <BadgeDark label="Testimonials" />
          </div>
          <h2 className="balance-text text-step-4 leading-[1.25] tracking-[-0.017em] font-bold text-center font-interTight">
            Client chronicles: reviews and success stories
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="flex flex-col lg:grid grid-cols-3 gap-6 mt-12">
          {array.map((item, index) => {
            return (
              <Card
                key={index}
                bgColor="medium-chrome-border hover:special-border-dark"
                heading={item.name}
                copy={item.text}
                enableMotion={true}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
