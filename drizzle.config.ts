import type { Config } from "drizzle-kit";
export default {
  schema: "./src/app/db/schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL,
    // password: process.env.POSTGRES_PASSWORD,
    // database: process.env.POSTGRES_DATABASE,
    // host: process.env.POSTGRES_HOST,
    // user: process.env.POSTGRES_USER,
  },
} satisfies Config;
