import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/posts",
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lang: z.enum(["en", "zh"]),
    summary: z.string().optional(),
    translation: z.string().optional(),
    draft: z.boolean().default(false),
    type: z.enum(["essay", "note", "project"]).default("essay"),
  }),
});

export const collections = { posts };