import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";

export default function ButtonBlue({ href, target, label }) {
  return (
    <Link
      href={href}
      target={target}
      className="flex justify-center items-center p-1 border border-[hsl(221,_100%,_50%,0.5)] rounded-full w-full md:w-fit mx-auto md:ml-0"
    >
      <span className="pl-5 pr-3 py-2.5 bg-[hsl(221,_100%,_50%)] text-gray-100 rounded-full w-full md:w-fit inline-flex items-center justify-center flex-nowrap gap-1 text-[16px] leading-normal tracking-normal font-medium border border-transparent shadow transition-all duration-150 ease-in hover:opacity-85">
        {label}
        <HiChevronRight size={16} />
      </span>
    </Link>
  );
}
