import Card from "./partials/Card";
import ButtonBlack from "./partials/ButtonBlack";
import ButtonWhite from "./partials/ButtonWhite";
import BadgeLight from "./partials/BadgeLight";

export default function HeadingWithCards({ badgeLabel, array, bgColor }) {
  return (
    <section className={`${bgColor ? bgColor : "bg-gray-light"} py-20`}>
      <div className="container">
        <div className="max-w-2xl mx-auto mb-12">
          {/* Badge */}
          {badgeLabel ? <BadgeLight label={badgeLabel} /> : null}

          {/* Heading + Subheading */}
          <h2 className="balance-text text-[32px] md:text-[40px] leading-[1.25] tracking-[-0.017em] font-bold text-center font-interTight mb-4">
            Crafting digital excellence
          </h2>
          <p className="text-[18px] text-center leading-[1.5] tracking-[-0.017em] text-gray-text">
            AI reads and understands your designs, and with nothing more than a
            single line of feedback, perform complex actions autonomously.
          </p>
        </div>

        {/* Services */}
        {array ? (
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:grid grid-cols-3 gap-6">
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
            <ButtonBlack href="/" label="Request Demo" />
            <ButtonWhite href="/" label="Contact Me" />
          </div>
        </div>
      </div>
    </section>
  );
}
