"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "./sidebar";

export const SidebarWrapper = () => {
  const pathname = usePathname();

  if (pathname === "/login" || pathname === "/signup") {
    return null;
  }

  return <Sidebar />;
};
