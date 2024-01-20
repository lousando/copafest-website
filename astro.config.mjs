import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import vue from '@astrojs/vue';
import { loadEnv } from "vite";

const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        // Add your components here
      },
      apiOptions: {
        region: 'eu', // where our content is stored
      },
    }),
    vue()
  ],
});
