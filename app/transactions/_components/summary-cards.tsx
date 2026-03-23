"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { ArrowUpIcon, LandmarkIcon, TrendingUpIcon } from "lucide-react";

interface SummaryCardProps {
  title: string;
  amount: string;
  subtext?: string;
  percentage?: number;
  trend?: "up" | "down";
  variant?: "default" | "main";
  progressColor?: string;
}

const SummaryCard = ({
  title,
  amount,
  subtext,
  percentage,
  trend,
  variant = "default",
  progressColor = "bg-primary",
}: SummaryCardProps) => {
  if (variant === "main") {
    return (
      <Card className="bg-primary text-white border-none shadow-lg h-full flex flex-col justify-between overflow-hidden relative">
        <div className="absolute top-4 right-4 bg-white/10 p-2 rounded-lg">
          <LandmarkIcon size={24} className="text-white" />
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium opacity-80">{title}</CardTitle>
          <div className="text-3xl font-bold mt-1 text-white">{amount}</div>
        </CardHeader>
        <CardContent>
          <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs opacity-80">Previsão final do mês</span>
            <span className="text-sm font-bold">{subtext}</span>
          </div>
          <div className="mt-4">
             <button className="w-full bg-white text-primary font-bold py-3 rounded-xl text-sm hover:bg-slate-50 transition-colors">
              Ver extrato detalhado
             </button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white border-none shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className="text-2xl font-bold mt-1">{amount}</div>
      </CardHeader>
      <CardContent className="space-y-4">
        {trend && (
          <div className="flex items-center gap-1 text-[12px] font-semibold text-emerald-500">
            <TrendingUpIcon size={14} />
            <span>{subtext}</span>
          </div>
        )}
        {percentage !== undefined && (
          <div className="space-y-2 pt-2">
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
               <div 
                 className={`h-full ${progressColor} transition-all`} 
                 style={{ width: `${percentage}%` }}
               />
            </div>
            <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">{subtext}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export const SummaryCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <SummaryCard
        title="Resultado previsto no mês"
        amount="R$ 12.450,00"
        subtext="+5.2% vs mês anterior"
        trend="up"
      />
      <SummaryCard
        title="Recebimentos"
        amount="R$ 25.000,00"
        subtext="75% da meta atingida"
        percentage={75}
        progressColor="bg-emerald-500"
      />
      <SummaryCard
        title="Despesas"
        amount="R$ 12.550,00"
        subtext="50% do orçamento utilizado"
        percentage={50}
        progressColor="bg-violet-500"
      />
      <SummaryCard
        variant="main"
        title="Conta Principal"
        amount="R$ 42.890,12"
        subtext="R$ 55.340,12"
      />
    </div>
  );
};
