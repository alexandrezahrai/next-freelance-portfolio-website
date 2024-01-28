import { RiArrowRightUpLine } from "react-icons/ri";

export default function Card({
  heading,
  copy,
  bgColor,
  enableMotion,
  showArrow,
}) {
  return (
    <div
      className={`${bgColor ? bgColor : "bg-transparent"} ${
        enableMotion === true ? "hover:rotate-1" : ""
      } px-7 py-6 border border-white/10 rounded-3xl overflow-clip shadow transition-all duration-150 ease-in bg-[rgba(166,216,221,.02)] relative`}
    >
      <div className="flex mb-2 justify-between items-center w-full">
        <div className="text-step-0 font-semibold font-interTight text-gray-100">
          {heading}
        </div>
        <RiArrowRightUpLine
          size={20}
          className={`${showArrow !== false ? "" : "hidden"} text-gray-100`}
        />
      </div>
      <p className="text-[14px] leading-[1.625] text-gray-400 z-10 relative">
        {copy}
      </p>
      <div className="absolute left-0 right-0 bottom-0 w-full h-1/2 bg-gradient-to-b from-transparent to-40% to-[#F7F7F8] dark:to-[#04050B] z-0"></div>
    </div>
  );
}
