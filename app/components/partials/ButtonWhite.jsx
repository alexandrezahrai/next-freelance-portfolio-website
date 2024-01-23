import Link from "next/link";

export default function ButtonWhite({ href, target, label }) {
  return (
    <Link
      href={href}
      target={target}
      className="px-4 py-2.5 bg-white text-gray-text rounded-md w-full md:w-fit inline-flex items-center justify-center flex-nowrap text-[14px] leading-normal tracking-normal font-medium border border-transparent shadow transition-all duration-150 ease-in hover:text-off-black"
    >
      {label}
    </Link>
  );
}
