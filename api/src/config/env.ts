import dotenv from "dotenv";
// src/config/env.ts
import { z } from "zod";

// Carrega variáveis de ambiente do .env
dotenv.config();

// Define o esquema de validação das variáveis de ambiente
const envSchema = z.object({
  // Variáveis básicas da aplicação
  PORT: z.string().transform(Number).default("3001"),
  DATABASE_URL: z.string().min(1, "DATABASE_URL é obrigatória"),
  NODE_ENV: z.enum(["dev", "info", "prod"],{
    message: "O node ENV deve ser dev, test ou prod",
  }),

  // Variáveis do Firebase
  FIREBASE_PROJECT_ID: z.string().optional(),
  FIREBASE_PRIVATE_KEY: z.string().optional(),
  FIREBASE_CLIENT_EMAIL: z.string().optional(),
});

// Tenta validar as variáveis de ambiente
const _env = envSchema.safeParse(process.env);

// Se a validação falhar, mostra os erros e encerra a aplicação
if (!_env.success) {
  console.error("❌ Variáveis de ambiente inválidas:", _env.error.format());
  process.exit(1);
}

// Exporta as variáveis tipadas e validadas
export const env = _env.data;