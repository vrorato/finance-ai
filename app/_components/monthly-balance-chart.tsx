"use client";

import { 
  Bar, 
  BarChart, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  Tooltip,
  Cell
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const data = [
  { name: "JAN", receitas: 8000, despesas: 4000 },
  { name: "FEV", receitas: 9500, despesas: 5500 },
  { name: "MAR", receitas: 12000, despesas: 4500 },
  { name: "ABR", receitas: 11000, despesas: 7000 },
  { name: "MAI", receitas: 10000, despesas: 6000 },
  { name: "JUN", receitas: 15240, despesas: 4260 },
];

export const MonthlyBalanceChart = () => {
  return (
    <Card className="border-none shadow-sm h-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-lg font-bold text-slate-900">Balanço Mensal</CardTitle>
          <p className="text-xs text-muted-foreground font-medium">Receitas vs Despesas (Últimos 6 meses)</p>
        </div>
        <div className="bg-slate-50 px-3 py-1 rounded-lg text-xs font-bold text-slate-600">
          Jan - Jun 2024
        </div>
      </CardHeader>
      <CardContent className="h-[300px] w-full pt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 600 }}
              dy={10}
            />
            <YAxis hide />
            <Tooltip 
              cursor={{ fill: "transparent" }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="bg-white p-3 shadow-lg rounded-xl border border-slate-100">
                      <p className="text-xs font-bold text-slate-900 mb-2">{payload[0].payload.name}</p>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-500" />
                          <p className="text-xs text-muted-foreground font-medium">
                            Receitas: <span className="text-slate-900 font-bold">R$ {payload[0].value}</span>
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-rose-500" />
                          <p className="text-xs text-muted-foreground font-medium">
                            Despesas: <span className="text-slate-900 font-bold">R$ {payload[1].value}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar 
              dataKey="receitas" 
              fill="#10b981" 
              radius={[4, 4, 0, 0]} 
              barSize={20}
            />
            <Bar 
              dataKey="despesas" 
              fill="#f43f5e" 
              radius={[4, 4, 0, 0]} 
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
