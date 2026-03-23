"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  ArrowLeftRightIcon,
  UsersIcon,
  BarChart3Icon,
  UploadIcon,
  HandshakeIcon,
  PlusIcon
} from "lucide-react";
import { Button } from "./ui/button";

export const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { label: "Página inicial", href: "/", icon: HomeIcon },
    { label: "Transações", href: "/transactions", icon: ArrowLeftRightIcon },
    { label: "Contatos", href: "/contacts", icon: UsersIcon },
    { label: "Relatórios", href: "/reports", icon: BarChart3Icon },
    { label: "Importações", href: "/imports", icon: UploadIcon },
    { label: "Conciliação", href: "/reconciliation", icon: HandshakeIcon },
  ];

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-white p-6">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-10 px-2">
        <div className="bg-primary p-2 rounded-xl">
          <Image src="/logo.svg" width={24} height={24} alt="Logo" className="brightness-0 invert" />
        </div>
        <div>
          <h1 className="font-bold text-slate-900 leading-tight">MyFinanceAI</h1>
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Gestão Inteligente</p>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive
                  ? "bg-primary/10 text-primary font-semibold"
                  : "text-muted-foreground hover:bg-slate-50 hover:text-slate-900"
                }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Upgrade Plan Button */}
      <div className="mt-auto">
        <Button className="w-full bg-primary hover:bg-primary/90 rounded-xl py-6 gap-2">
          <span>Upgrade Plan</span>
        </Button>
      </div>
    </div>
  );
};
