import { defineConfig } from 'vitest/config';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import metadata from './src/pageMetadata.json';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/homepage-demo/' : '/',
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'static-page-entries',
      apply: 'build',
      async writeBundle(options) {
        const outputDirectory = resolve(options.dir ?? 'dist');
        const html = await readFile(
          resolve(outputDirectory, 'index.html'),
          'utf8',
        );
        const escapeAttribute = (value: string) =>
          value
            .replaceAll('&', '&amp;')
            .replaceAll('"', '&quot;')
            .replaceAll('<', '&lt;')
            .replaceAll('>', '&gt;');
        for (const page of metadata) {
          const directory = resolve(outputDirectory, page.path.slice(1));
          await mkdir(directory, { recursive: true });
          const pageHtml = html
            .replace(
              /<title>.*?<\/title>/s,
              `<title>${escapeAttribute(page.title)} | 株式会社黒岩農場</title>`,
            )
            .replace(
              /(<meta\s+name="description"\s+content=")[^"]*("\s*\/>)/s,
              `$1${escapeAttribute(page.description)}$2`,
            );
          await writeFile(resolve(directory, 'index.html'), pageHtml);
        }
        const legacyDirectory = resolve(outputDirectory, 'privacy-policy');
        await mkdir(legacyDirectory, { recursive: true });
        await writeFile(
          resolve(legacyDirectory, 'index.html'),
          await readFile(resolve(outputDirectory, 'privacy/index.html')),
        );
      },
    },
  ],
  test: {
    include: ['src/**/*.test.{ts,tsx}'],
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    clearMocks: true,
  },
}));
