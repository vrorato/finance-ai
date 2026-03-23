"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { User, Mail, Lock, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { createUser } from "../_actions/create-user";

export const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = await createUser({ name, email, password });
      if (result.error) {
        setError(result.error);
      } else {
        router.push("/login?signup=success");
      }
    } catch (err) {
      setError("Ocorreu um erro ao criar a conta.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-md mx-auto px-4">
      <form onSubmit={handleSignup} className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="name" className="sr-only">Full Name</Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <User size={20} aria-hidden="true" />
            </div>
            <Input
              id="name"
              type="text"
              placeholder="John Doe"
              className="pl-10 h-12 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-all"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              aria-label="Full Name"
            />
          </div>
        </div>

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
          <Label htmlFor="password" className="sr-only">Password</Label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Lock size={20} aria-hidden="true" />
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="pl-10 h-12 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              aria-label="Password"
            />
          </div>
        </div>

        {error && <p className="text-sm font-medium text-red-600">{error}</p>}

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
              Creating account...
            </>
          ) : (
            <>
              Create Account
              <ArrowRight size={18} strokeWidth={2.5} />
            </>
          )}
        </Button>
      </form>


      <p className="text-center text-sm text-slate-600">
        Already have an account?{" "}
        <Link href="/login" className="text-[#6366f1] font-semibold hover:underline underline-offset-2">
          Sign in
        </Link>
      </p>
    </div>
  );
};