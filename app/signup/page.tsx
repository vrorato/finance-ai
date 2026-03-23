import Image from "next/image";
import { SignupForm } from "../_components/signup-form";
import { SafeImage } from "../_components/ui/safe-image";
import Link from "next/link";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      {/* Left Column: Branding */}
      <div className="flex flex-col justify-center items-center p-8 md:p-12 lg:p-16 bg-[#6366f1] text-white relative overflow-hidden w-full lg:w-1/2">
        <div className="relative z-10 w-full max-w-md text-center lg:text-left">
          <Link href="/" className="flex items-center justify-center lg:justify-start gap-2 mb-16 transform hover:scale-105 transition-transform cursor-pointer w-fit mx-auto lg:mx-0">
            <div className="bg-white p-2 rounded-xl shadow-lg">
              <SafeImage
                src="/logo.svg"
                width={32}
                height={32}
                alt="Finance AI Logo"
                className="brightness-0"
              />
            </div>
            <span className="text-2xl font-black tracking-tight">MyFinanceAI</span>
          </Link>

          <div className="max-w-md mx-auto lg:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 lg:mb-8 tracking-tight">
              Master Your Money with <span className="text-indigo-200">Smart AI Insights</span>
            </h1>
            <p className="text-base md:text-lg text-indigo-100 mb-8 lg:mb-12 leading-relaxed opacity-90 font-medium">
              Join over 50,000 users who track their spending, set goals, and receive personalized financial advice powered by artificial intelligence.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-5 p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/15 transition-all cursor-default group">
                <div className="bg-indigo-400/30 p-3 rounded-xl group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><path d="M17 6h6v6"/></svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Real-time Tracking</h3>
                  <p className="text-indigo-200 text-sm font-medium">Automatically sync your accounts and monitor every penny.</p>
                </div>
              </div>

              <div className="flex items-center gap-5 p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/15 transition-all cursor-default group">
                <div className="bg-indigo-400/30 p-3 rounded-xl group-hover:scale-110 transition-transform">
                   <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkles"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">AI Recommendations</h3>
                  <p className="text-indigo-200 text-sm font-medium">Custom insights to help you save $500+ on average per month.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-8 lg:mt-12 transform hover:scale-[1.02] transition-transform duration-500 w-full max-w-md mx-auto lg:mx-0">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20">
             <SafeImage
              src="/finance_chart_login.png"
              width={600}
              height={400}
              alt="Financial Insights Chart"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
        {/* Abstract Background Decor */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500 rounded-full blur-[120px] opacity-50" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-400 rounded-full blur-[120px] opacity-30" />
      </div>

      {/* Right Column: Signup Form */}
      <div className="flex flex-col items-center justify-center p-8 bg-white w-full lg:w-1/2">
        <div className="w-full max-w-md">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">Create Account</h2>
            <p className="text-slate-500 font-medium">Enter your details below to start managing your finances.</p>
          </div>
          
          <SignupForm />
          
          <div className="mt-12 text-center text-slate-400 text-xs font-medium">
            <p>© 2024 MyFinanceAI Inc. All rights reserved.</p>
            <div className="flex justify-center gap-4 mt-2">
              <Link href="/privacy" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-slate-600 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;