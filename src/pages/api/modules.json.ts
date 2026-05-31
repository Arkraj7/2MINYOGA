import { getCollection } from 'astro:content';

export async function GET() {
  const modules = await getCollection('modules');
  const data = modules.map((m) => ({
    id: m.data.id,
    title: m.data.title,
    duration: m.data.duration,
    difficulty: m.data.difficulty,
    equipment: m.data.equipment,
    seo: m.data.seo,
    tags: m.data.tags,
    benefits: m.data.benefits,
  }));
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
