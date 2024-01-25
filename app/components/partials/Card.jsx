import { RiArrowRightUpLine } from "react-icons/ri";

export default function Card({ heading, copy, bgColor, enableMotion, showArrow }) {
  return (
    <div
      className={`${
        bgColor ? bgColor : "bg-transparent"
      } ${enableMotion === true ? "hover:rotate-1" : ""} px-4 py-5 border border-transparent chrome-border rounded shadow transition-all duration-150 ease-in`}
    >
      <div className="flex mb-1 justify-between items-center w-full">
        <div className="text-step-0 font-semibold font-interTight">{heading}</div>
        <RiArrowRightUpLine
          size={20}
          className={`${showArrow !== false ? "" : "hidden"} text-gray-text`}
        />
      </div>
      <p className="text-[15px] leading-[1.5715] text-gray-text">{copy}</p>
    </div>
  );
}
