import BadgeDark from "./partials/BadgeDark";

export default function HeadingWithCopy({
  bgColor,
  badgeLabel,
  heading,
  copy,
}) {
  return (
    <section
      className={`${bgColor ? bgColor : "bg-gray-light"} py-20 relative`}
    >
      <div className="container relative">
        <div className="max-w-2xl mx-auto">
          {/* Badge */}
          {badgeLabel ? <BadgeDark label={badgeLabel} /> : null}

          {/* Heading + Subheading */}
          {heading ? (
            <h2 className="balance-text text-step-4 leading-[1.25] tracking-[-0.017em] font-semibold text-center font-mori text-transparent bg-clip-text bg-gradient-to-br from-[rgb(255,_255,_255)_30%] to-[rgba(255,_255,_255,_0.50)] mb-4">
              {heading}
            </h2>
          ) : null}
          {copy ? (
            <p className="text-step-0 text-center leading-[1.625] tracking-[-0.017em] text-gray-400">
              {copy}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
