"use client";
import Link from "next/link";
import { Squeeze as Hamburger } from "hamburger-react";
import ButtonBlue from "./partials/ButtonBlue";
import Logo from "@/public/media/svgs/Logo";

export default function Navbar({ onClick, navOpen }) {
  const pages = [
    {
      name: "Style Guide",
      route: "/style-guide",
    },
    {
      name: "About",
      route: "/about",
    },
    {
      name: "Contact",
      route: "/contact",
    },
  ];

  return (
    <div className="container left-0 right-0 flex items-center justify-between py-5 absolute lg:relative">
      <Link
        href="/"
        aria-label="navigate to homepage"
        className={`w-8 z-[1002] transition-colors duration-200 ease-in-out text-gray-100 relative`}
      >
        <Logo fillColor="hsla(0, 0%, 98%, 1)" className="transition-opacity duration-150 ease-in hover:opacity-85" />
      </Link>

      <ul className="list-none hidden lg:flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
        {pages.map((page, index) => {
          return (
            <li key={index}>
              <Link
                href={page.route}
                className="text-[14px] leading-[1.625] text-gray-100 hover:text-gray-400 transition-colors duration-200 ease-in-out"
              >
                {page.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        className="z-[1002] relative lg:hidden"
        onClick={onClick}
      >
        <Hamburger
          duration={0.3}
          color="rgb(243,244,246)"
          size={28}
          label="Toggle mobile menu"
          easing="ease-in-out"
        />
      </button>

      <div
        className={`transition-opacity duration-200 ease-in-out bg-gradient-to-b from-[hsl(231,47%,3%)] to-[hsl(231,47%,4%)] w-screen h-screen flex items-end lg:hidden z-[1001] fixed inset-0 ${
          navOpen === true ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="w-full max-h-screen py-28 overflow-y-auto container no-scrollbar">
          <ul className="list-none flex flex-col lg:flex-row lg:items-center">
            {pages.map((page, index) => {
              return (
                <li key={index} className="py-5 border-b last:border-none border-white/10">
                  <Link
                    href={page.route}
                    className="text-step-2 leading-[1.25] tracking-[-0.017em] font-semibold font-mori text-gray-100 hover:text-gray-400 transition-colors duration-200 ease-in-out"
                  >
                    {page.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Button */}
          <div className="mt-12">
            <ButtonBlue href="/contact" label="Contact" />
          </div>
        </nav>
      </div>
    </div>
  );
}
