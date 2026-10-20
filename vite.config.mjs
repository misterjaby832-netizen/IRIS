import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('./kfc/',import.meta.url));
export default defineConfig({root,base:'/kfc/',publicDir:'public',resolve:{alias:{'@':root}},css:{postcss:{plugins:[tailwindcss()]}},plugins:[react()],build:{outDir:'../.kfc-build',emptyOutDir:true}});
