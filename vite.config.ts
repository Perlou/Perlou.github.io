import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        glsl()
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    base: './',
    build: {
        target: 'modules',
        // outDir: resolve(__dirname, `dist/${entryPath}`), //相对于root而言
        assetsDir: 'assets', //相对于build.outDir而言
        assetsInlineLimit: 4096,
        cssCodeSplit: true,
        minify: 'esbuild',
        sourcemap: false,
        rollupOptions: {
          input: {
            index: resolve(__dirname, 'index.html'),
          },
          output: {
            chunkFileNames: 'static/js/[name]-[hash].js',
            entryFileNames: 'static/js/[name].js',
            assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          },
        },
        // chunk 大小警告的限制
        chunkSizeWarningLimit: 500,
    }
})
