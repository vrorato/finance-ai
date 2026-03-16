import Image from "next/image";
import { SignupForm } from "../_components/signup-form";

const SignupPage = () => {
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
        <h1 className="mb-3 text-4xl font-bold">Criar conta</h1>
        <p className="text-muted-foreground mb-8">
          Preencha os dados abaixo para começar a gerenciar suas finanças com inteligência.
        </p>
        <SignupForm />
      </div>

      <div className="relative h-full w-full">
        <Image
          src="/login.png"
          alt="Criar conta"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default SignupPage;
