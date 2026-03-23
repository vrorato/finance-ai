"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { TrendingUpIcon, TrendingDownIcon, WalletIcon } from "lucide-react";

interface SummaryCardProps {
  title: string;
  amount: number;
  icon: React.ReactNode;
  subtitle?: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  progress?: number;
  progressColor?: string;
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};

const SummaryCard = ({ title, amount, icon, subtitle, trend, progress, progressColor = "bg-primary" }: SummaryCardProps) => {
  return (
    <Card className="border-none shadow-sm hover:shadow-md transition-shadow h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-sm font-semibold text-muted-foreground">{title}</CardTitle>
        <div className="p-2 bg-slate-50 rounded-lg text-primary">
          {icon}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="text-3xl font-bold text-slate-900 leading-tight">
            {formatCurrency(amount)}
          </div>
          {trend && (
            <div className={`flex items-center gap-1 text-xs font-semibold mt-1 ${trend.isPositive ? "text-emerald-600" : "text-rose-600"}`}>
              {trend.isPositive ? <TrendingUpIcon size={14} /> : <TrendingDownIcon size={14} />}
              <span>{trend.value} em relação ao mês anterior</span>
            </div>
          )}
        </div>

        {progress !== undefined && (
          <div className="space-y-2">
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div 
                className={`h-full ${progressColor} transition-all duration-500`} 
                style={{ width: `${progress}%` }}
              />
            </div>
            {subtitle && <p className="text-xs text-muted-foreground font-medium">{subtitle}</p>}
          </div>
        )}
        {!progress && subtitle && <p className="text-xs text-muted-foreground font-medium">{subtitle}</p>}
      </CardContent>
    </Card>
  );
};

export const SummaryCards = ({ summary }: { summary: any }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <SummaryCard
        title="Saldo Atual"
        amount={summary.balance}
        icon={<WalletIcon size={18} />}
        trend={{ value: "+2.5%", isPositive: true }}
      />
      <SummaryCard
        title="Receitas do Mês"
        amount={summary.deposits}
        icon={<TrendingUpIcon size={18} className="text-emerald-500" />}
        progress={85}
        progressColor="bg-emerald-500"
        subtitle="85% da meta mensal atingida"
      />
      <SummaryCard
        title="Despesas do Mês"
        amount={summary.expenses}
        icon={<TrendingDownIcon size={18} className="text-rose-500" />}
        progress={45}
        progressColor="bg-rose-500"
        subtitle="Dentro do orçamento planejado"
      />
    </div>
  );
};
