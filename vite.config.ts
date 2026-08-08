import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite уже умеет обрабатывать CSS, CSS-модули и ассеты,
// включая svg, png, jpg и другие картинки.
// Для SCSS нужно только установить пакет sass.
export default defineConfig({
    plugins: [react()],
});