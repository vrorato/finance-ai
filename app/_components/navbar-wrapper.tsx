"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "./navbar";

export const NavbarWrapper = () => {
  const pathname = usePathname();

  if (pathname === "/login" || pathname === "/signup") {
    return null;
  }

  return <Navbar />;
};
