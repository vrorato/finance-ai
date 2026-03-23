"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from "recharts";

const data = [
  { name: "Jan", receita: 4000, despesa: 2400 },
  { name: "Jan", receita: 3000, despesa: 1398 },
  { name: "Fev", receita: 2000, despesa: 9800 },
  { name: "Fev", receita: 2780, despesa: 3908 },
  { name: "Mar", receita: 1890, despesa: 4800 },
  { name: "Mar", receita: 4390, despesa: 3800 },
  { name: "Abr", receita: 3490, despesa: 4300 },
  { name: "Abr", receita: 2490, despesa: 1300 },
];

export const TrendChart = () => {
  return (
    <Card className="bg-white border-none shadow-sm h-[300px] flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-semibold text-slate-900">Tendência Mensal</CardTitle>
        <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider">
           <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-muted-foreground">Receita</span>
           </div>
           <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-violet-500" />
              <span className="text-muted-foreground">Despesa</span>
           </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 10, fill: "#94a3b8", fontWeight: 600 }}
              dy={10}
            />
            <Tooltip 
              cursor={{ fill: '#f8fafc' }}
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
            />
            <Bar 
              dataKey="receita" 
              fill="#34d399" 
              radius={[4, 4, 0, 0]} 
              barSize={30}
            />
            <Bar 
              dataKey="despesa" 
              fill="#8b5cf6" 
              radius={[4, 4, 0, 0]} 
              barSize={30}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
