import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

type ContentType = 'writing' | 'notes' | 'projects' | 'work';

export function getContentFiles(type: ContentType) {
  const directory = path.join(process.cwd(), 'src/content', type);
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory).filter((file) => file.endsWith('.mdx'));
}

export function getContentBySlug(type: ContentType, slug: string) {
  const directory = path.join(process.cwd(), 'src/content', type);
  const fullPath = path.join(directory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    meta: data,
    content,
  };
}

export function getAllContent(type: ContentType) {
  const files = getContentFiles(type);
  const items = files.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    const item = getContentBySlug(type, slug);
    return item;
  }).filter(Boolean);
  
  return items;
}
