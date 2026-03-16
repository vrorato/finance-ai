"use server";

import { db } from "../_lib/prisma";

export const createUser = async (data: any) => {
  const { name, email, password } = data;

  try {
    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: "Este e-mail já está em uso." };
    }

    await db.user.create({
      data: {
        name,
        email,
        // In a real app, hash password here
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error creating user:", error);
    return { error: "Erro interno do servidor." };
  }
};
