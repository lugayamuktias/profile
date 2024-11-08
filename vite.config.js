import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
                "@": "/resources/js",
        },
    },
    build: {
        outDir: 'public/build', // Output build di direktori 'public/build'
        manifest: true,
        rollupOptions: {
        input: 'resources/js/app.jsx'  // Sesuaikan dengan file utama Anda
        }
      },
});
