<template>
	<div>
		<navbar />
		<div
			v-for="notification in this.$store.state.globalSettings.notifications"
			:key="notification"
			class="notification is-danger is-light has-text-centered"
      v-html="notification"
		>
		</div>
		<header class="header">
			<div class="header__rays" />
			<img
				class="header__az-star"
				src="/imgs/arizona_star.svg"
				alt="AZ Star"
			/>
		</header>
		<nuxt />
		<copa-footer />
	</div>
</template>

<script>
import navbar from "../components/navbar";
import footer from "../components/footer";

export default {
	data() {
		return {};
	},
	mounted() {
		_initGoogleAnalytics();
		document.documentElement.classList.add("has-navbar-fixed-top");
	},
	components: {
		navbar,
		"copa-footer": footer,
	},
};

function _initGoogleAnalytics() {
	/**
	 * Most likely using an add blocker.
	 * Don't slow down the page by making a request
	 * that'll likely be blocked.
	 */
	if (navigator.doNotTrack !== "1") {
		const gaId = "UA-156478886-1";

		let trackingScript = document.createElement("script");
		trackingScript.defer = true;
		trackingScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
		document.head.appendChild(trackingScript);

		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag("js", new Date());
		gtag("config", gaId);
	}
}
</script>

<style lang="scss">
@import "../assets/global.scss";

body {
	color: black;
	background: whitesmoke;
	font-family: "Istok Web", sans-serif;
}
</style>

<style scoped lang="scss">
@import "../assets/global.scss";

.notification {
  position: sticky;
  top: 2.5rem;
  margin-bottom: 0;
  z-index: 20;
  font-family: Verdana, sans-serif;
}

.header {
	text-align: center;
	font-family: "Lalezar", sans-serif;
	background-color: $az-blue;

	&__rays {
		background-image: url("/imgs/arizona_rays.svg");
		background-size: cover;
		background-position: bottom;
		height: 20vh;
	}

	&__az-star {
		width: 10rem;
		height: 10rem;
		@include header-vertical-adjustment;
	}
}
</style>
