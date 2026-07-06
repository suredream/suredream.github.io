import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['en', 'zh']),
    summary: z.string(),
    translation: z.string().optional(),
    type: z.enum(['essay', 'note', 'project']).default('essay'),
    draft: z.boolean().default(false),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([])
  })
});

export const collections = { posts };
