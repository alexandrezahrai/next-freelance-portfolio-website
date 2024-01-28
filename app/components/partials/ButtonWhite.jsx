import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";

export default function ButtonWhite({ href, target, label }) {
  return (
    <Link
      href={href}
      target={target}
      className="px-5 py-2.5 bg-gray-100 text-gray-600 rounded-full w-full md:w-fit inline-flex items-center justify-center flex-nowrap gap-1 text-[16px] leading-normal tracking-normal font-medium border border-transparent shadow transition-all duration-150 ease-in hover:text-off-black"
    >
      {label}
      <HiChevronRight size={16} />
    </Link>
  );
}
