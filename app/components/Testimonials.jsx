import BadgeDark from "./partials/BadgeDark";
import Card from "./partials/Card";

export default function Testimonials({ array }) {
  return (
    <section className="bg-transparent py-20 overflow-clip relative">
      <div className="container relative">
        <div className="max-w-2xl mx-auto">
          <div className="grid place-content-center place-items-center">
            <BadgeDark label="Testimonials" />
          </div>
          <h2 className="balance-text text-step-4 leading-[1.25] tracking-[-0.017em] font-semibold text-center font-mori text-transparent bg-clip-text bg-gradient-to-br from-[rgb(255,_255,_255)_30%] to-[hsla(221,100%,75%,1)]">
            Client chronicles
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="flex flex-col lg:grid grid-cols-3 gap-2 lg:gap-4 mt-12">
          {array.map((item, index) => {
            return (
              <Card
                key={index}
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
