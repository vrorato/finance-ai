"use client"

import { Transaction, TransactionCategory, TransactionPaymentMethod, TransactionType } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/app/_components/ui/badge"
import { CircleIcon } from "lucide-react"

export const transactionCategoryLabels: Record<TransactionCategory, string> = {
  EDUCATION: "Educação",
  ENTERTAINMENT: "Entretenimento",
  FOOD: "Alimentação",
  HEALTH: "Saúde",
  HOUSING: "Moradia",
  OTHER: "Outros",
  SALARY: "Salário",
  TRANSPORTATION: "Transporte",
  UTILITY: "Contas",
}

export const transactionPaymentMethodLabels: Record<TransactionPaymentMethod, string> = {
  BANK_SLIP: "Boleto",
  BANK_TRANSFER: "Transferência Bancária",
  CASH: "Dinheiro",
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  OTHER: "Outros",
  PIX: "Pix",
}

export const transactionTypeLabels: Record<TransactionType, string> = {
  DEPOSIT: "Depósito",
  EXPENSE: "Despesa",
  INVESTMENT: "Investimento",
}

export const transactionColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "date",
    header: "DATA",
    cell: ({ row: { original: transaction } }) => {
      const date = new Date(transaction.date);
      return (
        <div className="text-slate-500 font-medium">
          {date.getDate()} {date.toLocaleDateString("pt-BR", { month: "short" })} {date.getFullYear()}
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: "DESCRIÇÃO",
    cell: ({ row: { original: transaction } }) => (
      <div className="font-bold text-slate-900">{transaction.name}</div>
    ),
  },
  {
    accessorKey: "payee", // Mocking payee since it's not in schema
    header: "PAGO A / RECEBIDO DE",
    cell: ({ row: { original: transaction } }) => (
      <div className="text-slate-600 font-medium">
        {transaction.type === TransactionType.DEPOSIT ? "Income Source" : "Vendor Name"}
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: "CATEGORIA",
    cell: ({ row: { original: transaction } }) => (
      <Badge className={`bg-opacity-10 border-none px-3 font-bold uppercase tracking-wider text-[10px] ${
        transaction.category === TransactionCategory.HOUSING ? "bg-violet-500 text-violet-500" :
        transaction.category === TransactionCategory.TRANSPORTATION ? "bg-blue-500 text-blue-500" :
        transaction.category === TransactionCategory.FOOD ? "bg-orange-500 text-orange-500" :
        transaction.category === TransactionCategory.ENTERTAINMENT ? "bg-pink-500 text-pink-500" :
        transaction.category === TransactionCategory.HEALTH ? "bg-red-500 text-red-500" :
        transaction.category === TransactionCategory.UTILITY ? "bg-emerald-500 text-emerald-500" :
        transaction.category === TransactionCategory.SALARY ? "bg-emerald-500 text-emerald-500" :
        transaction.category === TransactionCategory.EDUCATION ? "bg-indigo-500 text-indigo-500" :
        "bg-slate-500 text-slate-500"
      }`}>
        {transactionCategoryLabels[transaction.category]}
      </Badge>
    ),
  },
  {
    accessorKey: "amount",
    header: "VALOR",
    cell: ({ row: { original: transaction } }) => (
      <div className={`font-bold ${transaction.type === TransactionType.DEPOSIT ? "text-emerald-500" : "text-slate-900"}`}>
        {transaction.type === TransactionType.DEPOSIT && "+ "}
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(Number(transaction.amount))}
      </div>
    ),
  },
  {
    accessorKey: "paymentMethod",
    header: "TIPO PAGAMENTO",
    cell: ({ row: { original: transaction } }) => (
      <div className="text-slate-600 font-medium">{transactionPaymentMethodLabels[transaction.paymentMethod]}</div>
    ),
  },
  {
    accessorKey: "paid", // Mocking paid status
    header: "PAGO?",
    cell: ({ row: { original: transaction } }) => (
      <div className="flex items-center justify-center">
        {transaction.type === TransactionType.EXPENSE ? (
          <div className="w-5 h-5 rounded-full border-2 border-slate-200" />
        ) : (
          <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
             <CircleIcon className="text-white fill-white" size={10} />
          </div>
        )}
      </div>
    ),
  },
]
