import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import vue from "@astrojs/vue";
import { loadEnv } from "vite";

const env = loadEnv("", process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        // layout
        box: "storyblok/box",
        row: "storyblok/row",
        column: "storyblok/column",
        paragraph: "storyblok/paragraph",
        // etc
        navbarItem: "storyblok/navbarItem",
        sponsor: "storyblok/sponsor",
        sponsorsContainer: "storyblok/sponsorsContainer",
        infoBox: "storyblok/infoBox",
        rafflePrize: "storyblok/rafflePrize",
        rafflePrizeContainer: "storyblok/rafflePrizeContainer",
        button: "storyblok/button",
        tailgaterForm: "storyblok/tailgaterForm",
        googleMap: "storyblok/googleMap"
      },
      apiOptions: {
        region: "eu" // where our content is stored
      }
    }),
    vue(),
  ]
});
