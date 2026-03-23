import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

import { SummaryCards } from "./_components/summary-cards";
import { TrendChart } from "./_components/trend-chart";
import { PlusIcon, CalendarIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { Card } from "../_components/ui/card";

const TransactionsPage = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  const transactions = await db.transaction.findMany({
    where: {
      userId: session.user.id,
    },
  });

  const filterTabs = [
    { label: "MAR/2026", icon: <CalendarIcon size={14} className="mr-2" />, active: true },
    { label: "Recebimentos" },
    { label: "Despesas fixas" },
    { label: "Despesas variáveis" },
    { label: "Pessoas" },
    { label: "Impostos" },
    { label: "Transferências" },
  ];

  return (
    <div className="space-y-10 max-w-[1400px] mx-auto pb-10">
      <SummaryCards />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        <div className="lg:col-span-2">
           <TrendChart />
        </div>
        <Card className="bg-white border-none shadow-sm p-8 h-full flex flex-col justify-center items-center gap-4 group cursor-pointer hover:shadow-md transition-all">
           <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
              <PlusIcon size={32} className="text-primary" />
           </div>
           <div className="text-center">
              <h3 className="font-bold text-slate-900">Nova transação</h3>
              <p className="text-sm text-muted-foreground mt-1">Adicione uma nova movimentação</p>
           </div>
        </Card>
      </div>

      <div className="space-y-6">
        {/* Header & Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-6 overflow-x-auto pb-2">
          <div className="flex items-center gap-2">
            {filterTabs.map((tab, i) => (
              <button
                key={i}
                className={`flex items-center px-5 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
                  tab.active 
                    ? "bg-white text-slate-900 shadow-sm border border-slate-100" 
                    : "text-muted-foreground hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
          
          <Button className="bg-primary hover:bg-primary/90 rounded-xl px-6 py-5 gap-2 font-bold shadow-lg shadow-primary/20">
            <PlusIcon size={18} />
            <span>Nova transação</span>
          </Button>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100/50 overflow-hidden px-8 pt-8">
          <DataTable columns={transactionColumns} data={transactions} />
          
          {/* Table Footer / Summary Float */}
          <div className="flex justify-between items-center py-6 border-t border-slate-50 mt-4">
            <span className="text-sm text-muted-foreground font-medium">Mostrando 1-{Math.min(4, transactions.length)} de {transactions.length} transações</span>
            <div className="flex items-center gap-2">
               <button className="p-2 border border-slate-100 rounded-lg text-slate-400 hover:bg-slate-50 disabled:opacity-50" disabled>
                  <ChevronLeftIcon size={16} />
               </button>
               <button className="p-2 border border-slate-100 rounded-lg text-slate-400 hover:bg-slate-50 disabled:opacity-50" disabled>
                  <ChevronRightIcon size={16} />
               </button>
            </div>
          </div>
        </div>

        {/* Floating Summaries */}
        <div className="fixed bottom-10 right-10 flex gap-4 z-50">
           <div className="bg-white rounded-2xl shadow-2xl p-4 pr-10 flex items-center gap-4 animate-in slide-in-from-bottom duration-500">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                 <div className="w-5 h-5 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                    <div className="w-2.5 h-1.5 border-b-2 border-l-2 border-emerald-500 -rotate-45 -mt-0.5" />
                 </div>
              </div>
              <div>
                 <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Pago</p>
                 <p className="text-lg font-extrabold text-emerald-500">R$ 18.240,00</p>
              </div>
           </div>
           <div className="bg-white rounded-2xl shadow-2xl p-4 pr-10 flex items-center gap-4 animate-in slide-in-from-bottom duration-700">
              <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center">
                 <div className="w-5 h-5 rounded-full border-2 border-orange-400 flex items-center justify-center relative">
                    <div className="absolute top-1 right-2 w-0.5 h-1.5 bg-orange-400 transform origin-bottom -rotate-45" />
                    <div className="absolute top-1.5 right-2 w-2 h-0.5 bg-orange-400" />
                 </div>
              </div>
              <div>
                 <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">A pagar</p>
                 <p className="text-lg font-extrabold text-slate-900">R$ 6.760,00</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
