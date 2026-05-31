import { getCollection } from 'astro:content';

export async function GET() {
  const faqs = await getCollection('faqs');
  const data = faqs.map((f) => ({
    id: f.data.id,
    question: f.data.question,
    answer: f.data.answer,
    category: f.data.category,
  }));
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
