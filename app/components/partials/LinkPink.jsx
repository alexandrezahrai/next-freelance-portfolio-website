import Link from "next/link";

export default function LinkPink({ href, label }) {
  return (
    <Link
      href={href}
      className="relative font-medium transition-colors duration-200 ease-[cubic-bezier(0.19,_1,_0.22,_1)] hover:text-bubblegum before:absolute before:content-[''] before:-bottom-[0.1rem] before:block before:w-full before:h-px before:bg-bubblegum before:transition-all before:duration-200 before:ease-[cubic-bezier(0.19,_1,_0.22,_1)] after:absolute after:content-[''] after:-bottom-[0.1rem] after:block after:w-full after:h-px after:bg-bubblegum after:transition-all after:duration-200 after:ease-[cubic-bezier(0.19,_1,_0.22,_1)] before:scale-x-0 before:origin-left after:origin-right after:delay-200 hover:before:scale-x-100 hover:before:delay-200 hover:after:scale-x-0 hover:after:delay-0"
    >
      {label}
    </Link>
  );
}
