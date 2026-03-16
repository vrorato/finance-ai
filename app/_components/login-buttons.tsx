"use client";

import { signIn } from "next-auth/react";
import { Button } from "./ui/button";
import { LogInIcon } from "lucide-react";
import Image from "next/image";

export const LoginButtons = () => {
  return (
    <div className="flex flex-col gap-4">
      <Button
        variant="outline"
        className="w-full"
        onClick={() => signIn("google")}
      >
        <Image
          src="/google.svg"
          alt="Google"
          width={20}
          height={20}
          className="mr-2"
        />
        Entrar com Google
      </Button>
      
      {/* Optional: Add Credentials login if needed for local testing without OAuth */}
      {/* <Button variant="ghost" className="w-full" onClick={() => signIn("credentials")}>
        Entrar com conta de teste
      </Button> */}
    </div>
  );
};
