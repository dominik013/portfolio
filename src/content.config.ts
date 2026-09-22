import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['Websites', 'Research', 'Coursework']),
    order: z.number(),
    year: z.number(),
    stack: z.array(z.string()),
    repo: z.url(),
    demo: z.url().optional(),
    upstream: z.url().optional(),
  }),
});

const papers = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/papers' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    authors: z.array(z.string()),
    date: z.coerce.date(),
    journal: z.string(),
    volume: z.number(),
    issue: z.number(),
    article: z.number(),
    doi: z.string(),
    url: z.url(),
    code: z.url(),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { projects, papers, notes };
