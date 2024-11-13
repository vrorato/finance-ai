import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const { userId } = await auth();
  if (userId) {
    redirect("/");
  }

  return (
    <>
      <div className="grid h-full grid-cols-2">
        <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
          <Image
            src="/logo.svg"
            width={173}
            height={39}
            alt="Finance AI"
            className="mb-8"
          />
          <h1 className="mb-3 text-4xl font-bold">Bem-vindo</h1>
          <p className="text-muted-foreground mb-8">
            A Finance AI é uma plataforma de gestão financeira que utiliza AI
            para monitorar suas movimentações, e oferecer insights
            personalizados, facilitando o controle do orçamento.
          </p>
          <SignInButton>
            <Button variant="outline">
              <LogInIcon className="mr-2" />
              Fazer login ou Criar conta
            </Button>
          </SignInButton>
        </div>

        <div className="relative h-full w-full">
          <Image
            src="/login.png"
            alt="Faça login"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
