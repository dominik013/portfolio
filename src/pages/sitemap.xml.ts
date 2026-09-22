import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
export const GET: APIRoute = async ({ site }) => {
  const projects = await getCollection('projects');
  const papers = await getCollection('papers');
  const notes = await getCollection('notes', ({ data }) => !data.draft);
  const paths = ['/', ...projects.map(p => `/projects/${p.id}/`), ...papers.map(p => `/papers/${p.id}/`), ...(notes.length ? ['/notes/', ...notes.map(n => `/notes/${n.id}/`)] : [])];
  const escape = (text: string) => text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path => `<url><loc>${escape(new URL(path, site).href)}</loc></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
