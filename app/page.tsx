import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { db } from "./_lib/prisma";
import { DashboardSummary } from "./_components/dashboard-summary";
import { TransactionType } from "@prisma/client";

const Home = async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  const transactions = await db.transaction.findMany({
    where: {
      userId: session.user.id,
    },
  });

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === TransactionType.DEPOSIT) {
        acc.deposits += Number(transaction.amount);
        acc.balance += Number(transaction.amount);
      } else if (transaction.type === TransactionType.EXPENSE) {
        acc.expenses += Number(transaction.amount);
        acc.balance -= Number(transaction.amount);
      } else if (transaction.type === TransactionType.INVESTMENT) {
        acc.investments += Number(transaction.amount);
        acc.balance -= Number(transaction.amount); 
      }
      return acc;
    },
    { balance: 0, deposits: 0, expenses: 0, investments: 0 }
  );

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <DashboardSummary summary={summary} />
      {/* TODO: Add Charts */}
    </div>
  );
};

export default Home;
