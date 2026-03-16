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
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => {
      if (transaction.type === TransactionType.DEPOSIT) {
        return (
          <Badge className="bg-muted text-primary hover:bg-muted font-bold">
            <CircleIcon className="mr-2 fill-primary" size={12} />
            Depósito
          </Badge>
        )
      }
      if (transaction.type === TransactionType.EXPENSE) {
        return (
          <Badge className="bg-danger text-danger bg-opacity-10 font-bold">
            <CircleIcon className="mr-2 fill-danger" size={12} />
            Despesa
          </Badge>
        )
      }
      return (
        <Badge className="bg-white text-white bg-opacity-10 font-bold">
          <CircleIcon className="mr-2 fill-white" size={12} />
          Investimento
        </Badge>
      )
    },
  },
  {
    accessorKey: "category",
    header: "Categoria",
    cell: ({ row: { original: transaction } }) => transactionCategoryLabels[transaction.category],
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de Pagamento",
    cell: ({ row: { original: transaction } }) => transactionPaymentMethodLabels[transaction.paymentMethod],
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row: { original: transaction } }) => (
      new Date(transaction.date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    ),
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row: { original: transaction } }) => (
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(transaction.amount))
    ),
  },
  {
    id: "actions",
    header: "Ações",
  }
]
