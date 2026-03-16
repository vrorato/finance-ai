import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { TrendingDownIcon, TrendingUpIcon, WalletIcon, PiggyBankIcon } from "lucide-react";

interface SummaryCardProps {
  title: string;
  amount: number;
  icon: React.ReactNode;
  variant?: "default" | "danger" | "success";
}

const SummaryCard = ({ title, amount, icon, variant = "default" }: SummaryCardProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className={`text-2xl font-bold ${variant === "danger" ? "text-danger" : variant === "success" ? "text-primary" : ""}`}>
          {formatCurrency(amount)}
        </div>
      </CardContent>
    </Card>
  );
};

export const DashboardSummary = ({ summary }: { summary: any }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <SummaryCard
        title="Saldo"
        amount={summary.balance}
        icon={<WalletIcon size={16} className="text-muted-foreground" />}
      />
      <SummaryCard
        title="Investido"
        amount={summary.investments}
        icon={<PiggyBankIcon size={16} className="text-muted-foreground" />}
      />
      <SummaryCard
        title="Receitas"
        amount={summary.deposits}
        icon={<TrendingUpIcon size={16} className="text-primary" />}
        variant="success"
      />
      <SummaryCard
        title="Despesas"
        amount={summary.expenses}
        icon={<TrendingDownIcon size={16} className="text-danger" />}
        variant="danger"
      />
    </div>
  );
};
