import { useStoryblokApi } from '@storyblok/astro'

export async function getGlobalSettings() {
  const storyblokApi = useStoryblokApi();
  const storyBlockResponse = await storyblokApi.get("cdn/stories/global/settings", {
    version: import.meta.env.DEV ? "draft" : "published",
  });

  return storyBlockResponse.data.story.content;
}
