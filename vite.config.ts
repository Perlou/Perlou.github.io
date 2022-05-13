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
    base: './'
})
