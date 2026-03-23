import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  const isProd = mode === 'production';

  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    build: {
      // Target modern browsers — no legacy polyfills
      target: 'es2020',
      // esbuild is faster and produces smaller output than terser
      minify: 'esbuild',
      // Split CSS per chunk for better caching
      cssCodeSplit: true,
      // Skip compressed-size reporting for faster builds
      reportCompressedSize: false,
      // Raise warning threshold (Rollup default 500 kB is too low for icon libraries)
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        treeshake: {
          preset: 'recommended',
          // Treat packages without side-effects as pure
          moduleSideEffects: false,
        },
        output: {
          // Use content hashes for long-term caching
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]',
          // Granular manual chunks for optimal cache efficiency
          manualChunks(id) {
            // Core React runtime — changes almost never
            if (
              id.includes('node_modules/react/') ||
              id.includes('node_modules/react-dom/') ||
              id.includes('node_modules/react-router-dom/') ||
              id.includes('node_modules/scheduler/')
            ) {
              return 'react-vendor';
            }
            // Animation library
            if (id.includes('node_modules/motion/') || id.includes('node_modules/framer-motion/')) {
              return 'motion';
            }
            // Icon libraries (lucide + react-icons are large)
            if (id.includes('node_modules/lucide-react/') || id.includes('node_modules/react-icons/')) {
              return 'icons';
            }
            // Radix + Base-UI headless component primitives
            if (id.includes('node_modules/@radix-ui/') || id.includes('node_modules/@base-ui/')) {
              return 'ui-libs';
            }
            // Utility / styling helpers — tiny, can share one chunk
            if (
              id.includes('node_modules/clsx/') ||
              id.includes('node_modules/tailwind-merge/') ||
              id.includes('node_modules/class-variance-authority/')
            ) {
              return 'utils';
            }
          },
        },
      },
    },
    // Drop console/debugger statements in production builds
    esbuild: isProd
      ? { drop: ['console', 'debugger'], legalComments: 'none' }
      : {},
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      host: true,
      allowedHosts: ['.ngrok-free.app', '.ngrok-free.dev'],
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});