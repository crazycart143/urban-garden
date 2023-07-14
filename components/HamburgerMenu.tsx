"use client";

import { HamburgerMenuProps } from "@/types";
import { usePathname } from "next/navigation";

export default function HamburgerMenu({
  setIsOpen,
  isOpen,
}: HamburgerMenuProps) {
  const pathname = usePathname();
  const genericHamburgerLine = `${
    pathname === "/shop" ? "bg-black" : "bg-white"
  } h-1 w-6 my-[2px] rounded-full transition ease transform duration-300`;

  return (
    <button
      className="flex flex-col items-center justify-center w-8 h-8 rounded lg:hidden group"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "rotate-45 translate-y-1 opacity-100 " : "opacity-100 "
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "opacity-0" : "opacity-100 "
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "-rotate-45 -translate-y-3 opacity-100 " : "opacity-100 "
        }`}
      />
    </button>
  );
}
