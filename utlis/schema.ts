import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput = pgTable("aiOutput", {
  id: serial("id").primaryKey(),
  formData: varchar("formData").notNull(),
  aiResponse: text("aiResponse"),
  templateSlug: text("templateSlug").notNull(),
  createdBy: varchar("email").notNull(),
  createdAt: varchar("createdAt"),
});
