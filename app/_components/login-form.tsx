"use client";

import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState, useEffect } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { SafeImage } from "./ui/safe-image";
import Link from "next/link";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const errorParam = searchParams.get("error");
    if (errorParam === "CredentialsSignin") {
      setError("E-mail ou senha inválidos.");
    } else if (searchParams.get("signup") === "success") {
        setError("Conta criada com sucesso! Faça login abaixo.");
    }
  }, [searchParams]);

  const handleCredentialsLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);

    if (result?.error) {
      setError("E-mail ou senha inválidos.");
    } else {
      router.push("/");
      router.refresh();
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-md mx-auto px-4">
      <form onSubmit={handleCredentialsLogin} className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email" className="sr-only">Email Address</Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Mail size={20} aria-hidden="true" />
            </div>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              className="pl-10 h-12 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email Address"
            />
          </div>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password" className="sr-only">Password</Label>
            <Link href="/forgot-password" className="text-sm text-[#6366f1] hover:underline transition-colors">
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Lock size={20} aria-hidden="true" />
            </div>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="pl-10 pr-10 h-12 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-label="Password"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <Eye size={20} aria-hidden="true" /> : <EyeOff size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="remember"
            className="h-4 w-4 text-[#6366f1] focus:ring-[#6366f1] border-slate-300 rounded transition-all cursor-pointer"
          />
          <label htmlFor="remember" className="text-sm text-slate-600">
            Remember me for 30 days
          </label>
        </div>

        {error && (
          <p className={`text-sm font-medium ${error.includes("sucesso") ? "text-green-600" : "text-red-600"}`}>
            {error}
          </p>
        )}
        <Button
          type="submit"
          className="w-full h-12 bg-[#6366f1] hover:bg-[#5558e3] text-white font-semibold rounded-lg flex items-center justify-center gap-2 shadow-sm transition-all active:scale-[0.98]"
          disabled={loading}
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Signing in...
            </>
          ) : (
            <>
              Sign In
              <ArrowRight size={18} strokeWidth={2.5} />
            </>
          )}
        </Button>
      </form>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-slate-200" />
        </div>
        <div className="relative flex justify-center text-xs uppercase font-semibold text-slate-500 bg-white px-4">
          <span>Or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Button
          variant="outline"
          className="w-full h-12 border-slate-200 hover:bg-slate-50 transition-all rounded-lg flex items-center justify-center gap-2"
          onClick={() => signIn("google")}
        >
          <SafeImage
            src={typeof window !== 'undefined' && document.querySelector('body')?.classList.contains('dark') ? "/google-dark.svg" : "/google.svg"}
            width={18}
            height={18}
            alt="Google"
          />
          <span className="font-medium text-sm">Google</span>
        </Button>
        <Button
          variant="outline"
          className="w-full h-12 border-slate-200 hover:bg-slate-50 transition-all rounded-lg flex items-center justify-center gap-2"
          onClick={() => signIn("apple")}
        >
          <SafeImage
            src={typeof window !== 'undefined' && document.querySelector('body')?.classList.contains('dark') ? "/apple-dark.svg" : "/apple.svg"}
            width={18}
            height={18}
            alt="Apple"
          />
          <span className="font-medium text-sm">Apple</span>
        </Button>
      </div>

      <p className="text-center text-sm text-slate-600 pt-4">
        Don't have an account?{" "}
        <Link href="/signup" className="text-[#6366f1] font-semibold hover:underline underline-offset-2">
          Sign up for free
        </Link>
      </p>
    </div>
  );
};