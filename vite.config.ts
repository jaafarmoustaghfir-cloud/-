import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env vars from .env files and system environment (like Netlify's)
  // Passing '' as the third argument loads ALL env vars, ensuring API_KEY is captured
  const env = loadEnv(mode, '.', '');
  
  return {
    plugins: [react()],
    base: '/',
    build: {
      outDir: 'dist',
    },
    define: {
      // Safely inject the API key. We use env.API_KEY which comes from loadEnv
      // covering both .env file and system/Netlify environment variables.
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});