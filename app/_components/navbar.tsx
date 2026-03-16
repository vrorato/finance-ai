"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton } from "./user-button";
import { useSession } from "next-auth/react";

export const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Transações", href: "/transactions" },
    { label: "Assinatura", href: "/subscription" },
  ];

  return (
    <nav className="flex items-center justify-between border-b border-solid px-8 py-4">
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" width={173} height={39} alt="Finance AI" />
        <div className="flex items-center gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? "font-bold text-primary"
                  : "text-muted-foreground"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <UserButton user={session?.user} />
    </nav>
  );
};
