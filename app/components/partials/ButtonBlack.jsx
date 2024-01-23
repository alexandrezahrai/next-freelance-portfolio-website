import Link from "next/link";

export default function ButtonBlack({ href, target, label }) {
  return (
    <Link
      href={href}
      target={target}
      className="px-4 py-2.5 bg-gradient-to-tr from-[#56565e] to-off-black text-white rounded-md w-full md:w-fit inline-flex items-center justify-center flex-nowrap text-[14px] leading-normal tracking-normal font-medium border border-transparent shadow transition-all duration-150 ease-in hover:opacity-85"
    >
      {label}
    </Link>
  );
}
