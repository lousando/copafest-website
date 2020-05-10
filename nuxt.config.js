import settings from "./assets/settings/global";
import { DateTime } from "luxon";

export default {
	mode: "universal",
	/*
	 ** Headers of the page
	 */
	head: {
		htmlAttrs: {
			lang: "en",
		},
		title: `CopaFest ${DateTime.fromISO(settings.copa_fest_date).year}`,
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{ name: "theme-color", content: "#023373" },
			{
				hid: "description",
				name: "description",
				content: process.env.npm_package_description || "",
			},
		],
		link: [
			/**
			 * preloads
			 */
			{
				rel: "preload",
				as: "style",
				onload: `this.onload=null; this.rel="stylesheet"`,
				href:
					"https://fonts.googleapis.com/css?family=Alfa+Slab+One|Istok+Web|Lalezar&display=swap"
			},
			/**
			 * direct links
			 */
			{ rel: "icon", type: "image/icon", href: "/imgs/favicon.ico" }
		]
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: "#D95F18" },
	/*
	 ** Global CSS
	 */
	css: [],
	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [],

	router: {
		middleware: "navbarHide",
	},

	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
		"@nuxtjs/bulma",
	],
	/*
	 ** Build configuration
	 */
	build: {
		postcss: {
			preset: {
				features: {
					customProperties: false,
				},
			},
		},
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {},
	},
};
