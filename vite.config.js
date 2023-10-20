import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@fortawesome/react-fontawesome': path.resolve(__dirname, 'node_modules/@fortawesome/react-fontawesome'),
      '@fortawesome/fontawesome-svg-core': path.resolve(__dirname, 'node_modules/@fortawesome/fontawesome-svg-core'),
      '@fortawesome/free-solid-svg-icons': path.resolve(__dirname, 'node_modules/@fortawesome/free-solid-svg-icons'),
    },
  },
});
