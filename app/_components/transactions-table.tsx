"use client";

import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "./ui/table";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { PlusIcon, ShoppingBagIcon, WalletIcon, UtensilsIcon } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Transaction {
  status: "Concluído" | "Pendente";
  description: string;
  category: string;
  date: Date;
  value: number;
}

const formatCurrency = (value: number) => {
  const formatted = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(Math.abs(value));
  return value < 0 ? `- ${formatted}` : `+ ${formatted}`;
};

const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case "tecnologia": return <ShoppingBagIcon size={16} />;
    case "receita": return <WalletIcon size={16} />;
    case "alimentação": return <UtensilsIcon size={16} />;
    default: return null;
  }
};

export const TransactionsTable = ({ transactions }: { transactions: Transaction[] }) => {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border-none">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-lg font-bold text-slate-900">Últimas Transações</h3>
          <p className="text-xs text-muted-foreground font-medium">Histórico detalhado da sua conta principal</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white rounded-xl gap-2 h-11 px-6">
          <PlusIcon size={18} />
          <span className="font-bold text-sm">Nova transação</span>
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-slate-100">
            <TableHead className="text-xs font-bold text-slate-400 uppercase tracking-wider">Status</TableHead>
            <TableHead className="text-xs font-bold text-slate-400 uppercase tracking-wider">Descrição</TableHead>
            <TableHead className="text-xs font-bold text-slate-400 uppercase tracking-wider">Categoria</TableHead>
            <TableHead className="text-xs font-bold text-slate-400 uppercase tracking-wider">Data</TableHead>
            <TableHead className="text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Valor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction, index) => (
            <TableRow key={index} className="hover:bg-slate-50/50 transition-colors border-slate-50">
              <TableCell>
                <Badge 
                  className={`rounded-full px-3 py-1 font-bold text-[10px] ${
                    transaction.status === "Concluído" 
                      ? "bg-emerald-100 text-emerald-600 hover:bg-emerald-100" 
                      : "bg-amber-100 text-amber-600 hover:bg-amber-100"
                  }`}
                >
                  {transaction.status}
                </Badge>
              </TableCell>
              <TableCell className="font-bold text-sm text-slate-900">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                    {getCategoryIcon(transaction.category)}
                  </div>
                  {transaction.description}
                </div>
              </TableCell>
              <TableCell className="text-sm text-slate-500 font-medium">
                {transaction.category}
              </TableCell>
              <TableCell className="text-sm text-slate-500 font-medium">
                {format(transaction.date, "dd MMM, yyyy", { locale: ptBR })}
              </TableCell>
              <TableCell className={`text-right font-bold text-sm ${transaction.value < 0 ? "text-rose-500" : "text-emerald-500"}`}>
                {formatCurrency(transaction.value)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
