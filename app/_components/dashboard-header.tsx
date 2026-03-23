"use client";

import { SearchIcon, BellIcon, HelpCircleIcon } from "lucide-react";
import { Input } from "./ui/input";
import { UserButton } from "./user-button";
import { useSession } from "next-auth/react";

export const DashboardHeader = () => {
  const { data: session } = useSession();

  return (
    <header className="flex h-20 items-center justify-between px-8 bg-white border-b">
      <div className="flex items-center gap-10 flex-1">
        <h2 className="text-xl font-bold text-slate-900 border-r pr-10">Painel de Controle</h2>
        
        {/* Search Bar */}
        <div className="relative w-full max-w-md ml-4">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <Input 
            placeholder="Pesquisar transações..." 
            className="pl-10 h-11 bg-slate-50 border-none rounded-xl w-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 text-muted-foreground border-r pr-6">
          <button className="hover:text-slate-900 transition-colors">
            <BellIcon size={20} />
          </button>
          <button className="hover:text-slate-900 transition-colors">
            <HelpCircleIcon size={20} />
          </button>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-900 leading-tight">{session?.user?.name || "Alex Silva"}</p>
            <p className="text-[10px] text-muted-foreground font-semibold">Premium User</p>
          </div>
          <UserButton user={session?.user} />
        </div>
      </div>
    </header>
  );
};
