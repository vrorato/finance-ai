import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import { LoginForm } from "../_components/login-form";

const LoginPage = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }

  return (
    <div className="grid h-full grid-cols-2">
      <div className="mx-auto flex h-full max-w-[550px] flex-col justify-center p-8">
        <div className="mb-8 flex items-center gap-2">
           <Image
            src="/logo.svg"
            width={173}
            height={39}
            alt="Finance AI"
          />
        </div>
        <h1 className="mb-3 text-4xl font-bold">Bem-vindo</h1>
        <p className="text-muted-foreground mb-8">
          A Finance AI é uma plataforma de gestão financeira que utiliza AI
          para monitorar suas movimentações, e oferecer insights
          personalizados, facilitando o controle do orçamento.
        </p>
        <LoginForm />
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
  );
};

export default LoginPage;
