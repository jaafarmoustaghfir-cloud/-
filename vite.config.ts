import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env vars from .env files and system environment (like Netlify's)
  const env = loadEnv(mode, '.', '');
  
  return {
    plugins: [react()],
    base: '/',
    build: {
      outDir: 'dist',
      sourcemap: false,
    },
    define: {
      // Safely inject the API key for the Gemini SDK from environment variables
      'process.env.API_KEY': JSON.stringify(env.API_KEY || process.env.API_KEY)
    }
  };
});