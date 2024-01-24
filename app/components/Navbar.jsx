"use client";
import Link from "next/link";
import { Squeeze as Hamburger } from "hamburger-react";
import { useState } from "react";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  function handleNavOpen() {
    setNavOpen(!navOpen);
  }

  const pages = [
    {
      name: "Home",
      route: "/",
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
    <div className="container left-0 right-0 flex items-center justify-between py-5 lg:py-12 absolute lg:relative">
      <Link
        href="/"
        aria-label="navigate to homepage"
        className={`w-10 z-[1002] transition-colors duration-200 ease-in-out text-white relative`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 50 50"
          fill="currentColor"
        >
          <path d="M 45.953125 46 L 34 46 C 33.554688 46 33.164063 45.707031 33.039063 45.277344 L 24.960938 17.449219 L 20.363281 32 L 28.53125 32 C 28.9375 32 29.300781 32.242188 29.457031 32.617188 C 29.613281 32.992188 29.527344 33.421875 29.238281 33.707031 L 16.707031 45.707031 C 16.519531 45.894531 16.265625 46 16 46 L 4.046875 46 C 3.726563 46 3.425781 45.847656 3.238281 45.589844 C 3.050781 45.328125 2.996094 44.996094 3.097656 44.691406 L 16.046875 4.691406 C 16.183594 4.277344 16.566406 4 17 4 L 33 4 C 33.433594 4 33.816406 4.277344 33.949219 4.691406 L 46.902344 44.691406 C 47.003906 44.996094 46.949219 45.328125 46.761719 45.589844 C 46.574219 45.847656 46.273438 46 45.953125 46 Z" />
        </svg>
      </Link>

      <ul className="list-none hidden lg:flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-12">
        {pages.map((page, index) => {
          return (
            <li key={index}>
              <Link
                href={page.route}
                className="font-semibold font-interTight text-white"
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
        onClick={handleNavOpen}
      >
        <Hamburger duration={0.3} color="white" />
      </button>

      <div
        className={`transition-opacity duration-200 ease-in-out bg-[#0f172a] w-screen h-screen flex items-end lg:hidden z-[1001] fixed inset-0 ${
          navOpen === true ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="w-full max-h-screen pt-24 pb-24 overflow-y-auto container no-scrollbar">
          <ul className="list-none flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-[60px]">
            {pages.map((page, index) => {
              return (
                <li key={index}>
                  <Link
                    href={page.route}
                    className="text-[32px] font-bold text-center tracking-[-0.017em] leading-tight font-interTight text-white"
                  >
                    {page.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
