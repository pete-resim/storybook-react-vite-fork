import { defineConfig } from 'tsup';

export default defineConfig([
  {
    entry: ['src/index.ts', 'src/preset.ts', 'src/node/index.ts'],
    format: ['esm'],
    dts: true,
    sourcemap: true,
    clean: true,
    outDir: 'dist',
    external: [
      'react',
      'react-dom',
      'vite',
      'storybook',
      '@storybook/builder-vite',
      '@storybook/react',
    ],
  },
]);

