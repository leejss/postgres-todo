import type { Config } from "drizzle-kit";
export default {
  schema: "./src/app/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL,
  },
} satisfies Config;
