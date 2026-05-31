import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const moduleSchema = z.object({
  id: z.string(),
  title: z.string(),
  duration: z.string(),
  difficulty: z.enum(['Beginner', 'Beginner to Intermediate']),
  equipment: z.string(),
  seo: z.object({
    primary_keyword: z.string(),
    secondary_keywords: z.array(z.string()),
    meta_title: z.string(),
    meta_description: z.string(),
  }),
  benefits: z.object({
    physiological: z.array(z.string()),
    mental: z.array(z.string()),
    science: z.string(),
  }),
  tags: z.array(z.string()),
});

const faqSchema = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
  category: z.string(),
});

export const collections = {
  modules: defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/modules' }),
    schema: moduleSchema,
  }),
  faqs: defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/faqs' }),
    schema: faqSchema,
  }),
};
