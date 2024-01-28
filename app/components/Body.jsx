"use client";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useState } from "react";

export default function Body({ children, className }) {
  const [navOpen, setNavOpen] = useState(false);

  function handleNavOpen() {
    setNavOpen(!navOpen);
  }
  return (
    <body
      className={`${className} ${navOpen ? "overflow-clip" : "overflow-auto"} bg-[hsl(231,47%,3%)]`}
    >
      <header className="bg-transparent text-gray-100 w-full absolute top-0 z-[1001] transition-all duration-500 ease-in-out">
        <Navbar onClick={handleNavOpen} navOpen={navOpen} />
      </header>
      {children}
      <Footer />
    </body>
  );
}
