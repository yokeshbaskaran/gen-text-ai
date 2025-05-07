import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./utlis/schema.ts",
    dialect: "postgresql",
    // out: "./drizzle",
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_pn46cAremYUH@ep-lively-resonance-a9mmnkrz-pooler.gwc.azure.neon.tech/ai-content-gen?sslmode=require'
    },
});

