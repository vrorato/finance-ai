"use client";

import { usePathname } from "next/navigation";
import { DashboardHeader } from "./dashboard-header";

export const DashboardHeaderWrapper = () => {
  const pathname = usePathname();

  if (pathname === "/login" || pathname === "/signup") {
    return null;
  }

  return <DashboardHeader />;
};
