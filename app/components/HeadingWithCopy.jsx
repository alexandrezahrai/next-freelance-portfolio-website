import BadgeLight from "./partials/BadgeLight";

export default function HeadingWithCopy({
  bgColor,
  badgeLabel,
  heading,
  copy,
}) {
  return (
    <section className={`${bgColor ? bgColor : "bg-gray-light"} py-20`}>
      <div className="container">
        <div className="max-w-2xl mx-auto">
          {/* Badge */}
          {badgeLabel ? <BadgeLight label={badgeLabel} /> : null}

          {/* Heading + Subheading */}
          {heading ? (
            <h2 className="balance-text text-step-4 leading-[1.25] tracking-[-0.017em] font-bold text-center font-interTight mb-4">
              {heading}
            </h2>
          ) : null}
          {copy ? (
            <p className="text-step-0 text-center leading-[1.5] tracking-[-0.017em] text-gray-text">
              {copy}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
