import { type SbBlokData, useStoryblokApi } from "@storyblok/astro";

export async function getAllStories(): Promise<Array<{
	full_slug: string;
	name: string;
	content: {
		page_content: Array<SbBlokData>
	}
}>> {
	const storyblokApi = useStoryblokApi();
	const storyBlockResponse = await storyblokApi.get(`cdn/stories`, {
		version: import.meta.env.DEV ? "draft" : "published"
	});

	return storyBlockResponse.data.stories;
}

export async function getStory(slug = "") {
	const storyblokApi = useStoryblokApi();
	const storyBlockResponse = await storyblokApi.get(`cdn/stories/${slug}`, {
		version: import.meta.env.DEV ? "draft" : "published"
	});

	return storyBlockResponse.data.story.content;
}

export async function getGlobalSettings() {
	return getStory("global/settings");
}
