import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { join } from 'path';

export default defineConfig({
  base: "/site/",
  plugins: [react()],
  resolve: {
    alias: {
      '@': join(__dirname, 'src'), // ปรับให้ตรงกับโครงสร้างจริง
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
