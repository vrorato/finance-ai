"use client";

import { CreditCardIcon, WifiIcon } from "lucide-react";

interface CreditCardProps {
  balance: number;
  userName: string;
  cardNumber: string;
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

export const CreditCard = ({ balance, userName, cardNumber }: CreditCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-primary p-10 text-white shadow-xl h-full flex flex-col justify-between">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24 blur-3xl" />

      <div className="relative z-10 flex items-center justify-between">
        <span className="text-sm font-semibold opacity-80">Cartão Principal</span>
        <WifiIcon className="rotate-90 opacity-80" size={24} />
      </div>

      <div className="relative z-10 mt-10">
        <div className="text-2xl font-bold tracking-[0.2em] mb-8">
          {cardNumber}
        </div>
        
        <div className="space-y-1">
          <p className="text-[10px] font-bold opacity-70 uppercase tracking-widest">Saldo disponível</p>
          <p className="text-3xl font-bold">{formatCurrency(balance)}</p>
        </div>
      </div>

      <div className="relative z-10 mt-10 flex items-end justify-between">
        <div className="space-y-1">
          <p className="text-[10px] font-bold opacity-70 uppercase tracking-widest">Titular</p>
          <p className="text-sm font-bold uppercase tracking-wider">{userName}</p>
        </div>
        <div className="bg-white/20 p-2 rounded-lg">
          <CreditCardIcon size={28} />
        </div>
      </div>
    </div>
  );
};
