# MyFinance AI

MyFinance AI is a modern financial management application built with Next.js, featuring AI-driven insights, secure authentication, and real-time transaction monitoring.

## Features

- **Transactions Management**: Track your income, expenses, and investments with detailed categorization and payment methods.
- **Dashboard Summary**: Visual overview of your financial health with balance, revenue, and expense tracking.
- **Authentication**: Secure login and sign-up powered by NextAuth.js (Google and Credentials support).
- **Responsive Design**: Beautifully crafted UI using shadcn/ui and Tailwind CSS.
- **AI Insights (Coming Soon)**: Get personalized financial advice based on your spending habits.

## Tech Stack

- **Framework**: Next.js 15
- **Authentication**: NextAuth.js
- **Database**: PostgreSQL (Supabase)
- **ORM**: Prisma
- **Styling**: Tailwind CSS & shadcn/ui
- **Icons**: Lucide React

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/vrorato/finance-ai.git
   cd finance-ai
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Copy `.env.example` to `.env`.
   - Fill in your Supabase connection strings and NextAuth secret.

4. **Run migrations**:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

## License

This project is licensed under the MIT License.
