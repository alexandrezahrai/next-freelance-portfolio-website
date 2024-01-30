import Card from "./partials/Card";
import ButtonBlack from "./partials/ButtonBlack";
import ButtonWhite from "./partials/ButtonWhite";
import BadgeDark from "./partials/BadgeDark";

export default function HeadingWithCards({ badgeLabel, array, bgColor }) {
  return (
    <section className={`${bgColor ? bgColor : "bg-gray-light"} py-20 relative`}>
      <div className="container">
        <div className="max-w-2xl mx-auto mb-12">
          {/* Badge */}
          {badgeLabel ? <BadgeDark label={badgeLabel} /> : null}

          {/* Heading + Subheading */}
          <h2 className="balance-text text-step-4 leading-[1.25] tracking-[-0.017em] font-semibold text-center font-mori text-transparent bg-clip-text bg-gradient-to-br from-[rgb(255,_255,_255)_30%] to-[rgba(255,_255,_255,_0.50)] mb-4">
            Crafting digital excellence
          </h2>
          <p className="text-step-0 text-center leading-[1.625] tracking-[-0.017em] text-gray-400">
            AI reads and understands your designs, and with nothing more than a
            single line of feedback, perform complex actions autonomously.
          </p>
        </div>

        {/* Services */}
        {array ? (
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:grid grid-cols-3 gap-2 lg:gap-4">
              {array.map((item) => {
                return (
                  <Card
                    key={item.name}
                    item={item}
                    heading={item.name}
                    copy={item.description}
                    showArrow={false}
                  />
                );
              })}
            </div>
          </div>
        ) : null}

        {/* Button */}
        <div className="md:grid place-content-center place-items-center mt-10">
          <div className="flex flex-col md:flex-row gap-4">
            <ButtonWhite href="/" label="Contact" />
            <ButtonBlack href="/" label="Request Demo" />
          </div>
        </div>
      </div>
    </section>
  );
}
