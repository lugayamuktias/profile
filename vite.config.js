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
        outDir: 'public/build',      // Output di direktori 'public/build'
        manifest: true,              // Menyimpan manifest.json di 'public/build'
        emptyOutDir: true,           // Menghapus isi 'public/build' sebelum build 
        rollupOptions: {
            input: 'resources/js/app.jsx'  // File utama proyek
        }
    },
});
