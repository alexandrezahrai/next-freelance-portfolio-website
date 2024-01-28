import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";

export default function ButtonBlack({ href, target, label }) {
  return (
    <Link
      href={href}
      target={target}
      className="px-5 py-2.5 bg-[hsl(231,47%,3%)] text-gray-100 rounded-full w-full md:w-fit inline-flex items-center justify-center flex-nowrap gap-1 text-[16px] leading-normal tracking-normal font-medium border border-transparent shadow transition-all duration-150 ease-in hover:opacity-85"
    >
      {label}
      <HiChevronRight size={16} />
    </Link>
  );
}
